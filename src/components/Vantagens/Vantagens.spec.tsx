import { render, screen } from '@testing-library/react'
import Vantagens from './Vantagens'
import { vi } from 'vitest'
import iconSite from '../../assets/img/icon-site.png'
import iconMob from '../../assets/img/icom-mob.png'
import iconSis from '../../assets/img/icon-sis.png'
import iconLand from '../../assets/img/icon-land.png'
import iconAt from '../../assets/img/icon-at.png'
import { fetchListVantagens } from '../../service/fetchList'
import ListVantagem from './ListVantagens'

const mockFetchList = vi.fn(fetchListVantagens).mockImplementation(
    async () => {
        return ListVantagem
    }
)

describe("Testando Componente Vantagens", () => {


    it("Deve haver 12 elementos", async () => {
        render(<Vantagens item={mockFetchList} />)

        const element = await screen.findAllByRole('listitem')
        expect(element).toHaveLength(12)
    })

    it("Deve haver um titulo 'identidade digital' ", async () => {
        render(<Vantagens item={mockFetchList} />)

        const title = await screen.findByText('IDENTIDADE DIGITAL')
        expect(title).toBeInTheDocument()
    })

    it("Deve haver uma descricao 'O conteúdo de seu site compartilhado e podendo ser visto por milhões de pessoas.' ", async () => {
        render(<Vantagens item={mockFetchList} />)

        const description = await screen.findByText('O conteúdo de seu site compartilhado e podendo ser visto por milhões de pessoas.')
        expect(description).toBeInTheDocument()
    })


})
