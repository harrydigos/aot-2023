type RockPaperScissors = "👊" | "✋" | "✌️";

type TrueTable = {
  "👊": "✌️";
  "✋": "👊";
  "✌️": "✋";
};

type WhoWins<
  F extends RockPaperScissors,
  S extends RockPaperScissors,
> = S extends F ? "draw" : F extends TrueTable[S] ? "win" : "lose";
