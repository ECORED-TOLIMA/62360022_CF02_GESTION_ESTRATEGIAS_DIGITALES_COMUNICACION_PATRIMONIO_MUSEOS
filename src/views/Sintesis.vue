<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo desarrolla los fundamentos de la gestión de plataformas digitales para la divulgación del patrimonio cultural, abordando las características de los canales de comunicación, la producción y adaptación de contenidos, así como el análisis de las audiencias y las comunidades digitales. Además, presenta los principios que orientan la interacción en los entornos virtuales, incluyendo los protocolos de comunicación, la netiqueta y la gestión de conversaciones con los públicos.
    p.mb-4 Posteriormente, profundiza en la administración de contenidos para museos e instituciones culturales, considerando la relación entre plataformas, contenidos y públicos, la organización y distribución de los recursos digitales, la coherencia comunicativa y las buenas prácticas que favorecen una comunicación cultural planificada, responsable y orientada a fortalecer el acceso y la participación de las audiencias.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente formativo desarrolla los fundamentos de la gestión de plataformas digitales para la divulgación del patrimonio cultural, abordando las características de los canales de comunicación, la producción y adaptación de contenidos, así como el análisis de las audiencias y las comunidades digitales. Además, presenta los principios que orientan la interacción en los entornos virtuales, incluyendo los protocolos de comunicación, la netiqueta y la gestión de conversaciones con los públicos. Posteriormente, profundiza en la administración de contenidos para museos e instituciones culturales, considerando la relación entre plataformas, contenidos y públicos, la organización y distribución de los recursos digitales, la coherencia comunicativa y las buenas prácticas que favorecen una comunicación cultural planificada, responsable y orientada a fortalecer el acceso y la participación de las audiencias.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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
