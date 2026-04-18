import { NavLink } from 'react-router-dom'

const stats = [
  { icon:'👥', value:'20', label:'Clientes',   bg:'#eff6ff', color:'#2563eb' },
  { icon:'🏭', value:'10',   label:'Proveedores',      bg:'#ecfdf5', color:'#059669' },
  { icon:'🔑', value:'5',    label:'Usuarios Activos', bg:'#f5f3ff', color:'#7c3aed' },
  
]

const actividad = [
  { user:'María López',    accion:'Nuevo cliente registrado', tiempo:'Hace 5 min',  estado:'active'   },
  { user:'Carlos Gómez',   accion:'Proveedor actualizado',    tiempo:'Hace 12 min', estado:'pending'  },
  { user:'Ana Martínez',   accion:'Usuario creado',           tiempo:'Hace 30 min', estado:'active'   },
  { user:'Luis Rodríguez', accion:'Pedido #4712 completado',  tiempo:'Hace 1 h',    estado:'inactive' },
]

function Dashboard() {
  return (
    <div>
      <div className="hero-banner">
        <div className="hero-tag">✨ Panel Actualizado</div>
        <h2 className="hero-title">
          Bienvenido al{' '}
          <span className="gradient-text">Panel Administrativo UIS</span>
        </h2>
        <p className="hero-sub">Universidad Industrial de Santander · 2026</p>
      </div>

      <div className="row g-4 mb-4">
        {stats.map((s, i) => (
          <div key={i} className="col-6 col-lg-3">
            <div className="stat-card">
              <div className="stat-icon-box" style={{ background: s.bg, color: s.color }}>{s.icon}</div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-value" style={{ color: s.color }}>{s.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="modern-card mb-4">
        <div className="modern-card-header">
          <span className="modern-card-title">Acceso Rápido</span>
        </div>
        <div style={{ padding:'20px', display:'flex', gap:12, flexWrap:'wrap' }}>
          <NavLink to="/clientes"  className="quick-access-btn" style={{ background:'#2563eb', color:'#fff' }}>👥 Clientes</NavLink>
          <NavLink to="/proveedor" className="quick-access-btn" style={{ background:'#059669', color:'#fff' }}>🏭 Proveedor</NavLink>
          <NavLink to="/usuarios"  className="quick-access-btn" style={{ background:'#0f172a', color:'#fff' }}>🔑 Usuarios</NavLink>
          <NavLink to="/logout"    className="quick-access-btn" style={{ background:'#dc2626', color:'#fff' }}>🚪 Cerrar Sesión</NavLink>
        </div>
      </div>

      
    </div>
  )
}

export default Dashboard