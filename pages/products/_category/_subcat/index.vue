<template>
  <div class="container mx-auto px-4 pt-48 pb-10">
    <BreadcrumbN
      products
      :category="subcategory.category"
      :current="subcategory"
    ></BreadcrumbN>
    <h1
      v-if="subcategory"
      class="mt-6 mb-6 font-lato font-bold text-2xl text-primary"
    >
      {{ returnLang === 'en' ? subcategory.name_en : subcategory.name_sr }}
    </h1>
    <Products
      :products="products"
      :link="`/products/${subcategory.category.slug}/${subcategory.slug}`"
    ></Products>
    <ProductsMain></ProductsMain>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    returnLang() {
      return this.$i18n.locale
    },
    subcategory() {
      return this.$store.getters.getSubcategory(this.$route.params.subcat)
    },
    products() {
      return this.$store.getters.getProductsBySubcat(this.$route.params.subcat)
    },
    ...mapState(['sinofarm']),
  },
}
</script>

<style lang="scss" scoped></style>
