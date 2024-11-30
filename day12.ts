type FindSanta<T extends any[], Count extends any[] = []> = T extends [
  infer F,
  ...infer Rest,
]
  ? F extends "🎅"
    ? Count["length"]
    : FindSanta<Rest, [1, ...Count]>
  : never;
