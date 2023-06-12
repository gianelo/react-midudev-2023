import { useEffect, useState } from 'react'
import { getRamdomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRamdomFact().then(newFact => setFact(newFact))
  }
  // Se usa este useEffect para obtener el fact solo una vez
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
