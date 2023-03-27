import { PWANotification } from './PwaNotification'
import Box from '@mui/material/Box'

export function InstallBanner({
  onCancel,
  onOk,
  show
}: {
  onCancel: () => void
  onOk: () => void
  show: boolean
}) {
  return (
    <Box sx={{ backgroundColor: 'red' }}>
      <PWANotification
        onCancel={onCancel}
        onOk={onOk}
        show={show}
        title="Instalar"
        okText="Instalar"
      >
        <p>
<<<<<<< Updated upstream
          La instalación de la aplicación Material casi no utiliza
=======
          La instalación de la aplicación Leroma System casi no utiliza
>>>>>>> Stashed changes
          almacenamiento y proporciona una rápida forma de iniciarlo desde la
          pantalla de inicio.
        </p>
      </PWANotification>
    </Box>
  )
}
