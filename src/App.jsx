
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

function App() {



  return (

    <UserProvider>
      <CartProvider>

        <Navbar />

        <Routes>
          <Route path='/' element={<Tienda />} />

          <Route path='/registro' element={<Registro />} />

          <Route path='/login' element={<Login />} />

          <Route path='/carrito' element={<Carrito />} />

        </Routes>


        <Footer />

      </CartProvider>
    </UserProvider>
  )
}

export default App
