<template>
  <div>
    <PrivacyPopup />
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('getArticles')
    this.$store.dispatch('getCategories')
    this.$store.dispatch('getProducts')
    this.$store.dispatch('getSubcategories')
    this.$store.dispatch('getBrands')
    this.$store.dispatch('getIndustries')
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
