import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import type { Movimentacao } from './useMovimentacoes'

export type MovimentacaoPayload = {
  produto: { id: number }
  tipo: 'ENTRADA' | 'SAIDA'
  quantidade: number
}

export const useCreateMovimentacao = () => {
  const queryClient = useQueryClient()

  return useMutation<Movimentacao, AxiosError<{ message: string }>, MovimentacaoPayload>({
    mutationFn: async (payload: MovimentacaoPayload) => {
      const { data } = await axios.post<Movimentacao>(
        'http://localhost:8080/api/movimentacoes',
        payload
      )
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movimentacoes'] })
      queryClient.invalidateQueries({ queryKey: ['produtos'] })
    },
  })
}
