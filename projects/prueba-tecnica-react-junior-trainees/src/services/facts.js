import { CAT_URL_FOR_GET_RANDOM_FACT } from '../contants'
export const getRamdomFact = async () => {
  try {
    const res = await fetch(CAT_URL_FOR_GET_RANDOM_FACT)
    if (!res.ok) throw new Error('Error in fact url fetch')
    const data = await res.json()
    const { fact } = data
    return fact
  } catch (err) {
    // Entra en el catch cuando hay error en la respuesta
    // O si hay error en la peticion.
    // Como si se te cayera internet
    console.log('Catch Error: ', JSON.stringify(err))
  }
}
