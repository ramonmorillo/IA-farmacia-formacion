# Matriz de pruebas funcionales

Fecha: 2026-07-14.

| Área | Prueba | Resultado |
|---|---|---|
| Contenidos | Todos los módulos tienen metadatos, secciones, actividades, evaluación, docente y diapositivas | Superado por `node scripts/validate-content.js` |
| Contenidos | Todos los casos tienen escenario, tarea, salida simulada, error deliberado, verificación, resolución y rúbrica | Superado |
| Navegación | Inicio, catálogo, módulo, casos, caso, presentación, docente, acerca, historial, recursos | Superado por revisión de router hash |
| Navegación | Anterior, siguiente, volver al catálogo, marcar completado, reiniciar y descargar informe | Superado en implementación |
| Presentación | Botones anterior/siguiente, teclado, contador, reinicio, pantalla completa y salida | Superado en implementación |
| Modo docente | Guías por módulo, respuestas ocultas, notas locales, pregunta aleatoria, temporizador, imprimir, descargar guía | Superado en implementación |
| Identidad | Autoría en inicio, pie, acerca, guía descargable, informe, metadatos y README | Superado |
| Producción | Base path relativo compatible con `/IA-farmacia-formacion/` | Superado por rutas relativas |
| Producción | URL pública | Verificada con navegador externo: seguía mostrando versión 2.0 antes del despliegue de este commit |

## Comandos ejecutados

- `node -c data/course-data.js`
- `node -c js/app.js`
- `node scripts/validate-content.js`
- `python3 -m http.server 8765` con comprobación HTML local mediante navegador/servidor cuando esté disponible.
