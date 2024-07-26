import axios from "axios"

interface FormData {
  nome?: string
  email?: string
  telefone: number
  servico?: string
  data?: string
}

export default async function AoEnviarForm(dados: FormData) {
  const { nome, email, telefone, servico, data } = dados;

  try {
    const response = await axios.post('http://localhost:3001/send-message', {
      nome,
      email,
      telefone,
      servico,
      data,
    });

    console.log('Mensagem enviada com sucesso:', response.data);
  } catch (error) {
    console.error('Erro ao enviar a mensagem:', error);
  }
}