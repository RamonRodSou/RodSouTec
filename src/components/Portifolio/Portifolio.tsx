import { Box, Button, Grid, styled, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Fade } from "react-awesome-reveal";
import { useNavigate } from 'react-router-dom';
import { fetchListPortifolio } from '../../service/fetchList';
import { Project } from '@domain/Project';

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
    margin: 0,
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

const SubTitle = styled('h3')(({ theme }) => ({
    marginTop: 0,
    marginBottom: '2rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    fontFamily: 'Orbitron',
    background: 'linear-gradient(to right,#fff ,var(--titleSection-color))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    [theme.breakpoints.down('sm')]: {
        fontSize: '.9rem',
    }
}))

const Description = styled(Typography)(({ }) => ({
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: 4,
    transition: "all 0.3s ease-in-out",
}));

const ShowMoreBtn = styled(Button)({
    fontSize: "0.9rem",
    textTransform: "none",
    padding: 0,
    marginTop: "0.5rem",
    alignSelf: "flex-start",
    color: "var(--maisPortifolio-color)",
    "&:hover": {
        textDecoration: "underline",
        background: "transparent"
    }
});


const PortifolioName = styled(Typography)(({ theme }) => ({
    marginTop: 0,
    fontSize: '2.5rem',
    fontWeight: 'bold',

    [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
    }
}))

const BoxPortifolio = styled(Box)(({ theme }) => ({
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
    alignItems: 'start',
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
    position: 'sticky',
    top: '100px',
    width: '40%',
    height: 350,

    '&:hover': {
        opacity: 0.9,
        transform: 'scale(1.1)'

    },

    [theme.breakpoints.down(900)]: {
        width: '100%',
        height: 430,
        position: 'static',
    },

    [theme.breakpoints.down('sm')]: {
        height: 230,
    },
}))

const GridPortifolioBtn = styled(Grid)(({ theme }) => ({

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '2rem',

    [theme.breakpoints.down('md')]: {
    },
}))

const ButtonPortifolio = styled(Button)({
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

const Portifolio = () => {

    const [items, setItems] = useState<Project[]>([])
    const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({})

    let navegate = useNavigate()

    function toggleExpand(index: number) {
        setExpanded((prev) => ({ ...prev, [index]: !prev[index] }))
    }

    function handleMoreInfo(path: string): void {
        navegate(`/lista/${path}`)
    }

    useEffect(() => {
        (async () => {
            const response = await fetchListPortifolio()
            setItems(response)
        })()
    }, [items])

    return (
        <BoxContainer >
            <Titulo>Portifólio</Titulo>
            <SubTitle>Meus 10 Projetos + Relavantes</SubTitle>
            <BoxPortifolio>
                {
                    items.map((items, index) => (
                        <Fade key={index} duration={2000}>
                            <Projeto key={index}>
                                <ImgBox src={items.img} alt='Serviços' />
                                <GridPortifolioBtn>
                                    <span style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '1rem' }}>
                                        <PortifolioName variant='body1'>{items.name}</PortifolioName>
                                        <Description
                                            variant="body1"
                                            sx={{
                                                whiteSpace: "pre-line",
                                                ...(expanded[index] ? { WebkitLineClamp: "unset" } : {})
                                            }}
                                        >
                                            {items.description}
                                        </Description>
                                    </span>
                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'space-between', width: '100%' }}>
                                        <ButtonPortifolio onClick={() => handleMoreInfo(items.path)}>{'>'}</ButtonPortifolio>

                                        {items.description.length > 200 && (
                                            <ShowMoreBtn onClick={() => toggleExpand(index)}>
                                                {expanded[index] ? "Ler menos" : "Ler mais"}
                                            </ShowMoreBtn>
                                        )}
                                    </Box>
                                </GridPortifolioBtn>
                            </Projeto>
                        </Fade>

                    ))
                }
            </BoxPortifolio>
        </BoxContainer>
    )
}

export default Portifolio