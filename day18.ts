type Count<
  T extends any[],
  S extends string,
  C extends any[] = [],
> = T extends [infer F, ...infer Rest]
  ? F extends S
    ? Count<Rest, S, [...C, 1]>
    : Count<Rest, S, C>
  : C["length"];
