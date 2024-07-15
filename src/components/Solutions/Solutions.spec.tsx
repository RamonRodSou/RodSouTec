import { render, screen } from '@testing-library/react'
import Solutions from './Solutions'
import { vi } from 'vitest'
import { fetchListSolution } from '../../service/fetchList'
import listSolution from './ListSolution'

const mockFetchList = vi.fn(fetchListSolution).mockImplementation(
    async () => {
        return listSolution
    }
)

describe("Testando Componente Solutions", () => {


    it("Deve haver 5 elementos", async () => {
        render(<Solutions item={mockFetchList} />)

        const element = await screen.findAllByRole('listitem')
        expect(element).toHaveLength(5)
    })
    
    it("Deve haver um titulo 'Criação de Aplicativos' ", async () => {
        render(<Solutions item={mockFetchList} />)

        const title = await screen.findByText('Criação de Aplicativos')
        expect(title).toBeInTheDocument()
    })

    it("Deve haver uma descricao 'Aplicativos para celular, web ou desktop.' ", async () => {
        render(<Solutions item={mockFetchList} />)

        const description = await screen.findByText('Aplicativos para celular, web ou desktop.')
        expect(description).toBeInTheDocument()
    })



})
