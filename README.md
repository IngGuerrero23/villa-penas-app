# Villa Peñas · Consumo de API REST

Examen práctico de Programación III, Universidad Nacional, Sede Regional Chorotega.
Aplicación web en **React + TypeScript + Vite** que consume la API pública de Villa Peñas.

**Estudiante:** Bryan Guerrero Ugalde
**API:** https://villa-penas-production.up.railway.app (documentación: `/api/docs`)

## Cómo iniciar

1. Requisitos: Node.js 18 o superior.
2. Instalar dependencias: `npm install`
3. Copiar `.env.example` a `.env` (la variable `VITE_API_URL` ya trae la URL de la API).
4. Iniciar: `npm run dev`
5. Abrir http://localhost:5173 (el puerto está fijo porque es el origen autorizado por CORS).

## Endpoints consumidos (solo GET públicos, sin credenciales)

| Endpoint | Uso en la interfaz |
|---|---|
| `GET /public/paquetes` | Catálogo con búsqueda por texto y filtro por precio máximo |
| `GET /public/paquetes/{id}` | Vista detallada del paquete con los servicios que incluye |
| `GET /public/opciones-productos-adicionales` | Extras con imagen, precio y filtro por producto |
| `GET /public/instagram` | Pestaña adicional (ver limitaciones) |

## Estructura

- `src/types`: interfaces TypeScript según las respuestas reales
- `src/services`: capa de consumo (`http.ts` + un servicio por endpoint)
- `src/hooks`: `useFetch` (maneja carga, error y cancelación con AbortController)
- `src/components`: componentes reutilizables (`AsyncState`, tarjetas, vistas)

## Estados manejados

Cargando, sin resultados y error de consulta (componente `AsyncState`).

## Cómo comprobé los resultados

- Probé cada endpoint en Swagger con "Try it out" (capturas en `evidencias/swagger`).
- Verifiqué las solicitudes y respuestas reales en DevTools → Network (`evidencias/network`).
- Probé los tres estados de la interfaz (`evidencias/interfaz`).

## Limitaciones encontradas

- `GET /public/instagram` respondió **502** ("No fue posible obtener las publicaciones de Instagram") durante el examen. Es una falla externa del servidor; se dejó evidencia y se informó a la docente. Por eso el tercer servicio principal es el detalle del paquete.
- Las listas no tienen paginación; el filtrado se hace en el cliente.
- La estructura de las publicaciones de Instagram no pudo confirmarse.