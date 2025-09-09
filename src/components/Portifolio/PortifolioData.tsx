import { Box, Grid, styled, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Fade } from "react-awesome-reveal";
import { useParams } from 'react-router-dom'
import { ProjectImage } from '@domain/ProjectImage';
import { portifolioPath } from '@utils/portifolioPath';

const BoxContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '2rem',
    borderRadius: '10px',
    [theme.breakpoints.down('md')]: {
        alignItems: 'center',
    },
}))

const Titulo = styled('h2')(({ theme }) => ({
    marginTop: 0,
    marginBottom: '2rem',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    fontFamily: 'Orbitron',
    background: 'linear-gradient(to right,#fff ,var(--titleSection-color))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
    }
}))

const SubGroupTitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.8rem',
    fontWeight: 600,
    margin: '2rem 0 1rem 0',
    fontFamily: 'Orbitron',
    color: 'var(--titleSection-color)',
    textTransform: 'uppercase',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
    }
}))

const ImgBox = styled('img')(({ theme }) => ({
    borderRadius: '12px',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
    width: '100%',
    maxWidth: 700,
    height: 'auto',
    background: 'transparent',
    boxShadow: 'none',
    objectFit: 'cover',
    '&:hover': {
        opacity: 0.95,
        transform: 'scale(1.05)',
    },
    [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
        maxHeight: 200,
    }
}))


const PortifolioData = () => {
    const { path } = useParams<{ path: string }>()
    const [data, setData] = useState<ProjectImage[]>([])

    useEffect(() => {
        if (path && portifolioPath[path]) {
            setData(portifolioPath[path]);
        } else {
            setData([]);
        }
    }, [path]);

    const groupedByName = data.reduce((acc: Record<string, ProjectImage[]>, item) => {
        if (!acc[item.name]) acc[item.name] = []
        acc[item.name].push(item)
        return acc
    }, {})

    return (
        <BoxContainer>
            <Titulo>Projetos</Titulo>

            {Object.keys(groupedByName).length === 0 ? (
                <Typography textAlign="center">Nenhum projeto encontrado.</Typography>
            ) : (
                Object.keys(groupedByName).map((name) => (
                    <Box key={name} width="100%" mb={4}>
                        <SubGroupTitle>{name}</SubGroupTitle>
                        <Grid container spacing={3} justifyContent="center">
                            {groupedByName[name].map((item, index) => (
                                <Grid item xs={12} sm={6} md={6} key={index}>
                                    <Fade duration={1200}>
                                        <Box display="flex" flexDirection="column" alignItems="center">
                                            <ImgBox src={item.url} alt={item.name} />
                                        </Box>
                                    </Fade>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                ))
            )}
        </BoxContainer>
    )
}

export default PortifolioData
