import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Layout } from './pages/Layout.jsx'
import CartProvider from './util/context/Cartcontext.jsx'
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <CartProvider>
  
 <Layout/>
 </CartProvider>
  // </StrictMode>,
 
)


