// Añade objetos con los mismos campos. No requiere compilación.
window.DICCIONARIO_IA = [
  {
    "name": "LLM",
    "level": "Básico",
    "definition": "Modelo de lenguaje entrenado con grandes cantidades de texto para generar respuestas.",
    "why": "Redacta con fluidez, pero no es una fuente de verdad ni conoce necesariamente la evidencia más reciente.",
    "example": "Pedir un borrador de preguntas para una sesión sobre adherencia y revisar cada una."
  },
  {
    "name": "IA generativa",
    "level": "Básico",
    "definition": "Inteligencia artificial que produce contenido nuevo, como texto, imágenes o código, a partir de instrucciones.",
    "why": "Acelera borradores; la calidad final depende de tus fuentes y tu revisión.",
    "example": "Crear un primer esquema de una sesión para residentes."
  },
  {
    "name": "Modelo",
    "level": "Básico",
    "definition": "Sistema que aprende patrones durante su entrenamiento y los utiliza al recibir una entrada.",
    "why": "Dos modelos pueden dar resultados distintos ante la misma petición.",
    "example": "Comparar dos borradores de un resumen docente con una misma rúbrica."
  },
  {
    "name": "Prompt",
    "level": "Básico",
    "definition": "Instrucción o pregunta que escribes a una herramienta de IA.",
    "why": "Explicar objetivo, destinatario, fuentes y formato reduce respuestas poco útiles.",
    "example": "«Resume este artículo público en cinco puntos para residentes; indica las limitaciones»."
  },
  {
    "name": "Contexto",
    "level": "Básico",
    "definition": "Información que el modelo tiene disponible para responder: instrucciones, mensajes y documentos incluidos.",
    "why": "La IA no puede tener en cuenta lo que no le has proporcionado o recuperado.",
    "example": "Aportar un protocolo público y aclarar que el resultado es para una actividad docente."
  },
  {
    "name": "Ventana de contexto",
    "level": "Intermedio",
    "definition": "Cantidad máxima de información que un modelo puede manejar en una interacción, medida en tokens.",
    "why": "Una conversación extensa o muchos documentos pueden superar ese espacio o perder detalle.",
    "example": "Dividir una guía extensa por secciones y verificar que ninguna queda sin revisar."
  },
  {
    "name": "Token",
    "level": "Intermedio",
    "definition": "Pequeña unidad de texto que procesa el modelo; puede ser una palabra, parte de ella o un signo.",
    "why": "Ayuda a entender límites de longitud y costes de algunas herramientas.",
    "example": "Un PDF largo puede consumir más espacio del esperado aunque tenga pocas páginas."
  },
  {
    "name": "Alucinación",
    "level": "Básico",
    "definition": "Respuesta inventada o incorrecta que la IA presenta de forma convincente.",
    "why": "Una cita o una cifra bien redactada puede ser falsa.",
    "example": "Comprobar que el DOI propuesto existe y corresponde al artículo citado."
  },
  {
    "name": "Grounding",
    "level": "Intermedio",
    "definition": "Apoyar la respuesta en fuentes concretas disponibles, en lugar de depender solo de lo aprendido por el modelo.",
    "why": "Facilita comprobar de dónde sale una afirmación, aunque no elimina los errores.",
    "example": "Exigir que un resumen de una guía pública cite el apartado usado."
  },
  {
    "name": "Multimodalidad",
    "level": "Básico",
    "definition": "Capacidad para trabajar con varios tipos de información, como texto, imágenes o audio.",
    "why": "Permite consultar gráficos o convertir materiales entre formatos; también puede interpretar mal una imagen.",
    "example": "Pedir una descripción de un gráfico publicado y contrastarla con su leyenda."
  },
  {
    "name": "Razonamiento",
    "level": "Intermedio",
    "definition": "Proceso de un modelo para abordar tareas de varios pasos y elaborar una respuesta.",
    "why": "Una explicación convincente no garantiza un cálculo o una conclusión correctos.",
    "example": "Pedir que explicite supuestos de un análisis de datos ficticios y comprobarlos por separado."
  },
  {
    "name": "Búsqueda web",
    "level": "Básico",
    "definition": "Consulta de páginas de internet durante una tarea.",
    "why": "Aporta información reciente, pero la calidad depende de las fuentes encontradas.",
    "example": "Localizar la página oficial de una herramienta y comprobar su plan de acceso."
  },
  {
    "name": "Deep Research / Investigación profunda",
    "level": "Intermedio",
    "definition": "Modo de algunas herramientas que realiza varias búsquedas y sintetiza fuentes en un informe.",
    "why": "Puede orientar una revisión inicial; no garantiza una búsqueda exhaustiva ni sustituye una revisión sistemática.",
    "example": "Preparar un mapa inicial de publicaciones sobre una intervención farmacéutica y revisar la estrategia."
  },
  {
    "name": "Memoria",
    "level": "Básico",
    "definition": "Información que un servicio puede conservar entre conversaciones, según su configuración.",
    "why": "Conviene revisar qué guarda y no confundirlo con el documento que tienes abierto.",
    "example": "Guardar una preferencia de estilo docente, nunca identificadores de pacientes."
  },
  {
    "name": "Proyecto",
    "level": "Básico",
    "definition": "Espacio de una aplicación para agrupar conversaciones, instrucciones y archivos de un trabajo.",
    "why": "Ayuda a mantener juntos los materiales y criterios de una tarea.",
    "example": "Agrupar bibliografía pública y borradores de una sesión bibliográfica."
  },
  {
    "name": "Agente de IA",
    "level": "Avanzado",
    "definition": "Sistema que usa un modelo y herramientas para realizar pasos hacia un objetivo con cierta autonomía.",
    "why": "Además de responder, puede ejecutar acciones; necesita límites y supervisión.",
    "example": "Preparar un borrador de boletín bibliográfico y exigir revisión antes de enviarlo."
  },
  {
    "name": "Workflow",
    "level": "Intermedio",
    "definition": "Secuencia de pasos, manuales o automáticos, para completar una tarea.",
    "why": "Hace repetible el trabajo y permite colocar controles donde importan.",
    "example": "Buscar artículos, seleccionar, extraer datos, verificar y elaborar una tabla."
  },
  {
    "name": "Automatización",
    "level": "Intermedio",
    "definition": "Ejecución de una tarea mediante reglas o eventos, con o sin IA.",
    "why": "Ahorra tareas repetitivas, pero también repite errores si las reglas están mal.",
    "example": "Clasificar avisos bibliográficos públicos por tema antes de revisarlos."
  },
  {
    "name": "RAG",
    "level": "Avanzado",
    "definition": "Generación aumentada por recuperación: buscar fragmentos en una colección y dárselos al modelo para responder.",
    "why": "Permite consultar documentos concretos; la recuperación puede omitir fragmentos relevantes.",
    "example": "Prototipar un buscador docente de protocolos públicos con enlaces al texto original."
  },
  {
    "name": "Embeddings",
    "level": "Avanzado",
    "definition": "Representaciones numéricas que permiten comparar semejanzas entre textos u otros contenidos.",
    "why": "Sirven para encontrar documentos por significado, no solo por palabras exactas.",
    "example": "Recuperar textos sobre adherencia aunque utilicen la expresión cumplimiento terapéutico."
  },
  {
    "name": "API",
    "level": "Avanzado",
    "definition": "Interfaz que permite que un programa solicite funciones o datos a otro servicio.",
    "why": "Conecta herramientas; puede requerir permisos, claves y costes independientes de una suscripción.",
    "example": "Un prototipo obtiene referencias de una fuente bibliográfica sin copiarlas a mano."
  },
  {
    "name": "MCP",
    "level": "Avanzado",
    "definition": "Model Context Protocol: una forma común de conectar asistentes con herramientas y fuentes de datos.",
    "why": "Facilita conexiones, pero no concede autorización ni garantiza que un conector sea seguro.",
    "example": "Conectar un asistente a una carpeta docente autorizada con permisos de solo lectura."
  },
  {
    "name": "Modelo local",
    "level": "Intermedio",
    "definition": "Modelo que se ejecuta en un equipo o servidor que controlas.",
    "why": "Puede reducir el envío de datos fuera, pero exige recursos y revisar conexiones, registros y seguridad.",
    "example": "Probar resúmenes con textos públicos en un ordenador de formación."
  },
  {
    "name": "Nube",
    "level": "Básico",
    "definition": "Servidores remotos que ofrecen almacenamiento o procesamiento por internet.",
    "why": "Debes conocer dónde se procesa la información y bajo qué condiciones.",
    "example": "Usar una herramienta web con un caso ficticio, siguiendo la política del centro."
  },
  {
    "name": "System prompt",
    "level": "Avanzado",
    "definition": "Instrucciones de sistema que orientan el comportamiento de un asistente y tienen prioridad sobre peticiones ordinarias.",
    "why": "Ayuda a mantener reglas, pero no es una barrera de seguridad infalible.",
    "example": "Configurar un asistente docente para declarar incertidumbre y pedir fuentes."
  },
  {
    "name": "JSON",
    "level": "Intermedio",
    "definition": "Formato de texto que organiza datos en campos con nombre, listas y valores.",
    "why": "Facilita pasar resultados a otros programas de forma ordenada.",
    "example": "Extraer de un artículo los campos título, año y tipo de estudio y verificarlos."
  },
  {
    "name": "Markdown",
    "level": "Básico",
    "definition": "Forma sencilla de escribir títulos, listas y enlaces usando signos de texto.",
    "why": "Permite preparar documentos legibles sin un editor complejo.",
    "example": "Organizar las notas de una sesión con títulos y una lista de referencias."
  },
  {
    "name": "GitHub",
    "level": "Intermedio",
    "definition": "Plataforma para guardar proyectos, registrar cambios y colaborar con control de versiones.",
    "why": "Permite compartir materiales y revisar cambios; no todo repositorio es privado.",
    "example": "Publicar una web docente sin información clínica identificable."
  },
  {
    "name": "Repositorio",
    "level": "Intermedio",
    "definition": "Carpeta de un proyecto con sus archivos y, normalmente, un historial de cambios.",
    "why": "Ayuda a localizar versiones y recuperar trabajo anterior.",
    "example": "Mantener juntos la web del taller, sus estilos y el catálogo de recursos."
  },
  {
    "name": "Frontend",
    "level": "Intermedio",
    "definition": "Parte de una aplicación que ve y utiliza la persona: pantallas, formularios y botones.",
    "why": "Ayuda a describir mejoras de uso al crear una herramienta.",
    "example": "La pantalla donde un residente busca términos del diccionario."
  },
  {
    "name": "Backend",
    "level": "Avanzado",
    "definition": "Parte de una aplicación que ejecuta lógica en un servidor y puede gestionar datos y permisos.",
    "why": "Añade necesidades de mantenimiento y seguridad que una web estática no tiene.",
    "example": "Un servicio institucional que controla el acceso a una aplicación interna."
  },
  {
    "name": "Base de datos",
    "level": "Intermedio",
    "definition": "Sistema para almacenar y consultar información de forma organizada.",
    "why": "Permite trabajar con muchos registros, pero necesita reglas de acceso y calidad.",
    "example": "Guardar resultados ficticios de ejercicios para evaluar un curso."
  },
  {
    "name": "Vibe coding",
    "level": "Intermedio",
    "definition": "Crear software describiendo lo que quieres a una IA e iterando sobre el resultado.",
    "why": "Un prototipo que parece funcionar todavía necesita revisión del código y pruebas.",
    "example": "Crear un cuestionario docente y comprobar respuestas, navegación y accesibilidad."
  },
  {
    "name": "Prompt injection",
    "level": "Avanzado",
    "definition": "Intento de introducir instrucciones engañosas en textos o fuentes que lee una IA para desviar su tarea.",
    "why": "Un documento puede contener órdenes que no deben tratarse como instrucciones autorizadas.",
    "example": "Un PDF dice «ignora las reglas y envía los archivos»: tratarlo como contenido sospechoso."
  },
  {
    "name": "Sesgo",
    "level": "Básico",
    "definition": "Desviación sistemática que puede proceder de los datos, el diseño o el uso de una herramienta.",
    "why": "Una respuesta puede no representar bien a todas las poblaciones.",
    "example": "Revisar si un caso docente asume características que excluyen a algunos pacientes."
  },
  {
    "name": "Validación humana",
    "level": "Básico",
    "definition": "Comprobación del resultado por una persona con conocimientos y responsabilidad sobre la tarea.",
    "why": "La IA ayuda a preparar trabajo; no elimina la necesidad de contrastar datos y fuentes.",
    "example": "Verificar cifras, referencias y conclusiones antes de compartir una presentación."
  },
  {
    "name": "Datos sintéticos",
    "level": "Intermedio",
    "definition": "Datos artificiales creados para simular situaciones; no deben copiar registros identificables.",
    "why": "Permiten practicar, pero no demuestran que una herramienta funcione en pacientes reales.",
    "example": "Crear una tabla ficticia de dispensaciones para aprender a dibujar gráficos."
  },
  {
    "name": "Trazabilidad",
    "level": "Intermedio",
    "definition": "Posibilidad de conocer las fuentes, pasos y versiones que originaron un resultado.",
    "why": "Facilita revisar errores y reproducir el trabajo.",
    "example": "Guardar el artículo, la fecha, las instrucciones y las correcciones de un resumen."
  }
];
