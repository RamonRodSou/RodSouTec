import { render, screen } from "@testing-library/react"
import Solutions from "./Carrosel"

describe("Testando Componente Solutions", () => {

    it("Deve haver um título escrito 'Solutions'", async () => {
        render(<Solutions />)
        const title = await screen.findByRole("heading", {
            name: /Solutions/i
        })
        expect(title).toBeInTheDocument()
    })

})