<template>
  <div class="container mx-auto px-4 pt-48 mb-12">
    <h1 class="mt-6 mb-6 font-lato font-bold text-2xl text-primary">Search</h1>
    <div class="flex flex-col lg:flex-row">
      <div class="flex mb-10 flex-col w-full filterContainer lg:mr-10">
        <SideMenu />
      </div>
      <Products :products="filteredProducts"></Products>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filteredProducts: [],
    }
  },
  computed: {
    queryAsArray() {
      if (this.$route.query.q) {
        return this.$route.query.q.split('-')
      } else {
        return []
      }
    },
    lang() {
      return this.$i18n.locale
    },
  },
  watch: {
    queryAsArray(newArray, oldArray) {
      this.findProductsByQuery()
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.findProductsByQuery()
    })
    // console.log(searchQuery)
  },
  methods: {
    findProductsByQuery() {
      const products = this.$store.getters.getProducts
      const result = products.filter(this.loop)
      this.filteredProducts = result
      console.log(this.filteredProducts)
    },
    loop(product) {
      console.log(this.queryAsArray)
      if (!this.queryAsArray) return true
      const amountOfSearchParams = this.queryAsArray.length
      let isValuePresent = 0
      this.queryAsArray.forEach((el) => {
        if (
          product['name_' + this.lang].toLowerCase().includes(el.toLowerCase())
        ) {
          isValuePresent++
        }
      })
      return isValuePresent === amountOfSearchParams
    },
  },
}
</script>
<style lang="scss">
.filterContainer {
  @media only screen and(min-width: 1024px) {
    max-width: 20rem !important;
  }
}
</style>
