export async function PostMsg(url: string): Promise<any> {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error("Não deu certo")
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Failed to send message:', error)
    return null
  }
}
