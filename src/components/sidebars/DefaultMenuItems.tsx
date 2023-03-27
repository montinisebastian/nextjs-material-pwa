import { AppMenuItem } from 'components/sidebars'

export function DefaultMenuItems({
  onClick
}: {
  onClick?: (...args: any[]) => void
}) {
  return (
    <>
      <AppMenuItem link={{ href: '/app' }} onClick={onClick}>
        Inicio
      </AppMenuItem>
      <AppMenuItem link={{ href: '/app/configuraciones' }} onClick={onClick}>
        Configuraciones
      </AppMenuItem>
      <AppMenuItem link={{ href: '/onboarding' }} onClick={onClick}>
        Inducciones
      </AppMenuItem>
    </>
  )
}
