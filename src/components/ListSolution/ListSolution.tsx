import iconSite from '../../assets/img/icon-site.png'
import iconLand from '../../assets/img/icon-land.png'
import iconMob from '../../assets/img/icom-mob.png'
import iconSis from '../../assets/img/icon-sis.png'
import iconAt from '../../assets/img/icon-at.png'
import ISolution from '../../interface/ISolution'


const listSolution: ISolution[] = [
    {
        id: 1,
        name: "Criação de Sites",
        description: "Criação de sites para pequenas e médias empresas, com foco em sites responsivos e de fácil manutenção.",
        img: iconSite,
    },
    {
        id: 2,
        name: "Criação de Aplicativos",
        description: "Aplicativos para celular, web ou desktop.",
        img: iconMob,
    },
    {
        id: 3,
        name: "Criação de Landing Pages",
        description: "Páginas institucionais, escritórios, barbearias, uma identidade para o seu negócio.",
        img: iconLand,
    },
    {
        id: 4,
        name: "Criação de Sistemas",
        description: "Sistemas para o seu comércio.",
        img: iconSis,
    },
    {
        id: 5,
        name: "Criação de Automações",
        description: "Aplicativos automatizados para economizar tempo em seu trabalho ou negócio.",
        img: iconAt,
    },
]

export default listSolution