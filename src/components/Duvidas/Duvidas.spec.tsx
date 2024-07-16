import { render, screen } from '@testing-library/react'
import Duvidas from './Duvidas'
import { vi } from 'vitest'
import { fetchListDuvidas } from '../../service/fetchList'
import ListDuvidas from './ListDuvidas'

const mockFetchList = vi.fn(fetchListDuvidas).mockImplementation(
    async () => {
        return ListDuvidas
    }
)

describe("Testando Componente Duvidas", () => {


    it("Deve haver 12 elementos", async () => {
        render(<Duvidas item={mockFetchList} />)

        const element = await screen.findAllByRole('listitem')
        expect(element).toHaveLength(12)
    })

    it("Deve haver um titulo 'Vocês oferecem serviço de e-mails?' ", async () => {
        render(<Duvidas item={mockFetchList} />)

        const title = await screen.findByText(/Vocês oferecem serviço de e-mails/i)
        expect(title).toBeInTheDocument()
    })

    it("Deve haver uma descricao 'Sim, oferecemos e-mail profissional com até 50 GB de armazenamento, mas é opcional.' ", async () => {
        render(<Duvidas item={mockFetchList} />)

        const description = await screen.findByText('Sim, oferecemos e-mail profissional com até 50 GB de armazenamento, mas é opcional.')
        expect(description).toBeInTheDocument()
    })


})
