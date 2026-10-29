# CREATYV Public Landing V1 — control de fidelidad

## Verificación mecánica

21 archivos públicos, incluyendo ocho assets, se copiaron directamente desde el código del Site. `source-sha256.json` contiene SHA-256 de cada archivo. El build es una copia verificada: no modifica HTML, CSS, JS ni imágenes. Se conservaron el orden de estilos y las URLs relativas. No se exportó solo una captura ni un bundle generado a partir de una supuesta fuente distinta.

## Revisión

- Hero desktop: fuente y asset originales, sin cambio de composición.
- Hero móvil: misma fuente responsive del Site; revisión visual y de desbordamiento en preview.
- Ticker: un elemento, cuatro estados de ejemplo, contenedor no sticky; las duraciones de 3600/350 ms se conservan.
- Header: una instancia; el ticker deja el viewport y la navegación queda arriba.
- Demos: cuatro historias principales y tres de cambios; no hay input en sus secciones, solo selección/repetición opcional.
- Dashboard: Hoy por defecto, cinco destinos funcionales, agenda con selector de día y eventos locales.
- Propuesta: el mismo diálogo desde ambos CTA; cuatro pasos conceptuales y resumen antes de datos.
- Core/Meta/footer: recursos locales y jerarquía originales, sin sustituciones.
- Movimiento reducido: preservadas las condiciones y reglas del código original; no se certificó un cambio de preferencia del sistema operativo desde este entorno.

## Límites reales

El build se valida localmente, no como despliegue Netlify ni como backend Core. La disponibilidad inicial de Google Fonts afecta el momento de carga de las tipografías del mismo modo que en el Site original. No se conserva el envoltorio de autenticación/alojamiento de ChatGPT Sites ni su configuración interna: no forma parte del contenido público exportado. No hay cambio visual intencional entre origen y exportación.

El wizard comercial prepara un correo; no envía desde servidor. Los perfiles, mensajes, agenda y métricas son demostrativos. La funcionalidad real posterior a signup y las conexiones de producción siguen pendientes.
