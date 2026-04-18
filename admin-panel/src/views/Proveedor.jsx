const proveedores = [
  { id:1,  nombre:'Suministros Andinos',   nit:'900.123.456-1', categoria:'Tecnología', contacto:'Pedro Ríos',    estado:'active'   },
  { id:2,  nombre:'Distribuidora Norte',   nit:'800.234.567-2', categoria:'Logística',  contacto:'Ana Suárez',    estado:'pending'  },
  { id:3,  nombre:'Papelería Central',     nit:'700.345.678-3', categoria:'Papelería',  contacto:'Luis Mora',     estado:'pending'  },
  { id:4,  nombre:'Tech Solutions SAS',    nit:'900.456.789-4', categoria:'Tecnología', contacto:'Diana Castro',  estado:'active'   },
  { id:5,  nombre:'Transportes Rápidos',   nit:'860.567.890-5', categoria:'Transporte', contacto:'Felipe Vega',   estado:'pending'  },
  { id:6,  nombre:'Logística Express',     nit:'830.678.901-6', categoria:'Logística',  contacto:'Carolina Díaz', estado:'active'   },
  { id:7,  nombre:'Papelería del Norte',   nit:'720.789.012-7', categoria:'Papelería',  contacto:'Miguel Ángel',  estado:'active'   },
  { id:8,  nombre:'Transportes del Sur',   nit:'850.890.123-8', categoria:'Transporte', contacto:'Valentina Mora', estado:'pending'  },
  { id:9,  nombre:'Innovación Digital SAS', nit:'910.901.234-9', categoria:'Tecnología', contacto:'Jorge León',   estado:'active'   },
  { id:10, nombre:'Distribuciones Globales', nit:'840.012.345-0', categoria:'Logística', contacto:'Camila Vargas', estado:'pending'  },
]


const estadoLabel = { active:'Nuevo', inactive:'Inactivo', pending:'Antiguo' }

function Proveedor() {
  return (
    <div>
      <div className="view-header">
        <div className="view-tag" style={{ background:'#ecfdf5', color:'#059669' }}>🏭 Módulo de Proveedores</div>
        <h1>Vista Proveedor</h1>
        <p>Gestiona los proveedores y aliados estratégicos del sistema.</p>
      </div>

      <div className="row g-3 mb-4">
        {[
          { icon:'🏭', val:'10', label:'Total proveedores', bg:'#ecfdf5', color:'#059669' },
          { icon:'🏷️', val:'4',   label:'Categorías',        bg:'#eff6ff', color:'#2563eb' },
          { icon:'📋', val:'5',  label:'Nuevos este mes',   bg:'#fff7ed', color:'#ea580c' },
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
          <span className="modern-card-title">Listado de Proveedores</span>
          <button className="btn-green-custom">➕ Nuevo Proveedor</button>
        </div>
        <table className="modern-table">
          <thead>
            <tr><th>#</th><th>Razón Social</th><th>NIT</th><th>Categoría</th><th>Contacto</th><th>Estado</th></tr>
          </thead>
          <tbody>
            {proveedores.map(p => (
              <tr key={p.id}>
                <td style={{ color:'#cbd5e1' }}>{p.id}</td>
                <td><strong style={{ color:'#0f172a' }}>{p.nombre}</strong></td>
                <td><code style={{ fontSize:12, color:'#64748b' }}>{p.nit}</code></td>
                <td>{p.categoria}</td>
                <td>{p.contacto}</td>
                <td><span className={`badge-${p.estado}`}>{estadoLabel[p.estado]}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Proveedor