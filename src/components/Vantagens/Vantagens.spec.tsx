import { render, screen } from '@testing-library/react'
import Vantagens from './Vantagens'
import { vi } from 'vitest'
import { fetchListVantagens } from '../../service/fetchList'
import ListVantagem from './ListVantagens'

const mockFetchList = vi.fn(fetchListVantagens).mockImplementation(
    async () => {
        return ListVantagem
    }
)

describe("Testando Componente Vantagens", () => {


    it("Deve haver 6 elementos", async () => {
        render(<Vantagens item={mockFetchList} />)

        const element = await screen.findAllByRole('listitem')
        expect(element).toHaveLength(6)
    })

    it("Deve haver um titulo 'identidade digital' ", async () => {
        render(<Vantagens item={mockFetchList} />)

        const title = await screen.findByText('E-MAIL PROFISSIONAL')
        expect(title).toBeInTheDocument()
    })

    it("Deve haver uma descricao 'Garanta profissionalismo em suas comunicações com um e-mail personalizado da sua marca, seja para seu site ou aplicativo. Exemplo: contato@suamarca.com.br' ", async () => {
        render(<Vantagens item={mockFetchList} />)

        const description = await screen.findByText('Garanta profissionalismo em suas comunicações com um e-mail personalizado da sua marca, seja para seu site ou aplicativo. Exemplo: contato@suamarca.com.br')
        expect(description).toBeInTheDocument()
    })


})
