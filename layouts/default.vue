<template>
  <div>
    <transition name="fade">
      <StateLoader v-if="!ready"></StateLoader>
    </transition>
    <PrivacyPopup />
    <TheHeader :header-data="{ sinofarm, brands, industries }" />
    <Nuxt v-if="ready" />
    <TheFooter />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      ready: false,
    }
  },
  computed: {
    returnLang() {
      return this.$i18n.locale
    },
    ...mapState(['sinofarm', 'brands', 'industries']),
  },
  async created() {
    await Promise.all([
      this.$store.dispatch('getArticles'),
      this.$store.dispatch('getCategories'),
      this.$store.dispatch('getProducts'),
      this.$store.dispatch('getSubcategories'),
      this.$store.dispatch('getBrands'),
      this.$store.dispatch('getIndustries'),
    ])
    this.ready = true
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@400;700&display=swap');
html {
  overflow-x: hidden;
}
body {
  overflow-x: hidden;
  font-family: 'Poppins', sans-serif !important;
  color: #6e6e6e !important;
}
h1,
h2,
h3,
h4,
h5 {
  font-family: 'Lato', sans-serif !important;
  font-weight: 700 !important;
  color: #0038ae !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
