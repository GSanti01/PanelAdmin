import { useNavigate } from 'react-router-dom'

function Logout() {
  const navigate = useNavigate()
  return (
    <div className="logout-wrapper">
      <div className="logout-box">
        <div className="logout-emoji">🚪</div>

        <p>¿Estás seguro de que deseas SALIR del panel administrativo?</p>
        <button className="btn-logout-red" onClick={() => alert('Sesión cerrada correctamente')}>
          Confirmar Logout
        </button>
        <button className="btn-cancel-gray" onClick={() => navigate('/')}>
          Cancelar
        </button>
      </div>
    </div>
  )
}

export default Logout