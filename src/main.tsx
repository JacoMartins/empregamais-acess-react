import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Buscar from './pages/buscar'
import { GlobalStyles, Main } from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/buscar" element={<Buscar />} />
          <Route path="/buscar/:category" element={<Buscar />} />
        </Routes>
      </Main>
    </BrowserRouter>
  </React.StrictMode>,
)
