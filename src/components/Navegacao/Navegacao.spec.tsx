import { render, screen } from "@testing-library/react"
import Navegacao from "./Navegacao"

describe("Testando Componente Navegacao", () => {

    it("Deve haver 4 botões", async () => {
        render(<Navegacao />)
        const btn = await screen.findAllByRole("button")
        expect(btn).toHaveLength(4)
    })
})