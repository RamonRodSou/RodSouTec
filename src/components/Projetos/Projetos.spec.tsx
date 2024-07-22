
import { render, screen } from '@testing-library/react'
import Projetos from './Projetos'


describe("Testando Componente Projetos", () => {

    it("Deve haver 4 imagens", async () => {
        render(<Projetos  />)

        const img = await screen.findAllByRole('img')
        expect(img).toHaveLength(4)
    })
    
    it("Deve haver um titulo 'Projetos' ", async () => {
        render(<Projetos />)

        const title = await screen.findByText('Projetos')
        expect(title).toBeInTheDocument()
    })

    it("Deve haver uma descricao 'Oxicom Energia Solar' ", async () => {
        render(<Projetos />)

        const description = await screen.findByText(/Oxicom Energia Solar/i)
        expect(description).toBeInTheDocument()
    })



})
