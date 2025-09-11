import { useEffect } from "react"
import { listTecnologias } from "./ListTecnologias";
import { Grid, styled } from '@mui/material'

const BoxContainer = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '.2rem',
    padding: '1rem',
    borderRadius: '5px',
    margin: '1rem 0',
    boxShadow: '0.25rem 0.37rem 1.25rem #00000036 ',

    [theme.breakpoints.down('md')]: {
        alignItems: 'center',

    },
}))

const Tecnologias = () => {

    useEffect(() => {
    }, [listTecnologias])

    return (
        <BoxContainer>
            {listTecnologias.map((it) => (
                <img src={it.url} alt={it.name} />
            ))}
        </BoxContainer>
    )
}

export default Tecnologias