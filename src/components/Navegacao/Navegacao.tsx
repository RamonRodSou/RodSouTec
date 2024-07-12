import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import { styled } from '@mui/system'
import { colors } from '@mui/material'

const Root = styled('div')({

})

const Barnav = styled(AppBar)({
    backgroundColor: 'inherit',
    boxShadow:'inherit',
})

const NavButton = styled(Button)({
    color: 'inherit',
    ':hover': {
      backgroundColor:'var(--navBgHove-color)', 
      color:'var(--navColorHove-color)'
    },
  });

type Props = {}

const Navegacao = (props: Props) => {
    
    return (
        <Root >
        <Barnav position="static">
          <Toolbar >
            <NavButton color="inherit">Home</NavButton>
            <NavButton color="inherit">Serviços</NavButton>
            <NavButton color="inherit">Redes</NavButton>
            <NavButton color="inherit">Contato</NavButton>
          </Toolbar>
        </Barnav>
      </Root>
    )
}

export default Navegacao