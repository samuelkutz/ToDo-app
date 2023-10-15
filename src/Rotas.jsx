import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import { GlobalStyle } from './styles/GlobalStyle.js'
import { tema } from './styles/theme.js'
import { ThemeProvider } from 'styled-components'

const Rotas = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={tema}>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default Rotas