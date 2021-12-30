<template>
  <div
    v-if="products.length > 0"
    class="w-full grid gap-5 grid-columns-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <a
      v-for="product in products"
      :key="product.id"
      :href="localePath(`${link}/${product.id}`)"
      class="flex flex-col border-b-2 border-gray"
      target="_blank"
    >
      <div class="w-full h-60 border-2 border-primary mb-3 overflow-hidden">
        <img
          :src="`https://sinofarm-portal.4bees.io${product.image.url}`"
          class="w-full h-full object-cover transition duration-300 transform hover:scale-110"
          alt=""
        />
      </div>
      <h3 class="font-lato text-normal text-gray mb-3 pb-3 justify-self-end">
        {{ returnLang === 'sr' ? product.name_sr : product.name_en }}
      </h3>
    </a>
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
