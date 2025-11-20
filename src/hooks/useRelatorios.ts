import { useQuery } from '@tanstack/react-query'
import { api } from '../services/api'

export type ProdutoDTO = {
  id: number
  nome: string
  descricao?: string
  preco?: number
}

const fetchListaPrecos = async (): Promise<ProdutoDTO[]> => {
  const res = await api.get('/relatorios/lista-precos')
  return res.data
}

export type BalancoProduto = {
  nome: string
  quantidade_disponivel: number
  valor_unitario: number
  valor_total_produto: number
}

export type BalancoResult = {
  valor_total_estoque: number
  produtos: BalancoProduto[]
}

const fetchBalanco = async (): Promise<BalancoResult> => {
  const res = await api.get('/relatorios/balanco')
  return res.data
}

export type ProdutoEstoque = {
  id: number
  nome: string
  quantidadeEstoque: number
  quantidadeMinima: number
  precoUnitario?: number
}

const fetchEstoqueCritico = async (): Promise<ProdutoEstoque[]> => {
  const res = await api.get('/relatorios/estoque-critico')
  return res.data
}

export type CategoriaCount = {
  nome_categoria: string
  quantidade_produtos_distintos: number
}

const fetchPorCategoria = async (): Promise<CategoriaCount[]> => {
  const res = await api.get('/relatorios/por-categoria')
  return res.data
}

export type RotatividadeProduto = {
  id: number
  nome: string
  total_saida?: number
  total_entrada?: number
}

export type RotatividadeResult = {
  produto_maior_saida: RotatividadeProduto | string
  produto_maior_entrada: RotatividadeProduto | string
}

const fetchRotatividade = async (): Promise<RotatividadeResult> => {
  const res = await api.get('/relatorios/rotatividade')
  return res.data
}

export const useListaPrecos = () => {
  return useQuery({ queryKey: ['relatorios', 'lista-precos'], queryFn: fetchListaPrecos })
}

export const useBalanco = () => {
  return useQuery({ queryKey: ['relatorios', 'balanco'], queryFn: fetchBalanco })
}

export const useEstoqueCritico = () => {
  return useQuery({ queryKey: ['relatorios', 'estoque-critico'], queryFn: fetchEstoqueCritico })
}

export const usePorCategoria = () => {
  return useQuery({ queryKey: ['relatorios', 'por-categoria'], queryFn: fetchPorCategoria })
}

export const useRotatividade = () => {
  return useQuery({ queryKey: ['relatorios', 'rotatividade'], queryFn: fetchRotatividade })
}
