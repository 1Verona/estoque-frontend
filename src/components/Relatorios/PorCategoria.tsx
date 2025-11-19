import React from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { usePorCategoria } from '../../hooks/useRelatorios'
import * as S from '../../pages/Relatorios/styles'
import { TableWrapper } from '../../styles/components/TableStyles'

export const PorCategoria: React.FC = () => {
  const { data, isLoading, error } = usePorCategoria()

  if (isLoading) return <div>Carregando produtos por categoria...</div>
  if (error) return <div>Erro ao carregar produtos por categoria.</div>

  return (
    <S.Container>
      <S.Header>
        <S.Title>Produtos por Categoria</S.Title>
      </S.Header>

      <TableWrapper>
        <DataTable value={data ?? []} paginator rows={10} emptyMessage="Nenhuma categoria encontrada.">
          <Column field="nome_categoria" header="Categoria" />
          <Column field="quantidade_produtos_distintos" header="Produtos distintos" style={{ textAlign: 'right' }} />
        </DataTable>
      </TableWrapper>
    </S.Container>
  )
}

export default PorCategoria
