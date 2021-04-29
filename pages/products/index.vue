<template>
  <div>
    <transition name="fade">
      <ProductList :products="sinofarm.products" />
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'products',

  computed: {
    returnLang() {
      return this.$i18n.locale
    },
    ...mapState(['sinofarm']),
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
