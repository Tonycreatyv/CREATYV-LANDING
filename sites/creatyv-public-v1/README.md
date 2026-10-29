# CREATYV Public Landing V1 — baseline

Exportación directa de la landing aprobada en ChatGPT Sites. Origen visual: https://creatyv-atelier-jd.tony1791.chatgpt.site . No se reconstruyó desde imágenes ni se convirtió a otro framework.

## Alcance y posición

CREATYV es infraestructura comercial. La conversación es la entrada; el valor es la siguiente acción, el resultado y la continuidad. Esta carpeta conserva la landing pública, sus demostraciones y el wizard comercial. No contiene el Tenant Workspace conectado a producción ni onboarding posterior al signup.

## Fuente real

`public/` es el código editable original del Site: HTML escrito directamente, CSS y JavaScript sin transpilar. Aunque el origen lo almacenaba en `dist/`, no existe una fuente React/Vite anterior oculta ni una etapa de compilación que deba recuperarse. Se preservan los 21 archivos originales, incluyendo ocho assets, byte por byte. `source-sha256.json` permite comprobarlo.

La aplicación React previa del repositorio permanece intacta. Trabajar desde esta subcarpeta, no desde el `package.json` de la raíz.

## Ejecutar y verificar

Requisitos: Node.js para los comandos de verificación/copia; Python 3 para el servidor local. Sin dependencias npm ni instalación obligatoria.

Desde `sites/creatyv-public-v1/`:

- `npm run verify`: valida los hashes de la baseline, recursos locales y patrones de secretos.
- `npm run build`: verifica y copia el sitio sin transformaciones a `build/`.
- `npm run dev`: sirve la fuente en http://localhost:4173 mediante `python3 -m http.server 4173 --directory public`.

El contenido de `build/` es publicable por un hosting estático; no se ha configurado ni ejecutado un deploy externo. Las fuentes DM Sans y Manrope se solicitan a Google Fonts desde el HTML original: requieren red y pueden producir el cambio inicial de métricas habitual mientras cargan. No se sustituyeron ni se añadieron fuentes alternativas.

## Estructura

- `public/index.html`: secciones, copy, navegación, hero y estructura del diálogo.
- `public/app.js`: navegación, parallax, revelados y movimiento del hero.
- `public/films.js`: guiones y resultados de las siete demostraciones.
- `public/automatic.js`: reproducción de conversaciones y propuesta comercial.
- `public/operation.js`: dashboard demostrativo, agenda, eventos y navegación.
- `public/refinement.js`: ticker público y adaptador de eventos.
- CSS: se conserva el orden de carga existente; `corrections.css` contiene los ajustes responsive finales.
- `public/assets/`: escultura, propiedad, tour, joyería y recursos oficiales Meta/WhatsApp.
- `QA.md`: alcance y límites de validación.

## Responsive y movimiento

El hero desktop se conserva. En móvil las reglas finales separan texto y encuadre; el ticker sale con la página y la única navegación conserva su estado compacto. Hay breakpoints existentes en 380, 430, 700, 900, 1000, 1180 y 1250 px, entre otros: no consolidarlos sin comparar visualmente. El teléfono mantiene su estructura al cambiar de pestaña; solo cambia su contenido. Las animaciones respetan `prefers-reduced-motion` mediante ramas JavaScript y CSS.

## Qué es una demostración

Las conversaciones, agenda, clientes, métricas, ventas y eventos operativos son locales y de ejemplo. No hay conexión real a WhatsApp, Meta, Core, CRM o calendarios. La primera conversación se reproduce al entrar en pantalla; cada selector reinicia solo su historia y se detiene al terminar. Los eventos del dashboard se reemplazan en un contenedor único y pueden pausarse.

Los cuatro mensajes públicos del ticker están identificados como EJEMPLO. `CREATYVActivity.setSource(adapter)` permite incorporar después tipos de eventos verificados; no debe interpolar información privada.

## Propuesta y onboarding

Los CTA Solicitar propuesta y Empezar abren el mismo wizard. Se muestran negocio, trabajo requerido, canal y alcance antes del contacto. El cuarto paso contiene resumen y datos. El envío actual construye un `mailto:contact@creatyv.io`: el visitante revisa y envía desde su correo. No hay envío de servidor, persistencia, creación de perfil ni signup real. No confundir esta UI con onboarding operativo de un tenant.

## Congelación y protección del alcance

No rediseñar casualmente el hero, el encuadre móvil, los siete relatos, el dashboard, CREATYV Core, la separación de Meta/WhatsApp, el ticker ni el wizard. No agregar módulos, testimonios, precios, verticales, FAQ o arquitectura pública. Cualquier edición intencional de fuente debe actualizar el manifiesto y repetir QA.

## Seguridad y producción

Se excluyen Git del proveedor, credenciales, tokens, `.openai/hosting.json`, IDs de plataforma y material de sesión. Solo se conservan datos públicos de la landing y personas de ejemplo. La identidad/acceso que pueda aplicar ChatGPT Sites no se exporta como autenticación de la aplicación.

No se modificaron `main`, la configuración Netlify de raíz ni DNS. No hacer merge ni apuntar creatyv.io a esta carpeta sin autorización. Antes del despliegue real: elegir configuración de publicación estática aislada, validar preview externo, decidir si el correo comercial debe seguir siendo mailto y revisar las rutas legales existentes del sitio anterior. No se certifica un backend ni cumplimiento legal por esta exportación.
