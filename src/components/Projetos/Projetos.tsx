import { Box, Button, Grid, styled, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import IProject from '../../interface/IProject'
import { fetchListProject } from '../../service/fetchList'


type Props = {}

const BoxContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '2rem',
    marginTop: '4rem',
    borderRadius: '5px',
    boxShadow: '0.25rem 0.37rem 1.25rem #00000036 '
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

const ProjectName = styled(Typography)({
    marginTop: 0,
    fontSize: '2.5rem',
    fontWeight: 'bold',
    
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
        transform: 'scale(1.1)'

    },

})

const ButtonProjetos = styled(Button)({
    border: '1px solid #fff',
    padding: '0 1rem',
    margin: '0',
    fontSize: '2rem',
    color: '#fff',
    fontFamily: 'monospace',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',

    '&:hover': {
        opacity: 0.9,
        transform: 'scale(.9)'

    },

})


const MaisProjetosBtn = styled(Button)({
    border: '1px solid var(--maisProjetos-color)',
    padding: '0 1rem',
    margin: '3rem 1rem 0',
    fontSize: '1rem',
    color: 'var(--maisProjetos-color)',
    fontFamily: 'monospace',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',

    '&:hover': {
        opacity: 0.9,
        transform: 'scale(.9)',
        color:'#fefefe'

    },

})


const Projetos = (props: Props) => {

    const [ item, setItem ] = useState<IProject[]>([])

    useEffect(()=> {
        (async() => {
            const response = await fetchListProject()
            setItem(response)
        })()

    },[item])

    return (

        <BoxContainer >
            <Titulo>Projetos</Titulo>
            <BoxProject>
                {
                    item.map((item, index)=> (
                        <Box key={index} display={'flex'} justifyContent={'flex-start'} alignItems={'center'} width={'100%'} gap={'10rem'}>
                        <ImgBox  src={item.img} width={'40%'} height={350} alt='Serviços' />
                        <Grid display={'flex'} flexDirection={'column'} alignItems={'flex-start'} gap={'2rem'}>
                            <span>
                                <ProjectName variant='body1'>{item.name}</ProjectName>
                                <Typography variant='body1'>{item.description}</Typography>
                            </span>
                            <ButtonProjetos>{'>'}</ButtonProjetos>
                        </Grid>
                    </Box>
                    ))
                }
            </BoxProject>
            <MaisProjetosBtn>Mais Projetos</MaisProjetosBtn>
        </BoxContainer>
    )
}

export default Projetos