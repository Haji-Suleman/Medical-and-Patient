import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './Context/StoreContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StoreContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreContextProvider>
)
