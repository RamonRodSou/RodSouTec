import { Box, Link, Grid, styled, Typography } from '@mui/material'
import tech from '../../assets/img/Tech.webp'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import CirculoOval from '../CirculoOval/CirculoOval'

const BoxApresentacao = styled(Box)(({ theme }) => ({

  display: 'flex',
  margin: '3rem 2rem',
  gap: '5rem',

  [theme.breakpoints.down('md')]: {

    flexDirection: 'column-reverse',
},
}))

const TituloImpactante = styled(Typography)(({ theme }) => ({
  fontSize: '3.5rem',
  fontWeight: 'bold',
  fontFamily: 'Orbitron',
  width: '80%',
  background: 'linear-gradient(to right,#fff ,#ffd4c9)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
    width: '100%',
  },
}))

const FaleConosco = styled(Link)({
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

const BoxImg = styled(Box)(({ theme }) => ({
  display:'flex',
  flexDirection:'column',
  alignItems:'flex-end',
  justifyContent:'center',
  gap:5,
  
  [theme.breakpoints.down(1012)]: {

    display:'none'
  },
}))


const ImgApresentacao = styled('img')(({ theme, sizeW, sizeH }:{ theme?: any; sizeW: number; sizeH: number }) => ({
  width: sizeW,
  height: sizeH,
  [theme.breakpoints.down('md')]: {
    width: 300,
    height: 250,
  },
}))



const Apresentacao = () => {
  return (
    <BoxApresentacao  >
      <Grid display={'flex'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'center'} gap={'1rem'}>
        <TituloImpactante variant='body1'>
          Transforme suas ideias em Realidade Digital !
        </TituloImpactante>
        <Typography variant='body1' >
          Através de uma metodologia de trabalho ágil e focada em resultados.
        </Typography>
        <FaleConosco href='https://api.whatsapp.com/send/?phone=5521972923210&text=Ol%C3%A1+RodSou+Tech.+%20Gostaria+de+informa%C3%A7%C3%B5es+sobre+cria%C3%A7%C3%A3o+de+sites+e+aplicativos.&type=phone_number&app_absent=0'>
          Fale Conosco
        </FaleConosco>
      </Grid>

      <BoxImg display={'flex'} flexDirection={'column'} alignItems={'flex-end'} justifyContent={'center'} gap={5}>
        <Grid2 display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
          <CirculoOval rotate={20} color='var(--borderCirculo-color)' />
          <CirculoOval rotate={120} color='var(--borderCirculo2-color)' />
          {/* <img src={tech} alt='Estrela decorativa' width={450} height={350} /> */}
          <ImgApresentacao src={tech} alt='Estrela decorativa' sizeW={450} sizeH={350}/>
        </Grid2>
        <Grid2 width={450}>
          <Typography variant='body1' textAlign={'center'}>Tenha soluções criativas e inovadoras, garantindo a melhor experiência digital. Confie em nossa expertise para levar seu projeto ao próximo nível.</Typography>
        </Grid2>
      </BoxImg>


    </BoxApresentacao>
  )
}

export default Apresentacao