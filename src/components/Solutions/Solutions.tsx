import React from 'react'
import { Box, Grid, styled, Typography } from '@mui/material';
import iconSite from '../../assets/img/icon-site.png'
import iconLand from '../../assets/img/icon-land.png'
import iconMob from '../../assets/img/icom-mob.png'
import iconSis from '../../assets/img/icon-sis.png'
import iconAt from '../../assets/img/icon-at.png'


type Props = {}

const items = [
    {
        id: 1,
        name: "Criação de Sites",
        description: "Criação de sites para pequenas e médias empresas, com foco em sites responsivos e de fácil manutenção.",
        img: iconSite,
    },
    {
        id: 2,
        name: "Criação de Aplicativos",
        description: "Aplicativos para celular, web ou desktop.",
        img: iconMob,
    },
    {
        id: 3,
        name: "Criação de Landing Pages",
        description: "Páginas institucionais, escritórios, barbearias, uma identidade para o seu negócio.",
        img: iconLand,
    },

    {
        id: 4,
        name: "Criação de Sistemas",
        description: "Sistemas para o seu comércio.",
        img: iconSis,
    },
    {
        id: 5,
        name: "Criação de Automações",
        description: "Aplicativos automatizados para economizar tempo em seu trabalho ou negócio.",
        img: iconAt,
    },
];

const CardBox = styled(Box)({
    width:'20%',
    display: 'flex',
    gap:'1rem',
    justifyContent:'flex-start',
    flexDirection:'column',
    padding:'1rem',
    border:'.5px solid #1991C0DE',
    margin:'.2rem',
    borderRadius:'5px',
    boxShadow:'1px 1px 4px #1991C0DE',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        backgroundColor: '#1991C030',
        transform: 'scale(.9)'
        
      },

})

const Solutions = (props: Props) => {
    return (
        <Box display={'flex'} justifyContent={'center'} padding={4} >
            {
                items.map((item) => (
                    <CardBox key={item.id} >
                        <Grid display={'flex'} alignItems={'center'} gap={1}>
                            <img src={item.img} alt={item.name} width={50} height={50} />
                            <Typography variant='body1'>{item.name}</Typography>
                        </Grid>
                        <Typography variant='body2'>{item.description}</Typography>

                    </CardBox>
                ))
            }
        </Box>
    )
}

export default Solutions