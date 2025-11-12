import { useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import * as S from './styles'
import { useMovimentacoes, type Movimentacao } from '../../hooks/useMovimentacoes'
import { MovimentacaoModal } from '../../components/movimentacaoModal'

export const MovimentacoesPage = () => {
  const { data, isLoading, error } = useMovimentacoes()
  const [isModalVisible, setIsModalVisible] = useState(false)

  if (isLoading) return <p>Carregando movimentações...</p>
  if (error) return <p>Erro ao carregar movimentações</p>

  return (
    <S.Container>
      <S.Header>
        <S.Title>📦 Movimentações de Estoque</S.Title>
        <S.StyledButton
          label="Registrar Movimentação"
          icon="pi pi-plus"
          onClick={() => setIsModalVisible(true)}
        />
      </S.Header>

    <S.TableWrapper>
      <DataTable value={data} paginator rows={5} emptyMessage="Nenhuma movimentação registrada.">
        <Column field="id" header="ID" style={{ width: '8rem' }} />
        <Column field="nomeProduto" header="Produto" />
        <Column field="tipo" header="Tipo" />
        <Column field="quantidade" header="Quantidade" />
        <Column
          field="dataMovimentacao"
          header="Data"
          body={(rowData: Movimentacao) =>
            new Date(rowData.dataMovimentacao).toLocaleString('pt-BR')
          }
        />
      </DataTable>
    </S.TableWrapper>

      <MovimentacaoModal
        isVisible={isModalVisible}
        onHide={() => setIsModalVisible(false)}
      />
    </S.Container>
  )
}
