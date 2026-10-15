# Análisis comparativo de webs profesionales (octubre de 2026)

Fuente: capturas de pantalla facilitadas por el autor el 15/10/2026 (portada y dos secciones de cada web). El entorno de desarrollo no tenía acceso de red a `dr.juanmoradelgado.com` ni a `garciapellicer.ai`, así que **solo se analiza lo visible en las capturas**. Las páginas internas (servicios completos, ponencias, «Lo último», zona privada, política de privacidad) no se han revisado.

## 1. Lo observado

| Elemento | Juan Mora Delgado | Javier García Pellicer | Ramón Morillo (antes) |
|---|---|---|---|
| Perfil | Médico internista, doctor en Ciencias de la Salud | Farmacéutico de hospital | Farmacéutico de hospital, coordinador MAPEX |
| Navegación | Recursos · Servicios · Hablemos · EN · Oscuro | Proyectos · Preceptorship · Lo último · Ponencias · Sobre mí · Zona privada · Hablemos | Formación · Conferencias · Mentorías · Proyectos · Sobre mí · Hablemos · tema |
| Titular | «Tu día tiene 24 horas. El mío también.» + «La diferencia es cómo usamos la IA en la práctica clínica y la investigación» | Marca «GarcIA Pellicer» + «IA con criterio. No es el futuro: la uso cada día» | «IA que entiende la farmacia hospitalaria» |
| Problema del lector | Sección «En tu servicio ya se usa IA todos los días. Y nadie sabe cómo», con escenarios concretos | No visible | No existía |
| Captación | Repositorio gratuito (prompts, plantillas, copilotos, checklists) **a cambio del correo** (Brevo, información RGPD completa) | «Zona privada» con acceso restringido | Formulario de contacto; recursos dispersos por el aula |
| Cifras | +3.000 sanitarios formados · +50 copilotos · +170 comunicaciones y publicaciones · vocal I+D+i de la SEMI | 9 desarrollos, 1 base de datos (en una tarjeta de proyecto) | Cifras internas (programas, casos, herramientas, niveles) en otra vista |
| Reconocimientos | Cargo en sociedad científica | Primer premio PharmaChallenge 6.0 (2026); finalistas Premios Profesor Barea 2026 | No visibles en portada |
| Servicios | «Qué te llevas»: ocho líneas para instituciones, agencias e industria; talleres con seis formatos y lista de talleres ya impartidos, con foto | Preceptorship en IA; acompañamiento individual o en grupos pequeños | Formación, conferencias, mentorías y consultoría (bien estructuradas, pero en vistas separadas) |
| Proyectos | No visibles | Tarjetas visuales con estado («En marcha»): El Astillero, ACM La Fe · GIA, Cerebro digital | Hub CMO, Cascade Auditor e IRIS, sin estado ni imagen |
| Otros | Versión en inglés y modo oscuro | Tono personal («soñador inquieto») | Modo oscuro, aula completa y biblioteca técnica |

## 2. Interpretación

**Qué hacen mejor que la versión anterior:**
1. Arrancan por el problema del lector, no por la oferta. El bloque de escenarios de Mora Delgado es el recurso de conversión más eficaz de las capturas.
2. Su prueba social es cuantitativa y está arriba (formados, publicaciones, premios).
3. Dan un recurso gratuito concreto en la portada.
4. Muestran sesiones ya impartidas con fotografía.

**Qué no tienen y sí tiene esta web:**
1. **Un modelo asistencial propio y adoptado a escala nacional** (CMO/MAPEX), del que derivan las herramientas. Mora Delgado se centra en la productividad clínica e investigadora; García Pellicer, en la gestión del servicio y la productividad personal. Ninguno presenta un método asistencial del que deriven sus herramientas.
2. **Propiedad intelectual registrada** (dos asientos).
3. **Material docente completo y público**: aula de 14 sesiones, 32 casos, 35 módulos y páginas propias de cada taller con sus materiales.
4. **Rigor explícito sobre límites** (validación clínica, datos de pacientes). Es un diferenciador, no una debilidad, ante un público de farmacia hospitalaria.

**Riesgo detectado:** competir en «cifras de impacto» sin datos verificados sería contraproducente. No consta el número de personas formadas por Ramón Morillo; no se ha inventado.

## 3. Decisiones aplicadas en la nueva portada (v6)

| Dato o hallazgo | Decisión |
|---|---|
| El problema del lector convierte mejor que la oferta | Nueva sección «La IA ya ha entrado en tu servicio de farmacia. Falta el método», con cuatro escenarios de farmacia hospitalaria |
| El diferencial real es CMO/MAPEX | Titular «IA con método para la farmacia hospitalaria» y sección «Método» en cuatro pasos (delimitar, construir, verificar, decidir), vinculada a la estratificación |
| Prueba social cuantitativa | Franja con datos ya declarados en la web: +20 años, coordinación MAPEX desde 2014, +100 publicaciones, nº de herramientas CMO (calculado desde `data.portfolio`) y 2 registros de propiedad intelectual |
| Mora Delgado pide el correo a cambio del repositorio | «Recursos abiertos. Sin registro y sin correo»: ocho recursos existentes (aula, casos, directorio, glosario y descargas). Además evita tratar datos personales sin aviso legal |
| Servicios repartidos en varias vistas | Lista única de cinco formatos con enlace a cada vista |
| Sesiones impartidas con foto | Galería con las fotos de FOCO-VIH y Sevilla ya publicadas en sus páginas, más próxima y última cita |
| Proyectos sin estado | Etiqueta de estado y número de registro en cada tarjeta |
| Dudas habituales | Bloque de preguntas frecuentes en la portada |

## 4. Decisiones del autor (15/10/2026)

- **Recursos abiertos, sin pedir correo.** Se mantienen. Motivos: en esta fase importa más la confianza y la difusión que la captación; pedir el correo exige aviso legal, política de privacidad y un proveedor de envíos; y el acceso abierto es coherente con el mensaje de la web. Se reconsiderará como suscripción **opcional** (nunca como requisito para descargar) cuando haya contenido periódico que enviar.
- **Sin número de personas formadas ni testimonios.** La actividad formativa es reciente; una cifra baja resta en lugar de sumar. La prueba social se apoya en trayectoria, MAPEX, publicaciones, herramientas, registros y sesiones con materiales públicos.
- **Reconocimientos: todavía no.** La portada incluye una franja preparada que solo aparece cuando `HOME_RECOGNITIONS` (en `js/teaching.js`) tiene contenido. Para activarla basta con añadir un objeto con título, año, detalle y enlace a la fuente.

## 5. Pendiente

- Cifra de personas formadas y testimonios con consentimiento, cuando haya volumen suficiente.
- Logos de entidades, solo con autorización.
- Versión en inglés, si interesa el público internacional.
- Revisar las páginas internas de ambas webs cuando haya acceso de red.
