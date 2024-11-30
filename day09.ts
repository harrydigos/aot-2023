type Reverse<Word extends string> =
  Word extends `${infer FirstChar}${infer Rest}`
    ? `${Reverse<Rest>}${FirstChar}`
    : Word;
