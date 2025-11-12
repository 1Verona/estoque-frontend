import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export type Movimentacao = {
  id: number
  nomeProduto: string
  tipo: 'ENTRADA' | 'SAIDA'
  quantidade: number
  dataMovimentacao: string
}

export const useMovimentacoes = () => {
  return useQuery({
    queryKey: ['movimentacoes'],
    queryFn: async () => {
      const { data } = await axios.get<Movimentacao[]>('http://localhost:8080/api/movimentacoes')
      return data
    },
  })
}
