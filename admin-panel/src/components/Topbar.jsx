import { useLocation } from 'react-router-dom'

const titles = {
  '/':          'Dashboard',
  '/clientes':  'Gestión de Clientes',
  '/proveedor': 'Gestión de Proveedores',
  '/usuarios':  'Gestión de Usuarios',
  '/logout':    'Cerrar Sesión',
}

function Topbar() {
  const { pathname } = useLocation()
  const title = titles[pathname] || 'Panel Administrativo'

  return (
    <header className="navbar navbar-dark bg-dark px-4 py-2 d-flex justify-content-between align-items-center">
      <span className="text-white fw-bold fs-5">{title}</span>
      <div className="d-flex align-items-center gap-2">
        <div
          style={{
            width: 36,
            height: 36,
            background: '#3949ab',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          AD
        </div>
        <div className="d-flex flex-column">
          <span className="text-white" style={{ fontSize: 13, fontWeight: 600 }}>Admin Demo</span>
          <span className="text-secondary" style={{ fontSize: 11 }}>Administrador</span>
        </div>
      </div>
    </header>
  )
}

export default Topbar