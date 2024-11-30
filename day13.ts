type DayCounter<
  Start extends number,
  End extends number,
  Count extends any[] = [Start, End],
> = End extends Count["length"]
  ? Count[number]
  : DayCounter<Start, End, [...Count, Count["length"]]>;
