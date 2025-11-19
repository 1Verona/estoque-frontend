import React from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { useBalanco } from '../../hooks/useRelatorios'
import type { BalancoResult, BalancoProduto } from '../../hooks/useRelatorios'
import * as S from '../../pages/Relatorios/styles'
import { TableWrapper } from '../../styles/components/TableStyles'

export const Balanco: React.FC = () => {
  const { data, isLoading, error } = useBalanco()

  if (isLoading) return <div>Carregando balanço...</div>
  if (error) return <div>Erro ao carregar balanço.</div>

  return (
    <S.Container>
      <S.Header>
        <S.Title>Balanço</S.Title>
      </S.Header>

      <div>
        <h3>Valor total do estoque: {data?.valor_total_estoque != null ? Number(data.valor_total_estoque).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : '-'}</h3>

        <TableWrapper>
          <DataTable value={(data as BalancoResult)?.produtos ?? []} paginator rows={10} emptyMessage="Nenhum produto encontrado.">
            <Column field="nome" header="Produto" />
            <Column field="quantidade_disponivel" header="Quantidade" style={{ textAlign: 'right' }} />
            <Column
              header="Valor Unitário"
              body={(rowData: BalancoProduto) => (rowData.valor_unitario != null ? Number(rowData.valor_unitario).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : '-')}
              style={{ textAlign: 'right' }}
            />
            <Column
              header="Valor Total"
              body={(rowData: BalancoProduto) => (rowData.valor_total_produto != null ? Number(rowData.valor_total_produto).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : '-')}
              style={{ textAlign: 'right' }}
            />
          </DataTable>
        </TableWrapper>
      </div>
    </S.Container>
  )
}

export default Balanco
