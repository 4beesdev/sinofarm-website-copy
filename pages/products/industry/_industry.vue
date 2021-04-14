<template>
  <div>
    <p
      v-if="!hasProducts"
      class="text-center text-xl font-lato font-bold text-gray"
    >
      Trenutno nemamo proizvode u ovoj industriji
    </p>
    <ProductList
      :products="industryProducts($route.params.industry, sinofarm.products)"
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
    }
  },
  computed: {
    returnLang() {
      return this.$i18n.locale
    },
    ...mapState(['sinofarm']),
  },
  methods: {
    industryProducts(industry, products) {
      const filteredProducts = products.filter((product) => {
        const industries = []
        product.industries.forEach((ind) => {
          industries.push(ind.slug)
        })
        if (industries.includes(`${industry}`)) {
          return product
        }
      })
      if (filteredProducts.length === 0) {
        this.hasProducts = false
        return []
      } else {
        // this.productsSubcategory = filteredProducts[0].subcategory.name_sr
        return filteredProducts
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
