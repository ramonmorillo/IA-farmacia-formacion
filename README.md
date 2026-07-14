# IA aplicada a la farmacia hospitalaria

Curso creado y dirigido por **Ramón Morillo Verdugo**, farmacéutico hospitalario, investigador y profesor universitario, para la formación de profesionales farmacéuticos en el uso crítico, seguro y aplicado de la inteligencia artificial.

Desarrollo y actualización técnica asistidos mediante herramientas de inteligencia artificial, bajo dirección y revisión del autor.

## Versión y fechas

- Creación original verificada: enero de 2026 (primer commit del repositorio: 2026-01-25).
- Versión pública previa verificada: 2.0, marzo de 2026.
- Rediseño integral: julio de 2026.
- Última actualización: 2026-07-14.
- Versión actual: 3.1.0.

## Público destinatario

Farmacéuticos hospitalarios, docentes, investigadores, responsables de innovación y otros profesionales sanitarios. La estructura permite ampliar rutas a farmacia comunitaria, atención primaria y estudiantes.

## Arquitectura

Web estática compatible con GitHub Pages, sin backend, sin cuentas y sin dependencias obligatorias. Los contenidos principales están centralizados en `data/course-data.js`; la lógica de navegación, progreso, presentación, modo docente e informe está en `js/app.js`; los estilos están en `css/`.

## Estructura formativa

- Nivel inicial: fundamentos, herramientas, privacidad, prompting y verificación.
- Nivel intermedio: investigación profunda, PDF, evidencia, escritura, datos, hojas de cálculo, multimodalidad y flujos.
- Nivel avanzado: agentes, herramientas conectadas, skills/MCP, desarrollo asistido, GitHub, Codex, Claude Code, evaluación y gobernanza.
- Ruta de farmacia hospitalaria: consultas externas, atención farmacéutica, información de medicamentos, investigación, docencia, gestión, calidad, seguridad, farmacovigilancia, automatización y evaluación de aplicaciones IA.
- 32 casos prácticos ficticios con errores deliberados, feedback, verificación y rúbrica.

## Ejecución local

```bash
python3 -m http.server 8765
```

Abra `http://127.0.0.1:8765/`.

## Validación de contenidos

```bash
npm run validate-content
```

El script falla si detecta módulos o casos sin campos esenciales, feedback incompleto, rutas rotas o texto provisional.

## Despliegue

GitHub Pages puede servir directamente la rama configurada, sin proceso de compilación. Las rutas son relativas y compatibles con `/IA-farmacia-formacion/`. Si se utiliza GitHub Actions, debe publicar exactamente el commit revisado y no una carpeta generada distinta.

## Licencia, limitaciones y autoría

Autoría principal: **Ramón Morillo Verdugo**. Licencia de uso: CC BY-NC-SA 4.0 salvo indicación distinta. El contenido es formativo y no sustituye juicio profesional, política institucional, asesoramiento jurídico, validación clínica ni fuentes oficiales actualizadas.
