<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Reconocimiento de conceptos sobre gestión de plataformas digitales y comunicación cultural.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> fortalecer los conocimientos relacionados con la gestión de plataformas digitales y la comunicación cultural, mediante el reconocimiento de sus principales conceptos y aplicaciones.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué define principalmente la selección de una plataforma digital en una institución cultural?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El presupuesto del proveedor tecnológico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los objetivos de comunicación y los perfiles de la audiencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La cantidad de herramientas multimedia que posee el canal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La popularidad del canal en el sector comercial de la región.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha reconocido que la selección de una plataforma depende de los objetivos de comunicación y de la audiencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es la función principal de un sitio <em>web</em> institucional en el ecosistema digital de un museo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Actuar como el espacio central de consulta permanente de colecciones y servicios.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Emitir contenidos rápidos de actualidad que desaparecen en pocas horas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir por completo las visitas guiadas presenciales en las salas físicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Servir de canal exclusivo para la resolución de quejas de usuarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha identificado la función del sitio <em>web</em> como canal principal de información institucional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿En qué consiste una estrategia narrativa transmedia aplicada al patrimonio?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'En repetir el mismo texto e imagen de forma idéntica en todas las redes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'En traducir los catálogos impresos a un formato PDF descargable en la <em>web.</em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'En fragmentar un relato en varios canales donde cada medio aporta datos nuevos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'En contratar agencias externas para que administren las cuentas del museo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha reconocido que la narrativa transmedia complementa un relato a través de diferentes medios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Si un museo necesita explicar cronologías históricas complejas o datos estadísticos densos de un vistazo, ¿qué formato es el más adecuado?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un pódcast de entrevista a profundidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una infografía estructurada con diagramas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un hilo de texto plano en redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una transmisión en vivo por canales de video.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha identificado la infografía como un recurso adecuado para sintetizar información compleja.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué diferencia fundamental existe entre una audiencia digital y una comunidad virtual?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La audiencia solo accede de noche y la comunidad interactúa todo el día.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La comunidad sostiene un diálogo continuo y estable a lo largo del tiempo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La audiencia está compuesta solo por investigadores y expertos en arte.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La comunidad requiere obligatoriamente un pago de suscripción mensual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha reconocido que una comunidad virtual se fortalece mediante la interacción continua.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cómo se define el proceso de segmentación de audiencias digitales?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Clasificar al público en grupos afines según edades, intereses o conductas de navegación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Bloquear a los usuarios que dejan comentarios negativos en las publicaciones del museo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Enviar correos electrónicos masivos a todos los ciudadanos de una base de datos local.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Dividir el presupuesto de publicidad digital entre las diferentes redes sociales del mes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha identificado que la segmentación organiza las audiencias según sus características e intereses.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el rol de un gestor de comunidades virtuales en el foro temático de un museo?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Escribir ensayos académicos extensos firmados por la dirección de la entidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Orientar el debate, proponer temas y hacer cumplir las normas de convivencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Diseñar el código de programación del sitio <em>web</em> y los repositorios digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Censurar cualquier interpretación del patrimonio que no sea de carácter oficial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha reconocido el papel del gestor de comunidades en la orientación de las interacciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué es un protocolo de comunicación digital institucional?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un sistema informático de protección contra ataques y robo de datos en la red.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un manual de estilo y respuesta que unifica el tono del museo en sus canales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Una ley nacional que obliga a los museos a digitalizar sus colecciones físicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un contrato comercial que firman los museos con las empresas de telefonía.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha identificado que un protocolo de comunicación orienta la gestión de los canales digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué conjunto de normas regula el comportamiento respetuoso de los usuarios en entornos virtuales?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los términos de derechos de autor de las imágenes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El manual de funciones del departamento de prensa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La netiqueta o pautas de convivencia digital.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El protocolo de seguridad de los servidores <em>web.</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha reconocido que la netiqueta promueve una convivencia respetuosa en los entornos digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'Dentro del ciclo de gestión de contenidos, ¿en qué consiste la fase de distribución?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Archivar los materiales viejos en discos duros locales fuera de internet.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Poner a circular los recursos adaptados a través de los canales digitales seleccionados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Redactar los textos de investigación curatorial junto a los historiadores del centro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Contar el número total de me gusta que recibió una publicación durante el año.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha identificado que la distribución consiste en difundir los contenidos por los canales seleccionados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué es el <em>engagement</em> en una estrategia de comunicación digital?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El número total de publicaciones realizadas durante un mes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El costo de las campañas publicitarias en redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El nivel de interés, participación y vínculo que generan los contenidos en las audiencias.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La cantidad de plataformas digitales utilizadas por una institución.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha reconocido que el <em>engagement</em> refleja el nivel de participación de las audiencias.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Por qué es importante planificar los contenidos antes de publicarlos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque permite mantener coherencia entre objetivos, público y mensajes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Porque reduce la necesidad de utilizar imágenes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque elimina la interacción con los usuarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque reemplaza la estrategia de comunicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha identificado la importancia de planificar los contenidos antes de publicarlos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es una ventaja de utilizar videos cortos en la comunicación digital de un museo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permiten presentar únicamente información técnica especializada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitan la difusión de contenidos de forma dinámica y atractiva.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituyen completamente otros formatos de contenido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducen la necesidad de definir objetivos de comunicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha reconocido que los videos cortos favorecen una divulgación dinámica y atractiva.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué aspecto debe considerarse al seleccionar una plataforma digital para divulgar patrimonio cultural?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de cuentas personales del equipo de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Las características del público objetivo y el tipo de contenido.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La antigüedad de la institución cultural.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El número de funcionarios del museo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha identificado que la elección de la plataforma depende del público y del contenido.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Qué función cumple una parrilla de contenidos?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Crear automáticamente publicaciones para todas las plataformas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organizar y planificar las publicaciones de acuerdo con una estrategia definida.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad de segmentar audiencias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar el presupuesto de la institución.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha reconocido que la parrilla de contenidos facilita la planificación de las publicaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué tipo de contenido favorece la participación activa de las audiencias?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Documentos administrativos internos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Encuestas, preguntas y recursos interactivos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Listados extensos de normativa institucional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Informes financieros del museo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha identificado que los recursos interactivos promueven la participación de las audiencias.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es el propósito de analizar la interacción de las audiencias con los contenidos digitales?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Determinar qué contenidos generan mayor interés y participación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar todos los contenidos que no sean audiovisuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar exclusivamente el número de publicaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir la estrategia de comunicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha reconocido que analizar la interacción permite mejorar la estrategia de comunicación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué característica debe tener el mensaje principal de una publicación cultural?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser diferente al objetivo de comunicación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Contener únicamente datos técnicos especializados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ser claro, coherente y relevante para el público objetivo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Incluir la mayor cantidad posible de información en un solo contenido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha identificado la importancia de un mensaje claro, coherente y pertinente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Por qué es importante adaptar los contenidos a cada plataforma digital?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque todas las plataformas funcionan exactamente igual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque cada canal tiene características, formatos y formas de interacción diferentes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Porque reduce la necesidad de planificar contenidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque permite publicar el mismo contenido sin modificaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha reconocido que los contenidos deben adaptarse a las características de cada plataforma.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué contribuye a fortalecer una comunidad virtual vinculada al patrimonio cultural?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La publicación ocasional de contenidos sin responder a los usuarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La eliminación de comentarios y preguntas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La interacción constante y el diálogo con las audiencias.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La publicación exclusiva de comunicados institucionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha identificado que la interacción constante fortalece las comunidades virtuales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
