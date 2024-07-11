import { render, screen } from "@testing-library/react"
import Header from "./Header"

describe("Testando Componente Header", () => {

    it("Deve ter box com display flex'", async () => {
        render(<Header />)
        const box = await screen.findByRole("banner")
        expect(box).toHaveStyle('display: flex')
    })

})