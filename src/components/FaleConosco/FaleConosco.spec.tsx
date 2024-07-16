import { render, screen } from "@testing-library/react"
import FaleConosco from "./FaleConosco"
import { vi } from 'vitest';

const navigateMock = vi.fn()

describe("Testando componente FaleConosco", ()=> {

    vi.mock("react-router-dom", () => ({
        useNavigate: () => {
            return navigateMock
        },
    }))

    
    it("Deve haver um título 'Fale Conosco'", async () => {
        render(<FaleConosco/>)
        
        const title = await screen.findByText("Fale Conosco")
        expect(title).toBeInTheDocument()
    })

    it("Deve haver quatros inputs", async () => {
        render(<FaleConosco/>)
        
        const inputs = await screen.findAllByRole("textbox")
        expect(inputs).toHaveLength(4)
    })

    it("Deve haver um button", async () => {
        render(<FaleConosco/>)
        
        const inputs = await screen.findAllByRole("button")
        expect(inputs).toHaveLength(1)
    })

ö

})