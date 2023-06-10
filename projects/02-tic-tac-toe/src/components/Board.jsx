import { Square } from "./Square"
export function Board ( prop ) {
    const { board, updateBoard } = prop
    return (
        <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square 
              key={index} 
              index={index}
              updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
    </section>
    )
}