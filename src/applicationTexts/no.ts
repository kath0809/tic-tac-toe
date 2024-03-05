import { ApplicationTexts } from "./applicationTexts";

export const nb: ApplicationTexts = {
    goToStart: "Gå til start",
    goToMove: (move) => {
        if (move === 1) return "Gå til neste trekk";
        return `Gå til trekk nummer ${move}`;
    },
    nextPlayer: (player) => `Neste spiller: ${player}`,
    winner: (player) => `${player} vinner`
};