import { useEffect, useState } from 'react'
import { CAT_PREFIX_URL } from '../contants'

// Custom Hoock
export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // Este useEffect se usa para luego de obtener el fact encontrar la imagen de gato con las primeras 3 palabras
  useEffect(() => {
    if (!fact) return
    // const firstWord = fact.split(' ').slice(0, 3).join(' ')
    // OR
    const threeFirstWord = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com//cat/says/${threeFirstWord}?size=:size&color=:color/c/s/:text?s=:size&c=:color&json=true`
    )
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_URL}${imageUrl}` }
}
