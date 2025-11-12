import { Menubar } from 'primereact/menubar'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

export const AppMenu = () => {
  const navigate = useNavigate()

  const items = [
    { label: 'Produtos', icon: 'pi pi-box', command: () => navigate('/produtos') },
    { label: 'Categorias', icon: 'pi pi-tags', command: () => navigate('/categorias') },
    { label: 'Movimentações', icon: 'pi pi-sync', command: () => navigate('/movimentacoes') },
  ]

  return (
    <S.Container>
      <Menubar model={items} />
    </S.Container>
  )
}
