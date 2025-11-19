import React from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { useEstoqueCritico } from '../../hooks/useRelatorios'
import type { ProdutoEstoque } from '../../hooks/useRelatorios'
import * as S from '../../pages/Relatorios/styles'
import { TableWrapper } from '../../styles/components/TableStyles'

export const EstoqueCritico: React.FC = () => {
  const { data, isLoading, error } = useEstoqueCritico()

  if (isLoading) return <div>Carregando produtos em estoque crítico...</div>
  if (error) return <div>Erro ao carregar estoque crítico.</div>

  return (
    <S.Container>
      <S.Header>
        <S.Title>Estoque Crítico</S.Title>
      </S.Header>

      <TableWrapper>
        <DataTable value={data ?? []} paginator rows={10} emptyMessage="Nenhum produto encontrado.">
          <Column field="id" header="ID" style={{ width: '8rem' }} />
          <Column field="nome" header="Produto" />
          <Column field="quantidadeEstoque" header="Estoque" style={{ textAlign: 'right' }} />
          <Column field="quantidadeMinima" header="Mínimo" style={{ textAlign: 'right' }} />
          <Column
            header="Preço"
            body={(rowData: ProdutoEstoque) => (rowData.precoUnitario != null ? Number(rowData.precoUnitario).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : '-')}
            style={{ textAlign: 'right' }}
          />
        </DataTable>
      </TableWrapper>
    </S.Container>
  )
}

export default EstoqueCritico
