<template>
  <div class="container mx-auto px-4 pt-48 pb-10">
    <BreadcrumbN products :current="categoryName"></BreadcrumbN>
    <h1
      v-if="categoryName"
      class="mt-6 mb-6 font-lato font-bold text-2xl text-primary"
    >
      {{ returnLang === 'en' ? categoryName.name_en : categoryName.name_sr }}
    </h1>
    <div
      class="
        grid grid-cols-1
        md:grid-cols-2 md:gap-4
        lg:grid-cols-4
        pt-6
        px-1
        justify-center
      "
    >
      <NuxtLink
        v-for="subCat in subcategories"
        :key="subCat.slug"
        class="w-full mb-8 px-4"
        :to="localePath(`/products/${$route.params.category}/${subCat.slug}`)"
      >
        <img
          :src="`https://sinofarm-portal.4bees.io${subCat.img.url}`"
          class="w-full h-40 object-cover mb-2"
          alt=""
        />
        <h2 class="text-center">
          {{ returnLang === 'en' ? subCat.name_en : subCat.name_sr }}
        </h2>
      </NuxtLink>
    </div>
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
    subcategories() {
      return this.$store.getters.getSubCatFilter(this.$route.params.category)
    },
    categoryName() {
      return this.$store.getters.getCategory(this.$route.params.category)
    },
    ...mapState(['sinofarm']),
  },
}
</script>

<style lang="scss" scoped></style>
