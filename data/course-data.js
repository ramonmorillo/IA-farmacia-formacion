window.COURSE_DATA = {
  "meta": {
    "title": "IA aplicada a la farmacia hospitalaria",
    "version": "4.0.0",
    "createdAt": "2026-01-25",
    "updatedAt": "2026-07-14",
    "reviewed": "2026-07-14",
    "author": "Ramón Morillo Verdugo",
    "authorFull": "Ramón Morillo Verdugo, farmacéutico hospitalario, investigador y profesor universitario",
    "tagline": "Curso creado y dirigido por Ramón Morillo Verdugo."
  },
  "levels": [
    {
      "id": "nivel-0",
      "title": "Nivel 0. Descubrimiento",
      "difficulty": "Inicial absoluto",
      "hours": 4,
      "profile": "Sin experiencia previa en IA, GitHub ni programación.",
      "objective": "Utilizar IA de forma crítica, segura y verificable.",
      "competencies": [
        "Comprender modelos de lenguaje",
        "Distinguir chatbot, buscador, agente y herramienta",
        "Formular peticiones claras",
        "Verificar fuentes",
        "Proteger datos sensibles",
        "Reconocer cuándo no usar IA"
      ],
      "finalProduct": "Consulta profesional bien formulada, respuesta verificada y registro de uso."
    },
    {
      "id": "nivel-1",
      "title": "Nivel 1. Usuario profesional",
      "difficulty": "Básico profesional",
      "hours": 8,
      "profile": "Usa herramientas conversacionales y quiere flujos reproducibles.",
      "objective": "Diseñar flujos de trabajo documentados.",
      "competencies": [
        "Contextualizar tareas",
        "Aportar fuentes",
        "Comparar respuestas",
        "Analizar PDF",
        "Crear plantillas",
        "Aplicar rúbricas"
      ],
      "finalProduct": "Flujo farmacéutico documentado, plantilla y evaluación crítica."
    },
    {
      "id": "nivel-2",
      "title": "Nivel 2. Creador asistido",
      "difficulty": "Creador",
      "hours": 12,
      "profile": "Quiere crear páginas, calculadoras o prototipos con ayuda de agentes.",
      "objective": "Transformar necesidades profesionales en prototipos funcionales.",
      "competencies": [
        "Definir requisitos",
        "Crear repositorios",
        "Comprender HTML CSS JS",
        "Usar GitHub Pages",
        "Revisar diffs",
        "Probar aplicaciones"
      ],
      "finalProduct": "Aplicación web estática sencilla con README, pruebas y despliegue."
    },
    {
      "id": "nivel-3",
      "title": "Nivel 3. Desarrollador supervisor",
      "difficulty": "Avanzado",
      "hours": 16,
      "profile": "Ya crea herramientas y necesita control de calidad.",
      "objective": "Supervisar desarrollo asistido por IA sin dependencia ciega.",
      "competencies": [
        "Ramas y PR",
        "Instrucciones persistentes",
        "Separar datos lógica presentación",
        "Validadores",
        "Pruebas",
        "Auditoría de privacidad"
      ],
      "finalProduct": "Mejora real con PR, pruebas e informe de riesgos."
    },
    {
      "id": "nivel-4",
      "title": "Nivel 4. Arquitecto y gobernanza",
      "difficulty": "Experto",
      "hours": 20,
      "profile": "Responsable de innovación, investigación, calidad o estrategia.",
      "objective": "Diseñar ecosistemas sostenibles, evaluables y gobernados.",
      "competencies": [
        "Arquitectura modular",
        "Agentes y subagentes",
        "MCP y conectores",
        "Evaluaciones sistemáticas",
        "Validación técnica y clínica",
        "Gobernanza institucional"
      ],
      "finalProduct": "Plan completo, matriz de riesgos, validación, gobernanza y mantenimiento."
    }
  ],
  "modules": [
    {
      "id": "gh-0",
      "title": "GH-0. Comprender GitHub",
      "pathway": "github",
      "route": "github",
      "level": 0,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 60,
      "minutes": 60,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Ninguno"
      ],
      "competencies": [
        "Aplicar repositorio",
        "Aplicar commit",
        "Aplicar rama",
        "Aplicar pull request"
      ],
      "concepts": [
        "repositorio",
        "commit",
        "rama",
        "pull request",
        "GitHub Pages",
        "seguridad"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte gh-0. comprender github en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio IA-farmacia-formacion como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 0,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 0,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "IA-farmacia-formacion",
          "url": "https://github.com/ramonmorillo/IA-farmacia-formacion"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 0",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "repositorio",
          "commit",
          "rama",
          "pull request",
          "GitHub Pages",
          "seguridad"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "GH-0. Comprender GitHub",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "repositorio",
            "commit",
            "rama"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": null,
      "nextModule": "gh-1"
    },
    {
      "id": "gh-1",
      "title": "GH-1. Crear un primer repositorio",
      "pathway": "github",
      "route": "github",
      "level": 1,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 75,
      "minutes": 75,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar repositorio",
        "Aplicar commit",
        "Aplicar rama",
        "Aplicar pull request"
      ],
      "concepts": [
        "repositorio",
        "commit",
        "rama",
        "pull request",
        "GitHub Pages",
        "seguridad"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte gh-1. crear un primer repositorio en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio IA-farmacia-formacion como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 1,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 1,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "IA-farmacia-formacion",
          "url": "https://github.com/ramonmorillo/IA-farmacia-formacion"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 1",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "repositorio",
          "commit",
          "rama",
          "pull request",
          "GitHub Pages",
          "seguridad"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "GH-1. Crear un primer repositorio",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "repositorio",
            "commit",
            "rama"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "gh-0",
      "nextModule": "gh-2"
    },
    {
      "id": "gh-2",
      "title": "GH-2. Trabajar de forma segura",
      "pathway": "github",
      "route": "github",
      "level": 2,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 90,
      "minutes": 90,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar repositorio",
        "Aplicar commit",
        "Aplicar rama",
        "Aplicar pull request"
      ],
      "concepts": [
        "repositorio",
        "commit",
        "rama",
        "pull request",
        "GitHub Pages",
        "seguridad"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte gh-2. trabajar de forma segura en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio IA-farmacia-formacion como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 2,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 2,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "IA-farmacia-formacion",
          "url": "https://github.com/ramonmorillo/IA-farmacia-formacion"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 2",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "repositorio",
          "commit",
          "rama",
          "pull request",
          "GitHub Pages",
          "seguridad"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "GH-2. Trabajar de forma segura",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "repositorio",
            "commit",
            "rama"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "gh-1",
      "nextModule": "gh-3"
    },
    {
      "id": "gh-3",
      "title": "GH-3. GitHub Pages y aplicaciones estáticas",
      "pathway": "github",
      "route": "github",
      "level": 3,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 105,
      "minutes": 105,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar repositorio",
        "Aplicar commit",
        "Aplicar rama",
        "Aplicar pull request"
      ],
      "concepts": [
        "repositorio",
        "commit",
        "rama",
        "pull request",
        "GitHub Pages",
        "seguridad"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte gh-3. github pages y aplicaciones estáticas en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio IA-farmacia-formacion como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 3,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 3,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "IA-farmacia-formacion",
          "url": "https://github.com/ramonmorillo/IA-farmacia-formacion"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 3",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "repositorio",
          "commit",
          "rama",
          "pull request",
          "GitHub Pages",
          "seguridad"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "GH-3. GitHub Pages y aplicaciones estáticas",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "repositorio",
            "commit",
            "rama"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "gh-2",
      "nextModule": "gh-4"
    },
    {
      "id": "gh-4",
      "title": "GH-4. GitHub para proyectos sanitarios",
      "pathway": "github",
      "route": "github",
      "level": 4,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 120,
      "minutes": 120,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar repositorio",
        "Aplicar commit",
        "Aplicar rama",
        "Aplicar pull request"
      ],
      "concepts": [
        "repositorio",
        "commit",
        "rama",
        "pull request",
        "GitHub Pages",
        "seguridad"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte gh-4. github para proyectos sanitarios en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio hiv-prescribing-cascade-auditor como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 4,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 4,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "hiv-prescribing-cascade-auditor",
          "url": "https://github.com/ramonmorillo/hiv-prescribing-cascade-auditor"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 4",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "repositorio",
          "commit",
          "rama",
          "pull request",
          "GitHub Pages",
          "seguridad"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "GH-4. GitHub para proyectos sanitarios",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "repositorio",
            "commit",
            "rama"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "gh-3",
      "nextModule": "gh-5"
    },
    {
      "id": "gh-5",
      "title": "GH-5. GitHub avanzado",
      "pathway": "github",
      "route": "github",
      "level": 4,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 120,
      "minutes": 120,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar repositorio",
        "Aplicar commit",
        "Aplicar rama",
        "Aplicar pull request"
      ],
      "concepts": [
        "repositorio",
        "commit",
        "rama",
        "pull request",
        "GitHub Pages",
        "seguridad"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte gh-5. github avanzado en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio IA-farmacia-formacion como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 4,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 4,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "IA-farmacia-formacion",
          "url": "https://github.com/ramonmorillo/IA-farmacia-formacion"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 4",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "repositorio",
          "commit",
          "rama",
          "pull request",
          "GitHub Pages",
          "seguridad"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "GH-5. GitHub avanzado",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "repositorio",
            "commit",
            "rama"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "gh-4",
      "nextModule": "cx-0"
    },
    {
      "id": "cx-0",
      "title": "CX-0. Primer contacto",
      "pathway": "codex",
      "route": "codex",
      "level": 0,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 60,
      "minutes": 60,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Ninguno"
      ],
      "competencies": [
        "Aplicar especificación",
        "Aplicar diff",
        "Aplicar pruebas",
        "Aplicar regresión"
      ],
      "concepts": [
        "especificación",
        "diff",
        "pruebas",
        "regresión",
        "documentación"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte cx-0. primer contacto en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio IA-farmacia-formacion como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 0,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 0,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "IA-farmacia-formacion",
          "url": "https://github.com/ramonmorillo/IA-farmacia-formacion"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 0",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "especificación",
          "diff",
          "pruebas",
          "regresión",
          "documentación"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "CX-0. Primer contacto",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "especificación",
            "diff",
            "pruebas"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "gh-5",
      "nextModule": "cx-1"
    },
    {
      "id": "cx-1",
      "title": "CX-1. Especificar antes de construir",
      "pathway": "codex",
      "route": "codex",
      "level": 1,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 75,
      "minutes": 75,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar especificación",
        "Aplicar diff",
        "Aplicar pruebas",
        "Aplicar regresión"
      ],
      "concepts": [
        "especificación",
        "diff",
        "pruebas",
        "regresión",
        "documentación"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte cx-1. especificar antes de construir en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio IA-farmacia-formacion como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 1,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 1,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "IA-farmacia-formacion",
          "url": "https://github.com/ramonmorillo/IA-farmacia-formacion"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 1",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "especificación",
          "diff",
          "pruebas",
          "regresión",
          "documentación"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "CX-1. Especificar antes de construir",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "especificación",
            "diff",
            "pruebas"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "cx-0",
      "nextModule": "cx-2"
    },
    {
      "id": "cx-2",
      "title": "CX-2. Crear una herramienta básica",
      "pathway": "codex",
      "route": "codex",
      "level": 2,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 90,
      "minutes": 90,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar especificación",
        "Aplicar diff",
        "Aplicar pruebas",
        "Aplicar regresión"
      ],
      "concepts": [
        "especificación",
        "diff",
        "pruebas",
        "regresión",
        "documentación"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte cx-2. crear una herramienta básica en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio IA-farmacia-formacion como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 2,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 2,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "IA-farmacia-formacion",
          "url": "https://github.com/ramonmorillo/IA-farmacia-formacion"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 2",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "especificación",
          "diff",
          "pruebas",
          "regresión",
          "documentación"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "CX-2. Crear una herramienta básica",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "especificación",
            "diff",
            "pruebas"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "cx-1",
      "nextModule": "cx-3"
    },
    {
      "id": "cx-3",
      "title": "CX-3. Modificar sin romper",
      "pathway": "codex",
      "route": "codex",
      "level": 3,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 105,
      "minutes": 105,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar especificación",
        "Aplicar diff",
        "Aplicar pruebas",
        "Aplicar regresión"
      ],
      "concepts": [
        "especificación",
        "diff",
        "pruebas",
        "regresión",
        "documentación"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte cx-3. modificar sin romper en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio cambiosTAR como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 3,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 3,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "cambiosTAR",
          "url": "https://github.com/ramonmorillo/cambiosTAR"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 3",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "especificación",
          "diff",
          "pruebas",
          "regresión",
          "documentación"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "CX-3. Modificar sin romper",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "especificación",
            "diff",
            "pruebas"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "cx-2",
      "nextModule": "cx-4"
    },
    {
      "id": "cx-4",
      "title": "CX-4. Depuración sistemática",
      "pathway": "codex",
      "route": "codex",
      "level": 4,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 120,
      "minutes": 120,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar especificación",
        "Aplicar diff",
        "Aplicar pruebas",
        "Aplicar regresión"
      ],
      "concepts": [
        "especificación",
        "diff",
        "pruebas",
        "regresión",
        "documentación"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte cx-4. depuración sistemática en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio IA-farmacia-formacion como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 4,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 4,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "IA-farmacia-formacion",
          "url": "https://github.com/ramonmorillo/IA-farmacia-formacion"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 4",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "especificación",
          "diff",
          "pruebas",
          "regresión",
          "documentación"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "CX-4. Depuración sistemática",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "especificación",
            "diff",
            "pruebas"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "cx-3",
      "nextModule": "cx-5"
    },
    {
      "id": "cx-5",
      "title": "CX-5. Auditoría de código generado",
      "pathway": "codex",
      "route": "codex",
      "level": 4,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 120,
      "minutes": 120,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar especificación",
        "Aplicar diff",
        "Aplicar pruebas",
        "Aplicar regresión"
      ],
      "concepts": [
        "especificación",
        "diff",
        "pruebas",
        "regresión",
        "documentación"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte cx-5. auditoría de código generado en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio IA-farmacia-formacion como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 4,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 4,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "IA-farmacia-formacion",
          "url": "https://github.com/ramonmorillo/IA-farmacia-formacion"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 4",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "especificación",
          "diff",
          "pruebas",
          "regresión",
          "documentación"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "CX-5. Auditoría de código generado",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "especificación",
            "diff",
            "pruebas"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "cx-4",
      "nextModule": "cx-6"
    },
    {
      "id": "cx-6",
      "title": "CX-6. Codex como agente de calidad",
      "pathway": "codex",
      "route": "codex",
      "level": 4,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 120,
      "minutes": 120,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar especificación",
        "Aplicar diff",
        "Aplicar pruebas",
        "Aplicar regresión"
      ],
      "concepts": [
        "especificación",
        "diff",
        "pruebas",
        "regresión",
        "documentación"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte cx-6. codex como agente de calidad en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio IA-farmacia-formacion como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 4,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 4,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "IA-farmacia-formacion",
          "url": "https://github.com/ramonmorillo/IA-farmacia-formacion"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 4",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "especificación",
          "diff",
          "pruebas",
          "regresión",
          "documentación"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "CX-6. Codex como agente de calidad",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "especificación",
            "diff",
            "pruebas"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "cx-5",
      "nextModule": "cl-0"
    },
    {
      "id": "cl-0",
      "title": "CL-0. Uso conversacional responsable",
      "pathway": "claude",
      "route": "claude",
      "level": 0,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 60,
      "minutes": 60,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Ninguno"
      ],
      "competencies": [
        "Aplicar documentos",
        "Aplicar investigación",
        "Aplicar rúbricas",
        "Aplicar verificación"
      ],
      "concepts": [
        "documentos",
        "investigación",
        "rúbricas",
        "verificación",
        "privacidad"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte cl-0. uso conversacional responsable en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio ayudainvestigacion como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 0,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 0,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "ayudainvestigacion",
          "url": "https://github.com/ramonmorillo/ayudainvestigacion"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 0",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "documentos",
          "investigación",
          "rúbricas",
          "verificación",
          "privacidad"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "CL-0. Uso conversacional responsable",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "documentos",
            "investigación",
            "rúbricas"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "cx-6",
      "nextModule": "cl-1"
    },
    {
      "id": "cl-1",
      "title": "CL-1. Claude para documentos extensos",
      "pathway": "claude",
      "route": "claude",
      "level": 1,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 75,
      "minutes": 75,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar documentos",
        "Aplicar investigación",
        "Aplicar rúbricas",
        "Aplicar verificación"
      ],
      "concepts": [
        "documentos",
        "investigación",
        "rúbricas",
        "verificación",
        "privacidad"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte cl-1. claude para documentos extensos en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio ayudainvestigacion como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 1,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 1,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "ayudainvestigacion",
          "url": "https://github.com/ramonmorillo/ayudainvestigacion"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 1",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "documentos",
          "investigación",
          "rúbricas",
          "verificación",
          "privacidad"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "CL-1. Claude para documentos extensos",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "documentos",
            "investigación",
            "rúbricas"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "cl-0",
      "nextModule": "cl-2"
    },
    {
      "id": "cl-2",
      "title": "CL-2. Claude para investigación farmacéutica",
      "pathway": "claude",
      "route": "claude",
      "level": 2,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 90,
      "minutes": 90,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar documentos",
        "Aplicar investigación",
        "Aplicar rúbricas",
        "Aplicar verificación"
      ],
      "concepts": [
        "documentos",
        "investigación",
        "rúbricas",
        "verificación",
        "privacidad"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte cl-2. claude para investigación farmacéutica en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio ayudainvestigacion como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 2,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 2,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "ayudainvestigacion",
          "url": "https://github.com/ramonmorillo/ayudainvestigacion"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 2",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "documentos",
          "investigación",
          "rúbricas",
          "verificación",
          "privacidad"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "CL-2. Claude para investigación farmacéutica",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "documentos",
            "investigación",
            "rúbricas"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "cl-1",
      "nextModule": "cl-3"
    },
    {
      "id": "cl-3",
      "title": "CL-3. Claude para formación",
      "pathway": "claude",
      "route": "claude",
      "level": 3,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 105,
      "minutes": 105,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar documentos",
        "Aplicar investigación",
        "Aplicar rúbricas",
        "Aplicar verificación"
      ],
      "concepts": [
        "documentos",
        "investigación",
        "rúbricas",
        "verificación",
        "privacidad"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte cl-3. claude para formación en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio ayudainvestigacion como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 3,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 3,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "ayudainvestigacion",
          "url": "https://github.com/ramonmorillo/ayudainvestigacion"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 3",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "documentos",
          "investigación",
          "rúbricas",
          "verificación",
          "privacidad"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "CL-3. Claude para formación",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "documentos",
            "investigación",
            "rúbricas"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "cl-2",
      "nextModule": "cl-4"
    },
    {
      "id": "cl-4",
      "title": "CL-4. Proyectos, instrucciones y conocimiento especializado",
      "pathway": "claude",
      "route": "claude",
      "level": 4,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 120,
      "minutes": 120,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar documentos",
        "Aplicar investigación",
        "Aplicar rúbricas",
        "Aplicar verificación"
      ],
      "concepts": [
        "documentos",
        "investigación",
        "rúbricas",
        "verificación",
        "privacidad"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte cl-4. proyectos, instrucciones y conocimiento especializado en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio ayudainvestigacion como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 4,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 4,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "ayudainvestigacion",
          "url": "https://github.com/ramonmorillo/ayudainvestigacion"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 4",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "documentos",
          "investigación",
          "rúbricas",
          "verificación",
          "privacidad"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "CL-4. Proyectos, instrucciones y conocimiento especializado",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "documentos",
            "investigación",
            "rúbricas"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "cl-3",
      "nextModule": "cl-5"
    },
    {
      "id": "cl-5",
      "title": "CL-5. Skills especializadas",
      "pathway": "claude",
      "route": "claude",
      "level": 4,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 120,
      "minutes": 120,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar documentos",
        "Aplicar investigación",
        "Aplicar rúbricas",
        "Aplicar verificación"
      ],
      "concepts": [
        "documentos",
        "investigación",
        "rúbricas",
        "verificación",
        "privacidad"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte cl-5. skills especializadas en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio ayudainvestigacion como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 4,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 4,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "ayudainvestigacion",
          "url": "https://github.com/ramonmorillo/ayudainvestigacion"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 4",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "documentos",
          "investigación",
          "rúbricas",
          "verificación",
          "privacidad"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "CL-5. Skills especializadas",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "documentos",
            "investigación",
            "rúbricas"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "cl-4",
      "nextModule": "cl-6"
    },
    {
      "id": "cl-6",
      "title": "CL-6. Elegir entre Claude, Codex y Claude Code",
      "pathway": "claude",
      "route": "claude",
      "level": 4,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 120,
      "minutes": 120,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar documentos",
        "Aplicar investigación",
        "Aplicar rúbricas",
        "Aplicar verificación"
      ],
      "concepts": [
        "documentos",
        "investigación",
        "rúbricas",
        "verificación",
        "privacidad"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte cl-6. elegir entre claude, codex y claude code en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio ayudainvestigacion como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 4,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 4,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "ayudainvestigacion",
          "url": "https://github.com/ramonmorillo/ayudainvestigacion"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 4",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "documentos",
          "investigación",
          "rúbricas",
          "verificación",
          "privacidad"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "CL-6. Elegir entre Claude, Codex y Claude Code",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "documentos",
            "investigación",
            "rúbricas"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "cl-5",
      "nextModule": "cc-0"
    },
    {
      "id": "cc-0",
      "title": "CC-0. Entorno y conceptos básicos",
      "pathway": "claude-code",
      "route": "claude-code",
      "level": 0,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 60,
      "minutes": 60,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Ninguno"
      ],
      "competencies": [
        "Aplicar terminal",
        "Aplicar instrucciones",
        "Aplicar subagentes",
        "Aplicar MCP"
      ],
      "concepts": [
        "terminal",
        "instrucciones",
        "subagentes",
        "MCP",
        "hooks",
        "seguridad"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte cc-0. entorno y conceptos básicos en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio IA-farmacia-formacion como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 0,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 0,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "IA-farmacia-formacion",
          "url": "https://github.com/ramonmorillo/IA-farmacia-formacion"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 0",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "terminal",
          "instrucciones",
          "subagentes",
          "MCP",
          "hooks",
          "seguridad"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "CC-0. Entorno y conceptos básicos",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "terminal",
            "instrucciones",
            "subagentes"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "cl-6",
      "nextModule": "cc-1"
    },
    {
      "id": "cc-1",
      "title": "CC-1. CLAUDE.md e instrucciones del proyecto",
      "pathway": "claude-code",
      "route": "claude-code",
      "level": 1,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 75,
      "minutes": 75,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar terminal",
        "Aplicar instrucciones",
        "Aplicar subagentes",
        "Aplicar MCP"
      ],
      "concepts": [
        "terminal",
        "instrucciones",
        "subagentes",
        "MCP",
        "hooks",
        "seguridad"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte cc-1. claude.md e instrucciones del proyecto en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio IA-farmacia-formacion como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 1,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 1,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "IA-farmacia-formacion",
          "url": "https://github.com/ramonmorillo/IA-farmacia-formacion"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 1",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "terminal",
          "instrucciones",
          "subagentes",
          "MCP",
          "hooks",
          "seguridad"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "CC-1. CLAUDE.md e instrucciones del proyecto",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "terminal",
            "instrucciones",
            "subagentes"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "cc-0",
      "nextModule": "cc-2"
    },
    {
      "id": "cc-2",
      "title": "CC-2. Desarrollo guiado",
      "pathway": "claude-code",
      "route": "claude-code",
      "level": 2,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 90,
      "minutes": 90,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar terminal",
        "Aplicar instrucciones",
        "Aplicar subagentes",
        "Aplicar MCP"
      ],
      "concepts": [
        "terminal",
        "instrucciones",
        "subagentes",
        "MCP",
        "hooks",
        "seguridad"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte cc-2. desarrollo guiado en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio IA-farmacia-formacion como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 2,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 2,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "IA-farmacia-formacion",
          "url": "https://github.com/ramonmorillo/IA-farmacia-formacion"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 2",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "terminal",
          "instrucciones",
          "subagentes",
          "MCP",
          "hooks",
          "seguridad"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "CC-2. Desarrollo guiado",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "terminal",
            "instrucciones",
            "subagentes"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "cc-1",
      "nextModule": "cc-3"
    },
    {
      "id": "cc-3",
      "title": "CC-3. Depuración de aplicaciones reales",
      "pathway": "claude-code",
      "route": "claude-code",
      "level": 3,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 105,
      "minutes": 105,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar terminal",
        "Aplicar instrucciones",
        "Aplicar subagentes",
        "Aplicar MCP"
      ],
      "concepts": [
        "terminal",
        "instrucciones",
        "subagentes",
        "MCP",
        "hooks",
        "seguridad"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte cc-3. depuración de aplicaciones reales en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio cambiosTAR como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 3,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 3,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "cambiosTAR",
          "url": "https://github.com/ramonmorillo/cambiosTAR"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 3",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "terminal",
          "instrucciones",
          "subagentes",
          "MCP",
          "hooks",
          "seguridad"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "CC-3. Depuración de aplicaciones reales",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "terminal",
            "instrucciones",
            "subagentes"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "cc-2",
      "nextModule": "cc-4"
    },
    {
      "id": "cc-4",
      "title": "CC-4. Subagentes y división del trabajo",
      "pathway": "claude-code",
      "route": "claude-code",
      "level": 4,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 120,
      "minutes": 120,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar terminal",
        "Aplicar instrucciones",
        "Aplicar subagentes",
        "Aplicar MCP"
      ],
      "concepts": [
        "terminal",
        "instrucciones",
        "subagentes",
        "MCP",
        "hooks",
        "seguridad"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte cc-4. subagentes y división del trabajo en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio IA-farmacia-formacion como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 4,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 4,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "IA-farmacia-formacion",
          "url": "https://github.com/ramonmorillo/IA-farmacia-formacion"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 4",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "terminal",
          "instrucciones",
          "subagentes",
          "MCP",
          "hooks",
          "seguridad"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "CC-4. Subagentes y división del trabajo",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "terminal",
            "instrucciones",
            "subagentes"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "cc-3",
      "nextModule": "cc-5"
    },
    {
      "id": "cc-5",
      "title": "CC-5. MCP, conectores y herramientas externas",
      "pathway": "claude-code",
      "route": "claude-code",
      "level": 4,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 120,
      "minutes": 120,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar terminal",
        "Aplicar instrucciones",
        "Aplicar subagentes",
        "Aplicar MCP"
      ],
      "concepts": [
        "terminal",
        "instrucciones",
        "subagentes",
        "MCP",
        "hooks",
        "seguridad"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte cc-5. mcp, conectores y herramientas externas en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio IA-farmacia-formacion como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 4,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 4,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "IA-farmacia-formacion",
          "url": "https://github.com/ramonmorillo/IA-farmacia-formacion"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 4",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "terminal",
          "instrucciones",
          "subagentes",
          "MCP",
          "hooks",
          "seguridad"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "CC-5. MCP, conectores y herramientas externas",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "terminal",
            "instrucciones",
            "subagentes"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "cc-4",
      "nextModule": "cc-6"
    },
    {
      "id": "cc-6",
      "title": "CC-6. Hooks, skills y automatización",
      "pathway": "claude-code",
      "route": "claude-code",
      "level": 4,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 120,
      "minutes": 120,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar terminal",
        "Aplicar instrucciones",
        "Aplicar subagentes",
        "Aplicar MCP"
      ],
      "concepts": [
        "terminal",
        "instrucciones",
        "subagentes",
        "MCP",
        "hooks",
        "seguridad"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte cc-6. hooks, skills y automatización en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio IA-farmacia-formacion como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 4,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 4,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "IA-farmacia-formacion",
          "url": "https://github.com/ramonmorillo/IA-farmacia-formacion"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 4",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "terminal",
          "instrucciones",
          "subagentes",
          "MCP",
          "hooks",
          "seguridad"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "CC-6. Hooks, skills y automatización",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "terminal",
            "instrucciones",
            "subagentes"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "cc-5",
      "nextModule": "cc-7"
    },
    {
      "id": "cc-7",
      "title": "CC-7. Seguridad y supervisión",
      "pathway": "claude-code",
      "route": "claude-code",
      "level": 4,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 120,
      "minutes": 120,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar terminal",
        "Aplicar instrucciones",
        "Aplicar subagentes",
        "Aplicar MCP"
      ],
      "concepts": [
        "terminal",
        "instrucciones",
        "subagentes",
        "MCP",
        "hooks",
        "seguridad"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte cc-7. seguridad y supervisión en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio IA-farmacia-formacion como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 4,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 4,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "IA-farmacia-formacion",
          "url": "https://github.com/ramonmorillo/IA-farmacia-formacion"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 4",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "terminal",
          "instrucciones",
          "subagentes",
          "MCP",
          "hooks",
          "seguridad"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "CC-7. Seguridad y supervisión",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "terminal",
            "instrucciones",
            "subagentes"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "cc-6",
      "nextModule": "cc-8"
    },
    {
      "id": "cc-8",
      "title": "CC-8. Proyecto experto",
      "pathway": "claude-code",
      "route": "claude-code",
      "level": 4,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 120,
      "minutes": 120,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar terminal",
        "Aplicar instrucciones",
        "Aplicar subagentes",
        "Aplicar MCP"
      ],
      "concepts": [
        "terminal",
        "instrucciones",
        "subagentes",
        "MCP",
        "hooks",
        "seguridad"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte cc-8. proyecto experto en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio IA-farmacia-formacion como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 4,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 4,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "IA-farmacia-formacion",
          "url": "https://github.com/ramonmorillo/IA-farmacia-formacion"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 4",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "terminal",
          "instrucciones",
          "subagentes",
          "MCP",
          "hooks",
          "seguridad"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "CC-8. Proyecto experto",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "terminal",
            "instrucciones",
            "subagentes"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "cc-7",
      "nextModule": "proyecto-a"
    },
    {
      "id": "proyecto-a",
      "title": "De cero a herramienta A. Página educativa",
      "pathway": "proyectos",
      "route": "proyectos",
      "level": 1,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 75,
      "minutes": 75,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar producto final",
        "Aplicar pruebas",
        "Aplicar despliegue",
        "Aplicar evidencia"
      ],
      "concepts": [
        "producto final",
        "pruebas",
        "despliegue",
        "evidencia",
        "presentación"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte de cero a herramienta a. página educativa en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio SIAF-CMO como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 1,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 1,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "SIAF-CMO",
          "url": "https://github.com/ramonmorillo/SIAF-CMO"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 1",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "producto final",
          "pruebas",
          "despliegue",
          "evidencia",
          "presentación"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "De cero a herramienta A. Página educativa",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "producto final",
            "pruebas",
            "despliegue"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "cc-8",
      "nextModule": "proyecto-b"
    },
    {
      "id": "proyecto-b",
      "title": "De cero a herramienta B. Calculadora docente",
      "pathway": "proyectos",
      "route": "proyectos",
      "level": 2,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 90,
      "minutes": 90,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar producto final",
        "Aplicar pruebas",
        "Aplicar despliegue",
        "Aplicar evidencia"
      ],
      "concepts": [
        "producto final",
        "pruebas",
        "despliegue",
        "evidencia",
        "presentación"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte de cero a herramienta b. calculadora docente en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio SIAF-CMO como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 2,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 2,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "SIAF-CMO",
          "url": "https://github.com/ramonmorillo/SIAF-CMO"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 2",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "producto final",
          "pruebas",
          "despliegue",
          "evidencia",
          "presentación"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "De cero a herramienta B. Calculadora docente",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "producto final",
            "pruebas",
            "despliegue"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "proyecto-a",
      "nextModule": "proyecto-c"
    },
    {
      "id": "proyecto-c",
      "title": "De cero a herramienta C. Registro local",
      "pathway": "proyectos",
      "route": "proyectos",
      "level": 3,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 105,
      "minutes": 105,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar producto final",
        "Aplicar pruebas",
        "Aplicar despliegue",
        "Aplicar evidencia"
      ],
      "concepts": [
        "producto final",
        "pruebas",
        "despliegue",
        "evidencia",
        "presentación"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte de cero a herramienta c. registro local en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio cambiosTAR como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 3,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 3,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "cambiosTAR",
          "url": "https://github.com/ramonmorillo/cambiosTAR"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 3",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "producto final",
          "pruebas",
          "despliegue",
          "evidencia",
          "presentación"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "De cero a herramienta C. Registro local",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "producto final",
            "pruebas",
            "despliegue"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "proyecto-b",
      "nextModule": "proyecto-d"
    },
    {
      "id": "proyecto-d",
      "title": "De cero a herramienta D. Herramienta basada en reglas",
      "pathway": "proyectos",
      "route": "proyectos",
      "level": 3,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 105,
      "minutes": 105,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar producto final",
        "Aplicar pruebas",
        "Aplicar despliegue",
        "Aplicar evidencia"
      ],
      "concepts": [
        "producto final",
        "pruebas",
        "despliegue",
        "evidencia",
        "presentación"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte de cero a herramienta d. herramienta basada en reglas en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio hiv-prescribing-cascade-auditor como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 3,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 3,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "hiv-prescribing-cascade-auditor",
          "url": "https://github.com/ramonmorillo/hiv-prescribing-cascade-auditor"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 3",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "producto final",
          "pruebas",
          "despliegue",
          "evidencia",
          "presentación"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "De cero a herramienta D. Herramienta basada en reglas",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "producto final",
            "pruebas",
            "despliegue"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "proyecto-c",
      "nextModule": "proyecto-e"
    },
    {
      "id": "proyecto-e",
      "title": "De cero a herramienta E. Ecosistema experto",
      "pathway": "proyectos",
      "route": "proyectos",
      "level": 4,
      "deliveryModes": [
        "self-paced",
        "seminar"
      ],
      "estimatedMinutes": 120,
      "minutes": 120,
      "status": "published",
      "author": "Ramón Morillo Verdugo",
      "createdAt": "2026-01-25",
      "updatedAt": "2026-07-14",
      "reviewed": "2026-07-14",
      "reviewedAt": "2026-07-14",
      "prerequisites": [
        "Nivel previo completado o experiencia equivalente"
      ],
      "competencies": [
        "Aplicar producto final",
        "Aplicar pruebas",
        "Aplicar despliegue",
        "Aplicar evidencia"
      ],
      "concepts": [
        "producto final",
        "pruebas",
        "despliegue",
        "evidencia",
        "presentación"
      ],
      "objectives": [
        "Explicar el problema profesional y el alcance seguro",
        "Ejecutar una práctica guiada con datos ficticios",
        "Verificar resultado, documentar límites y decidir siguiente paso"
      ],
      "sections": [
        {
          "title": "Diagnóstico inicial",
          "body": "El alumno identifica experiencia previa, herramientas disponibles, restricciones institucionales y riesgos de datos. Debe declarar qué sabe hacer, qué necesita aprender y qué no debe intentar todavía."
        },
        {
          "title": "Introducción",
          "body": "Este módulo convierte de cero a herramienta e. ecosistema experto en una competencia observable para farmacia. El punto de partida es siempre un problema profesional, datos permitidos, una herramienta adecuada, revisión humana y evidencia de aprendizaje. No se usan datos reales de pacientes ni se modifica producción."
        },
        {
          "title": "Explicación",
          "body": "La explicación se organiza en comprender, utilizar, aplicar, construir, verificar, auditar, gobernar y enseñar. Cada concepto se vincula a una acción revisable: abrir un repositorio, escribir una especificación, revisar un diff, ejecutar una prueba, documentar una limitación o defender una decisión."
        },
        {
          "title": "Demostración",
          "body": "Se muestra el repositorio SIAF-CMO como objeto docente. El docente distingue estructura, README, despliegue, historial, riesgos, pruebas y advertencias. Si el repositorio es real, se analiza sin editarlo; para modificar se trabaja sobre plantilla o copia docente."
        },
        {
          "title": "Práctica guiada",
          "body": "El alumno sigue una secuencia con datos ficticios: definir objetivo, redactar prompt, ejecutar o simular la acción, revisar salida, aplicar checklist, guardar evidencia local y redactar una conclusión limitada."
        },
        {
          "title": "Práctica autónoma",
          "body": "El alumno repite el flujo con otro caso ficticio y aporta prompt, resultado, revisión, enlace o captura, checklist y reflexión final. La solución se revela progresivamente para evitar aprendizaje pasivo."
        },
        {
          "title": "Errores frecuentes",
          "body": "Errores esperables: aceptar fluidez como verdad, no abrir fuentes, trabajar en producción, subir secretos, mezclar datos reales, no revisar diffs, no ejecutar pruebas, no documentar incertidumbres y considerar terminado algo solo porque compila."
        },
        {
          "title": "Microevaluación",
          "body": "La evaluación exige evidencia: especificación, prueba, explicación de límites, comparación con fuente o diff revisado. Las preguntas tipo test son apoyo, no sustituyen desempeño observable."
        },
        {
          "title": "Solución y siguiente paso",
          "body": "La solución esperada incluye resultado funcional o documento verificable, advertencia de validación, registro de uso de IA, trazabilidad y propuesta de mejora. El siguiente paso conecta con el proyecto escalonado correspondiente."
        }
      ],
      "demonstration": {
        "steps": [
          "Abrir repositorio o documento",
          "Identificar alcance",
          "Mostrar una acción segura",
          "Separar dato, inferencia y decisión"
        ]
      },
      "guidedPractice": {
        "title": "Práctica guiada",
        "level": 4,
        "instructions": "Ejecute la práctica con datos ficticios y registre evidencias.",
        "solution": "Solución: salida limitada, verificada, con advertencia y checklist completo."
      },
      "independentPractice": {
        "title": "Práctica autónoma",
        "level": 4,
        "instructions": "Repita con un caso diferente y documente el proceso.",
        "solution": "Debe entregar prompt, resultado, revisión, evidencia y reflexión."
      },
      "guidedActivity": {
        "title": "Práctica guiada",
        "instructions": "Ejecute la práctica con datos ficticios."
      },
      "independentActivity": {
        "title": "Práctica autónoma",
        "instructions": "Repita con un caso distinto."
      },
      "expertChallenge": {
        "title": "Reto experto",
        "instructions": "Revise un diff, añada una prueba o proponga gobernanza sin tocar producción.",
        "solution": "Informe técnico con riesgos, pruebas y decisión de publicación."
      },
      "repositoryExamples": [
        {
          "name": "SIAF-CMO",
          "url": "https://github.com/ramonmorillo/SIAF-CMO"
        }
      ],
      "prompts": [
        "Actúa como asistente de apoyo. No inventes fuentes. Separa datos, inferencias, riesgos y comprobaciones pendientes."
      ],
      "expectedOutputs": [
        "Documento o prototipo con alcance, pruebas, límites y evidencia local."
      ],
      "tests": [
        "Checklist manual",
        "Validación de enlaces",
        "Prueba con caso normal y caso límite"
      ],
      "checklist": [
        "Problema definido",
        "Datos ficticios o públicos",
        "Salida verificada",
        "Límites documentados",
        "Evidencia guardada"
      ],
      "assessment": [
        {
          "q": "¿Cuándo se considera terminado el trabajo?",
          "options": [
            "Cuando la IA responde",
            "Cuando existe evidencia verificada, pruebas y límites documentados",
            "Cuando se publica sin revisar"
          ],
          "answer": 1,
          "feedback": [
            "No basta una respuesta.",
            "Correcto.",
            "Publicar sin revisar es inseguro."
          ]
        }
      ],
      "teacherGuide": {
        "objectives": [
          "Activar práctica",
          "Gestionar grupos mixtos",
          "Revisar evidencias"
        ],
        "duration": "60-90 min",
        "difficulty": "Nivel 4",
        "preparation": "Preparar datos ficticios y enlace a plantilla.",
        "materials": [
          "Proyector",
          "Plantilla",
          "Repositorio de entrenamiento"
        ],
        "essentialConcepts": [
          "producto final",
          "pruebas",
          "despliegue",
          "evidencia",
          "presentación"
        ],
        "predictableErrors": [
          "Trabajar en main",
          "No verificar fuentes",
          "No guardar evidencias"
        ],
        "debateQuestions": [
          "¿Qué puede delegarse y qué no?",
          "¿Qué prueba faltaría antes de publicar?"
        ],
        "shortActivity": "Capa esencial: identificar problema y riesgo.",
        "extendedActivity": "Capa ampliada: revisar estructura o salida.",
        "discussionCase": "Herramienta que funciona pero no declara limitaciones.",
        "expectedAnswer": "No publicarla para uso real sin alcance, pruebas, advertencia y revisión.",
        "mustNotOmit": [
          "Autoría",
          "No uso de datos reales",
          "No validación clínica automática"
        ],
        "controversies": [
          "Velocidad frente a seguridad"
        ],
        "finalMessages": [
          "La responsabilidad final sigue siendo humana."
        ],
        "evaluation": "Rúbrica transversal por evidencias.",
        "rubric": [
          "Problema",
          "Seguridad",
          "Pruebas",
          "Trazabilidad"
        ]
      },
      "presentationSlides": [
        {
          "title": "De cero a herramienta E. Ecosistema experto",
          "objective": "Convertir conocimiento en práctica verificable",
          "keyIdeas": [
            "producto final",
            "pruebas",
            "despliegue"
          ],
          "example": "Caso ficticio de farmacia hospitalaria",
          "question": "¿Qué evidencia demuestra competencia?",
          "summary": "Aprender haciendo con revisión humana."
        }
      ],
      "references": [
        {
          "label": "GitHub Docs",
          "url": "https://docs.github.com/",
          "checked": "2026-07-14"
        },
        {
          "label": "OpenAI Codex",
          "url": "https://openai.com/codex/",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude",
          "url": "https://www.anthropic.com/claude",
          "checked": "2026-07-14"
        },
        {
          "label": "Claude Code docs",
          "url": "https://docs.anthropic.com/en/docs/claude-code",
          "checked": "2026-07-14"
        },
        {
          "label": "Reglamento UE 2024/1689 de IA",
          "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
          "checked": "2026-07-14"
        },
        {
          "label": "OMS ética y gobernanza de IA en salud",
          "url": "https://www.who.int/publications/i/item/9789240029200",
          "checked": "2026-07-14"
        }
      ],
      "previousModule": "proyecto-d",
      "nextModule": null
    }
  ],
  "portfolio": [
    {
      "name": "IA-farmacia-formacion",
      "category": "Herramienta docente verificada públicamente",
      "status": "prototipo/herramienta funcional en evaluación según repositorio",
      "problem": "Necesidad profesional identificada en farmacia, investigación, docencia, gestión o comunicación; el alcance exacto debe verificarse en README y código público antes de uso docente.",
      "users": "Farmacéuticos, docentes, investigadores o equipos sanitarios según el repositorio.",
      "solution": "Aplicación o recurso digital revisable públicamente, usado como ejemplo de evolución desde problema a producto.",
      "technology": "Predominio de HTML/CSS/JavaScript estático cuando GitHub informa lenguaje web; algunos repositorios incluyen bases de conocimiento, documentación o datos locales.",
      "aiRole": "Aceleración de desarrollo, documentación, revisión o prototipado; no autonomía clínica.",
      "humanDecisions": "Definir reglas, seleccionar evidencia, revisar cálculos, decidir publicación y mantenimiento.",
      "wentWell": "Permite enseñar repositorios reales, GitHub Pages, trazabilidad y revisión de límites.",
      "corrections": "Exige documentar alcance, licencia, pruebas, advertencias y posible validación.",
      "risks": "No usar datos reales; no asumir validación clínica; no modificar producción; comprobar licencia y despliegue.",
      "lessons": "La herramienta nace del criterio profesional y la IA solo acelera partes del ciclo.",
      "technicalLevel": "Nivel 2-4 según complejidad.",
      "reproductionTime": "2-12 horas en versión docente simplificada.",
      "repository": "https://github.com/ramonmorillo/IA-farmacia-formacion",
      "published": "https://ramonmorillo.github.io/IA-farmacia-formacion/",
      "activity": "Auditar README, estructura, advertencias, pruebas y una mejora segura sobre copia docente.",
      "debate": [
        "¿Qué evidencia falta para uso real?",
        "¿Qué no debe delegarse?"
      ],
      "future": "Añadir pruebas, changelog, plantillas y validación documentada.",
      "warning": "Uso docente. No se presenta como herramienta validada clínicamente salvo evidencia explícita."
    },
    {
      "name": "SIAF-CMO",
      "category": "Herramienta docente verificada públicamente",
      "status": "prototipo/herramienta funcional en evaluación según repositorio",
      "problem": "Necesidad profesional identificada en farmacia, investigación, docencia, gestión o comunicación; el alcance exacto debe verificarse en README y código público antes de uso docente.",
      "users": "Farmacéuticos, docentes, investigadores o equipos sanitarios según el repositorio.",
      "solution": "Aplicación o recurso digital revisable públicamente, usado como ejemplo de evolución desde problema a producto.",
      "technology": "Predominio de HTML/CSS/JavaScript estático cuando GitHub informa lenguaje web; algunos repositorios incluyen bases de conocimiento, documentación o datos locales.",
      "aiRole": "Aceleración de desarrollo, documentación, revisión o prototipado; no autonomía clínica.",
      "humanDecisions": "Definir reglas, seleccionar evidencia, revisar cálculos, decidir publicación y mantenimiento.",
      "wentWell": "Permite enseñar repositorios reales, GitHub Pages, trazabilidad y revisión de límites.",
      "corrections": "Exige documentar alcance, licencia, pruebas, advertencias y posible validación.",
      "risks": "No usar datos reales; no asumir validación clínica; no modificar producción; comprobar licencia y despliegue.",
      "lessons": "La herramienta nace del criterio profesional y la IA solo acelera partes del ciclo.",
      "technicalLevel": "Nivel 2-4 según complejidad.",
      "reproductionTime": "2-12 horas en versión docente simplificada.",
      "repository": "https://github.com/ramonmorillo/SIAF-CMO",
      "published": "https://ramonmorillo.github.io/SIAF-CMO/",
      "activity": "Auditar README, estructura, advertencias, pruebas y una mejora segura sobre copia docente.",
      "debate": [
        "¿Qué evidencia falta para uso real?",
        "¿Qué no debe delegarse?"
      ],
      "future": "Añadir pruebas, changelog, plantillas y validación documentada.",
      "warning": "Uso docente. No se presenta como herramienta validada clínicamente salvo evidencia explícita."
    },
    {
      "name": "hub-estratificacionCMO",
      "category": "Herramienta docente verificada públicamente",
      "status": "prototipo/herramienta funcional en evaluación según repositorio",
      "problem": "Necesidad profesional identificada en farmacia, investigación, docencia, gestión o comunicación; el alcance exacto debe verificarse en README y código público antes de uso docente.",
      "users": "Farmacéuticos, docentes, investigadores o equipos sanitarios según el repositorio.",
      "solution": "Aplicación o recurso digital revisable públicamente, usado como ejemplo de evolución desde problema a producto.",
      "technology": "Predominio de HTML/CSS/JavaScript estático cuando GitHub informa lenguaje web; algunos repositorios incluyen bases de conocimiento, documentación o datos locales.",
      "aiRole": "Aceleración de desarrollo, documentación, revisión o prototipado; no autonomía clínica.",
      "humanDecisions": "Definir reglas, seleccionar evidencia, revisar cálculos, decidir publicación y mantenimiento.",
      "wentWell": "Permite enseñar repositorios reales, GitHub Pages, trazabilidad y revisión de límites.",
      "corrections": "Exige documentar alcance, licencia, pruebas, advertencias y posible validación.",
      "risks": "No usar datos reales; no asumir validación clínica; no modificar producción; comprobar licencia y despliegue.",
      "lessons": "La herramienta nace del criterio profesional y la IA solo acelera partes del ciclo.",
      "technicalLevel": "Nivel 2-4 según complejidad.",
      "reproductionTime": "2-12 horas en versión docente simplificada.",
      "repository": "https://github.com/ramonmorillo/hub-estratificacionCMO",
      "published": "https://ramonmorillo.github.io/hub-estratificacionCMO/",
      "activity": "Auditar README, estructura, advertencias, pruebas y una mejora segura sobre copia docente.",
      "debate": [
        "¿Qué evidencia falta para uso real?",
        "¿Qué no debe delegarse?"
      ],
      "future": "Añadir pruebas, changelog, plantillas y validación documentada.",
      "warning": "Uso docente. No se presenta como herramienta validada clínicamente salvo evidencia explícita."
    },
    {
      "name": "cmo-vih-app2",
      "category": "Herramienta docente verificada públicamente",
      "status": "prototipo/herramienta funcional en evaluación según repositorio",
      "problem": "Necesidad profesional identificada en farmacia, investigación, docencia, gestión o comunicación; el alcance exacto debe verificarse en README y código público antes de uso docente.",
      "users": "Farmacéuticos, docentes, investigadores o equipos sanitarios según el repositorio.",
      "solution": "Aplicación o recurso digital revisable públicamente, usado como ejemplo de evolución desde problema a producto.",
      "technology": "Predominio de HTML/CSS/JavaScript estático cuando GitHub informa lenguaje web; algunos repositorios incluyen bases de conocimiento, documentación o datos locales.",
      "aiRole": "Aceleración de desarrollo, documentación, revisión o prototipado; no autonomía clínica.",
      "humanDecisions": "Definir reglas, seleccionar evidencia, revisar cálculos, decidir publicación y mantenimiento.",
      "wentWell": "Permite enseñar repositorios reales, GitHub Pages, trazabilidad y revisión de límites.",
      "corrections": "Exige documentar alcance, licencia, pruebas, advertencias y posible validación.",
      "risks": "No usar datos reales; no asumir validación clínica; no modificar producción; comprobar licencia y despliegue.",
      "lessons": "La herramienta nace del criterio profesional y la IA solo acelera partes del ciclo.",
      "technicalLevel": "Nivel 2-4 según complejidad.",
      "reproductionTime": "2-12 horas en versión docente simplificada.",
      "repository": "https://github.com/ramonmorillo/cmo-vih-app2",
      "published": "https://ramonmorillo.github.io/cmo-vih-app2/",
      "activity": "Auditar README, estructura, advertencias, pruebas y una mejora segura sobre copia docente.",
      "debate": [
        "¿Qué evidencia falta para uso real?",
        "¿Qué no debe delegarse?"
      ],
      "future": "Añadir pruebas, changelog, plantillas y validación documentada.",
      "warning": "Uso docente. No se presenta como herramienta validada clínicamente salvo evidencia explícita."
    },
    {
      "name": "cmo-vhb-vhd",
      "category": "Herramienta docente verificada públicamente",
      "status": "prototipo/herramienta funcional en evaluación según repositorio",
      "problem": "Necesidad profesional identificada en farmacia, investigación, docencia, gestión o comunicación; el alcance exacto debe verificarse en README y código público antes de uso docente.",
      "users": "Farmacéuticos, docentes, investigadores o equipos sanitarios según el repositorio.",
      "solution": "Aplicación o recurso digital revisable públicamente, usado como ejemplo de evolución desde problema a producto.",
      "technology": "Predominio de HTML/CSS/JavaScript estático cuando GitHub informa lenguaje web; algunos repositorios incluyen bases de conocimiento, documentación o datos locales.",
      "aiRole": "Aceleración de desarrollo, documentación, revisión o prototipado; no autonomía clínica.",
      "humanDecisions": "Definir reglas, seleccionar evidencia, revisar cálculos, decidir publicación y mantenimiento.",
      "wentWell": "Permite enseñar repositorios reales, GitHub Pages, trazabilidad y revisión de límites.",
      "corrections": "Exige documentar alcance, licencia, pruebas, advertencias y posible validación.",
      "risks": "No usar datos reales; no asumir validación clínica; no modificar producción; comprobar licencia y despliegue.",
      "lessons": "La herramienta nace del criterio profesional y la IA solo acelera partes del ciclo.",
      "technicalLevel": "Nivel 2-4 según complejidad.",
      "reproductionTime": "2-12 horas en versión docente simplificada.",
      "repository": "https://github.com/ramonmorillo/cmo-vhb-vhd",
      "published": "https://ramonmorillo.github.io/cmo-vhb-vhd/",
      "activity": "Auditar README, estructura, advertencias, pruebas y una mejora segura sobre copia docente.",
      "debate": [
        "¿Qué evidencia falta para uso real?",
        "¿Qué no debe delegarse?"
      ],
      "future": "Añadir pruebas, changelog, plantillas y validación documentada.",
      "warning": "Uso docente. No se presenta como herramienta validada clínicamente salvo evidencia explícita."
    },
    {
      "name": "estratificacionEM",
      "category": "Herramienta docente verificada públicamente",
      "status": "prototipo/herramienta funcional en evaluación según repositorio",
      "problem": "Necesidad profesional identificada en farmacia, investigación, docencia, gestión o comunicación; el alcance exacto debe verificarse en README y código público antes de uso docente.",
      "users": "Farmacéuticos, docentes, investigadores o equipos sanitarios según el repositorio.",
      "solution": "Aplicación o recurso digital revisable públicamente, usado como ejemplo de evolución desde problema a producto.",
      "technology": "Predominio de HTML/CSS/JavaScript estático cuando GitHub informa lenguaje web; algunos repositorios incluyen bases de conocimiento, documentación o datos locales.",
      "aiRole": "Aceleración de desarrollo, documentación, revisión o prototipado; no autonomía clínica.",
      "humanDecisions": "Definir reglas, seleccionar evidencia, revisar cálculos, decidir publicación y mantenimiento.",
      "wentWell": "Permite enseñar repositorios reales, GitHub Pages, trazabilidad y revisión de límites.",
      "corrections": "Exige documentar alcance, licencia, pruebas, advertencias y posible validación.",
      "risks": "No usar datos reales; no asumir validación clínica; no modificar producción; comprobar licencia y despliegue.",
      "lessons": "La herramienta nace del criterio profesional y la IA solo acelera partes del ciclo.",
      "technicalLevel": "Nivel 2-4 según complejidad.",
      "reproductionTime": "2-12 horas en versión docente simplificada.",
      "repository": "https://github.com/ramonmorillo/estratificacionEM",
      "published": "https://ramonmorillo.github.io/estratificacionEM/",
      "activity": "Auditar README, estructura, advertencias, pruebas y una mejora segura sobre copia docente.",
      "debate": [
        "¿Qué evidencia falta para uso real?",
        "¿Qué no debe delegarse?"
      ],
      "future": "Añadir pruebas, changelog, plantillas y validación documentada.",
      "warning": "Uso docente. No se presenta como herramienta validada clínicamente salvo evidencia explícita."
    },
    {
      "name": "estratificacionRCV",
      "category": "Herramienta docente verificada públicamente",
      "status": "prototipo/herramienta funcional en evaluación según repositorio",
      "problem": "Necesidad profesional identificada en farmacia, investigación, docencia, gestión o comunicación; el alcance exacto debe verificarse en README y código público antes de uso docente.",
      "users": "Farmacéuticos, docentes, investigadores o equipos sanitarios según el repositorio.",
      "solution": "Aplicación o recurso digital revisable públicamente, usado como ejemplo de evolución desde problema a producto.",
      "technology": "Predominio de HTML/CSS/JavaScript estático cuando GitHub informa lenguaje web; algunos repositorios incluyen bases de conocimiento, documentación o datos locales.",
      "aiRole": "Aceleración de desarrollo, documentación, revisión o prototipado; no autonomía clínica.",
      "humanDecisions": "Definir reglas, seleccionar evidencia, revisar cálculos, decidir publicación y mantenimiento.",
      "wentWell": "Permite enseñar repositorios reales, GitHub Pages, trazabilidad y revisión de límites.",
      "corrections": "Exige documentar alcance, licencia, pruebas, advertencias y posible validación.",
      "risks": "No usar datos reales; no asumir validación clínica; no modificar producción; comprobar licencia y despliegue.",
      "lessons": "La herramienta nace del criterio profesional y la IA solo acelera partes del ciclo.",
      "technicalLevel": "Nivel 2-4 según complejidad.",
      "reproductionTime": "2-12 horas en versión docente simplificada.",
      "repository": "https://github.com/ramonmorillo/estratificacionRCV",
      "published": "https://ramonmorillo.github.io/estratificacionRCV/",
      "activity": "Auditar README, estructura, advertencias, pruebas y una mejora segura sobre copia docente.",
      "debate": [
        "¿Qué evidencia falta para uso real?",
        "¿Qué no debe delegarse?"
      ],
      "future": "Añadir pruebas, changelog, plantillas y validación documentada.",
      "warning": "Uso docente. No se presenta como herramienta validada clínicamente salvo evidencia explícita."
    },
    {
      "name": "hiv-prescribing-cascade-auditor",
      "category": "Herramienta docente verificada públicamente",
      "status": "prototipo/herramienta funcional en evaluación según repositorio",
      "problem": "Necesidad profesional identificada en farmacia, investigación, docencia, gestión o comunicación; el alcance exacto debe verificarse en README y código público antes de uso docente.",
      "users": "Farmacéuticos, docentes, investigadores o equipos sanitarios según el repositorio.",
      "solution": "Aplicación o recurso digital revisable públicamente, usado como ejemplo de evolución desde problema a producto.",
      "technology": "Predominio de HTML/CSS/JavaScript estático cuando GitHub informa lenguaje web; algunos repositorios incluyen bases de conocimiento, documentación o datos locales.",
      "aiRole": "Aceleración de desarrollo, documentación, revisión o prototipado; no autonomía clínica.",
      "humanDecisions": "Definir reglas, seleccionar evidencia, revisar cálculos, decidir publicación y mantenimiento.",
      "wentWell": "Permite enseñar repositorios reales, GitHub Pages, trazabilidad y revisión de límites.",
      "corrections": "Exige documentar alcance, licencia, pruebas, advertencias y posible validación.",
      "risks": "No usar datos reales; no asumir validación clínica; no modificar producción; comprobar licencia y despliegue.",
      "lessons": "La herramienta nace del criterio profesional y la IA solo acelera partes del ciclo.",
      "technicalLevel": "Nivel 2-4 según complejidad.",
      "reproductionTime": "2-12 horas en versión docente simplificada.",
      "repository": "https://github.com/ramonmorillo/hiv-prescribing-cascade-auditor",
      "published": "https://ramonmorillo.github.io/hiv-prescribing-cascade-auditor/",
      "activity": "Auditar README, estructura, advertencias, pruebas y una mejora segura sobre copia docente.",
      "debate": [
        "¿Qué evidencia falta para uso real?",
        "¿Qué no debe delegarse?"
      ],
      "future": "Añadir pruebas, changelog, plantillas y validación documentada.",
      "warning": "Uso docente. No se presenta como herramienta validada clínicamente salvo evidencia explícita."
    },
    {
      "name": "cambiosTAR",
      "category": "Herramienta docente verificada públicamente",
      "status": "prototipo/herramienta funcional en evaluación según repositorio",
      "problem": "Necesidad profesional identificada en farmacia, investigación, docencia, gestión o comunicación; el alcance exacto debe verificarse en README y código público antes de uso docente.",
      "users": "Farmacéuticos, docentes, investigadores o equipos sanitarios según el repositorio.",
      "solution": "Aplicación o recurso digital revisable públicamente, usado como ejemplo de evolución desde problema a producto.",
      "technology": "Predominio de HTML/CSS/JavaScript estático cuando GitHub informa lenguaje web; algunos repositorios incluyen bases de conocimiento, documentación o datos locales.",
      "aiRole": "Aceleración de desarrollo, documentación, revisión o prototipado; no autonomía clínica.",
      "humanDecisions": "Definir reglas, seleccionar evidencia, revisar cálculos, decidir publicación y mantenimiento.",
      "wentWell": "Permite enseñar repositorios reales, GitHub Pages, trazabilidad y revisión de límites.",
      "corrections": "Exige documentar alcance, licencia, pruebas, advertencias y posible validación.",
      "risks": "No usar datos reales; no asumir validación clínica; no modificar producción; comprobar licencia y despliegue.",
      "lessons": "La herramienta nace del criterio profesional y la IA solo acelera partes del ciclo.",
      "technicalLevel": "Nivel 2-4 según complejidad.",
      "reproductionTime": "2-12 horas en versión docente simplificada.",
      "repository": "https://github.com/ramonmorillo/cambiosTAR",
      "published": "https://ramonmorillo.github.io/cambiosTAR/",
      "activity": "Auditar README, estructura, advertencias, pruebas y una mejora segura sobre copia docente.",
      "debate": [
        "¿Qué evidencia falta para uso real?",
        "¿Qué no debe delegarse?"
      ],
      "future": "Añadir pruebas, changelog, plantillas y validación documentada.",
      "warning": "Uso docente. No se presenta como herramienta validada clínicamente salvo evidencia explícita."
    },
    {
      "name": "antipcsk9tool",
      "category": "Herramienta docente verificada públicamente",
      "status": "prototipo/herramienta funcional en evaluación según repositorio",
      "problem": "Necesidad profesional identificada en farmacia, investigación, docencia, gestión o comunicación; el alcance exacto debe verificarse en README y código público antes de uso docente.",
      "users": "Farmacéuticos, docentes, investigadores o equipos sanitarios según el repositorio.",
      "solution": "Aplicación o recurso digital revisable públicamente, usado como ejemplo de evolución desde problema a producto.",
      "technology": "Predominio de HTML/CSS/JavaScript estático cuando GitHub informa lenguaje web; algunos repositorios incluyen bases de conocimiento, documentación o datos locales.",
      "aiRole": "Aceleración de desarrollo, documentación, revisión o prototipado; no autonomía clínica.",
      "humanDecisions": "Definir reglas, seleccionar evidencia, revisar cálculos, decidir publicación y mantenimiento.",
      "wentWell": "Permite enseñar repositorios reales, GitHub Pages, trazabilidad y revisión de límites.",
      "corrections": "Exige documentar alcance, licencia, pruebas, advertencias y posible validación.",
      "risks": "No usar datos reales; no asumir validación clínica; no modificar producción; comprobar licencia y despliegue.",
      "lessons": "La herramienta nace del criterio profesional y la IA solo acelera partes del ciclo.",
      "technicalLevel": "Nivel 2-4 según complejidad.",
      "reproductionTime": "2-12 horas en versión docente simplificada.",
      "repository": "https://github.com/ramonmorillo/antipcsk9tool",
      "published": "https://ramonmorillo.github.io/antipcsk9tool/",
      "activity": "Auditar README, estructura, advertencias, pruebas y una mejora segura sobre copia docente.",
      "debate": [
        "¿Qué evidencia falta para uso real?",
        "¿Qué no debe delegarse?"
      ],
      "future": "Añadir pruebas, changelog, plantillas y validación documentada.",
      "warning": "Uso docente. No se presenta como herramienta validada clínicamente salvo evidencia explícita."
    },
    {
      "name": "MRCI",
      "category": "Herramienta docente verificada públicamente",
      "status": "prototipo/herramienta funcional en evaluación según repositorio",
      "problem": "Necesidad profesional identificada en farmacia, investigación, docencia, gestión o comunicación; el alcance exacto debe verificarse en README y código público antes de uso docente.",
      "users": "Farmacéuticos, docentes, investigadores o equipos sanitarios según el repositorio.",
      "solution": "Aplicación o recurso digital revisable públicamente, usado como ejemplo de evolución desde problema a producto.",
      "technology": "Predominio de HTML/CSS/JavaScript estático cuando GitHub informa lenguaje web; algunos repositorios incluyen bases de conocimiento, documentación o datos locales.",
      "aiRole": "Aceleración de desarrollo, documentación, revisión o prototipado; no autonomía clínica.",
      "humanDecisions": "Definir reglas, seleccionar evidencia, revisar cálculos, decidir publicación y mantenimiento.",
      "wentWell": "Permite enseñar repositorios reales, GitHub Pages, trazabilidad y revisión de límites.",
      "corrections": "Exige documentar alcance, licencia, pruebas, advertencias y posible validación.",
      "risks": "No usar datos reales; no asumir validación clínica; no modificar producción; comprobar licencia y despliegue.",
      "lessons": "La herramienta nace del criterio profesional y la IA solo acelera partes del ciclo.",
      "technicalLevel": "Nivel 2-4 según complejidad.",
      "reproductionTime": "2-12 horas en versión docente simplificada.",
      "repository": "https://github.com/ramonmorillo/MRCI",
      "published": "https://ramonmorillo.github.io/MRCI/",
      "activity": "Auditar README, estructura, advertencias, pruebas y una mejora segura sobre copia docente.",
      "debate": [
        "¿Qué evidencia falta para uso real?",
        "¿Qué no debe delegarse?"
      ],
      "future": "Añadir pruebas, changelog, plantillas y validación documentada.",
      "warning": "Uso docente. No se presenta como herramienta validada clínicamente salvo evidencia explícita."
    },
    {
      "name": "CMO-Scientific-Engine",
      "category": "Herramienta docente verificada públicamente",
      "status": "prototipo/herramienta funcional en evaluación según repositorio",
      "problem": "Necesidad profesional identificada en farmacia, investigación, docencia, gestión o comunicación; el alcance exacto debe verificarse en README y código público antes de uso docente.",
      "users": "Farmacéuticos, docentes, investigadores o equipos sanitarios según el repositorio.",
      "solution": "Aplicación o recurso digital revisable públicamente, usado como ejemplo de evolución desde problema a producto.",
      "technology": "Predominio de HTML/CSS/JavaScript estático cuando GitHub informa lenguaje web; algunos repositorios incluyen bases de conocimiento, documentación o datos locales.",
      "aiRole": "Aceleración de desarrollo, documentación, revisión o prototipado; no autonomía clínica.",
      "humanDecisions": "Definir reglas, seleccionar evidencia, revisar cálculos, decidir publicación y mantenimiento.",
      "wentWell": "Permite enseñar repositorios reales, GitHub Pages, trazabilidad y revisión de límites.",
      "corrections": "Exige documentar alcance, licencia, pruebas, advertencias y posible validación.",
      "risks": "No usar datos reales; no asumir validación clínica; no modificar producción; comprobar licencia y despliegue.",
      "lessons": "La herramienta nace del criterio profesional y la IA solo acelera partes del ciclo.",
      "technicalLevel": "Nivel 2-4 según complejidad.",
      "reproductionTime": "2-12 horas en versión docente simplificada.",
      "repository": "https://github.com/ramonmorillo/CMO-Scientific-Engine",
      "published": "https://ramonmorillo.github.io/CMO-Scientific-Engine/",
      "activity": "Auditar README, estructura, advertencias, pruebas y una mejora segura sobre copia docente.",
      "debate": [
        "¿Qué evidencia falta para uso real?",
        "¿Qué no debe delegarse?"
      ],
      "future": "Añadir pruebas, changelog, plantillas y validación documentada.",
      "warning": "Uso docente. No se presenta como herramienta validada clínicamente salvo evidencia explícita."
    },
    {
      "name": "evidencegap-radar",
      "category": "Herramienta docente verificada públicamente",
      "status": "prototipo/herramienta funcional en evaluación según repositorio",
      "problem": "Necesidad profesional identificada en farmacia, investigación, docencia, gestión o comunicación; el alcance exacto debe verificarse en README y código público antes de uso docente.",
      "users": "Farmacéuticos, docentes, investigadores o equipos sanitarios según el repositorio.",
      "solution": "Aplicación o recurso digital revisable públicamente, usado como ejemplo de evolución desde problema a producto.",
      "technology": "Predominio de HTML/CSS/JavaScript estático cuando GitHub informa lenguaje web; algunos repositorios incluyen bases de conocimiento, documentación o datos locales.",
      "aiRole": "Aceleración de desarrollo, documentación, revisión o prototipado; no autonomía clínica.",
      "humanDecisions": "Definir reglas, seleccionar evidencia, revisar cálculos, decidir publicación y mantenimiento.",
      "wentWell": "Permite enseñar repositorios reales, GitHub Pages, trazabilidad y revisión de límites.",
      "corrections": "Exige documentar alcance, licencia, pruebas, advertencias y posible validación.",
      "risks": "No usar datos reales; no asumir validación clínica; no modificar producción; comprobar licencia y despliegue.",
      "lessons": "La herramienta nace del criterio profesional y la IA solo acelera partes del ciclo.",
      "technicalLevel": "Nivel 2-4 según complejidad.",
      "reproductionTime": "2-12 horas en versión docente simplificada.",
      "repository": "https://github.com/ramonmorillo/evidencegap-radar",
      "published": "https://ramonmorillo.github.io/evidencegap-radar/",
      "activity": "Auditar README, estructura, advertencias, pruebas y una mejora segura sobre copia docente.",
      "debate": [
        "¿Qué evidencia falta para uso real?",
        "¿Qué no debe delegarse?"
      ],
      "future": "Añadir pruebas, changelog, plantillas y validación documentada.",
      "warning": "Uso docente. No se presenta como herramienta validada clínicamente salvo evidencia explícita."
    },
    {
      "name": "ayudainvestigacion",
      "category": "Herramienta docente verificada públicamente",
      "status": "prototipo/herramienta funcional en evaluación según repositorio",
      "problem": "Necesidad profesional identificada en farmacia, investigación, docencia, gestión o comunicación; el alcance exacto debe verificarse en README y código público antes de uso docente.",
      "users": "Farmacéuticos, docentes, investigadores o equipos sanitarios según el repositorio.",
      "solution": "Aplicación o recurso digital revisable públicamente, usado como ejemplo de evolución desde problema a producto.",
      "technology": "Predominio de HTML/CSS/JavaScript estático cuando GitHub informa lenguaje web; algunos repositorios incluyen bases de conocimiento, documentación o datos locales.",
      "aiRole": "Aceleración de desarrollo, documentación, revisión o prototipado; no autonomía clínica.",
      "humanDecisions": "Definir reglas, seleccionar evidencia, revisar cálculos, decidir publicación y mantenimiento.",
      "wentWell": "Permite enseñar repositorios reales, GitHub Pages, trazabilidad y revisión de límites.",
      "corrections": "Exige documentar alcance, licencia, pruebas, advertencias y posible validación.",
      "risks": "No usar datos reales; no asumir validación clínica; no modificar producción; comprobar licencia y despliegue.",
      "lessons": "La herramienta nace del criterio profesional y la IA solo acelera partes del ciclo.",
      "technicalLevel": "Nivel 2-4 según complejidad.",
      "reproductionTime": "2-12 horas en versión docente simplificada.",
      "repository": "https://github.com/ramonmorillo/ayudainvestigacion",
      "published": "https://ramonmorillo.github.io/ayudainvestigacion/",
      "activity": "Auditar README, estructura, advertencias, pruebas y una mejora segura sobre copia docente.",
      "debate": [
        "¿Qué evidencia falta para uso real?",
        "¿Qué no debe delegarse?"
      ],
      "future": "Añadir pruebas, changelog, plantillas y validación documentada.",
      "warning": "Uso docente. No se presenta como herramienta validada clínicamente salvo evidencia explícita."
    },
    {
      "name": "drugpersist",
      "category": "Herramienta docente verificada públicamente",
      "status": "prototipo/herramienta funcional en evaluación según repositorio",
      "problem": "Necesidad profesional identificada en farmacia, investigación, docencia, gestión o comunicación; el alcance exacto debe verificarse en README y código público antes de uso docente.",
      "users": "Farmacéuticos, docentes, investigadores o equipos sanitarios según el repositorio.",
      "solution": "Aplicación o recurso digital revisable públicamente, usado como ejemplo de evolución desde problema a producto.",
      "technology": "Predominio de HTML/CSS/JavaScript estático cuando GitHub informa lenguaje web; algunos repositorios incluyen bases de conocimiento, documentación o datos locales.",
      "aiRole": "Aceleración de desarrollo, documentación, revisión o prototipado; no autonomía clínica.",
      "humanDecisions": "Definir reglas, seleccionar evidencia, revisar cálculos, decidir publicación y mantenimiento.",
      "wentWell": "Permite enseñar repositorios reales, GitHub Pages, trazabilidad y revisión de límites.",
      "corrections": "Exige documentar alcance, licencia, pruebas, advertencias y posible validación.",
      "risks": "No usar datos reales; no asumir validación clínica; no modificar producción; comprobar licencia y despliegue.",
      "lessons": "La herramienta nace del criterio profesional y la IA solo acelera partes del ciclo.",
      "technicalLevel": "Nivel 2-4 según complejidad.",
      "reproductionTime": "2-12 horas en versión docente simplificada.",
      "repository": "https://github.com/ramonmorillo/drugpersist",
      "published": "https://ramonmorillo.github.io/drugpersist/",
      "activity": "Auditar README, estructura, advertencias, pruebas y una mejora segura sobre copia docente.",
      "debate": [
        "¿Qué evidencia falta para uso real?",
        "¿Qué no debe delegarse?"
      ],
      "future": "Añadir pruebas, changelog, plantillas y validación documentada.",
      "warning": "Uso docente. No se presenta como herramienta validada clínicamente salvo evidencia explícita."
    },
    {
      "name": "sesionesfarmacia",
      "category": "Herramienta docente verificada públicamente",
      "status": "prototipo/herramienta funcional en evaluación según repositorio",
      "problem": "Necesidad profesional identificada en farmacia, investigación, docencia, gestión o comunicación; el alcance exacto debe verificarse en README y código público antes de uso docente.",
      "users": "Farmacéuticos, docentes, investigadores o equipos sanitarios según el repositorio.",
      "solution": "Aplicación o recurso digital revisable públicamente, usado como ejemplo de evolución desde problema a producto.",
      "technology": "Predominio de HTML/CSS/JavaScript estático cuando GitHub informa lenguaje web; algunos repositorios incluyen bases de conocimiento, documentación o datos locales.",
      "aiRole": "Aceleración de desarrollo, documentación, revisión o prototipado; no autonomía clínica.",
      "humanDecisions": "Definir reglas, seleccionar evidencia, revisar cálculos, decidir publicación y mantenimiento.",
      "wentWell": "Permite enseñar repositorios reales, GitHub Pages, trazabilidad y revisión de límites.",
      "corrections": "Exige documentar alcance, licencia, pruebas, advertencias y posible validación.",
      "risks": "No usar datos reales; no asumir validación clínica; no modificar producción; comprobar licencia y despliegue.",
      "lessons": "La herramienta nace del criterio profesional y la IA solo acelera partes del ciclo.",
      "technicalLevel": "Nivel 2-4 según complejidad.",
      "reproductionTime": "2-12 horas en versión docente simplificada.",
      "repository": "https://github.com/ramonmorillo/sesionesfarmacia",
      "published": "https://ramonmorillo.github.io/sesionesfarmacia/",
      "activity": "Auditar README, estructura, advertencias, pruebas y una mejora segura sobre copia docente.",
      "debate": [
        "¿Qué evidencia falta para uso real?",
        "¿Qué no debe delegarse?"
      ],
      "future": "Añadir pruebas, changelog, plantillas y validación documentada.",
      "warning": "Uso docente. No se presenta como herramienta validada clínicamente salvo evidencia explícita."
    },
    {
      "name": "actadeguardias",
      "category": "Herramienta docente verificada públicamente",
      "status": "prototipo/herramienta funcional en evaluación según repositorio",
      "problem": "Necesidad profesional identificada en farmacia, investigación, docencia, gestión o comunicación; el alcance exacto debe verificarse en README y código público antes de uso docente.",
      "users": "Farmacéuticos, docentes, investigadores o equipos sanitarios según el repositorio.",
      "solution": "Aplicación o recurso digital revisable públicamente, usado como ejemplo de evolución desde problema a producto.",
      "technology": "Predominio de HTML/CSS/JavaScript estático cuando GitHub informa lenguaje web; algunos repositorios incluyen bases de conocimiento, documentación o datos locales.",
      "aiRole": "Aceleración de desarrollo, documentación, revisión o prototipado; no autonomía clínica.",
      "humanDecisions": "Definir reglas, seleccionar evidencia, revisar cálculos, decidir publicación y mantenimiento.",
      "wentWell": "Permite enseñar repositorios reales, GitHub Pages, trazabilidad y revisión de límites.",
      "corrections": "Exige documentar alcance, licencia, pruebas, advertencias y posible validación.",
      "risks": "No usar datos reales; no asumir validación clínica; no modificar producción; comprobar licencia y despliegue.",
      "lessons": "La herramienta nace del criterio profesional y la IA solo acelera partes del ciclo.",
      "technicalLevel": "Nivel 2-4 según complejidad.",
      "reproductionTime": "2-12 horas en versión docente simplificada.",
      "repository": "https://github.com/ramonmorillo/actadeguardias",
      "published": "https://ramonmorillo.github.io/actadeguardias/",
      "activity": "Auditar README, estructura, advertencias, pruebas y una mejora segura sobre copia docente.",
      "debate": [
        "¿Qué evidencia falta para uso real?",
        "¿Qué no debe delegarse?"
      ],
      "future": "Añadir pruebas, changelog, plantillas y validación documentada.",
      "warning": "Uso docente. No se presenta como herramienta validada clínicamente salvo evidencia explícita."
    },
    {
      "name": "ubicacionesfh",
      "category": "Herramienta docente verificada públicamente",
      "status": "prototipo/herramienta funcional en evaluación según repositorio",
      "problem": "Necesidad profesional identificada en farmacia, investigación, docencia, gestión o comunicación; el alcance exacto debe verificarse en README y código público antes de uso docente.",
      "users": "Farmacéuticos, docentes, investigadores o equipos sanitarios según el repositorio.",
      "solution": "Aplicación o recurso digital revisable públicamente, usado como ejemplo de evolución desde problema a producto.",
      "technology": "Predominio de HTML/CSS/JavaScript estático cuando GitHub informa lenguaje web; algunos repositorios incluyen bases de conocimiento, documentación o datos locales.",
      "aiRole": "Aceleración de desarrollo, documentación, revisión o prototipado; no autonomía clínica.",
      "humanDecisions": "Definir reglas, seleccionar evidencia, revisar cálculos, decidir publicación y mantenimiento.",
      "wentWell": "Permite enseñar repositorios reales, GitHub Pages, trazabilidad y revisión de límites.",
      "corrections": "Exige documentar alcance, licencia, pruebas, advertencias y posible validación.",
      "risks": "No usar datos reales; no asumir validación clínica; no modificar producción; comprobar licencia y despliegue.",
      "lessons": "La herramienta nace del criterio profesional y la IA solo acelera partes del ciclo.",
      "technicalLevel": "Nivel 2-4 según complejidad.",
      "reproductionTime": "2-12 horas en versión docente simplificada.",
      "repository": "https://github.com/ramonmorillo/ubicacionesfh",
      "published": "https://ramonmorillo.github.io/ubicacionesfh/",
      "activity": "Auditar README, estructura, advertencias, pruebas y una mejora segura sobre copia docente.",
      "debate": [
        "¿Qué evidencia falta para uso real?",
        "¿Qué no debe delegarse?"
      ],
      "future": "Añadir pruebas, changelog, plantillas y validación documentada.",
      "warning": "Uso docente. No se presenta como herramienta validada clínicamente salvo evidencia explícita."
    },
    {
      "name": "qpex",
      "category": "Herramienta docente verificada públicamente",
      "status": "prototipo/herramienta funcional en evaluación según repositorio",
      "problem": "Necesidad profesional identificada en farmacia, investigación, docencia, gestión o comunicación; el alcance exacto debe verificarse en README y código público antes de uso docente.",
      "users": "Farmacéuticos, docentes, investigadores o equipos sanitarios según el repositorio.",
      "solution": "Aplicación o recurso digital revisable públicamente, usado como ejemplo de evolución desde problema a producto.",
      "technology": "Predominio de HTML/CSS/JavaScript estático cuando GitHub informa lenguaje web; algunos repositorios incluyen bases de conocimiento, documentación o datos locales.",
      "aiRole": "Aceleración de desarrollo, documentación, revisión o prototipado; no autonomía clínica.",
      "humanDecisions": "Definir reglas, seleccionar evidencia, revisar cálculos, decidir publicación y mantenimiento.",
      "wentWell": "Permite enseñar repositorios reales, GitHub Pages, trazabilidad y revisión de límites.",
      "corrections": "Exige documentar alcance, licencia, pruebas, advertencias y posible validación.",
      "risks": "No usar datos reales; no asumir validación clínica; no modificar producción; comprobar licencia y despliegue.",
      "lessons": "La herramienta nace del criterio profesional y la IA solo acelera partes del ciclo.",
      "technicalLevel": "Nivel 2-4 según complejidad.",
      "reproductionTime": "2-12 horas en versión docente simplificada.",
      "repository": "https://github.com/ramonmorillo/qpex",
      "published": "https://ramonmorillo.github.io/qpex/",
      "activity": "Auditar README, estructura, advertencias, pruebas y una mejora segura sobre copia docente.",
      "debate": [
        "¿Qué evidencia falta para uso real?",
        "¿Qué no debe delegarse?"
      ],
      "future": "Añadir pruebas, changelog, plantillas y validación documentada.",
      "warning": "Uso docente. No se presenta como herramienta validada clínicamente salvo evidencia explícita."
    },
    {
      "name": "rxplain",
      "category": "Herramienta docente verificada públicamente",
      "status": "prototipo/herramienta funcional en evaluación según repositorio",
      "problem": "Necesidad profesional identificada en farmacia, investigación, docencia, gestión o comunicación; el alcance exacto debe verificarse en README y código público antes de uso docente.",
      "users": "Farmacéuticos, docentes, investigadores o equipos sanitarios según el repositorio.",
      "solution": "Aplicación o recurso digital revisable públicamente, usado como ejemplo de evolución desde problema a producto.",
      "technology": "Predominio de HTML/CSS/JavaScript estático cuando GitHub informa lenguaje web; algunos repositorios incluyen bases de conocimiento, documentación o datos locales.",
      "aiRole": "Aceleración de desarrollo, documentación, revisión o prototipado; no autonomía clínica.",
      "humanDecisions": "Definir reglas, seleccionar evidencia, revisar cálculos, decidir publicación y mantenimiento.",
      "wentWell": "Permite enseñar repositorios reales, GitHub Pages, trazabilidad y revisión de límites.",
      "corrections": "Exige documentar alcance, licencia, pruebas, advertencias y posible validación.",
      "risks": "No usar datos reales; no asumir validación clínica; no modificar producción; comprobar licencia y despliegue.",
      "lessons": "La herramienta nace del criterio profesional y la IA solo acelera partes del ciclo.",
      "technicalLevel": "Nivel 2-4 según complejidad.",
      "reproductionTime": "2-12 horas en versión docente simplificada.",
      "repository": "https://github.com/ramonmorillo/rxplain",
      "published": "https://ramonmorillo.github.io/rxplain/",
      "activity": "Auditar README, estructura, advertencias, pruebas y una mejora segura sobre copia docente.",
      "debate": [
        "¿Qué evidencia falta para uso real?",
        "¿Qué no debe delegarse?"
      ],
      "future": "Añadir pruebas, changelog, plantillas y validación documentada.",
      "warning": "Uso docente. No se presenta como herramienta validada clínicamente salvo evidencia explícita."
    },
    {
      "name": "fharmacuentos",
      "category": "Herramienta docente verificada públicamente",
      "status": "prototipo/herramienta funcional en evaluación según repositorio",
      "problem": "Necesidad profesional identificada en farmacia, investigación, docencia, gestión o comunicación; el alcance exacto debe verificarse en README y código público antes de uso docente.",
      "users": "Farmacéuticos, docentes, investigadores o equipos sanitarios según el repositorio.",
      "solution": "Aplicación o recurso digital revisable públicamente, usado como ejemplo de evolución desde problema a producto.",
      "technology": "Predominio de HTML/CSS/JavaScript estático cuando GitHub informa lenguaje web; algunos repositorios incluyen bases de conocimiento, documentación o datos locales.",
      "aiRole": "Aceleración de desarrollo, documentación, revisión o prototipado; no autonomía clínica.",
      "humanDecisions": "Definir reglas, seleccionar evidencia, revisar cálculos, decidir publicación y mantenimiento.",
      "wentWell": "Permite enseñar repositorios reales, GitHub Pages, trazabilidad y revisión de límites.",
      "corrections": "Exige documentar alcance, licencia, pruebas, advertencias y posible validación.",
      "risks": "No usar datos reales; no asumir validación clínica; no modificar producción; comprobar licencia y despliegue.",
      "lessons": "La herramienta nace del criterio profesional y la IA solo acelera partes del ciclo.",
      "technicalLevel": "Nivel 2-4 según complejidad.",
      "reproductionTime": "2-12 horas en versión docente simplificada.",
      "repository": "https://github.com/ramonmorillo/fharmacuentos",
      "published": "https://ramonmorillo.github.io/fharmacuentos/",
      "activity": "Auditar README, estructura, advertencias, pruebas y una mejora segura sobre copia docente.",
      "debate": [
        "¿Qué evidencia falta para uso real?",
        "¿Qué no debe delegarse?"
      ],
      "future": "Añadir pruebas, changelog, plantillas y validación documentada.",
      "warning": "Uso docente. No se presenta como herramienta validada clínicamente salvo evidencia explícita."
    }
  ],
  "seminars": [
    {
      "id": "seminario-usuario-creador-180",
      "title": "De usuario a creador",
      "durationMinutes": 180,
      "targetLevel": "mixto",
      "maxParticipants": 30,
      "teamSize": 4,
      "prerequisites": [
        "Cuenta GitHub opcional",
        "Datos ficticios preparados"
      ],
      "preparation": [
        "Probar internet",
        "Descargar plantillas",
        "Crear equipos mixtos"
      ],
      "agenda": [
        {
          "minute": 0,
          "activity": "diagnóstico y objetivos"
        },
        {
          "minute": 20,
          "activity": "demostración"
        },
        {
          "minute": 55,
          "activity": "práctica guiada"
        },
        {
          "minute": 120,
          "activity": "pausa/revisión"
        },
        {
          "minute": 145,
          "activity": "presentaciones y rúbrica"
        }
      ],
      "roles": [
        "Explorador",
        "Operador",
        "Revisor",
        "Tester",
        "Responsable clínico",
        "Relator"
      ],
      "activities": [
        {
          "title": "Capa esencial",
          "task": "Identificar problema, riesgo y evidencia."
        },
        {
          "title": "Capa ampliada",
          "task": "Revisar estructura, prompt o diff."
        },
        {
          "title": "Reto experto",
          "task": "Proponer prueba, bug pedagógico o PR sobre plantilla."
        }
      ],
      "repositoryTemplates": [
        "plantilla-pagina-educativa",
        "plantilla-calculadora-docente",
        "plantilla-reglas-ficticias"
      ],
      "offlinePlan": {
        "summary": "Usar capturas, ZIP local, fichas impresas y datos ficticios si falla internet."
      },
      "teacherNotes": [
        "Ocultar soluciones",
        "Revelar pistas progresivas",
        "Registrar incidencias localmente"
      ],
      "solutions": [
        "Solución con checklist y límites, no publicación clínica."
      ],
      "rubric": [
        "Problema",
        "Seguridad",
        "Pruebas",
        "Trazabilidad",
        "Explicación"
      ],
      "resources": [
        "Hoja de sesión",
        "Rúbrica imprimible",
        "Datos ficticios"
      ]
    },
    {
      "id": "seminario-github-codex-240",
      "title": "GitHub y Codex",
      "durationMinutes": 240,
      "targetLevel": "mixto",
      "maxParticipants": 30,
      "teamSize": 4,
      "prerequisites": [
        "Cuenta GitHub opcional",
        "Datos ficticios preparados"
      ],
      "preparation": [
        "Probar internet",
        "Descargar plantillas",
        "Crear equipos mixtos"
      ],
      "agenda": [
        {
          "minute": 0,
          "activity": "diagnóstico y objetivos"
        },
        {
          "minute": 20,
          "activity": "demostración"
        },
        {
          "minute": 55,
          "activity": "práctica guiada"
        },
        {
          "minute": 120,
          "activity": "pausa/revisión"
        },
        {
          "minute": 205,
          "activity": "presentaciones y rúbrica"
        }
      ],
      "roles": [
        "Explorador",
        "Operador",
        "Revisor",
        "Tester",
        "Responsable clínico",
        "Relator"
      ],
      "activities": [
        {
          "title": "Capa esencial",
          "task": "Identificar problema, riesgo y evidencia."
        },
        {
          "title": "Capa ampliada",
          "task": "Revisar estructura, prompt o diff."
        },
        {
          "title": "Reto experto",
          "task": "Proponer prueba, bug pedagógico o PR sobre plantilla."
        }
      ],
      "repositoryTemplates": [
        "plantilla-pagina-educativa",
        "plantilla-calculadora-docente",
        "plantilla-reglas-ficticias"
      ],
      "offlinePlan": {
        "summary": "Usar capturas, ZIP local, fichas impresas y datos ficticios si falla internet."
      },
      "teacherNotes": [
        "Ocultar soluciones",
        "Revelar pistas progresivas",
        "Registrar incidencias localmente"
      ],
      "solutions": [
        "Solución con checklist y límites, no publicación clínica."
      ],
      "rubric": [
        "Problema",
        "Seguridad",
        "Pruebas",
        "Trazabilidad",
        "Explicación"
      ],
      "resources": [
        "Hoja de sesión",
        "Rúbrica imprimible",
        "Datos ficticios"
      ]
    },
    {
      "id": "seminario-claude-investigacion-210",
      "title": "Claude para investigación y docencia",
      "durationMinutes": 210,
      "targetLevel": "mixto",
      "maxParticipants": 30,
      "teamSize": 4,
      "prerequisites": [
        "Cuenta GitHub opcional",
        "Datos ficticios preparados"
      ],
      "preparation": [
        "Probar internet",
        "Descargar plantillas",
        "Crear equipos mixtos"
      ],
      "agenda": [
        {
          "minute": 0,
          "activity": "diagnóstico y objetivos"
        },
        {
          "minute": 20,
          "activity": "demostración"
        },
        {
          "minute": 55,
          "activity": "práctica guiada"
        },
        {
          "minute": 120,
          "activity": "pausa/revisión"
        },
        {
          "minute": 175,
          "activity": "presentaciones y rúbrica"
        }
      ],
      "roles": [
        "Explorador",
        "Operador",
        "Revisor",
        "Tester",
        "Responsable clínico",
        "Relator"
      ],
      "activities": [
        {
          "title": "Capa esencial",
          "task": "Identificar problema, riesgo y evidencia."
        },
        {
          "title": "Capa ampliada",
          "task": "Revisar estructura, prompt o diff."
        },
        {
          "title": "Reto experto",
          "task": "Proponer prueba, bug pedagógico o PR sobre plantilla."
        }
      ],
      "repositoryTemplates": [
        "plantilla-pagina-educativa",
        "plantilla-calculadora-docente",
        "plantilla-reglas-ficticias"
      ],
      "offlinePlan": {
        "summary": "Usar capturas, ZIP local, fichas impresas y datos ficticios si falla internet."
      },
      "teacherNotes": [
        "Ocultar soluciones",
        "Revelar pistas progresivas",
        "Registrar incidencias localmente"
      ],
      "solutions": [
        "Solución con checklist y límites, no publicación clínica."
      ],
      "rubric": [
        "Problema",
        "Seguridad",
        "Pruebas",
        "Trazabilidad",
        "Explicación"
      ],
      "resources": [
        "Hoja de sesión",
        "Rúbrica imprimible",
        "Datos ficticios"
      ]
    },
    {
      "id": "seminario-claude-code-experto-240",
      "title": "Claude Code experto",
      "durationMinutes": 240,
      "targetLevel": "mixto",
      "maxParticipants": 30,
      "teamSize": 4,
      "prerequisites": [
        "Cuenta GitHub opcional",
        "Datos ficticios preparados"
      ],
      "preparation": [
        "Probar internet",
        "Descargar plantillas",
        "Crear equipos mixtos"
      ],
      "agenda": [
        {
          "minute": 0,
          "activity": "diagnóstico y objetivos"
        },
        {
          "minute": 20,
          "activity": "demostración"
        },
        {
          "minute": 55,
          "activity": "práctica guiada"
        },
        {
          "minute": 120,
          "activity": "pausa/revisión"
        },
        {
          "minute": 205,
          "activity": "presentaciones y rúbrica"
        }
      ],
      "roles": [
        "Explorador",
        "Operador",
        "Revisor",
        "Tester",
        "Responsable clínico",
        "Relator"
      ],
      "activities": [
        {
          "title": "Capa esencial",
          "task": "Identificar problema, riesgo y evidencia."
        },
        {
          "title": "Capa ampliada",
          "task": "Revisar estructura, prompt o diff."
        },
        {
          "title": "Reto experto",
          "task": "Proponer prueba, bug pedagógico o PR sobre plantilla."
        }
      ],
      "repositoryTemplates": [
        "plantilla-pagina-educativa",
        "plantilla-calculadora-docente",
        "plantilla-reglas-ficticias"
      ],
      "offlinePlan": {
        "summary": "Usar capturas, ZIP local, fichas impresas y datos ficticios si falla internet."
      },
      "teacherNotes": [
        "Ocultar soluciones",
        "Revelar pistas progresivas",
        "Registrar incidencias localmente"
      ],
      "solutions": [
        "Solución con checklist y límites, no publicación clínica."
      ],
      "rubric": [
        "Problema",
        "Seguridad",
        "Pruebas",
        "Trazabilidad",
        "Explicación"
      ],
      "resources": [
        "Hoja de sesión",
        "Rúbrica imprimible",
        "Datos ficticios"
      ]
    },
    {
      "id": "seminario-auditoria-sanitaria-240",
      "title": "Auditoría de una herramienta sanitaria",
      "durationMinutes": 240,
      "targetLevel": "mixto",
      "maxParticipants": 30,
      "teamSize": 4,
      "prerequisites": [
        "Cuenta GitHub opcional",
        "Datos ficticios preparados"
      ],
      "preparation": [
        "Probar internet",
        "Descargar plantillas",
        "Crear equipos mixtos"
      ],
      "agenda": [
        {
          "minute": 0,
          "activity": "diagnóstico y objetivos"
        },
        {
          "minute": 20,
          "activity": "demostración"
        },
        {
          "minute": 55,
          "activity": "práctica guiada"
        },
        {
          "minute": 120,
          "activity": "pausa/revisión"
        },
        {
          "minute": 205,
          "activity": "presentaciones y rúbrica"
        }
      ],
      "roles": [
        "Explorador",
        "Operador",
        "Revisor",
        "Tester",
        "Responsable clínico",
        "Relator"
      ],
      "activities": [
        {
          "title": "Capa esencial",
          "task": "Identificar problema, riesgo y evidencia."
        },
        {
          "title": "Capa ampliada",
          "task": "Revisar estructura, prompt o diff."
        },
        {
          "title": "Reto experto",
          "task": "Proponer prueba, bug pedagógico o PR sobre plantilla."
        }
      ],
      "repositoryTemplates": [
        "plantilla-pagina-educativa",
        "plantilla-calculadora-docente",
        "plantilla-reglas-ficticias"
      ],
      "offlinePlan": {
        "summary": "Usar capturas, ZIP local, fichas impresas y datos ficticios si falla internet."
      },
      "teacherNotes": [
        "Ocultar soluciones",
        "Revelar pistas progresivas",
        "Registrar incidencias localmente"
      ],
      "solutions": [
        "Solución con checklist y límites, no publicación clínica."
      ],
      "rubric": [
        "Problema",
        "Seguridad",
        "Pruebas",
        "Trazabilidad",
        "Explicación"
      ],
      "resources": [
        "Hoja de sesión",
        "Rúbrica imprimible",
        "Datos ficticios"
      ]
    }
  ],
  "toolComparator": {
    "reviewedAt": "2026-07-14",
    "criteria": [
      "tipo de tarea",
      "entorno",
      "archivos",
      "repositorios",
      "código",
      "privacidad",
      "trazabilidad",
      "nivel requerido"
    ],
    "tools": [
      "Claude",
      "Claude Code",
      "Codex",
      "GitHub",
      "ChatGPT"
    ]
  },
  "badges": [
    {
      "name": "Usuario crítico de IA",
      "evidence": [
        "Actividad práctica",
        "Checklist",
        "Reflexión",
        "Revisión humana"
      ]
    },
    {
      "name": "Diseñador de flujos",
      "evidence": [
        "Actividad práctica",
        "Checklist",
        "Reflexión",
        "Revisión humana"
      ]
    },
    {
      "name": "Creador de herramientas",
      "evidence": [
        "Actividad práctica",
        "Checklist",
        "Reflexión",
        "Revisión humana"
      ]
    },
    {
      "name": "Supervisor de agentes",
      "evidence": [
        "Actividad práctica",
        "Checklist",
        "Reflexión",
        "Revisión humana"
      ]
    },
    {
      "name": "Revisor de repositorios",
      "evidence": [
        "Actividad práctica",
        "Checklist",
        "Reflexión",
        "Revisión humana"
      ]
    },
    {
      "name": "Auditor de aplicaciones",
      "evidence": [
        "Actividad práctica",
        "Checklist",
        "Reflexión",
        "Revisión humana"
      ]
    },
    {
      "name": "Arquitecto de IA farmacéutica",
      "evidence": [
        "Actividad práctica",
        "Checklist",
        "Reflexión",
        "Revisión humana"
      ]
    },
    {
      "name": "Facilitador de formación",
      "evidence": [
        "Actividad práctica",
        "Checklist",
        "Reflexión",
        "Revisión humana"
      ]
    }
  ],
  "references": [
    {
      "label": "GitHub Docs",
      "url": "https://docs.github.com/",
      "checked": "2026-07-14"
    },
    {
      "label": "OpenAI Codex",
      "url": "https://openai.com/codex/",
      "checked": "2026-07-14"
    },
    {
      "label": "Claude",
      "url": "https://www.anthropic.com/claude",
      "checked": "2026-07-14"
    },
    {
      "label": "Claude Code docs",
      "url": "https://docs.anthropic.com/en/docs/claude-code",
      "checked": "2026-07-14"
    },
    {
      "label": "Reglamento UE 2024/1689 de IA",
      "url": "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
      "checked": "2026-07-14"
    },
    {
      "label": "OMS ética y gobernanza de IA en salud",
      "url": "https://www.who.int/publications/i/item/9789240029200",
      "checked": "2026-07-14"
    }
  ],
  "versionHistory": [
    {
      "version": "4.0.0",
      "date": "2026-07-14",
      "type": "Rediseño práctico",
      "changes": "Cinco niveles, rutas GitHub/Codex/Claude/Claude Code, portfolio, talleres, evaluación por evidencias y validación ampliada.",
      "responsible": "Ramón Morillo Verdugo"
    }
  ],
  "glossary": {
    "MCP": "Patrón para conectar modelos con herramientas y recursos bajo permisos controlados.",
    "Agente": "Sistema que planifica y usa herramientas con supervisión.",
    "Validación clínica": "Proceso formal que no se presume por existir un repositorio público."
  },
  "cases": []
};
