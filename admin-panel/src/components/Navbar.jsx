import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <aside className="sidebar" style={{ backgroundColor: '#0f172a', minHeight: '100vh', width: '260px', display: 'flex', flexDirection: 'column' }}>
      
      {/* Contenedor del Logo: Ajustado para balance estético */}
      <div className="sidebar-logo" style={{ padding: '20px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ backgroundColor: 'white', padding: '12px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
          <img 
            src="https://imgs.search.brave.com/q2C00K2HbR1iDBHeJ1FCCSUlkUTakav6RcxOeZHGcJs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuY2RubG9nby5j/b20vbG9nb3MvdS8y/MS91bml2ZXJzaWRh/ZC1pbmR1c3RyaWFs/LWRlLXNhbnRhbmRl/ci5zdmc" 
            alt="Logo UIS" 
            style={{ width: "150px", height: "auto", objectFit: "contain", display: "block" }}
          />
        </div>
      </div>

      {/* Navegación - Manteniendo tu estructura original */}
      <ul className="sidebar-nav" style={{ listStyle: 'none', padding: '0 15px', margin: '0', flex: 1 }}>
        <li style={{ marginBottom: '8px' }}>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            <span className="nav-icon">🏠</span>
            <span className="nav-label">Dashboard</span>
          </NavLink>
        </li>
        <li style={{ marginBottom: '8px' }}>
          <NavLink to="/clientes" className={({ isActive }) => isActive ? 'active' : ''}>
            <span className="nav-icon">👥</span>
            <span className="nav-label">Clientes</span>
          </NavLink>
        </li>
        <li style={{ marginBottom: '8px' }}>
          <NavLink to="/proveedor" className={({ isActive }) => isActive ? 'active' : ''}>
            <span className="nav-icon">🏭</span>
            <span className="nav-label">Proveedores</span>
          </NavLink>
        </li>
        <li style={{ marginBottom: '8px' }}>
          <NavLink to="/usuarios" className={({ isActive }) => isActive ? 'active' : ''}>
            <span className="nav-icon">🔑</span>
            <span className="nav-label">Usuarios</span>
          </NavLink>
        </li>
        
        {/* Logout posicionado al final para mayor orden visual */}
        <li className="logout-link" style={{ marginTop: 'auto', paddingBottom: '30px', borderTop: '1px solid #1e293b', paddingTop: '20px' }}>
          <NavLink to="/logout" className={({ isActive }) => isActive ? 'active' : ''}>
            <span className="nav-icon">🚪</span>
            <span className="nav-label">Logout</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  )
}

export default Navbar