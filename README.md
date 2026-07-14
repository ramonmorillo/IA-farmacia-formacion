# IA aplicada a la farmacia hospitalaria

Entorno formativo estático para capacitar a farmacéuticos hospitalarios en diseño, supervisión, verificación y gobernanza de flujos de trabajo profesionales aumentados por IA.

## Público

Farmacéuticos hospitalarios, docentes, investigadores, responsables de innovación y otros profesionales sanitarios. La estructura permite ampliar rutas a farmacia comunitaria, atención primaria y estudiantes.

## Arquitectura

Web estática compatible con GitHub Pages, sin backend, sin cuentas y sin dependencias obligatorias. Los datos están en `data/course-data.js`, la lógica en `js/app.js`, los estilos en `css/` y las plantillas descargables en `descargas/plantillas/`.

## Estructura formativa

- Nivel 1: alfabetización y uso seguro.
- Nivel 2: productividad profesional aumentada.
- Nivel 3: agentes, desarrollo y gobernanza.
- Ruta prioritaria: inteligencia artificial aplicada a la farmacia hospitalaria.

## Ejecución local

```bash
python3 -m http.server 8765
```

Abra `http://127.0.0.1:8765/`.

## Despliegue

GitHub Pages puede servir directamente la rama configurada, sin proceso de compilación.

## Actualización de módulos

Edite `data/course-data.js`, mantenga `reviewed`, objetivos, secciones, evaluaciones y referencias. Añada páginas puente si cambia una URL pública.

## Evaluaciones y progreso

El progreso, favoritos y preferencias se guardan en `localStorage`. No se envían datos a ningún servidor. El informe descargable no constituye acreditación oficial salvo configuración expresa.

## Licencia, limitaciones y autoría

Mantiene la autoría indicada por el proyecto original. El contenido es formativo y no sustituye juicio profesional, política institucional, asesoramiento jurídico, validación clínica ni fuentes oficiales actualizadas.
