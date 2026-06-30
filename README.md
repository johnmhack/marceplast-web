# Marceplast - Sitio Web (Astro + Tailwind + GSAP)

Sitio informativo para Marceplast (inyectora de plástico), construido con:

- **[Astro](https://astro.build)** → genera HTML estático súper rápido, ideal para sitios informativos.
- **[Tailwind CSS](https://tailwindcss.com)** → estilos con clases utilitarias.
- **[GSAP](https://gsap.com) + ScrollTrigger** → animaciones full (parallax, scroll reveals, transiciones entre secciones).

## 🚀 Primeros pasos

1. Abre la carpeta `marceplast-astro` en VSCode.
2. Instala las dependencias (solo la primera vez):
   ```bash
   npm install
   ```
3. Corre el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre en el navegador la URL que te muestre la terminal (normalmente `http://localhost:4321`).

Cada vez que guardes un archivo, el navegador se actualiza solo (no necesitas Live Server aquí, Astro ya tiene su propio servidor con recarga automática).

## 📁 Estructura del proyecto

```
marceplast-astro/
├── src/
│   ├── layouts/
│   │   └── Layout.astro        -> Header, footer y nav (compartido en todas las páginas)
│   ├── pages/
│   │   ├── index.astro         -> Inicio        (ruta: /)
│   │   ├── nosotros.astro      -> Nosotros      (ruta: /nosotros)
│   │   ├── productos.astro     -> Productos     (ruta: /productos)
│   │   └── contacto.astro      -> Contacto      (ruta: /contacto)
│   ├── components/
│   │   └── ProductCard.astro   -> Tarjeta reutilizable de producto
│   ├── scripts/
│   │   └── animations.js       -> TODAS las animaciones GSAP centralizadas
│   └── styles/
│       └── global.css          -> Directivas de Tailwind
├── public/
│   ├── img/                    -> Imágenes (logo, productos, planta, etc)
│   └── video/                  -> Videos (mp4)
├── tailwind.config.mjs         -> Colores de marca (cambia aquí la paleta)
└── astro.config.mjs
```

> En Astro, todo lo que pongas en `public/` se sirve directo desde la raíz.
> Ejemplo: `public/img/producto-1.jpg` se referencia en el HTML como `/img/producto-1.jpg`.

## 🎨 Cambiar colores de marca

Abre `tailwind.config.mjs` y cambia los valores hex dentro de `colors.primario` y `colors.fondo`.
Luego usa esas clases en cualquier página: `bg-primario`, `text-primario-claro`, `border-primario-oscuro`, etc.

## 🎬 Cómo funcionan las animaciones (GSAP)

Todo está centralizado en `src/scripts/animations.js`. En vez de escribir GSAP en cada página,
usamos **atributos `data-anim`** en el HTML y la función `initAnimations()` los detecta automáticamente:

| Atributo                         | Efecto                                              |
|----------------------------------|------------------------------------------------------|
| `data-anim="hero-title/text/btn"`| Entrada escalonada del hero                         |
| `data-anim="hero-bg"`            | Parallax del fondo del hero al hacer scroll         |
| `data-anim="reveal"`             | Fade-in + subida al entrar en el viewport           |
| `data-anim="stagger-group"`      | Anima los hijos uno por uno (para grids de tarjetas)|
| `data-anim="section-pin"`        | Escala/opacidad suave al entrar la sección          |
| `data-anim="parallax-img"`       | Parallax vertical de una imagen                     |
| `data-anim="text-lines"`         | Las líneas hijas entran una por una                 |

Para agregar una animación nueva en cualquier parte: agrega el atributo correspondiente
al elemento HTML, no necesitas tocar el JS.

## 🖼️ Agregar imágenes y videos reales

1. Copia tus archivos a `public/img/` y `public/video/`.
2. Reemplaza las rutas de ejemplo en las páginas `.astro` (busca `/img/producto-1.jpg`, etc).

## 📩 Formulario de contacto (Netlify Forms)

El formulario en `src/pages/contacto.astro` ya está listo para **Netlify Forms**
(sin backend propio). Al desplegar en Netlify, los mensajes aparecerán en:
tu sitio → pestaña **"Forms"**.

> Nota: Netlify detecta el formulario analizando el HTML ya construido (`npm run build`),
> por eso es importante que el atributo `data-netlify="true"` y el input oculto
> `form-name` estén tal cual, sin que JavaScript los modifique dinámicamente.

## 🌐 Cómo publicar en Netlify

1. Genera la build de producción:
   ```bash
   npm run build
   ```
   Esto crea la carpeta `dist/` con el sitio ya compilado (HTML/CSS/JS optimizado).

2. En [Netlify](https://app.netlify.com):
   - **Deploy manual:** arrastra la carpeta `dist/` en "Deploy manually".
   - **Con Git (recomendado):** sube el proyecto a GitHub y conecta el repo en Netlify.
     - Build command: `npm run build`
     - Publish directory: `dist`

3. **Conectar tu dominio de Namecheap:**
   - En Netlify → tu sitio → "Domain settings" → "Add a domain" → escribe tu dominio.
   - Copia los registros DNS que te indique Netlify.
   - En Namecheap → tu dominio → "Advanced DNS" → agrega esos registros.
   - Espera la propagación del DNS (minutos u horas).

## ✅ Pendientes para ti

- [ ] Reemplazar textos de ejemplo con información real de la empresa
- [ ] Agregar logo real (actualmente es texto "Marceplast" en el header)
- [ ] Subir imágenes y videos reales a `public/img/` y `public/video/`
- [ ] Definir colores finales en `tailwind.config.mjs`
- [ ] Actualizar teléfono, email y dirección (footer y página de contacto)
- [ ] Revisar intensidad de animaciones GSAP y ajustar si alguna se siente muy fuerte
