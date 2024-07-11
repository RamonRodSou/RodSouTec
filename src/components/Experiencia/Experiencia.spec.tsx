import { render, screen } from "@testing-library/react"
import Experiencia from "./Experiencia"

describe("Testando Componente Experiencia", () => {

    it("Deve haver um título escrito 'Experiencia'", async () => {
        render(<Experiencia />)
        const title = await screen.findByRole("heading", {
            name: /Experiencia/i
        })
        expect(title).toBeInTheDocument()
    })

})