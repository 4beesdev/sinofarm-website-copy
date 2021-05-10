<template>
  <div>
    <p
      v-if="!hasProducts"
      class="text-left text-xl font-lato font-bold text-gray"
    >
      {{ $t('productspage.error') }}
    </p>
    <ProductList
      :products="categoryProducts($route.params.query, sinofarm.products)"
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
      query: '',
    }
  },
  computed: {
    returnLang() {
      return this.$i18n.locale
    },
    ...mapState(['sinofarm']),
  },
  methods: {
    categoryProducts(queryParams, products) {
      const query = queryParams.split('+')
      const filteredProducts = []
      products.forEach((product) => {
        // If category is selected alone
        if (query[0] !== 'none' && query[1] === 'none' && query[2] === 'none') {
          if (product.subcategory.slug === query[0]) {
            filteredProducts.push(product)
          }
        }
        // if only industry is sellected
        if (query[0] === 'none' && query[1] !== 'none' && query[2] === 'none') {
          const industries = []
          product.industries.forEach((ind) => {
            industries.push(ind.slug)
          })
          if (industries.includes(query[1])) {
            filteredProducts.push(product)
          }
        }
        // If brand is selected alone
        if (query[0] === 'none' && query[1] === 'none' && query[2] !== 'none') {
          if (product.brand.slug === query[2]) {
            filteredProducts.push(product)
          }
        }
        // if category and brand are selected
        if (query[0] !== 'none' && query[1] === 'none' && query[2] !== 'none') {
          if (
            product.subcategory.slug === query[0] &&
            product.brand.slug === query[2]
          ) {
            filteredProducts.push(product)
          }
        }
      })
      if (filteredProducts.length > 0) {
        this.hasProducts = true
        return filteredProducts
      } else {
        this.hasProducts = false
        return []
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
