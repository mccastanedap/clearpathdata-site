# Clearpath — Sitio web público

Sitio web público de **Clearpath**, un producto de analítica que convierte CSVs de ventas en insights de negocio accionables mediante inteligencia artificial. Este repositorio contiene el frontend de marketing y presentación: la landing page, el formulario de contacto y las pantallas de autenticación de acceso al producto.

El sitio está construido con Next.js y desplegado en Vercel.

## Arquitectura del proyecto

Clearpath se organiza en **dos repositorios independientes**, separados por responsabilidades:

| Repositorio | Responsabilidad | Enlace |
|-------------|-----------------|--------|
| **clearpath-site** (este repo) | Sitio web público: presentación, marketing, captación de leads y autenticación de usuarios. | [github.com/mccastanedap/clearpath-site](https://github.com/mccastanedap/clearpath-site) |
| **clearpath** | Pipeline de datos: el sistema serverless que ingiere los CSVs, los transforma y genera los insights con IA. | [github.com/mccastanedap/clearpath](https://github.com/mccastanedap/clearpath) |

Esta separación mantiene desacoplada la capa de **presentación** (este repositorio) del **sistema de datos** que la alimenta. El repositorio del pipeline implementa la lógica de negocio sobre una arquitectura serverless basada en **AWS Lambda**, **dbt** para la transformación de datos, la **API de Claude** para la generación de insights con IA y **Supabase** como capa de datos y autenticación.

> El procesamiento de datos, los modelos de transformación y la generación de insights viven en el repositorio del pipeline: **https://github.com/mccastanedap/clearpath**

## Stack técnico

- **[Next.js 16](https://nextjs.org/)** (App Router) — framework de React para producción.
- **[React 19](https://react.dev/)** con el React Compiler habilitado.
- **[TypeScript](https://www.typescriptlang.org/)** — tipado estático en todo el proyecto.
- **[Tailwind CSS 4](https://tailwindcss.com/)** — estilos utilitarios.
- **[Framer Motion](https://www.framer.com/motion/)** — animaciones e interacciones.
- **[Supabase](https://supabase.com/)** — autenticación y acceso a datos (`@supabase/supabase-js`).
- **[SendGrid](https://sendgrid.com/)** — envío de correos del formulario de contacto (`@sendgrid/mail`).
- **[Vercel](https://vercel.com/)** — hosting y despliegue continuo.

## Desarrollo local

Requisitos previos: [Node.js](https://nodejs.org/) 20 o superior y npm.

1. Clona el repositorio e instala las dependencias:

   ```bash
   npm install
   ```

2. Crea un archivo `.env.local` en la raíz con las variables de entorno necesarias:

   ```bash
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...

   # SendGrid (formulario de contacto)
   SENDGRID_API_KEY=...
   ```

3. Levanta el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   El sitio quedará disponible en [http://localhost:3000](http://localhost:3000).

### Otros comandos

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera la build de producción. |
| `npm run start` | Sirve la build de producción localmente. |
| `npm run lint` | Ejecuta ESLint. |

## Despliegue

El sitio se despliega automáticamente en **Vercel** a partir de la rama `main`. Cada push genera un despliegue, y las pull requests obtienen un preview deploy.
