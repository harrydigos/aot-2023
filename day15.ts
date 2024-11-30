type BoxToys<
  T extends string,
  K extends number,
  List extends string[] = [T],
> = K extends List["length"] ? List : BoxToys<T, K, [...List, T]>;
