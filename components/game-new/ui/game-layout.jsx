export function GameLayout({
  backLink,
  title,
  gameInfo,
  playerList,
  gameMoveInfo,
  actions,
  gameCells,
}) {
  return (
    <div>
      <div className="max-w-[304px]  flex flex-col items-start gap-2 ml-2">
        {backLink}
        {title}
        {gameInfo}
      </div>
      <div className="mt-4 bg-white  rounded-2xl px-8 py-4 flex  flex-wrap gap-10 shadow-md ">
        {playerList}
      </div>
      <div className={"mt-6 h-[651px] bg-white rounded-2xl px-8 py-6"}>
        <div className="flex justify-between ">
          {gameMoveInfo}
          <div className="flex gap-2 items-end">{actions}</div>
        </div>
        <div className="grid grid-cols-[repeat(19,30px)] grid-rows-[repeat(19, 30px)]  mt-3">
          {gameCells}
        </div>
      </div>
    </div>
  );
}
