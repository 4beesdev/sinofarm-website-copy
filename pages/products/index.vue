<template>
  <div class="container mx-auto px-4 pt-48 pb-10">
    <BreadcrumbN
      :current="{ name_sr: 'Proizvodi', name_en: 'Products' }"
    ></BreadcrumbN>
    <transition name="fade">
      <!-- <ProductList :products="sinofarm.products" /> -->
      <ProductsMain></ProductsMain>
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    returnLang() {
      return this.$i18n.locale
    },
  },
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
