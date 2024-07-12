import { render, screen } from "@testing-library/react"
import Apresentacao from "./Apresentacao"

describe("Testando Componente Apresentacao", () => {

    it("Deve haver um título escrito", async () => {
        render(<Apresentacao />)
        const title = await screen.findByText(/Transforme suas ideias em Realidade Digital/i)
        expect(title).toBeInTheDocument()
    })
    

    it("Deve haver uma imagem", async () => {
        render(<Apresentacao/>)

        const logoImg = await screen.findAllByRole('img')
        expect(logoImg).toHaveLength(1)
    })

    
    it("Deve haver uma frase", async () => {
        render(<Apresentacao />)
        const title = await screen.findByText("Tenha soluções criativas e inovadoras, garantindo a melhor experiência digital. Confie em nossa expertise para levar seu projeto ao próximo nível.")
        expect(title).toBeInTheDocument()
    })


})


