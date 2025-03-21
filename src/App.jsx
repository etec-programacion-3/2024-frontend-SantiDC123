
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
import { Panel } from './Pages/Admin/Panel/panel'
import { RutasProtegidasAdmin } from './RutasProtegidasAdmin'
import { NuevoProducto } from './Pages/Admin/Panel/NuevoProducto/NuevoProducto'
import { ModificarProducto } from './Pages/Admin/Panel/ModificarProducto/ModificarProducto'
import { ProductProvider } from './context/ProductContext'

function App() {



  return (
    <CartProvider>
      <UserProvider>

        <SaleProvider>
          <ProductProvider>


            <Navbar />

            <Routes>
              <Route path='/' element={<Tienda />} />

              <Route path='/registro' element={<Registro />} />

              <Route path='/login' element={<Login />} />

              <Route path='/carrito' element={<Carrito />} />

              <Route path='/thanks' element={<ThanksSale />} />

              <Route path='/perfil' element={<Perfil />} />

              <Route element={<RutasProtegidasAdmin />}>
                <Route path='/panel' element={<Panel />} />
                <Route path='panel/producto/nuevo' element={<NuevoProducto />} />
                <Route path='panel/producto/modificar/:id' element={<ModificarProducto />} />

              </Route>


            </Routes>


            <Footer />

          </ProductProvider>
        </SaleProvider>

      </UserProvider>
    </CartProvider>
  )
}

export default App
