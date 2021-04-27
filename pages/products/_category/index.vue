<template>
  <div>
    <p
      v-if="!hasProducts"
      class="text-center text-xl font-lato font-bold text-gray"
    >
      Trenutno nemamo proizvode u ovoj kategoriji
    </p>
    <ProductList
      :products="categoryProducts($route.params.category, sinofarm.products)"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'products',
  data() {
    return {
      hasProducts: true,
      productsSubcategory: '',
    }
  },
  computed: {
    returnLang() {
      return this.$i18n.locale
    },
    ...mapState(['sinofarm']),
  },

  methods: {
    categoryProducts(category, products) {
      const filteredProducts = products.filter((product) => {
        if (
          product.subcategory.slug === category ||
          product.brand.slug === category
        ) {
          return product
        }
      })
      if (filteredProducts.length === 0) {
        this.hasProducts = false
        return []
      } else {
        this.productsSubcategory = filteredProducts[0].subcategory.name_sr
        this.hasProducts = true
        return filteredProducts
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
