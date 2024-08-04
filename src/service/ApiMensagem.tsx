import axios from 'axios'

export async function PostMsg(url: string): Promise<any> {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Não deu certo:', error)
    } else {
      console.error('Aconteceu algo inexperado', error)
    }
    return null
  }
}