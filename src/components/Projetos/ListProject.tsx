import oxicom from '../../assets/img/project/oxicom.webp'
import iaf from '../../assets/img/project/iaf.webp'
import cardapio from '../../assets/img/project/cardapio.webp'
import agendou from '../../assets/img/project/agendou.webp'
import IProject from '../../interface/IProject'


const listProject: IProject[] = [
    {
        id: 1,
        name: "Oxicom Energia Solar",
        description: " Líder em soluções sustentáveis, a Oxicom oferece sistemas de energia solar inovadores para residências, empresas e indústrias, promovendo um futuro mais verde.",
        img: oxicom,
        url:'rodsoudev.com'
    },
    {
        id: 2,
        name: "Igreja Adoração e Fé",
        description: "Site intuitiva com link direto para cultos online no YouTube, fotos de reuniões e eventos, endereços das células no Google Maps e destaque das atividades da igreja.",
        img: iaf,
        url:'rodsoudev.com'

    },
    {
        id: 3,
        name: "Cardápio Online",
        description: "Uma plataforma completa onde os clientes podem visualizar todos os produtos da lanchonete, selecionar itens, adicionar ao pedido e finalizar a compra facilmente.",
        img: cardapio,
        url:'rodsoudev.com'

    },
    {
        id: 4,
        name: "Agendamento Online",
        description: "Site prático para agendar serviços como barbearia, permitindo aos clientes marcar horários de forma fácil e rápida.",
        img: agendou,
        url:'rodsoudev.com'

    },
]

export default listProject