import React, { useEffect, useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Icon, styled, Typography } from '@mui/material';
import { fetchListDuvidas } from '../../service/fetchList';
import IDuvidas from '../../interface/IDuvidas';
import { KeyboardArrowDown } from '@mui/icons-material';

type Props = {
    item?: () => Promise<IDuvidas[]>

}

const ContainerDuvidas = styled(Box)({
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    padding: '2rem',
    boxShadow: '0.25rem 0.37rem 1.25rem #00000036 ',
    margin: '3rem 0 ',
    borderRadius: '5px',


})
const Titulo = styled('h2')({
    marginTop: 0,
    fontSize: '2.5rem',
    fontWeight: 'bold',
    fontFamily: 'Orbitron',
    background: 'linear-gradient(to right,#fff ,var(--titleSection-color))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
})

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

const StyledAccordionDetails = styled(AccordionDetails)({
    background: 'transparent',
    padding: '8px 16px',
    margin: '0 1rem'
})


const Duvidas = ({ item }: Props) => {
    const [items, setItems] = useState<IDuvidas[]>([])

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
                        <StyledAccordion key={item.id}>
                            <StyledAccordionSummary
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Box display={'flex'} alignItems={'center'} gap={'.5rem'}>
                                    <KeyboardArrowDown />
                                    <Typography variant='body1' fontSize={'1.3rem'}>{item.title}</Typography>
                                </Box>
                            </StyledAccordionSummary>
                            <StyledAccordionDetails>
                                <Typography>{item.description}</Typography>
                            </StyledAccordionDetails>
                        </StyledAccordion>
                    ))
                }
            </Box>
        </ContainerDuvidas>
    )
}

export default Duvidas