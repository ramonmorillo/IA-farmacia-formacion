"""Genera el PDF ficticio «PNT-FH-17 · Telefarmacia» usado como fuente 1 en los talleres.

Uso: python3 scripts/generar-pnt-telefarmacia.py
Escribe una copia por taller con su cabecera. El texto es idéntico en todas: los ejercicios
de Gemini Notebook comparan este PNT con la hoja para pacientes y dependen de sus cifras.
"""
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import cm
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

TALLERES = {
    'assets/sevilla-14-octubre/fuente-1-pnt-telefarmacia-ficticio.pdf': 'Sevilla (14-10-2026)',
    'assets/santiago-16-noviembre/fuente-1-pnt-telefarmacia-ficticio.pdf': 'Santiago de Compostela (16-11-2026)',
}

WINE = colors.Color(.541176, .101961, .313725)
NAVY = colors.Color(.109804, .184314, .419608)
HEAD_BG = colors.Color(.933333, .945098, .972549)

aviso = ParagraphStyle('aviso', fontName='Helvetica', fontSize=9, leading=12, textColor=WINE,
                       borderColor=WINE, borderWidth=.8, borderPadding=6, spaceAfter=14)
titulo = ParagraphStyle('titulo', fontName='Helvetica-Bold', fontSize=15, leading=19, textColor=NAVY, spaceAfter=6)
cuerpo = ParagraphStyle('cuerpo', fontName='Helvetica', fontSize=10, leading=14, spaceAfter=6)
apartado = ParagraphStyle('apartado', fontName='Helvetica-Bold', fontSize=11.5, leading=15, textColor=WINE,
                          spaceBefore=8, spaceAfter=6)
vineta = ParagraphStyle('vineta', parent=cuerpo, leftIndent=10, bulletIndent=0, spaceAfter=4)
celda = ParagraphStyle('celda', fontName='Helvetica', fontSize=9, leading=12)
celda_cab = ParagraphStyle('celda_cab', parent=celda, fontName='Helvetica-Bold')


def lista(items):
    return [Paragraph(t, vineta, bulletText='•') for t in items]


def historia(taller):
    circuito = [
        ('Periodicidad', 'Los envíos se realizan cada 8 semanas como máximo.'),
        ('Llamada previa', 'El farmacéutico llama al paciente 5 días hábiles antes del envío. Revisa adherencia, efectos adversos, medicación nueva y dirección de entrega.'),
        ('Sin contacto', 'Si no se consigue hablar con el paciente tras 2 intentos en días distintos, el envío se suspende y se cita al paciente de forma presencial.'),
        ('Registro', 'Cada llamada se registra en la historia farmacoterapéutica con la plantilla TF-2.'),
        ('Visita presencial', 'Todo paciente en telefarmacia acude al menos 1 vez cada 6 meses a la consulta presencial.'),
    ]
    tabla = Table([[Paragraph('Paso', celda_cab), Paragraph('Qué se hace', celda_cab)]]
                  + [[Paragraph(a, celda), Paragraph(b, celda)] for a, b in circuito],
                  colWidths=[3.6 * cm, None], repeatRows=1)
    tabla.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), HEAD_BG),
        ('GRID', (0, 0), (-1, -1), .5, colors.Color(.501961, .501961, .501961)),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('TOPPADDING', (0, 0), (-1, -1), 4), ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
    ]))
    return [
        Paragraph(f'DOCUMENTO FICTICIO CON FINES DOCENTES. Hospital, servicio, criterios y plazos inventados para el taller de IA de {taller}. No es un procedimiento real ni una recomendación clínica.', aviso),
        Paragraph('PNT-FH-17 · Telefarmacia con envío domiciliario a pacientes externos (versión 3, marzo 2026)', titulo),
        Paragraph('<b>Hospital Universitario Ficticio San Rafael · Servicio de Farmacia Hospitalaria</b>. Responsable del procedimiento: Unidad de Pacientes Externos. Próxima revisión: marzo de 2027.', cuerpo),
        Paragraph('1. Objetivo', apartado),
        Paragraph('Establecer cómo se selecciona, se sigue y se da de baja a los pacientes externos que reciben su medicación en el domicilio, sin perder la calidad de la atención farmacéutica presencial.', cuerpo),
        Paragraph('2. Criterios de inclusión (deben cumplirse todos)', apartado),
        *lista(['Al menos 6 meses con el mismo tratamiento dispensado en la Unidad de Pacientes Externos.',
                'Adherencia igual o superior al 90 % por registro de dispensación en los últimos 6 meses.',
                'Sin cambios de tratamiento en los últimos 3 meses.',
                'Haber firmado el consentimiento específico de telefarmacia.',
                'Disponer de un teléfono de contacto verificado en la última visita presencial.']),
        Paragraph('3. Criterios de exclusión', apartado),
        *lista(['Medicamentos que requieren conservación entre 2 y 8 °C cuando el domicilio está fuera de la provincia.',
                'Inicio de tratamiento o cambio de tratamiento previsto en los próximos 2 meses.',
                'Dos o más incidencias de entrega no resueltas en los últimos 6 meses.']),
        Paragraph('4. Circuito', apartado),
        tabla,
        Paragraph('5. Criterios de baja del programa', apartado),
        *lista(['Adherencia inferior al 80 % en dos envíos consecutivos.',
                'Cambio de tratamiento.',
                'Petición del paciente o de su médico responsable.']),
        Paragraph('6. Indicadores', apartado),
        *lista(['Porcentaje de envíos entregados en plazo (objetivo: 95 % o más).',
                'Porcentaje de llamadas previas realizadas (objetivo: 100 %).',
                'Número de pacientes que vuelven a la consulta presencial por incidencias, al trimestre.']),
    ]


for ruta, taller in TALLERES.items():
    doc = SimpleDocTemplate(ruta, pagesize=A4, leftMargin=2 * cm, rightMargin=2 * cm, topMargin=2 * cm,
                            bottomMargin=2 * cm, title='PNT-FH-17 · Telefarmacia (documento ficticio)',
                            author='Ramón Morillo Verdugo', invariant=1)
    doc.build(historia(taller))
    print('Generado', ruta)
