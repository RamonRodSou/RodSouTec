import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import { styled, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import CloseIcon from '@mui/icons-material/Close'
import { ListItemButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Root = styled('div')({})

const Barnav = styled(AppBar)({
  backgroundColor: 'inherit',
  boxShadow: 'inherit',
})

const NavButton = styled(Button)({
  color: 'inherit',
  ':hover': {
    backgroundColor: 'var(--navBgHove-color)',
    color: 'var(--navColorHove-color)',
  },
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1),
  justifyContent: 'flex-end',
}))

const Navegacao = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const navegate = useNavigate()

  const toggleDrawer = (open: boolean, callback?: () => void) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }
    setDrawerOpen(open)
    if (callback) {
      callback()
    }
  }
  function handleHome() {
    navegate('/')
  }

  function handleProjetos() {
    navegate('/projetos')
  }


  function handleScrollToContact() {

    window.open('https://api.whatsapp.com/send/?phone=5521972923210&text=Ol%C3%A1+RodSou+Tech.+%20Gostaria+de+informa%C3%A7%C3%B5es+sobre+cria%C3%A7%C3%A3o+de+sites+e+aplicativos.&type=phone_number&app_absent=0')
  }

  const menuItems = (
    <List>
      <ListItemButton onClick={toggleDrawer(false, handleHome)}>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton onClick={toggleDrawer(false, handleProjetos)}>
        <ListItemText primary="Projetos" />
      </ListItemButton>
      {/* <ListItemButton onClick={toggleDrawer(false)}>
        <ListItemText primary="Redes" />
      </ListItemButton> */}
      <ListItemButton onClick={toggleDrawer(false, handleScrollToContact)}>
        <ListItemText primary="Contato" />
      </ListItemButton>
    </List>
  )

  return (
    <Root>
      <Barnav position="static">
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ padding: '0' }}
              >
                <MenuIcon sx={{ fontSize: '30px' }} />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                variant="temporary"
                PaperProps={{
                  style: {
                    width: '50%',
                  },
                }}
              >
                <DrawerHeader>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseIcon />
                  </IconButton>
                </DrawerHeader>
                {menuItems}
              </Drawer>
            </>
          ) : (
            <>
              <NavButton color="inherit" onClick={handleHome}>Home</NavButton>
              <NavButton color="inherit" onClick={handleProjetos}>Projetos</NavButton>
              {/* <NavButton color="inherit">Redes</NavButton> */}
              <NavButton color="inherit" onClick={toggleDrawer(false, handleScrollToContact)}>Contato</NavButton>
            </>
          )}
        </Toolbar>
      </Barnav>
    </Root>
  )
}

export default Navegacao
