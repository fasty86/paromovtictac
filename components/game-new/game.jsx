import { useEffect, useReducer } from "react";
import { GameCell } from "./cell/cell";
import { PLAYERS } from "./constants";
import { calcNextMove } from "./model/calc-next-move";
import { ACTIONS, gameReducer } from "./model/game-reducer";

import { BackLink } from "./ui/back-link";
import { Actions } from "./ui/game-actions";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { MoveInfo } from "./ui/game-move-info";
import { GameOverModal } from "./ui/game-over-modal";
import { GameTitle } from "./ui/game-title";
import { PlayerInfo } from "./ui/player-info";
import { initReducerState } from "./model/init-reducer-state";

const PLAYERS_COUNT = 4;
const TIMER = 60;
const FILED_SIZE = 19;
const WINNING_SEQUENCE_LENGTH = 5;
export function Game() {
  const [
    { cells, currentMove, playersTimeout, winner, playersCount },
    dispatch,
  ] = useReducer(
    gameReducer,
    {
      playersCount: PLAYERS_COUNT,
      seqLength: WINNING_SEQUENCE_LENGTH,
      fieldSize: FILED_SIZE,
    },
    initReducerState,
  );
  const nextMove = calcNextMove(currentMove, playersCount, playersTimeout);

  useEffect(() => {
    dispatch({ type: ACTIONS.SET_WINNER });
  }, [cells, playersTimeout]);
  const currentPlayers = PLAYERS.slice(0, PLAYERS_COUNT).map((player, idx) => (
    <PlayerInfo
      key={player.id}
      className={idx % 2 === 0 ? "" : "flex-row-reverse"}
      data={player.infoData}
      timer={TIMER}
      symbol={player.symbol}
      isActivePlayer={player.symbol === currentMove && !winner?.isWinner}
      winner={winner}
      onTimeout={() =>
        dispatch({ type: ACTIONS.PLAYER_TIMEOUT, playerSymbol: player.symbol })
      }
    />
  ));
  return (
    <>
      <GameOverModal
        players={currentPlayers}
        winnerName={
          PLAYERS.find((player) => player.symbol === winner?.symbol)?.infoData
            .name || false
        }
      />
      <GameLayout
        backLink={<BackLink />}
        title={<GameTitle />}
        gameInfo={
          <GameInfo isRatingGame playersCount={PLAYERS_COUNT} timeMode={1} />
        }
        playerList={currentPlayers}
        actions={<Actions />}
        gameMoveInfo={
          <MoveInfo currentMove={currentMove} nextMove={nextMove} />
        }
        gameCells={cells.map((value, idx) => {
          const bgColor =
            winner?.isWinner && winner?.winningSequenceCoordinates.includes(idx)
              ? "bg-green-300"
              : "";

          return (
            <GameCell
              key={idx}
              onClick={() => dispatch({ type: ACTIONS.CELL_CLICK, idx })}
              symbol={value}
              className={bgColor}
            />
          );
        })}
      />
    </>
  );
}
