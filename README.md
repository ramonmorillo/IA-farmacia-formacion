# IA aplicada a la farmacia hospitalaria

Curso creado y dirigido por **Ramón Morillo Verdugo**, farmacéutico hospitalario, investigador y profesor universitario, para la formación de profesionales farmacéuticos en el uso crítico, seguro y aplicado de la inteligencia artificial.

Desarrollo y actualización técnica asistidos mediante herramientas de inteligencia artificial, bajo dirección y revisión del autor.

## Versión y fechas

- Creación original verificada: enero de 2026 (primer commit del repositorio: 2026-01-25).
- Versión pública previa verificada: 2.0, marzo de 2026.
- Rediseño integral: julio de 2026.
- Última actualización: 2026-09-11.
- Versión actual: 5.2.0.

## Público destinatario

Farmacéuticos hospitalarios, docentes, investigadores, responsables de innovación y otros profesionales sanitarios. La estructura permite ampliar rutas a farmacia comunitaria, atención primaria y estudiantes.

## Arquitectura

Web estática compatible con GitHub Pages, sin backend, sin cuentas y sin dependencias obligatorias. Los cursos y sesiones docentes están en `data/teaching-programs.js`; la biblioteca técnica se mantiene en `data/course-data.js`; la experiencia del aula está en `js/teaching.js` y la navegación general en `js/app.js`.

## Propuesta profesional y estructura formativa

- Portada orientada al uso docente inmediato, con acceso a cursos, aula, herramientas y casos.
- Tres cursos principales: IA práctica y segura; investigación, docencia y comunicación científica; y creación de herramientas.
- Consultoría estructurada desde diagnóstico y priorización hasta evaluación, gobernanza e implantación.
- Configurador local de propuestas para recomendar programa, alcance y preparar una solicitud estructurada sin almacenar datos.
- Aula docente con 14 sesiones listas para impartir: apertura, objetivos, ideas clave, demostración, ejemplo farmacéutico, actividad y evidencia.
- Ficha de trabajo descargable y casos prácticos relacionados en cada sesión.
- Primera formación insignia lista para impartir: formatos, preparación, agenda presencial, proyecto final, transferencia y cuaderno completo del participante.
- Programas transparentes con punto de partida, resultado esperado y productos concretos.
- Laboratorio con acceso prioritario a las aplicaciones publicadas, no al código fuente.
- Biblioteca técnica secundaria con 35 módulos para ampliar GitHub, Codex, Claude, NotebookLM y Claude Code.

- Nivel inicial: fundamentos, herramientas, privacidad, prompting y verificación.
- Nivel intermedio: investigación profunda, PDF, evidencia, escritura, datos, hojas de cálculo, multimodalidad y flujos.
- Nivel avanzado: agentes, herramientas conectadas, skills/MCP, desarrollo asistido, GitHub, Codex, Claude Code, evaluación y gobernanza.
- Ruta de farmacia hospitalaria: consultas externas, atención farmacéutica, información de medicamentos, investigación, docencia, gestión, calidad, seguridad, farmacovigilancia, automatización y evaluación de aplicaciones IA.
- 32 casos prácticos ficticios con escenario y tarea pública. Las soluciones, errores deliberados, procesos de verificación y rúbricas se mantienen en un kit docente privado.

## Separación entre contenido público y material docente

La versión pública actual contiene los módulos, actividades, casos y recursos destinados a participantes. Las soluciones, claves de respuesta, rúbricas, notas de facilitación y presentaciones docentes no deben almacenarse ni ocultarse mediante JavaScript en GitHub Pages: se conservan fuera de la rama pública y son de uso exclusivo del autor.

Contacto profesional: [ralejandro.morillo.sspa@juntadeandalucia.es](mailto:ralejandro.morillo.sspa@juntadeandalucia.es).

## Ejecución local

```bash
python3 -m http.server 8765
```

Abra `http://127.0.0.1:8765/`.

## Validación de contenidos

```bash
npm run validate-content
```

El script falla si detecta módulos o casos sin campos esenciales, feedback incompleto, rutas rotas, texto provisional o material docente reservado dentro de los datos públicos.

## Despliegue

GitHub Pages puede servir directamente la rama configurada, sin proceso de compilación. Las rutas son relativas y compatibles con `/IA-farmacia-formacion/`. Si se utiliza GitHub Actions, debe publicar exactamente el commit revisado y no una carpeta generada distinta.

## Licencia, limitaciones y autoría

Autoría principal: **Ramón Morillo Verdugo**. Licencia de uso: CC BY-NC-SA 4.0 salvo indicación distinta. El contenido es formativo y no sustituye juicio profesional, política institucional, asesoramiento jurídico, validación clínica ni fuentes oficiales actualizadas.
