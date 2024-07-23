import { Box, Link, Grid, styled, Typography } from '@mui/material'

const BoxApresentacao = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: '3rem 2rem',
  gap: '5rem',
  height: '60vh',
  justifyContent: 'space-between',
  alignItems: 'space-between',

  '@media (max-width: 900px) and (max-height: 420px)': {
    flexDirection: 'column-reverse',
    margin: '0 2rem',
  },

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
    height: '40vh',
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
    height: '60vh',
    justifyContent: 'space-around',
    margin: '0 2rem',

  },
}))

const TituloImpactante = styled(Typography)(({ theme }) => ({
  fontSize: '3.5rem',
  fontWeight: 'bold',
  fontFamily: 'Orbitron',
  width: '50%',
  background: 'linear-gradient(to right,#fff ,#ffd4c9)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  marginTop:'4rem',

  [theme.breakpoints.down('md')]: {
    fontSize: '1.7rem',
    width: '100%',
    margin:'0',
  },

  
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    width: '100%',
    margin:'0',
  },
}))

const FaleConosco = styled(Link)(({ theme }) => ({
  backgroundColor: 'var(--faleConoscoBg-color)',
  color: '#fff',
  padding: '1rem 2rem',
  borderRadius: '0.5rem',
  '&:hover': {
    backgroundColor: 'var(--faleConoscoBgHover-color)',
  },
  '&:active': {
    backgroundColor: 'var(--faleConoscoBgActive-color)',
  },

  [theme.breakpoints.down('md')]: {
    padding: '.5rem 1rem',

  },
}))

const Apresentacao = () => {
  return (
    <BoxApresentacao  >
      <Grid display={'flex'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'space-around'} gap={'1rem'} height={'80%'}>
        <span>
          <TituloImpactante variant='body1'>
            Transforme suas ideias em Realidade Digital !
          </TituloImpactante>
          <Typography variant='body1' >
            Através de uma metodologia de trabalho ágil e focada em resultados.
          </Typography>
        </span>
        <FaleConosco href='https://api.whatsapp.com/send/?phone=5521972923210&text=Ol%C3%A1+RodSou+Tech.+%20Gostaria+de+informa%C3%A7%C3%B5es+sobre+cria%C3%A7%C3%A3o+de+sites+e+aplicativos.&type=phone_number&app_absent=0'>
          Fale Conosco
        </FaleConosco>
      </Grid>



    </BoxApresentacao>
  )
}





export default Apresentacao


