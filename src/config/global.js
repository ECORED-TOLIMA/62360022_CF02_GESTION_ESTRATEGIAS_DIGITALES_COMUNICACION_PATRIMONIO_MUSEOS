export default {
  global: {
    Name: 'Gestión digital de museos: plataformas, contenidos y audiencias',
    Description:
      'Este componente aborda los fundamentos para la administración de plataformas digitales y formatos de contenido aplicados a museos e instituciones culturales. Desarrolla la producción, adaptación y distribución de contenidos, el análisis de audiencias digitales, los protocolos de interacción en entornos virtuales y las estrategias de comunicación acordes con el público objetivo, los tipos de patrimonio y las características de cada museo.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Plataformas digitales para la divulgación cultural',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto y funciones de las plataformas digitales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos y características de las plataformas digitales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Selección de plataformas según públicos y objetivos de comunicación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Configuración y gestión básica de plataformas digitales',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de contenidos digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'El contenido digital en la comunicación cultural',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de contenido para la divulgación del patrimonio',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Estrategias multiformato y narrativa transmedia',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Adaptación de contenidos a diferentes plataformas',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Audiencias y comunidades digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Segmentación y perfilado de audiencias',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Comportamientos e intereses de los públicos digitales',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Estructura de las comunidades virtuales',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Roles y dinámicas de interacción en comunidades digitales',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Protocolos e interacción en entornos digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Protocolos de comunicación digital',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de interacción en plataformas digitales',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Normas de convivencia y netiqueta',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Gestión de conversaciones y atención a usuarios',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Administración de contenidos para museos e instituciones culturales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Relación entre plataformas, contenidos y públicos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Organización y distribución de contenidos digitales',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Coherencia entre mensaje, formato y audiencia',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Buenas prácticas para la gestión de contenidos culturales',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/62360022_CF02_CFA.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Apropiación social',
      significado:
        'proceso mediante el cual las comunidades comprenden, valoran e integran el patrimonio cultural en sus propias vidas a través del conocimiento compartido.',
    },
    {
      termino: 'Arquitectura de la información',
      significado:
        'disciplina encargada de organizar, estructurar y clasificar los contenidos en un espacio digital para facilitar su localización y consulta por parte de los usuarios.',
    },
    {
      termino: 'Asincrónico',
      significado:
        'tipo de interacción digital que no ocurre en tiempo real, donde los mensajes se emiten y responden en momentos diferentes, como sucede en correos electrónicos o foros.',
    },
    {
      termino: 'Audiencia',
      significado:
        'grupo de personas reales o virtuales a quienes se dirigen los mensajes, actividades y contenidos producidos por una institución.',
    },
    {
      termino: 'Comunidad virtual',
      significado:
        'grupo de usuarios que comparte intereses comunes en internet y mantiene relaciones estables de intercambio y diálogo a lo largo del tiempo.',
    },
    {
      termino: 'Contenido digital',
      significado:
        'recurso, mensaje o material producido en formato digital, como textos, imágenes, videos o audios, utilizado para comunicar información cultural.',
    },
    {
      termino: 'Coherencia comunicativa',
      significado:
        'relación lógica y consistente entre el mensaje que se comunica, el formato utilizado y las características del público al que se dirige.',
    },
    {
      termino: 'Divulgación cultural',
      significado:
        'acción orientada a difundir y hacer accesibles los conocimientos relacionados con el patrimonio, el arte, la historia y otras manifestaciones culturales.',
    },
    {
      termino: 'Ecosistema digital',
      significado:
        'conjunto de plataformas, canales, contenidos y usuarios que interactúan y se relacionan dentro de los entornos digitales de una organización.',
    },
    {
      termino: 'Formatos digitales',
      significado:
        'diferentes tipos de soportes o recursos utilizados para presentar información en entornos digitales, como publicaciones, videos, infografías o pódcast.',
    },
    {
      termino: 'Interfaces',
      significado:
        'espacios visuales y funcionales de las plataformas digitales a través de los cuales los usuarios interactúan con los contenidos y servicios disponibles.',
    },
    {
      termino: 'Netiqueta',
      significado:
        'conjunto de normas y recomendaciones que orientan el comportamiento respetuoso, cortés y seguro de las personas en los entornos digitales.',
    },
    {
      termino: 'Perfilado de audiencia',
      significado:
        'proceso de descripción de las características, intereses, necesidades y motivaciones de un grupo específico de usuarios o audiencias.',
    },
    {
      termino: 'Protocolo de comunicación',
      significado:
        'documento o guía institucional que establece normas, procedimientos, estilos y responsabilidades para la gestión de los canales digitales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Falk, J. H. (2009). <em>Identity and the museum visitor experience.</em> Left Coast Press.',
    },
    {
      referencia:
        'Jenkins, H. (2008). <em>Convergence culture: La cultura de la convergencia de los medios de comunicación.</em> Paidós.',
    },
    {
      referencia:
        'Kotler, N. Kotler, P. & Kotler, W. I. (2008). <em>Museum marketing and strategy: Designing missions, building audiences, generating revenue and resources</em> (2nd ed.). Jossey-Bass.',
    },
    {
      referencia:
        'Macnamara, J. (2018). <em>Evaluating public communication: Exploring new models, standards, and best practice.</em> Routledge.',
    },
    {
      referencia:
        'Parry, R. (Ed.). (2013). <em>Museums in a digital age.</em> Routledge.',
    },
    {
      referencia:
        'Scolari, C. A. (2013). <em>Narrativas transmedia: Cuando todos los medios cuentan.</em> Deusto.',
    },
    {
      referencia:
        'Tallon, L. & Walker, K. (Eds.). (2008). <em>Digital technologies and the museum experience: Handheld guides and other media.</em> AltaMira Press.',
    },
    {
      referencia:
        'Wenger, E., McDermott, R., & Snyder, W. M. (2002). <em>Cultivating communities of practice: A guide to managing knowledge.</em> Harvard Business School Press.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Dorian Sully Munera Rua',
          cargo: 'Experta temática',
          centro:
            'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
