import {
  Typography,
  Box,
  Paper,
  List,
  Divider,
  ListItemIcon
} from '@mui/material'
import AccountBoxIcon from '@mui/icons-material/AccountBox'

import GrillaTachosEnCamara from 'components/consultarTachosEnCamara'

import { AppLayout } from 'components/layout'
import { MobileMenuItem } from 'components/sidebars'
import { ReactNode } from 'react'
export default function consultarTachosEnCamara() {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <>
      <Paper>
        <Box m={2} pt={2} pb={2}>
          <Typography variant="h6">Configuraciones</Typography>
        </Box>
      </Paper>

      <MainContent />
    </>
  )
}

function MainContent() {
  return (
    <>
      <Paper>
        <Box p={2}>
          <GrillaTachosEnCamara />
        </Box>
      </Paper>
    </>
  )
}

consultarTachosEnCamara.layout = AppLayout

consultarTachosEnCamara.desktopSidebar = function SettingsMenuDesktop(
  defaultItems: ReactNode
) {
  return (
    <>
      <List>{defaultItems}</List>
      <Divider />
      <List>
        <MobileMenuItem
          icon={
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
          }
          link={{ href: '/app/settings?section=profile', shallow: true }}
        >
          Perfil
        </MobileMenuItem>
      </List>
    </>
  )
}

consultarTachosEnCamara.mobileSidebar = function SettingsMenuMobile(
  defaultItems: ReactNode
) {
  return (
    <>
      <List>{defaultItems}</List>
      <Divider />
      <List>
        <MobileMenuItem
          icon={
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
          }
          link={{ href: '/app/settings?section=profile', shallow: true }}
        >
          Perfil
        </MobileMenuItem>
      </List>
    </>
  )
}
