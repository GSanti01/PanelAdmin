import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Topbar from './components/Topbar'
import Dashboard from './views/Dashboard'
import Clientes from './views/Clientes'
import Proveedor from './views/Proveedor'
import Usuarios from './views/Usuarios'
import Logout from './views/Logout'

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        {/* Barra lateral con logo y navegación */}
        <Navbar />

        {/* Contenido principal */}
        <div className="main-content">
          <Topbar />
          <Routes>
            <Route path="/"          element={<Dashboard />} />
            <Route path="/clientes"  element={<Clientes />}  />
            <Route path="/proveedor" element={<Proveedor />} />
            <Route path="/usuarios"  element={<Usuarios />}  />
            <Route path="/logout"    element={<Logout />}    />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App