const clientes = [
  { id:1,  nombre:'María López',     email:'maria@correo.com',   ciudad:'Bucaramanga',   estado:'active'   },
  { id:2,  nombre:'Juan Pérez',      email:'juan@correo.com',    ciudad:'Bogotá',        estado:'active'   },
  { id:3,  nombre:'Laura Gómez',     email:'laura@correo.com',   ciudad:'Medellín',      estado:'inactive' },
  { id:4,  nombre:'Carlos Ramírez',  email:'carlos@correo.com',  ciudad:'Cali',          estado:'active'   },
  { id:5,  nombre:'Sofía Torres',    email:'sofia@correo.com',   ciudad:'Barranquilla',  estado:'inactive' },
  { id:6,  nombre:'Andrés Castillo', email:'andres@correo.com',  ciudad:'Cartagena',     estado:'active'   },
  { id:7,  nombre:'Paula Ríos',      email:'paula@correo.com',   ciudad:'Manizales',     estado:'inactive' },
  { id:8,  nombre:'Felipe Duarte',   email:'felipe@correo.com',  ciudad:'Pereira',       estado:'active'   },
  { id:9,  nombre:'Camila Vargas',   email:'camila@correo.com',  ciudad:'Cúcuta',        estado:'inactive' },
  { id:10, nombre:'Ricardo Silva',   email:'ricardo@correo.com', ciudad:'Santa Marta',   estado:'active'   },
  { id:11, nombre:'Valentina Mora',  email:'valentina@correo.com', ciudad:'Tunja',       estado:'inactive' },
  { id:12, nombre:'Miguel Ángel',    email:'miguel@correo.com',  ciudad:'Villavicencio', estado:'active'   },
  { id:13, nombre:'Natalia Pardo',   email:'natalia@correo.com', ciudad:'Neiva',         estado:'active'   },
  { id:14, nombre:'Jorge León',      email:'jorge@correo.com',   ciudad:'Popayán',       estado:'inactive' },
  { id:15, nombre:'Daniela Ruiz',    email:'daniela@correo.com', ciudad:'Ibagué',        estado:'active'   },
  { id:16, nombre:'Hernán Soto',     email:'hernan@correo.com',  ciudad:'Montería',      estado:'active'   },
  { id:17, nombre:'Lucía Fernández', email:'lucia@correo.com',   ciudad:'Armenia',       estado:'inactive' },
  { id:18, nombre:'Sebastián Peña',  email:'sebastian@correo.com', ciudad:'Pasto',       estado:'active'   },
  { id:19, nombre:'Carolina Díaz',   email:'carolina@correo.com', ciudad:'Sincelejo',    estado:'active'   },
  { id:20, nombre:'Oscar Herrera',   email:'oscar@correo.com',   ciudad:'Yopal',         estado:'inactive' },
]


const estadoLabel = { active:'Activo', inactive:'Inactivo', pending:'Pendiente' }

function Clientes() {
  return (
    <div>
      <div className="view-header">
        <div className="view-tag" style={{ background:'#eff6ff', color:'#2563eb' }}>👥 Módulo de Clientes</div>
        <h1>Vista Clientes</h1>
        <p>Administra la información de todos los clientes registrados.</p>
      </div>

      <div className="row g-3 mb-4">
        {[
          { icon:'👥', val:'20', label:'Total clientes', bg:'#eff6ff', color:'#2563eb' },
          { icon:'✅', val:'12', label:'Activos',         bg:'#ecfdf5', color:'#059669' },
          { icon:'⏸️', val:'8',   label:'Inactivos',       bg:'#fef2f2', color:'#dc2626' },
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
          <span className="modern-card-title">Listado de Clientes</span>
          <button className="btn-primary-custom">➕ Nuevo Cliente</button>
        </div>
        <table className="modern-table">
          <thead>
            <tr><th>#</th><th>Nombre</th><th>Email</th><th>Ciudad</th><th>Estado</th><th>Acciones</th></tr>
          </thead>
          <tbody>
            {clientes.map(c => (
              <tr key={c.id}>
                <td style={{ color:'#cbd5e1' }}>{c.id}</td>
                <td><strong style={{ color:'#0f172a' }}>{c.nombre}</strong></td>
                <td>{c.email}</td>
                <td>{c.ciudad}</td>
                <td><span className={`badge-${c.estado}`}>{estadoLabel[c.estado]}</span></td>
                <td>
                  <button style={{ background:'none', border:'none', cursor:'pointer', marginRight:6 }}>✏️</button>
                  <button style={{ background:'none', border:'none', cursor:'pointer' }}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Clientes