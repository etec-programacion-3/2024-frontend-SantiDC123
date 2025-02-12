
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'
import { Tienda } from './Pages/Tienda/Tienda'
import { Registro } from './Pages/Registro/Registro'
import { Route, Routes } from 'react-router'
import { Login } from './Pages/Login/Login'
import { Carrito } from './Pages/Carrito/Carrito'
import { UserProvider } from './context/UserContext'
import { CartProvider } from './context/CartContext'
import { SaleProvider } from './context/SaleContext'
import { ThanksSale } from './Pages/ThanksSale/ThanksSale'
import { Perfil } from './Pages/Perfil/Perfil'

function App() {



  return (
    <CartProvider>
      <UserProvider>

        <SaleProvider>

          <Navbar />

          <Routes>
            <Route path='/' element={<Tienda />} />

            <Route path='/registro' element={<Registro />} />

            <Route path='/login' element={<Login />} />

            <Route path='/carrito' element={<Carrito />} />

            <Route path='/thanks' element={<ThanksSale />} />

            <Route path='/perfil' element={<Perfil />} />

          </Routes>


          <Footer />

        </SaleProvider>

      </UserProvider>
    </CartProvider>
  )
}

export default App
