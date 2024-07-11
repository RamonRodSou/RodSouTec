import { Box, Button, Grid, styled, Typography } from '@mui/material'
import React from 'react'

import tech from '../../assets/img/Tech.png'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'


type Props = {}

const TituloImpactante = styled(Typography)({
  fontSize: '3.5rem',
  fontWeight: 'bold',
})

const FaleConosco = styled(Button)({
  backgroundColor: '#f71052',
  color: '#fff',
  padding: '1rem 2rem',
  borderRadius: '0.5rem',
  '&:hover': {
    backgroundColor: '#ab0e06',
    },
    '&:active': {
      backgroundColor: '#ab0e06',
      }
        
})

const Apresentacao = (props: Props) => {
  return (
    <Box display={'flex'} margin={'6rem 0 0 0'} gap={'5rem'}>
      <Grid display={'flex'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'center'} gap={'1rem'}> 
        <TituloImpactante variant='body1'>
          Transforme suas ideias em Realidade Digital
        </TituloImpactante>
        <Typography variant='body1'>
          Através de uma metodologia de trabalho ágil e focada em resultados.
        </Typography>
        <FaleConosco>
          Fale Conosco
        </FaleConosco>

      </Grid>

      <Grid display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
        <img src={tech} alt='Estrela decorativa' width={500} height={400} />
        <Grid2 width={'60%'}> 
          <Typography variant='body1' textAlign={'center'}>Tenha soluções criativas e inovadoras, garantindo a melhor experiência digital. Confie em nossa expertise para levar seu projeto ao próximo nível.</Typography>
        </Grid2>
      </Grid>


    </Box>
  )
}

export default Apresentacao