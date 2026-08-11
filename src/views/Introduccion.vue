<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4 La transformación digital ha modificado la forma en que los museos y las instituciones culturales se relacionan con sus públicos. El uso de plataformas digitales ha ampliado las posibilidades de difusión del patrimonio, consulta de información y participación de las audiencias, generando nuevas formas de encuentro que complementan la visita presencial. En este escenario, la administración de espacios digitales ocupa un lugar relevante dentro de las estrategias de divulgación cultural.

    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .recurso-contenidos-digitales.recurso-contenidos-digitales--sin-img-console
          .row.g-0.align-items-center.justify-content-center
            .col-lg-8.col-md-8.col-12
              .recurso-contenidos-digitales__texto
                p.mb-4 La presencia de las instituciones en entornos digitales implica decisiones relacionadas con la selección de canales, la producción de materiales informativos y la atención de las personas que interactúan a través de ellos. Estas acciones requieren comprender las características de los diferentes medios, las formas de participación de los usuarios y las dinámicas que surgen alrededor de intereses culturales compartidos.
                p.mb-0 Los contenidos digitales constituyen uno de los principales recursos para la comunicación cultural. Publicaciones, videos, infografías, pódcast y otros formatos permiten presentar información patrimonial mediante distintos lenguajes y formas narrativas. La elección de estos recursos depende de los propósitos comunicativos, las características de las audiencias y las posibilidades de cada medio.

            .col-lg-4.col-md-4.col-12
              .recurso-contenidos-digitales__img
                figure.mb-0
                  img(src='@/assets/curso/temas/intro/img-01.png', alt='')

    .row.justify-content-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/intro/img-02.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        p.mb-0 Por lo anterior, este componente formativo aborda los fundamentos relacionados con el uso de plataformas digitales, la administración de contenidos y el análisis de audiencias en contextos culturales. También desarrolla aspectos vinculados con las comunidades virtuales, los protocolos de comunicación y las prácticas de interacción en línea. 

    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C01.color-secundario.px-4.py-3.mb-4
          p.mb-0 Su propósito es ofrecer elementos conceptuales y prácticos para administrar plataformas digitales y formatos de contenido de acuerdo con las características del público objetivo, los tipos de patrimonio que se comunican y las particularidades de los museos o instituciones culturales responsables de su divulgación.

        p Para comprender la importancia del contenido y contextualizarse con la temática a tratar, se recomienda acceder al siguiente video:
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/TeE2YCVYhy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
