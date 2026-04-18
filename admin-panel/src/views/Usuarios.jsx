const usuarios = [
  { id:1, nombre:'Admin Principal', email:'admin@uis.edu.co',  rol:'Administrador',  ultimo:'Hoy 09:15',   estado:'active'   },
  { id:2, nombre:'Carlos Beltrán',  email:'carlos@uis.edu.co', rol:'Editor',         ultimo:'Hoy 08:40',   estado:'active'   },
  { id:3, nombre:'Mateo Hernández', email:'mateo@uis.edu.co',  rol:'Visualizador',   ultimo:'Ayer 17:22',  estado:'active'   },
  { id:4, nombre:'Santiago Galvis',    email:'santiago@uis.edu.co',  rol:'Editor',         ultimo:'Hace 3 días', estado:'active'   },
  { id:5, nombre:'Isabella Romero', email:'isabella@uis.edu.co', rol:'Visualizador', ultimo:'Hace 2 semanas',       estado:'active'   },
]

const estadoLabel = { active:'Activo', inactive:'Inactivo', pending:'Pendiente' }
const rolClass    = { Administrador:'badge-role-admin', Editor:'badge-role-editor', Visualizador:'badge-role-viewer' }

function Usuarios() {
  return (
    <div>
      <div className="view-header">
        <div className="view-tag" style={{ background:'#f5f3ff', color:'#7c3aed' }}>🔑 Módulo de Usuarios</div>
        <h1>Vista Usuarios</h1>
        <p>Administra los usuarios y sus permisos de acceso al sistema.</p>
      </div>

      <div className="row g-3 mb-4">
        {[
          { icon:'🔑', val:'1', label:'Administradores',   bg:'#f5f3ff', color:'#7c3aed' },
          { icon:'🛡️', val:'2',  label:'Editores',    bg:'#eff6ff', color:'#2563eb' },
          { icon:'🔒', val:'2',  label:'Visualizadores', bg:'#fef2f2', color:'#dc2626' },
        ].map((s,i) => (
          <div key={i} className="col-4">
            <div className="stat-card">
              <div className="stat-icon-box" style={{ background:s.bg, color:s.color }}>{s.icon}</div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-value" style={{ color:s.color }}>{s.val}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="modern-card">
        <div className="modern-card-header">
          <span className="modern-card-title">Listado de Usuarios</span>
          <button className="btn-dark-custom">➕ Nuevo Usuario</button>
        </div>
        <table className="modern-table">
          <thead>
            <tr><th>#</th><th>Nombre</th><th>Correo</th><th>Rol</th><th>Último acceso</th><th>Estado</th></tr>
          </thead>
          <tbody>
            {usuarios.map(u => (
              <tr key={u.id}>
                <td style={{ color:'#cbd5e1' }}>{u.id}</td>
                <td><strong style={{ color:'#0f172a' }}>{u.nombre}</strong></td>
                <td>{u.email}</td>
                <td><span className={rolClass[u.rol]}>{u.rol}</span></td>
                <td style={{ color:'#94a3b8' }}>{u.ultimo}</td>
                <td><span className={`badge-${u.estado}`}>{estadoLabel[u.estado]}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Usuarios