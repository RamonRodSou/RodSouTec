import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

describe("Testando componente Logo", () => {

    it("Deve haver uma imagem", async () => {
        render(<Logo/>)

        const logoImg = await screen.findAllByRole('img')
        expect(logoImg).toHaveLength(1)
    })


    it("Deve haver um título", async () => {
        render(<Logo/>)

        const logoImg = await screen.findByText('RodSouTech')
        expect(logoImg).toBeInTheDocument()
    })
})