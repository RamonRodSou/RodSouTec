import iconGoogle from '../../assets/img/vantagem/icon-google.png'
import iconEmail from '../../assets/img/vantagem/icon-email.png'
import iconMsg from '../../assets/img/vantagem/icon-msg.png'
import iconDom from '../../assets/img/vantagem/icon-web.png'
import iconSite from '../../assets/img/vantagem/icon-site.png'
import iconExp from '../../assets/img/vantagem/icon-exp.png'



import IVantagem from '../../interface/IVantagem'


const ListVantagem: IVantagem[] = [

    {
        id: 1,
        title: "WHATSAPP E CHAT",
        description: "Ofereça atendimento de excelência aos seus clientes e otimize o tempo da sua equipe com integração de WhatsApp e chat ao vivo em seu site e aplicativo.",
        img: iconMsg,
    },
    {
        id: 2,
        title: "E-MAIL PROFISSIONAL",
        description: "Garanta profissionalismo em suas comunicações com um e-mail personalizado da sua marca, seja para seu site ou aplicativo. Exemplo: contato@suamarca.com.br",
        img: iconEmail,
    },
    {
        id: 3,
        title: "VISIBILIDADE DIGITAL",
        description: "Aumente sua visibilidade online e alcance mais clientes com uma boa classificação nos resultados de busca do Google, Bing e nas principais lojas de aplicativos através de técnicas avançadas de SEO e ASO (App Store Optimization).",
        img: iconGoogle,
    },
    {
        id: 4,
        title: "DOMÍNIO PERSONALIZADO",
        description: "Transmita mais credibilidade e profissionalismo com um domínio personalizado para seu site e um nome único para seu aplicativo. Exemplo: www.suamarca.com.br e SuMarca App.",
        img: iconDom,
    },
    {
        id: 5,
        title: "SITE E APP RESPONSIVO",
        description: "Proporcione uma experiência excelente para seus usuários com um site e aplicativo adaptáveis para computador, tablet e celular, aumentando as interações e o engajamento.",
        img: iconSite,
    },
    {
        id: 6,
        title: "EXPERIÊNCIA DE USUÁRIO",
        description: "Desenvolvemos sites e aplicativos com foco na experiência do usuário, garantindo interfaces intuitivas e designs atraentes que mantêm seus clientes engajados.",
        img: iconExp,
    },

]

export default ListVantagem