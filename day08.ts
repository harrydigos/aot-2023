type RemoveNaughtyChildren<T> = {
  [Property in keyof T as Property extends `naughty_${string}`
    ? never
    : Property]: T[Property];
};
