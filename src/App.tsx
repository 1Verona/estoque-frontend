import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppMenu } from './components/AppMenu'
import { GlobalStyle } from './styles/GlobalStyle'
import { ProductTable } from './components/ProductTable'
import { CategoryPage } from './pages/CategoryPage'
import { MovimentacoesPage } from './pages/movimentacoesPage'

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppMenu />

      <Routes>
        <Route path="/produtos" element={<ProductTable />} />
        <Route path="/categorias" element={<CategoryPage />} />
        <Route path="/movimentacoes" element={<MovimentacoesPage/>} />
      </Routes>
    </BrowserRouter>
  )
}
