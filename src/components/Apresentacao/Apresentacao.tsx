import { Box, Link, Grid, styled, Typography } from '@mui/material'

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

  

    </BoxApresentacao>
  )
}





export default Apresentacao


