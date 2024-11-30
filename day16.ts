type FindSanta2<
  T extends string[][],
  X extends number[] = [],
  Y extends number[] = [],
> = T[X["length"]][Y["length"]] extends "🎅"
  ? [X["length"], Y["length"]]
  : Y["length"] extends T[0]["length"]
    ? FindSanta2<T, [...X, 1], []>
    : FindSanta2<T, X, [...Y, 1]>;
