import { render, screen } from "@testing-library/react"
import Footer from "./Footer"

describe("Testando componente Footer", ()=> {
    
    it("Deve haver uma tag footer", async () => {
        render(<Footer/>)
        
        const footer = await screen.getByRole('contentinfo')
        expect(footer).toBeInTheDocument()
    })

    it("Deve haver um texto 'Copyright Ramon Rodrigues - Since 2023'", async () => {
        render(<Footer/>)
        
        const texto = await screen.findByText(/Copyright Ramon Rodrigues - Since 2023/i)
        expect(texto).toBeInTheDocument()
    })


    
})