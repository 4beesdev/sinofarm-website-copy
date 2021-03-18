<template>
  <NuxtLink
    :to="`/products/${
      returnLang === 'sr' ? productInfo.name_sr : productInfo.name_en
    }`"
    class="flex flex-col"
  >
    <div class="w-full h-64 border-2 border-primary mb-3">
      <img
        :src="`https://sinofarm-portal.4bees.io${productInfo.image[0].url}`"
        class="w-full h-full object-cover"
        alt=""
      />
    </div>
    <h3
      class="font-lato font-bold text-lg text-gray mb-3 pb-3 border-b-2 border-gray"
    >
      {{ returnLang === 'sr' ? productInfo.name_sr : productInfo.name_en }}
    </h3>
    <!-- <div class="flex justify-between">
      <div class="flex items-center">
        <img src="@/assets/images/star-full.svg" class="w-6 mr-2" alt="" />
        <img src="@/assets/images/star-full.svg" class="w-6 mr-2" alt="" />
        <img src="@/assets/images/star-full.svg" class="w-6 mr-2" alt="" />
        <img src="@/assets/images/star-full.svg" class="w-6 mr-2" alt="" />
        <img src="@/assets/images/star-outline.svg" class="w-6" alt="" />
      </div>
      <p class="font-lato font-bold text-xl text-gray">4.0</p>
    </div> -->
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
  mounted() {
    console.log(this.productInfo.image[0].url)
  },
}
</script>

<style lang="scss" scoped></style>
