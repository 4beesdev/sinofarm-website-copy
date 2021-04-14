<template>
  <div>
    <ProductList :products="sinofarm.products" />
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

<style lang="scss" scoped></style>
