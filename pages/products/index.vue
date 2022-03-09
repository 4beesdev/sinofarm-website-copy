<template>
  <div ref="start" class="container mx-auto px-4 pt-48 pb-10">
    <BreadcrumbN
      :current="{ name_sr: 'Proizvodi', name_en: 'Products' }"
    ></BreadcrumbN>
    <transition name="fade">
      <ProductsMain @scrollToStart="scrollToStart"></ProductsMain>
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
  methods: {
    scrollToStart() {
      console.log('triggered')
      this.$scrollTo(this.$refs.start, 500, {
        easing: 'ease-in',
        offset: 0,
      })
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
