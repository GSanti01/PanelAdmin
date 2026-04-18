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
```

## Pasos de instalación
1. Clonar el repositorio.
2. Cambiar la rama a master (git checkout master).
3. Cambiar la ruta a la carpeta princiapl (cd admin-panel).
4. Instalar dependencias (npm install).
5. Inicializar el servidor de desarrollo (npm run dev).


## Imágenes de muestra:

<img width="1805" height="844" alt="image" src="https://github.com/user-attachments/assets/5817f5c0-c516-4a6f-bbc4-a381fdab3e52" />

<img width="1809" height="850" alt="image" src="https://github.com/user-attachments/assets/6947c3cb-4641-4e5c-b665-0dd42a849760" />

<img width="1806" height="847" alt="image" src="https://github.com/user-attachments/assets/34708b1c-8474-4d92-aade-f1d15d73affa" />

<img width="1805" height="845" alt="image" src="https://github.com/user-attachments/assets/788943ea-03da-4ca3-8db8-59ac552173a5" />

<img width="1822" height="868" alt="image" src="https://github.com/user-attachments/assets/57737548-2d14-4aa7-92b2-6d29f9a6c013" />




