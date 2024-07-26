import axios from "axios"
import { PostMsg } from "./ApiMensagem"

interface FormData {
  nome?: string
  email?: string
  telefone: number
  servico?: string
  data?: string
}

// export default async function AoEnviarForm(dados: FormData) {
//   const nome = dados.nome || ""
//   const email = dados.email || ""
//   const telefone = dados.telefone
//   const servico = dados.servico || ""
//   const data = dados.data ? new Date(dados.data) : null

//   const dataFormatada = data ? `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}` : ""

//   const mensagem = `Cliente: ${nome},\n\n Email: ${email},\n\n Telefone: ${telefone},\n\n Serviço: ${servico}\n\n ${dataFormatada}`
//   const mensagemFormatada = encodeURIComponent(mensagem)
//   console.log(mensagemFormatada)
//   let token = '6404469401:AAFiWfbdcQ3aypuognmviTMQ58CXsUccatU'
//   let chatId = '928984269' // id da pessoa

//   const urlApiTelegram = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${mensagemFormatada}`

//   const response = await PostMsg(urlApiTelegram)

//   if (response) {
//     console.log('Mensagem enviada com sucesso:', response)
//   } else {
//     console.error('Erro ao enviar a mensagem.')
//   }
// }

export default async function AoEnviarForm(dados: FormData) {
  const { nome, email, telefone, servico, data } = dados;

  try {
    const response = await axios.post('https://api-rod-sou-tech.vercel.app/send-message', {
      // const response = await axios.post('http://localhost:5173/send-message', {

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