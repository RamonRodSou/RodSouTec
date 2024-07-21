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

type Props = {}

const Navegacao = (props: Props) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }
    setDrawerOpen(open)
  }

  const menuItems = (
    <List>
      <ListItemButton>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Serviços" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Redes" />
      </ListItemButton>
      <ListItemButton>
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
              >
                <MenuIcon />
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
              <NavButton color="inherit">Home</NavButton>
              <NavButton color="inherit">Serviços</NavButton>
              <NavButton color="inherit">Redes</NavButton>
              <NavButton color="inherit">Contato</NavButton>
            </>
          )}
        </Toolbar>
      </Barnav>
    </Root>
  )
}

export default Navegacao
