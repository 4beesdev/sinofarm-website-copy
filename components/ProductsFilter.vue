<template>
  <div class="flex flex-col w-full lg:mr-10">
    <button
      class="
        flex
        justify-between
        items-center
        text-primary text-gray text-xl
        border-b-2 border-gray
        py-4
        focus:outline-none
      "
      @click="categoriesToggled = !categoriesToggled"
    >
      {{ $t('productspage.filter.categories') }}
      <img src="@/assets/images/arrow-down.svg" class="w-4" alt="" />
    </button>
    <ProductsFilterItem
      category
      :toggled="categoriesToggled"
      :items="categories"
    >
      <template v-slot:body>
        <ProductsFilterItem category :items="categories"></ProductsFilterItem>
      </template>
    </ProductsFilterItem>
    <button
      class="
        flex
        justify-between
        items-center
        text-primary text-gray text-xl
        border-b-2 border-gray
        py-4
        focus:outline-none
      "
      @click="brandsToggled = !brandsToggled"
    >
      {{ $t('productspage.filter.brands') }}
      <img src="@/assets/images/arrow-down.svg" class="w-4" alt="" />
    </button>
    <ProductsFilterItem :toggled="brandsToggled"></ProductsFilterItem>
    <button
      class="
        flex
        justify-between
        items-center
        text-primary text-gray text-xl
        border-b-2 border-gray
        py-4
        focus:outline-none
      "
      @click="industriesToggled = !industriesToggled"
    >
      {{ $t('productspage.filter.categories') }}
      <img src="@/assets/images/arrow-down.svg" class="w-4" alt="" />
    </button>
    <ProductsFilterItem :toggled="industriesToggled"></ProductsFilterItem>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: {
        subcategory: '',
        brand: '',
        industry: '',
      },
      brands: [],
      industries: [],
      categoriesToggled: false,
      brandsToggled: false,
      industriesToggled: false,
    }
  },
  computed: {
    categories() {
      return this.$store.getters.getCategories
    },
    subcategories() {
      return this.$store.getters.getSubcategories
    },
  },
}
</script>

<style lang="scss" scoped></style>
