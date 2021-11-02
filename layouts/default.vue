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
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
