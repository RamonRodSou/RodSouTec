import { Box, Button, Grid, styled, Typography } from '@mui/material'
import tech from '../../assets/img/Tech.webp'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import CirculoOval from '../CirculoOval/CirculoOval'


type Props = {}

const TituloImpactante = styled(Typography)({
  fontSize: '3.5rem',
  fontWeight: 'bold',
  fontFamily: 'Orbitron',
  width: '80%',
  background: 'linear-gradient(to right,#fff ,#ffd4c9)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
})

const FaleConosco = styled(Button)({
  backgroundColor: 'var(--faleConoscoBg-color)',
  color: '#fff',
  padding: '1rem 2rem',
  borderRadius: '0.5rem',
  '&:hover': {
    backgroundColor: 'var(--faleConoscoBgHover-color)',
  },
  '&:active': {
    backgroundColor: 'var(--faleConoscoBgActive-color)',
  }

})




const Apresentacao = (props: Props) => {
  return (
    <Box display={'flex'} margin={'3rem 2rem'} gap={'5rem'}>
      <Grid display={'flex'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'center'} gap={'1rem'}>
        <TituloImpactante variant='body1'>
          Transforme suas ideias em Realidade Digital !
        </TituloImpactante>
        <Typography variant='body1' >
          Através de uma metodologia de trabalho ágil e focada em resultados.
        </Typography>
        <FaleConosco>
          Fale Conosco
        </FaleConosco>

      </Grid>

      <Grid display={'flex'} flexDirection={'column'} alignItems={'flex-end'} justifyContent={'center'} gap={5}>
        <Grid2 display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
          <CirculoOval rotate={20} color='var(--borderCirculo-color)' />
          <CirculoOval rotate={120} color='var(--borderCirculo2-color)' />
          <img src={tech} alt='Estrela decorativa' width={450} height={350} />
        </Grid2>
        <Grid2 width={450}>
          <Typography variant='body1' textAlign={'center'}>Tenha soluções criativas e inovadoras, garantindo a melhor experiência digital. Confie em nossa expertise para levar seu projeto ao próximo nível.</Typography>
        </Grid2>
      </Grid>


    </Box>
  )
}

export default Apresentacao