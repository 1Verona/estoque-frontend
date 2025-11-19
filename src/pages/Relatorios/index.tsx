import { TabView, TabPanel } from 'primereact/tabview'
import * as S from './styles'
import { ListaPrecos } from '../../components/Relatorios/ListaPrecos'
import Balanco from '../../components/Relatorios/Balanco'
import EstoqueCritico from '../../components/Relatorios/EstoqueCritico'
import PorCategoria from '../../components/Relatorios/PorCategoria'
import Rotatividade from '../../components/Relatorios/Rotatividade'

export const Relatorios = () => {
  return (
    <S.Container>
      <S.Title>📊 Relatórios do Estoque</S.Title>

      <TabView>
        <TabPanel header="Lista de Preços">
          <ListaPrecos />
        </TabPanel>

        <TabPanel header="Balanço Físico / Financeiro">
          <Balanco />
        </TabPanel>

        <TabPanel header="Estoque Crítico">
          <EstoqueCritico />
        </TabPanel>

        <TabPanel header="Produtos por Categoria">
          <PorCategoria />
        </TabPanel>

        <TabPanel header="Rotatividade (Entradas / Saídas)">
          <Rotatividade />
        </TabPanel>
      </TabView>
    </S.Container>
  )
}
