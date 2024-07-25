import oxicom from '../../assets/img/project/oxicom.webp'
import iaf from '../../assets/img/project/iaf.webp'
import cardapio from '../../assets/img/project/cardapio.webp'
import agendou from '../../assets/img/project/agendou.webp'
import KidFlix from '../../assets/img/project/KidFlix.webp'
import ECommerce from '../../assets/img/project/E-commerce.webp'
import GerenteApp from '../../assets/img/project/GerenteApp.webp'

import IProject from '../../interface/IProject'


const listProject: IProject[] = [
    {
        id: 1,
        name: "Oxicom Energia Solar",
        description: " Líder em soluções sustentáveis, a Oxicom oferece sistemas de energia solar inovadores para residências, empresas e indústrias, promovendo um futuro mais verde.",
        img: oxicom,
        url: 'rodsoudev.com',
        arquivo: 'Oxicom'
    },
    {
        id: 2,
        name: "Igreja Adoração e Fé",
        description: "Site intuitiva com link direto para cultos online no YouTube, fotos de reuniões e eventos, endereços das células no Google Maps e destaque das atividades da igreja.",
        img: iaf,
        url: 'rodsoudev.com',
        arquivo: 'IAF'

    },
    {
        id: 3,
        name: "Cardápio Online",
        description: "Uma plataforma completa onde os clientes podem visualizar todos os produtos da lanchonete, selecionar itens, adicionar ao pedido e finalizar a compra facilmente.",
        img: cardapio,
        url: 'rodsoudev.com',
        arquivo: 'Cardapio'

    },
    {
        id: 4,
        name: "Agendamento Online",
        description: "Site prático para agendar serviços como barbearia, permitindo aos clientes marcar horários de forma fácil e rápida. ",
        img: agendou,
        url: 'rodsoudev.com',
        arquivo: 'Agendamento'

    },
    {
        id: 6,
        name: "KidFlix",
        description: "Kidflix é uma plataforma de vídeos infantis onde pais podem adicionar links do YouTube, garantindo que as crianças só assistam a esses vídeos selecionados. A tela é fechada antes de outros vídeos serem sugeridos, oferecendo um ambiente seguro e controlado.",
        img: KidFlix,
        url: 'rodsoudev.com',
        arquivo: 'KidFlix'

    }, 
    {
        id: 7,
        name: "E-Commerce",
        description: "E-Commerce é uma plataforma de e-commerce onde usuários podem se registrar, fazer login e listar itens para venda de forma simples e intuitiva, e Administradores pondem logar e add novos produtos.",
        img: ECommerce,
        url: 'rodsoudev.com',
        arquivo: 'E-commerce'

    },
    {
        id: 8,
        name: "GerenteApp",
        description: "GerenteApp é um aplicativo mobile que permite aos usuários criarem e gerenciarem o estoque de seus comércios. Os usuários podem adicionar novos itens ao estoque tirando fotos ou utilizando imagens da galeria, além de ajustar a quantidade de itens. O objetivo do aplicativo é oferecer controle de estoque de forma fácil e acessível, de qualquer lugar.",
        img: GerenteApp,
        url: 'rodsoudev.com',
        arquivo: 'GerenteApp'

    },
]

export default listProject