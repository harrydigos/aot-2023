type DecipherNaughtyList<S extends string> =
  S extends `${infer F}${"/"}${infer Rest}` ? F | DecipherNaughtyList<Rest> : S;
