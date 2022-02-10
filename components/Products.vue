<template>
  <div
    v-if="products.length > 0"
    class="grid gap-4 grid-columns-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <nuxt-link
      v-for="product in products"
      :key="product.id"
      :to="localePath(`${link}/${product.id}`)"
      class="product flex flex-col border-b-2"
      target=""
    >
      <div class="w-full h-60 border-2 mb-3 overflow-hidden">
        <img
          v-if="product.image"
          :src="`https://sinofarm-portal.4bees.io${product.image.url}`"
          class="w-full h-full object-cover transition duration-300 transform hover:scale-110"
          alt=""
        />
        <div v-else class="h-full w-full bg-blue-50"></div>
      </div>
      <p class="font-lato text-normal text-gray mb-3 pb-3 justify-self-end">
        {{ returnLang === 'sr' ? product.name_sr : product.name_en }}
      </p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      default: () => [],
    },
    subcategory: {
      type: Object,
      default: () => {},
    },
    link: {
      type: String,
      default: '/',
    },
  },
  computed: {
    returnLang() {
      return this.$i18n.locale
    },
  },
}
</script>

<style lang="scss" scoped></style>
