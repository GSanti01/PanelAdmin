# PanelAdmin
Una web sencilla usando React con Vite que simula un panel administrativo con navegación


# Requisitos
1. Tener Node.js instalado (Se puede verificar escribiendo el commando "node --version" en la terminal).
En caso de no ser así, descargarlo: https://nodejs.org/es/download


## Pasos seguidos

IMPORTANTE: Los comandos de instalación de inicialización e instalación se deben correr desde la CMD, o si se prefiere correrlos desde la terminal de VSCode se debe activar la configuración de la terminal a Command Prompt (Ctrl + Shift + P, Terminal: Select Default Profile).

1. Inicialización con `npm create vite@latest` (plantilla React).
   
   npm create vite@latest admin-panel -- --template react
   
3. Instalación de `react-router-dom` y `bootstrap`
   npm install
   npm install react-router-dom bootstrap
   
5. Creación del componente `App` con `<BrowserRouter>`, `<Routes>` y `<Route>`
   
7. Implementación de `<NavLink>` en la barra de navegación lateral.
   
9. Creación de vistas: Clientes, Proveedor, Usuarios y Logout.
    
11. Estilos con Bootstrap y CSS personalizado.

12. Una vez creados todos los archivos del proyectos ejecutar: "npm run dev".
    
    Este comando sirve para abrir el localhost desde donde se podrá visualizar la página.


## Vistas disponibles
- `/` → Dashboard
- `/clientes` → Vista Clientes
- `/proveedor` → Vista Proveedor
- `/usuarios` → Vista Usuarios
- `/logout` → Logout


## Resumen del flujo de componentes

```text
App.jsx
└── BrowserRouter
    ├── Navbar.jsx (Sidebar fijo con NavLinks)
    ├── Topbar.jsx (Encabezado superior)
    └── Routes
        ├── /           → Dashboard.jsx
        ├── /clientes   → Clientes.jsx
        ├── /proveedor  → Proveedor.jsx
        ├── /usuarios   → Usuarios.jsx
        └── /logout      → Logout.jsx
