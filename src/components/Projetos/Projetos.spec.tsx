
import { render, screen } from '@testing-library/react'
import Projetos from './Projetos'
import { vi } from 'vitest'
import { fetchListProject } from '../../service/fetchList'
import listProject from './ListProject'

const mockFetchList = vi.fn(fetchListProject).mockImplementation(
    async () => {
        return listProject
    }
)

describe("Testando Componente Projetos", () => {


    it("Deve haver 4 imagens", async () => {
        render(<Projetos item={mockFetchList} />)

        const img = await screen.findAllByRole('img')
        expect(img).toHaveLength(4)
    })
    
    it("Deve haver um titulo 'Projetos' ", async () => {
        render(<Projetos item={mockFetchList} />)

        const title = await screen.findByText('Projetos')
        expect(title).toBeInTheDocument()
    })

    it("Deve haver uma descricao 'Oxicom Energia Solar' ", async () => {
        render(<Projetos item={mockFetchList} />)

        const description = await screen.findByText(/Oxicom Energia Solar/i)
        expect(description).toBeInTheDocument()
    })



})
