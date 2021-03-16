<template>
  <div class="pt-48">
    <Breadcrumb :items="$t('breadcrumb.products')"></Breadcrumb>
    <div class="container mx-auto px-4 py-10">
      <div class="flex flex-col lg:flex-row lg:justify-between">
        <div class="flex mb-10 flex-col lg:w-80 lg:mr-20">
          {{ error }}
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
          <ProductList />
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
      'http://46.101.201.186/subcategories'
    )
    const categories = await $axios.$get('http://46.101.201.186/categories')
    return {
      products: {
        categories,
        subcategories,
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
