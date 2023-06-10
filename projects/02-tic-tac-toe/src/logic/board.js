 import { WINNER_COMBOS } from "../constants"
 
 export const checkWinnerFrom = (boardToCheck) => {
    // revisamos las combinaciones ganadoras
    // para saber si X o O gano
    for(const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if(
          boardToCheck[a] && 
          boardToCheck[a] === boardToCheck[b] && 
          boardToCheck[a] === boardToCheck[c]
        ){
          return boardToCheck[a]
        }
    }
    // Si no tenemos ganador
    return null
  }

  export const checkEndGame = (newBoard) => {
    // Revisamos si el tablero
    // Tiene algun espacio NULL
    // sino es asi entonces es un empate
    return newBoard.every(square => square !== null)
  }
  