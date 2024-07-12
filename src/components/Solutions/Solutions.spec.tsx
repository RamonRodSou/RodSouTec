import { render, screen } from '@testing-library/react'
import Solutions from './Solutions'
import { vi } from 'vitest'
import iconSite from '../../assets/img/icon-site.png'
import iconMob from '../../assets/img/icom-mob.png'
import iconSis from '../../assets/img/icon-sis.png'
import iconLand from '../../assets/img/icon-land.png'
import iconAt from '../../assets/img/icon-at.png'
import fetchList from '../../service/fetchList'

const mockFetchList = vi.fn(fetchList).mockImplementation(
    async () => {
        return [
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
    }
)

describe("Testando Componente Solutions", () => {


    it("Deve haver uma imagem", async () => {
        render(<Solutions item={mockFetchList} />)

        const logoImg = await screen.findAllByRole('listitem')
        expect(logoImg).toHaveLength(5)
    })


})
