<template>
  <div>
    <PrivacyPopup />
    <TheHeader :header-data="{ sinofarm, brands, industries }" />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  created() {
    this.$store.dispatch('getArticles')
    this.$store.dispatch('getCategories')
    this.$store.dispatch('getProducts')
    this.$store.dispatch('getSubcategories')
    this.$store.dispatch('getBrands')
    this.$store.dispatch('getIndustries')
  },
  computed: {
    returnLang() {
      return this.$i18n.locale
    },
    ...mapState(['sinofarm', 'brands', 'industries']),
  },
}
</script>

<style>
html {
  overflow-x: hidden;
}
body {
  overflow-x: hidden;
  font-family: 'Lato', sans-serif !important;
}
</style>
