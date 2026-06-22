# 🏠 Cerro Novaterra — Sitio Web Demo

Demo de plataforma web para conjunto residencial con servicios exclusivos. Muestra las instalaciones, permite reservar espacios, y presenta planes para residentes.

## 🔗 Sitio Publicado

**https://davidramireza.github.io/conjunto-apartamentos/**

---

## 📋 Tabla de Contenido

- [Tecnologías](#-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Desarrollo Local](#-desarrollo-local)
- [Diseño Implementado](#-diseño-implementado)
- [Control de Versiones (Git)](#-control-de-versiones-git)
- [Publicación (GitHub Pages)](#-publicación-github-pages)
- [Cómo Hacer Cambios](#-cómo-hacer-cambios)

---

## 🛠️ Tecnologías

| Tecnología | Versión | Uso |
|---|---|---|
| **React** | 19 | Framework de UI |
| **Vite** | 8 | Bundler y dev server |
| **Tailwind CSS** | 4 | Estilos utilitarios |
| **Framer Motion** | 12 | Animaciones |
| **Git** | — | Control de versiones |
| **GitHub Pages** | — | Hosting estático |

---

## 📁 Estructura del Proyecto

```
conjunto-apartamentos/
├── index.html              # Entry point HTML
├── vite.config.js          # Configuración de Vite
├── package.json            # Dependencias y scripts
├── .gitignore              # Archivos ignorados por git
├── public/                 # Assets estáticos (favicon, icons)
├── dist/                   # Build de producción (generado)
└── src/
    ├── main.jsx            # Punto de entrada React
    ├── App.jsx             # Componente raíz
    ├── index.css           # Estilos globales + Tailwind
    ├── pages/
    │   └── Home.jsx        # Página principal (todas las secciones)
    ├── components/
    │   ├── Navbar.jsx      # Barra de navegación (glassmorphism + scroll)
    │   ├── Hero.jsx        # Hero section (animado, palabras rotativas)
    │   ├── Services.jsx    # Grid de servicios con animación
    │   ├── Gallery.jsx     # Galería interactiva con carrusel
    │   ├── Plans.jsx       # Planes de membresía (Básico/Premium/VIP)
    │   ├── Reservations.jsx # Sistema de reservas multi-paso
    │   ├── Testimonials.jsx # Testimonios con carrusel automático
    │   ├── Contact.jsx     # Formulario de contacto + información
    │   └── Footer.jsx      # Footer completo con newsletter
    └── data/
        └── services.js     # Datos de servicios y testimonios
```

---

## 💻 Desarrollo Local

### Requisitos

- **Node.js** v18 o superior
- **npm** v9 o superior

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/davidramireza/conjunto-apartamentos.git
cd conjunto-apartamentos

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:5173
```

### Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo con hot-reload
npm run build    # Build de producción en /dist
npm run preview  # Previsualizar build localmente
npm run lint     # Ejecutar ESLint
```

---

## 🎨 Diseño Implementado

### Mejoras realizadas respecto a la versión original:

| Componente | Antes | Después |
|---|---|---|
| **Navbar** | Fijo, fondo oscuro | Glassmorphism, cambia al hacer scroll, animaciones |
| **Hero** | Gradiente estático | Grid animado, palabras rotativas, esferas flotantes |
| **Services** | Grid simple | Cards con hover 3D, stagger animation, efectos de brillo |
| **Gallery** | ❌ No existía | Carrusel interactivo con miniaturas y navegación |
| **Plans** | ❌ No existía | 3 planes con precios, checklist y card destacado |
| **Reservations** | Formulario simple | Multi-step con 3 pasos e indicador de progreso |
| **Testimonials** | Grid estático | Carrusel automático en mobile + animaciones |
| **Contact** | ❌ No existía | Formulario + info de contacto con glass cards |
| **Footer** | Básico | Newsletter, redes sociales, links organizados |

### Librerías añadidas

- **framer-motion** — Animaciones profesionales (scroll reveal, stagger, hover)

---

## 🔀 Control de Versiones (Git)

### Inicialización

```bash
git init
git add -A
git commit -m "Initial commit"
```

### Conexión con GitHub

```bash
git remote add origin https://github.com/davidramireza/conjunto-apartamentos.git
git branch -M main
git push -u origin main
```

### Flujo de trabajo

```
main ──► commits ──► push ──► GitHub
                                │
                          gh-pages (branch separada con el build)
                                │
                          GitHub Pages ──► https://davidramireza.github.io/conjunto-apartamentos/
```

### Ramas

| Rama | Propósito |
|---|---|
| `main` | Código fuente del proyecto |
| `gh-pages` | Build de producción (generado automáticamente) |

---

## 🌐 Publicación (GitHub Pages)

### 1. Configurar base path en Vite

En `vite.config.js`:

```js
export default defineConfig({
  base: '/conjunto-apartamentos/',  // ← Nombre del repo
  plugins: [react(), tailwindcss()],
})
```

### 2. Construir el proyecto

```bash
npm run build
```

### 3. Crear rama gh-pages con el contenido de dist

```bash
git checkout --orphan gh-pages
# Eliminar todo excepto dist
Get-ChildItem -Exclude "dist" | Remove-Item -Recurse -Force
# Mover dist a la raíz
Get-ChildItem -Path "dist" -Recurse | Move-Item -Destination "."
Remove-Item -Recurse -Force "dist"
# Commit y push
git add -A
git commit -m "Deploy"
git push origin gh-pages --force
git checkout main
```

### 4. Activar GitHub Pages

- Ir a **Settings > Pages** del repositorio en GitHub
- Source: **Deploy from a branch**
- Branch: `gh-pages`, folder: `/ (root)`
- Guardar

O por API:

```bash
curl -X POST -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/user/repos/davidramireza/conjunto-apartamentos/pages \
  -d '{"source":{"branch":"gh-pages","path":"/"}}'
```

### 5. Verificar

El sitio queda disponible en:
**https://davidramireza.github.io/conjunto-apartamentos/**

---

## ✏️ Cómo Hacer Cambios

### Cambiar nombre del conjunto

Editar en estos archivos:

- `index.html` — Título de la página
- `src/components/Navbar.jsx` — Marca en la barra
- `src/components/Footer.jsx` — Marca y copyright

### Agregar/quitar servicios

Editar `src/data/services.js`:
- Agregar un nuevo objeto al array `services`
- Si el icono no existe, agregarlo en `src/components/ServiceIcons.jsx`

### Agregar testimonios

Editar `src/data/services.js`:
- Agregar un nuevo objeto al array `testimonials`

### Cambiar colores

Editar `src/index.css` en la sección `@theme`:
- `--color-primary` — Azul principal
- `--color-accent` — Dorado
- `--color-dark` — Fondo oscuro

### Publicar cambios

```bash
# 1. Hacer commit
git add -A
git commit -m "Descripción del cambio"

# 2. Subir a GitHub
git push origin main

# 3. Reconstruir
npm run build

# 4. Redesplegar (seguir pasos de la sección "Publicación")
```

---

## 📦 Dependencias

### Producción

```json
{
  "react": "^19.2.6",
  "react-dom": "^19.2.6",
  "react-router-dom": "^7.18.0",
  "framer-motion": "^12.10.0",
  "@heroicons/react": "^2.2.0",
  "react-icons": "^5.6.0",
  "tailwindcss": "^4.3.1"
}
```

### Desarrollo

```json
{
  "vite": "^8.0.12",
  "@vitejs/plugin-react": "^6.0.1",
  "@tailwindcss/vite": "^4.3.1",
  "eslint": "^10.3.0"
}
```

---

## 📄 Licencia

Demo — Todos los derechos reservados.
