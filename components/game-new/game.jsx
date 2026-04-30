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
import { computePlayerTimer } from "./model/compute-player-timer";
import { useInterval } from "../lib/timers";

const PLAYERS_COUNT = 2;
const TIMER = 60;
const FILED_SIZE = 19;
const WINNING_SEQUENCE_LENGTH = 5;
export function Game() {
  const [
    {
      cells,
      currentMove,
      currentMoveStart,
      playersTimeout,
      winner,
      playersCount,
      timers,
    },
    dispatch,
  ] = useReducer(
    gameReducer,
    {
      playersCount: PLAYERS_COUNT,
      seqLength: WINNING_SEQUENCE_LENGTH,
      fieldSize: FILED_SIZE,
      baseTimer: TIMER,
      currentMoveStart: Date.now(),
    },
    initReducerState,
  );
  const nextMove = calcNextMove(currentMove, playersCount, timers);
  useInterval(1000, currentMoveStart, () => {
    dispatch({
      type: ACTIONS.TICK,
      now: Date.now(),
    });
  });

  useEffect(() => {
    dispatch({ type: ACTIONS.SET_WINNER });
  }, [cells, playersTimeout]);
  const currentPlayers = PLAYERS.slice(0, PLAYERS_COUNT).map((player, idx) => {
    const { timer, timerStartAt } = computePlayerTimer({
      currentMove,
      currentMoveStart,
      playerSymbol: player.symbol,
      timers,
    });
    return (
      <PlayerInfo
        key={player.id}
        className={idx % 2 === 0 ? "" : "flex-row-reverse"}
        data={player.infoData}
        symbol={player.symbol}
        isActivePlayer={player.symbol === currentMove && !winner?.isWinner}
        winner={winner}
        timer={timer}
        timerStartAt={timerStartAt}
        onTimeout={() =>
          dispatch({
            type: ACTIONS.PLAYER_TIMEOUT,
            playerSymbol: player.symbol,
          })
        }
      />
    );
  });
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
              onClick={() =>
                dispatch({ type: ACTIONS.CELL_CLICK, idx, now: Date.now() })
              }
              symbol={value}
              className={bgColor}
            />
          );
        })}
      />
    </>
  );
}
