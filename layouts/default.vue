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
  },
}
</script>

<style>
@font-face {
  font-family: 'Lato';
  src: local('Lato'), url(~assets/lato/Lato-Regular.ttf);
}
body {
  font-family: 'Lato', sans-serif !important;
}
</style>
