import { useCatImage } from '../hooks/useCatImage'

export function Otro () {
  const { imageUrl } = useCatImage({ fact: 'cat' })

  return (
    <img src={imageUrl} alt='Test' />
  )
}
