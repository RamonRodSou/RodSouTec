import { useEffect, useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, styled, Typography } from '@mui/material';
import { fetchListDuvidas } from '../../service/fetchList';
import IDuvidas from '../../interface/IDuvidas';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { Fade } from 'react-awesome-reveal';

type Props = {
    item?: () => Promise<IDuvidas[]>

}

const ContainerDuvidas = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    padding: '2rem',
    boxShadow: '0.25rem 0.37rem 1.25rem #00000036 ',
    margin: '3rem 0 ',
    borderRadius: '5px',

    [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
        padding: '2rem 0',

    },
}))



const Titulo = styled('h2')(({ theme }) => ({
    marginTop: 0,
    fontSize: '2.5rem',
    fontWeight: 'bold',
    fontFamily: 'Orbitron',
    background: 'linear-gradient(to right,#fff ,var(--titleSection-color))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',

    [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        fontSize: '2rem',
    }
}))

const StyledAccordion = styled(Accordion)({
    background: 'transparent',
    boxShadow: 'none',
    width: '100%',
    color: '#fff',
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
})

const StyledAccordionSummary = styled(AccordionSummary)({
    background: 'transparent',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    '&.Mui-expanded': {
        minHeight: 56,
    },
    '& .MuiAccordionSummary-content': {
        margin: '12px 0',
    },
})


const DuvidasPadroes = styled(Typography)(({ theme }) => ({
    variant: 'body1',
    fontSize: '1.3rem',

    [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
    },
}))


const Descricao = styled(Typography)(({ theme }) => ({
    variant: 'body2',
    margin: '0 1rem',

    [theme.breakpoints.down('sm')]: {
        fontSize: '.8rem',
    }
}))

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
    background: 'transparent',
    padding: '8px 16px',
    margin: '0 1rem',

    [theme.breakpoints.down('sm')]: {
        margin: '-.5rem 1rem .5rem ',
    }
}))


const Duvidas = ({ item }: Props) => {
    const [items, setItems] = useState<IDuvidas[]>([])
    const [isArrow, setIsArrow] = useState<{ [key: number]: boolean }>({})


    function handleArrow(id: number) {

        setIsArrow((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }

    useEffect(() => {
        (async () => {
            const response = await fetchListDuvidas();
            setItems(response);
        })();
    }, [item])

    return (
        <ContainerDuvidas>
            <Titulo>Duvidas?</Titulo>
            <Box margin={'0 1rem'}>
                {
                    items.map((item) => (
                        <Fade key={item.id} cascade duration={1000}>
                            <StyledAccordion key={item.id} expanded={isArrow[item.id]} onClick={() => handleArrow(item.id)}>
                                <StyledAccordionSummary
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Box display={'flex'} alignItems={'center'} gap={'.5rem'}>
                                        {isArrow[item.id] ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                                        <DuvidasPadroes>{item.title}</DuvidasPadroes>
                                    </Box>
                                </StyledAccordionSummary>
                                <StyledAccordionDetails>
                                    <Descricao>{item.description}</Descricao>
                                </StyledAccordionDetails>
                            </StyledAccordion>
                        </Fade>
                    ))
                }
            </Box>
        </ContainerDuvidas>
    )
}

export default Duvidas