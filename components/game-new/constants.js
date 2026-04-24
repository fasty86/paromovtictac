import player1Avatar from "./ui/images/player_1.png";
import player2Avatar from "./ui/images/player_2.png";
import player3Avatar from "./ui/images/player_3.png";
import player4Avatar from "./ui/images/player_4.png";

export const GAME_SYMBOLS = {
  ZERO: "ZERO",
  CROSS: "CROSS",
  SQUARE: "SQUARE",
  TRIANGLE: "TRIANGLE",
};

export const PLAYERS = [
  {
    id: 1,
    infoData: { name: "Tolmachev", rating: 150, avatarSrc: player1Avatar },
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    infoData: {
      name: "Harimoto Tomokazu",
      rating: 4,
      avatarSrc: player2Avatar,
    },
    symbol: GAME_SYMBOLS.ZERO,
  },
  {
    id: 3,
    infoData: { name: "Hugo Calderano", rating: 7, avatarSrc: player3Avatar },
    symbol: GAME_SYMBOLS.SQUARE,
  },
  {
    id: 4,
    infoData: { name: "Alexis Lebrun", rating: 11, avatarSrc: player4Avatar },
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
];
