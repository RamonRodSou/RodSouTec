import { Box, Button, Grid, styled, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import IProject from '../../interface/IProject'
import { fetchListProject } from '../../service/fetchList'
import { Fade } from "react-awesome-reveal";
import { useLocation, useNavigate } from 'react-router-dom';


const BoxContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '2rem',
    borderRadius: '5px',
    boxShadow: '0.25rem 0.37rem 1.25rem #00000036 ',

    [theme.breakpoints.down('md')]: {
        alignItems: 'center',

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

const ProjectName = styled(Typography)(({ theme }) => ({
    marginTop: 0,
    fontSize: '2.5rem',
    fontWeight: 'bold',

    [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
    }
}))

const BoxProject = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    flexWrap: 'wrap',
    gap: '2rem',
    padding: '1rem',
    [theme.breakpoints.down('md')]: {
        gap: '5rem',

    },
}))

const Projeto = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    gap: '10rem',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        gap: '1rem'
    },
}))

const ImgBox = styled('img')(({ theme }) => ({
    borderRadius: '10px',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
    width: '40%',
    height: 350,

    '&:hover': {
        opacity: 0.9,
        transform: 'scale(1.1)'

    },

    [theme.breakpoints.down(900)]: {
        width: '100%',
        height: 430,
    },

    [theme.breakpoints.down('sm')]: {
        height: 230,
    },
}))

const GridProjectoBtn = styled(Grid)(({ theme }) => ({

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '2rem',

    [theme.breakpoints.down('md')]: {
    },
}))


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
    fontFamily: 'monospace',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
    color: 'var(--maisProjetos-color)',

    '&:hover': {
        opacity: 0.9,
        transform: 'scale(.9)',
        color: '#fefefe'
    },
})

const Projetos = () => {

    const [items, setItems] = useState<IProject[]>([])

    const location = useLocation()
    const isOnProjectsPage = location.pathname === '/projetos'
    let navegate = useNavigate()

    let quantidadeItens: number = 4

    function handleOpenPdf(pdf: string): void {
        window.open(`/Pdf/${pdf}.pdf`, '_blank')
    }

    function handleProjetos() {

        navegate('/projetos')
    }

    useEffect(() => {
        (async () => {
            const response = await fetchListProject()
            setItems(response)

        })()

    }, [items])

    return (

        <BoxContainer >
            <Titulo>Projetos</Titulo>
            <BoxProject>
                {
                    items.slice(0, isOnProjectsPage ? items.length : quantidadeItens).map((items, index) => (
                        <Fade key={index} duration={2000}>
                            <Projeto key={index}>
                                <ImgBox src={items.img} alt='Serviços' />
                                <GridProjectoBtn>
                                    <span style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '1rem' }}>
                                        <ProjectName variant='body1'>{items.name}</ProjectName>
                                        <Typography variant='body1'>{items.description}</Typography>
                                    </span>
                                    <ButtonProjetos onClick={() => handleOpenPdf(items.arquivo)}>{'>'}</ButtonProjetos>
                                </GridProjectoBtn>
                            </Projeto>
                        </Fade>

                    ))
                }

            </BoxProject>
            {!isOnProjectsPage && (
                <Fade duration={2000}>
                    <MaisProjetosBtn onClick={handleProjetos}> Mais Projetos</MaisProjetosBtn>
                </Fade>
            )}

        </BoxContainer>
    )
}

export default Projetos