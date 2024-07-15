import { render, screen } from "@testing-library/react"
import Projetos from "./Projetos"

describe("Testando componente Projetos", () => {

    it("Deve ter um titulo 'Vantagens'", async ()=> {
        render(<Projetos/>)
        const title = await screen.findByText("Projetos")
        expect(title).toBeInTheDocument()
    })

    // it("Deve ter 4 imgs", async ()=> {
    //     render(<Projetos/>)

    //     const imgs = await screen.findAllByRole('img')
    //     expect(imgs.length).toBe(4)
    // })



})