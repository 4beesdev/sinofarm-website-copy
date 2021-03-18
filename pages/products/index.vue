<template>
  <div class="pt-48">
    <Breadcrumb :items="$t('breadcrumb.products')"></Breadcrumb>
    <div class="container mx-auto px-4 py-10">
      <div class="flex flex-col lg:flex-row lg:justify-between">
        <div class="flex mb-10 flex-col lg:w-80 lg:mr-20">
          <Collapsible
            :link-title="$t('productspage.filter.categories')"
            :link-items="products"
          ></Collapsible>
          <button
            class="flex justify-between font-lato font-bold text-gray text-xl border-b-2 border-gray py-6"
          >
            {{ $t('productspage.filter.industries') }}
            <img src="@/assets/images/arrow-down.svg" class="w-6" alt="" />
          </button>
          <button
            class="flex justify-between font-lato font-bold text-gray text-xl border-b-2 border-gray py-6"
          >
            {{ $t('productspage.filter.brands') }}
            <img src="@/assets/images/arrow-down.svg" class="w-6" alt="" />
          </button>
        </div>
        <div class="flex w-full flex-col">
          <ProductList :products="products.products" />
          <button
            class="mt-20 p-4 bg-primary block text-center mt-4 w-60 font-lato font-bold text-white self-center"
          >
            Show more
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  async asyncData({ $axios }) {
    const subcategories = await $axios.$get(
      'https://sinofarm-portal.4bees.io/subcategories'
    )
    const categories = await $axios.$get(
      'https://sinofarm-portal.4bees.io/categories'
    )
    const products = await $axios.$get(
      'https://sinofarm-portal.4bees.io/products'
    )
    return {
      products: {
        categories,
        subcategories,
        products,
      },
    }
  },
  data() {
    return {
      error: '',
      productCategories: {},
    }
  },
}
</script>

<style lang="scss" scoped></style>
