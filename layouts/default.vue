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
  },
}
</script>

<style></style>
