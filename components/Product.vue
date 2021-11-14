<template>
  <NuxtLink
    :to="localePath(`/products/product/${productInfo.id}`)"
    class="flex flex-col border-b-2 border-gray"
  >
    <div class="w-full h-60 border-2 border-primary mb-3 overflow-hidden">
      <img
        v-if="productInfo.image.url"
        :src="`https://sinofarm-portal.4bees.io${productInfo.image.url}`"
        class="
          w-full
          h-full
          object-cover
          transition
          duration-300
          transform
          hover:scale-110
        "
        alt=""
      />
    </div>
    <h3 class="font-lato text-normal text-gray mb-3 pb-3 justify-self-end">
      {{ returnLang === 'sr' ? productInfo.name_sr : productInfo.name_en }}
    </h3>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    productInfo: {
      type: Object,
      default() {
        return {}
      },
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
