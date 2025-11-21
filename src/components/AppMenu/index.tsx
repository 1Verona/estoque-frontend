import { Menubar } from 'primereact/menubar'
import { useNavigate, useLocation } from 'react-router-dom'
import * as S from './styles'

export const AppMenu = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const items = [
    {
      label: 'Produtos',
      icon: 'pi pi-box',
      command: () => navigate('/produtos'),
      className: location.pathname === '/produtos' ? 'p-menuitem-link-active' : ''
    },
    {
      label: 'Categorias',
      icon: 'pi pi-tags',
      command: () => navigate('/categorias'),
      className: location.pathname === '/categorias' ? 'p-menuitem-link-active' : ''
    },
    {
      label: 'Movimentações',
      icon: 'pi pi-sync',
      command: () => navigate('/movimentacoes'),
      className: location.pathname === '/movimentacoes' ? 'p-menuitem-link-active' : ''
    },
    {
      label: 'Relatórios',
      icon: 'pi pi-chart-bar',
      command: () => navigate('/relatorios'),
      className: location.pathname === '/relatorios' ? 'p-menuitem-link-active' : ''
    },
  ]

  return (
    <S.Container>
      <Menubar model={items} />
    </S.Container>
  )
}
