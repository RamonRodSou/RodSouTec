import { Box, Grid, styled } from '@mui/material'
import React from 'react'
import oxicom from '../../assets/img/project/oxicom.webp'
import iaf from '../../assets/img/project/iaf.webp'
import cardapio from '../../assets/img/project/cardapio.webp'
import agendou from '../../assets/img/project/agendou.webp'

type Props = {}

const BoxContainer = styled(Box)({
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: '2rem',
    marginTop:'4rem',
    borderRadius:'5px',
    boxShadow: '0.25rem 0.37rem 1.25rem #00000036 '
})

const Titulo = styled('h2')({
    marginTop:0,
    fontSize: '2.5rem',
    fontWeight: 'bold',
    fontFamily: 'Orbitron',
    background: 'linear-gradient(to right,#fff ,var(--titleSection-color))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
})

const BoxProject = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', 
    width: '100%',
    flexWrap: 'wrap',
    gap: '2rem',
    padding: '1rem',
})

const ImgBox = styled('img')({
    borderRadius: '10px',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',

    '&:hover': {
        opacity: 0.9,
        transform: 'scale(.9)'

    },

})

const Projetos = (props: Props) => {
    return (

        <BoxContainer >
            <Titulo>Projetos</Titulo>
            <BoxProject>
                <Grid>
                    <ImgBox src={oxicom} width={500} height={300} alt='Serviços' />
                </Grid>
                <Grid>
                    <ImgBox src={iaf} width={500} height={300} alt='Serviços' />
                </Grid>
                <Grid>
                    <ImgBox src={cardapio} width={500} height={300} alt='Serviços' />
                </Grid>
                <Grid>
                    <ImgBox src={agendou} width={500} height={300} alt='Serviços' />
                </Grid>
            </BoxProject>
        </BoxContainer>
    )
}

export default Projetos