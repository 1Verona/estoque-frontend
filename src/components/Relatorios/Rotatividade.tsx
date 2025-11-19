import React from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { useRotatividade } from '../../hooks/useRelatorios'
import { Container, Header, Title } from '../../styles/components/Layout'
import { TableWrapper } from '../../styles/components/TableStyles'

export const Rotatividade: React.FC = () => {
  const { data, isLoading, error } = useRotatividade()

  if (isLoading) return <div>Carregando dados de rotatividade...</div>
  if (error) return <div>Erro ao carregar rotatividade.</div>

  const entrada = data?.produto_maior_entrada
  const saida = data?.produto_maior_saida

  const rows = [
    {
      tipo: 'Maior entrada',
      produto: typeof entrada === 'string' ? entrada : entrada?.nome ?? '-',
      total: typeof entrada === 'string' ? '-' : entrada?.total_entrada ?? '-',
    },
    {
      tipo: 'Maior saída',
      produto: typeof saida === 'string' ? saida : saida?.nome ?? '-',
      total: typeof saida === 'string' ? '-' : saida?.total_saida ?? '-',
    },
  ]

  return (
    <Container>
      <Header>
        <Title>Rotatividade (Entradas / Saídas)</Title>
      </Header>

      <TableWrapper>
        <DataTable value={rows} responsiveLayout="scroll">
          <Column field="tipo" header="Tipo" />
          <Column field="produto" header="Produto" />
          <Column field="total" header="Total" />
        </DataTable>
      </TableWrapper>
    </Container>
  )
}

export default Rotatividade
