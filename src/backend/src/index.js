import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import { createServer as createViteServer } from 'vite'
import cors from 'cors'
import axios from 'axios'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function createServer() {
  const app = express()
  app.use(cors())
  app.use(express.json())

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  })

  app.use(vite.middlewares)

  app.post('/send-message', async (req, res) => {
    const { nome, email, telefone, servico, data } = req.body

    const dataFormatada = data ? new Date(data).toLocaleDateString() : ""
    const mensagem = `Cliente: ${nome},\n\n Email: ${email},\n\n Telefone: ${telefone},\n\n Serviço: ${servico}\n\n ${dataFormatada}`
    const mensagemFormatada = encodeURIComponent(mensagem)

    let token = '6404469401:AAFiWfbdcQ3aypuognmviTMQ58CXsUccatU'
    let chatId = '928984269' // id da pessoa

    const urlApiTelegram = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${mensagemFormatada}`

    try {
      const response = await axios.post(urlApiTelegram)
      res.status(200).json({ message: 'Mensagem enviada com sucesso!', data: response.data })
    } catch (error) {
      res.status(500).json({ error: 'Erro ao enviar a mensagem.' })
    }
  })

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8')
      template = await vite.transformIndexHtml(url, template)
      const html = template
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      vite.ssrFixStacktrace(e)
      console.log(e.stack)
      res.status(500).end(e.stack)
    }
  })

  app.listen(5173, () => {
    console.log('Servidor rodando em http://localhost:5173')
  })
}

createServer()