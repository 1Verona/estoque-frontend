import React from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { useListaPrecos } from '../../hooks/useRelatorios'
import type { ProdutoDTO } from '../../hooks/useRelatorios'
import * as S from '../../pages/Relatorios/styles'
import { TableWrapper } from '../../styles/components/TableStyles'

export const ListaPrecos: React.FC = () => {
  const { data, isLoading, error } = useListaPrecos()

  if (isLoading) return <div>Carregando lista de preços...</div>
  if (error) return <div>Erro ao carregar lista de preços.</div>
   
  return (
    <S.Container>
      <S.Header>
        <S.Title>Lista de Preços</S.Title>
      </S.Header>

      <TableWrapper>
        <DataTable value={data} paginator rows={10} emptyMessage="Nenhum produto encontrado.">
          <Column field="id" header="ID" style={{ width: '8rem' }} />
          <Column field="nome" header="Nome" />
          <Column
            header="Preço"
            body={(rowData: ProdutoDTO) => (rowData.preco != null ? Number(rowData.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : '-')}
            style={{ textAlign: 'right' }}
          />
        </DataTable>
      </TableWrapper>
    </S.Container>
  )
}

export default ListaPrecos
