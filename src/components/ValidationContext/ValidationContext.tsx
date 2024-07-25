import React from 'react'

// Funções de validação
export function validaNome(nome: string) {
    if (nome.length < 4) {
        return { valido: false, texto: "O Nome deve ter pelo menos 4 caracteres" }
    }
    return { valido: true, texto: "" }
}

export function validaEmail(email: string) {
    if (email.length < 10) {
        return { valido: false, texto: "O e-mail deve ter pelo menos 10 caracteres" }
    }
    return { valido: true, texto: "" }
}

export function validaTelefone(telefone: number) {
    const telefoneStr = telefone.toString()
    const telefoneRegex = /^\d{11}$/
    if (!telefoneStr.match(telefoneRegex)) {
        return { valido: false, texto: "Telefone inválido, deve ter 11 números" }
    }
    return { valido: true, texto: "" }
}

export function validaServico(servico: string) {
    if (servico.length < 15) {
        return { valido: false, texto: "O serviço deve ter pelo menos 15 caracteres" }
    }
    return { valido: true, texto: "" }
}

const ValidationContext = React.createContext({
    nome: validaNome,
    emailV: validaEmail,
    telefone: validaTelefone,
    servico: validaServico,
})

export default ValidationContext
