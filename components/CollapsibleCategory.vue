<template>
  <div>
    <button
      class="text-left w-full mb-3 flex justify-between items-center font-lato font-bold text-gray focus:outline-none"
      @click="toggled = !toggled"
    >
      {{ returnLang === 'sr' ? title.name_sr : title.name_en }}
      <img src="@/assets/images/arrow-down.svg" class="w-3 ml-2" alt="" />
    </button>
    <div v-if="toggled" class="px-2 pb-3">
      <NuxtLink
        v-for="subcategory in subcategories"
        :key="subcategory.name_sr"
        :to="`/products/${
          returnLang === 'sr' ? subcategory.name_sr : subcategory.name_en
        }`"
        class="mb-2 flex font-lato text-gray"
      >
        {{ returnLang === 'sr' ? subcategory.name_sr : subcategory.name_en }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Object,
      default() {
        return {}
      },
    },
    subcategories: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      toggled: false,
    }
  },
  computed: {
    returnLang() {
      return this.$i18n.locale
    },
  },
}
</script>

<style lang="scss" scoped></style>
