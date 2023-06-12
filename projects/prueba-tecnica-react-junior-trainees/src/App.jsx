import '../src/App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFat'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1> Prueba Tecnica de APP de Gatitos</h1>
      <button onClick={handleClick}>Get new Fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
      </section>
    </main>
  )
}
