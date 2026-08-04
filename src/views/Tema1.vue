<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Plataformas digitales para la divulgación cultural

    .row.justify-content-center
      .col.col-lg-12.col-12
        figure.mb-4
          img(src='@/assets/curso/temas/t1/img-01.png', alt='')
    
    p Las plataformas digitales se han consolidado como uno de los principales medios para divulgar, preservar y facilitar el acceso al patrimonio cultural. Su incorporación en museos e instituciones culturales ha ampliado las posibilidades de comunicación con diferentes públicos mediante recursos que integran información, contenidos multimedia y espacios de interacción. La adecuada selección y gestión de estas herramientas favorece la difusión de colecciones, actividades, investigaciones y experiencias educativas, fortaleciendo la relación entre las instituciones y la sociedad. En este tema se presentan los fundamentos de las plataformas digitales, sus principales características, los criterios para su selección según los objetivos de comunicación y las nociones básicas para su configuración y administración en el contexto de la divulgación cultural.

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1. Concepto y funciones de las plataformas digitales

    p.mb-4 Las plataformas digitales son entornos tecnológicos que permiten crear, organizar, publicar y compartir información mediante servicios conectados a internet. Su presencia se ha extendido a diferentes ámbitos de la sociedad, incluyendo la educación, la cultura, la comunicación y la gestión del conocimiento.

    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C01.color-secundario.px-4.py-3.mb-4
          p.mb-0 En el caso de los museos y las instituciones culturales, estas herramientas contribuyen a la divulgación del patrimonio, la publicación de contenidos especializados y la creación de espacios de interacción con diversos públicos. A través de ellas es posible difundir información sobre exposiciones, colecciones, actividades educativas, investigaciones y proyectos culturales.

    p.mb-5.text-center Las plataformas digitales cumplen diferentes funciones dentro de la comunicación cultural:

    .row.justify-content-center.mb-4(data-aos="flip-down")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          figure.mb-4
            img(src="@/assets/curso/temas/t1/img-02.svg", alt="alt").img80.m-auto
          h4.text-center Publicación de contenidos
          p.mb-0 Permiten difundir textos, imágenes, videos, audios y recursos interactivos.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          figure.mb-4
            img(src="@/assets/curso/temas/t1/img-03.svg", alt="alt").img80.m-auto
          h4.text-center Organización de información
          p.mb-0 Facilitan la clasificación y consulta de colecciones, documentos y materiales educativos.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          figure.mb-4
            img(src="@/assets/curso/temas/t1/img-04.svg", alt="alt").img80.m-auto
          h4.text-center Acceso a recursos culturales
          p.mb-0 Amplían las posibilidades de consulta para personas ubicadas en distintos contextos geográficos.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          figure.mb-4
            img(src="@/assets/curso/temas/t1/img-05.svg", alt="alt").img80.m-auto
          h4.text-center Interacción con los públicos
          p.mb-0 Ofrecen espacios para comentarios, preguntas, participación en actividades y construcción de diálogo con las audiencias.

    .row.justify-content-center
      .col.col-lg-10.col-12
        .cajon.cajon.C03.p-4.mb-4
          .row.justify-content-center.mb-0
            .col.col-lg-1.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t1/img-06.svg', alt='')
            .col.col-lg-11.col-12.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") La elección de una plataforma depende de los objetivos de comunicación, el tipo de contenidos que se pretende divulgar y las características de los públicos a los que se dirige la información.

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2. Tipos y características de las plataformas digitales

    p Las plataformas digitales utilizadas por museos e instituciones culturales pueden clasificarse según la función que cumplen dentro de los procesos de comunicación y divulgación.
    p.mb-4 Entre las más utilizadas se encuentran:

    .cajon.cajon.C06.p-5.mb-4
      SlyderB(:datos="datosSlyder")

    .row.justify-content-center
      .col.col-lg-10.col-12
        .cajon.cajon.C03.p-4.mb-4
          .row.justify-content-center.mb-0
            .col.col-lg-1.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t1/img-06.svg', alt='')
            .col.col-lg-11.col-12.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") Cada plataforma posee características particulares relacionadas con el tipo de contenido que puede albergar, las posibilidades de interacción que ofrece y la forma en que los usuarios acceden a la información.
        
        p.mb-4 La siguiente tabla resume los principales tipos de plataformas, su función, características y algunos ejemplos de aplicación en instituciones culturales:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 1.
          span Tipos y características de las plataformas digitales.
        .tabla-a.color-acento-contenido.mb-4
          table
            thead
              tr(data-aos="fade-right")
                th(style="width: 20%; background-color: #F9E7E7;") Tipo de plataforma
                th(style="width: 20%; background-color: #F9E7E7;") Función principal
                th(style="width: 20%; background-color: #F9E7E7;") Características
                th(style="width: 20%; background-color: #F9E7E7;") Ejemplos de uso en instituciones culturales
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") Sitios <em>web</em> institucionales.
                td(style="background-color: #F6F6F6;") Centralizar y organizar información institucional.
                td(style="background-color: #F6F6F6;") Permiten publicar contenidos extensos, estructurar recursos por secciones y ofrecer acceso permanente a información especializada.
                td(style="background-color: #F6F6F6;") Publicación de colecciones digitales, agenda de actividades, exposiciones virtuales y recursos educativos.
              tr(data-aos="fade-right")
                td Redes sociales.
                td Difundir información y facilitar la interacción con los públicos.
                td Favorecen la comunicación inmediata, la circulación de contenidos y la participación mediante comentarios, reacciones y mensajes.
                td Divulgación de eventos, efemérides, campañas culturales y contenidos de interés general.
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") Plataformas audiovisuales.
                td(style="background-color: #F6F6F6;") Compartir contenidos en video o transmisiones en vivo.
                td(style="background-color: #F6F6F6;") Integran imagen, sonido y movimiento para presentar información de manera dinámica.
                td(style="background-color: #F6F6F6;") Recorridos virtuales, entrevistas, documentales, conferencias y actividades educativas.
              tr(data-aos="fade-right")
                td Plataformas de audio.
                td Distribuir contenidos sonoros y narrativos.
                td Facilitan el acceso a información mediante formatos centrados en la escucha.
                td Pódcast sobre patrimonio, relatos históricos, entrevistas y programas de divulgación cultural.
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;") Repositorios y bibliotecas digitales.
                td(style="background-color: #F6F6F6;") Conservar y poner a disposición recursos documentales y patrimoniales.
                td(style="background-color: #F6F6F6;") Permiten almacenar, organizar y recuperar información mediante sistemas de consulta especializados.
                td(style="background-color: #F6F6F6;") Archivos digitales, colecciones documentales, fotografías históricas y publicaciones académicas.
              tr(data-aos="fade-right")
                td Recorridos y experiencias interactivas.
                td Favorecer la exploración autónoma de contenidos culturales.
                td Incorporan recursos interactivos que enriquecen la experiencia de aprendizaje y descubrimiento.
                td Visitas virtuales, recorridos 360°, mapas interactivos y exposiciones digitales.

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3. Selección de plataformas según públicos y objetivos de comunicación

    p.mb-4 La diversidad de medios digitales ofrece múltiples opciones para la divulgación del patrimonio cultural. Sin embargo, estas herramientas responden de manera distinta a las necesidades institucionales y a las características de sus audiencias. Por ello, la selección de canales requiere considerar tanto los propósitos comunicativos como las formas de participación que se espera promover.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")(style="background-color: #E5DFCA !important")
      .bloque-texto-g__img.img-bg-13
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Uno de los aspectos más importantes corresponde al conocimiento de los públicos. Las personas utilizan los entornos virtuales con intereses y comportamientos diferentes: algunas buscan información breve e inmediata, mientras que otras prefieren recursos especializados o experiencias de exploración más amplias. Reconocer estas diferencias facilita la elección de los canales más adecuados para cada situación (Falk, 2009).

    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p Los objetivos de comunicación también orientan la toma de decisiones. Una institución puede buscar divulgar una exposición, promover actividades educativas, difundir una colección digital o fortalecer el vínculo con una comunidad determinada. Cada propósito exige valorar las posibilidades de los distintos medios para transmitir información y generar participación.

    .row.justify-content-center.mb-4.recurso-ley-patrimonio.recurso-ley-patrimonio--verde.recurso-ley-patrimonio--verde-sin-img-console
      .col-lg-7.col-md-7.col-12
        .recurso-ley-patrimonio__texto
          p.mb-4 Otro elemento relevante es la naturaleza de los contenidos que se desean comunicar. Algunas temáticas requieren recursos visuales que permitan apreciar detalles de una obra, mientras que otras se benefician de formatos audiovisuales, experiencias interactivas o materiales de consulta más extensos.
          p.mb-0 En la práctica, las organizaciones suelen combinar varios medios digitales dentro de una misma estrategia. Esta articulación permite aprovechar las fortalezas de cada canal y ampliar las oportunidades de encuentro con los diferentes grupos de interés.
      .col-lg-3.col-md-5.col-12
        .recurso-ley-patrimonio__img
          figure.mb-0
            img(src='@/assets/curso/temas/t1/img-14.svg', alt='Imagen decorativa')

    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p La selección de plataformas también debe considerar las características de la institución, los contenidos que se desean divulgar y las formas de participación que se pretende promover. Estos elementos ayudan a identificar los canales más adecuados para fortalecer la comunicación con los diferentes grupos de interés.
        p La siguiente figura presenta una comparación entre distintos tipos de plataformas y su nivel de adecuación según el público y el propósito comunicativo:

    .row.justify-content-center.figura-flujo-ajuste(data-aos="flip-up")
      .col-lg-12.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Selección de plataformas según públicos y objetivos de comunicación.
        .row.justify-content-center
          .col-lg-12.col-12.mb-4 
            figure
              img(src='@/assets/curso/temas/t1/figura-1-1.svg', alt='Figura 1 que presenta una matriz de decisión, relacionando el nivel de adecuación de cinco plataformas digitales: sitio web institucional, redes sociales, plataforma de video, pódcast y repositorio digital, para ocho combinaciones de público y objetivo de comunicación en instituciones culturales.')
          .col-auto.movil(data-aos="fade-left")
            a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo_Seleccion_plataformas_según_públicos_objetivos_comunicacion.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p #[b Anexo.] Selección de plataformas según públicos y objetivos de comunicación.

    Separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4. Configuración y gestión básica de plataformas digitales

    p La puesta en funcionamiento de un entorno digital requiere decisiones organizadas sobre su estructura, diseño y administración. Antes de publicar cualquier información, es necesario definir aspectos clave como la identidad visual, las personas responsables de su operación, los niveles de acceso y las normas de uso. Estas directrices ayudan a mantener la coherencia entre la presencia virtual de la institución y sus propósitos de divulgación (Tallon & Walker, 2008).
    p.mb-4 A partir de estas definiciones, la gestión inicial se divide en tres etapas fundamentales:

    .tarjeta--container.row.mb-4
      .col-md.tarjeta.color-primario.cafe.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t1/img-15.svg', alt='')          
        h3.text-center Diseño de la estructura
        p Implica la creación de secciones, categorías y sistemas de ordenamiento que simplifiquen la consulta de información. Una estructura clara mejora la navegación y permite localizar con mayor facilidad los recursos disponibles, un aspecto crítico cuando se administran colecciones digitales o repositorios documentales extensos.

      .col-md.tarjeta.color-secundario.rosa.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t1/img-16.svg', alt='')          
        h3.text-center Mantenimiento cotidiano
        p Incluye la actualización de contenidos, la revisión de los materiales ya publicados y el seguimiento de las interacciones realizadas por los usuarios. Estas tareas permiten conservar la vigencia de la información y mejorar progresivamente la experiencia de consulta.

      .col-md.tarjeta.color-acento-botones.verde.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t1/img-17.svg', alt='')          
        h3.text-center Distribución de responsabilidades
        p Consiste en asignar funciones claras dentro del equipo de trabajo. Dependiendo de las características de la organización, el personal puede encargarse de tareas específicas como la producción de materiales, la moderación de espacios de participación o la atención de consultas. Esta delimitación facilita la coordinación interna.

    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p En definitiva, la administración de estos espacios trasciende lo técnico exigiendo una labor vinculada directamente con la forma en que la institución decide presentar, proteger y compartir el patrimonio en los entornos digitales (Parry, 2013).

    .tarjeta.color-primario.video.p-3.mb-4
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/t1/img-18.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 Para conocer experiencias reales sobre gestión digital y estrategias digitales en museos, se recomienda consultar el canal de la Red de Museos (REMED), donde se presentan conferencias, entrevistas y casos de estudio relacionados con la transformación digital en instituciones culturales.
            .col-sm-auto
              a.boton.color-acento-contenido.video.texto-blanco(href="https://www.youtube.com/c/remedreddemuseosyestrategiasdigitales" target="_blank")
                span Abrir video
                i.fas.fa-file-video

  </template>

<script>
import img07 from '@/assets/curso/temas/t1/img-07.png'
import img08 from '@/assets/curso/temas/t1/img-08.png'
import img09 from '@/assets/curso/temas/t1/img-09.png'
import img10 from '@/assets/curso/temas/t1/img-10.png'
import img11 from '@/assets/curso/temas/t1/img-11.png'
import img12 from '@/assets/curso/temas/t1/img-12.png'

export default {
  name: 'Tema1',

  data: () => ({
    indicadorTarjetaFlip: true,
    indicadorTarjetaSlide: true,
    mostrarIndicadorTarjetaAudio: true,

    datosSlyder: [
      {
        titulo: 'Sitios <em>web</em> institucionales',
        texto:
          'Concentran información permanente sobre la organización, sus colecciones, proyectos, actividades y recursos educativos. Además, ofrecen acceso organizado a contenidos especializados y facilitan la consulta de información institucional.',
        imagen: img07,
      },
      {
        titulo: 'Redes sociales',
        texto:
          'Facilitan la circulación rápida de información y la interacción con los públicos mediante publicaciones, comentarios y mensajes. También permiten promover actividades, fortalecer la participación y ampliar el alcance de los contenidos culturales.',
        imagen: img08,
      },
      {
        titulo: 'Plataformas audiovisuales',
        texto:
          'Permiten compartir videos, transmisiones en vivo, entrevistas, documentales y recursos educativos. Estos formatos favorecen la difusión de contenidos dinámicos y enriquecen la experiencia de aprendizaje de las audiencias.',
        imagen: img09,
      },
      {
        titulo: 'Plataformas de audio',
        texto:
          'Facilitan la distribución de podcasts, relatos sonoros, entrevistas y programas especializados. Constituyen una alternativa accesible para divulgar contenidos culturales mediante narraciones y recursos basados en la escucha.',
        imagen: img10,
      },
      {
        titulo: 'Repositorios y bibliotecas digitales',
        texto:
          'Permiten almacenar, conservar y poner a disposición documentos, imágenes, publicaciones y recursos patrimoniales. Asimismo, facilitan la consulta, recuperación y preservación de información para fines educativos, culturales e investigativos.',
        imagen: img11,
      },
      {
        titulo: 'Recorridos y experiencias interactivas',
        texto:
          'Ofrecen formas de exploración autónoma mediante visitas virtuales, mapas interactivos y recorridos digitales. Estas herramientas promueven una experiencia participativa que acerca el patrimonio cultural a diversos públicos.',
        imagen: img12,
      },
    ],
  }),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },

  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
