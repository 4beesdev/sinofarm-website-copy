<template>
  <div class="pt-48">
    <Breadcrumb
      :items="$t('breadcrumb.products')"
      :product-name="productsSubcategory"
    ></Breadcrumb>
    <div class="container mx-auto px-4 py-10">
      <div class="flex flex-col lg:flex-row lg:justify-between">
        <div class="flex mb-10 flex-col lg:w-80 lg:mr-20">
          <Collapsible
            :link-title="$t('productspage.filter.categories')"
            :data-info="sinofarm"
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
          <p
            v-if="!hasProducts"
            class="text-center text-xl font-lato font-bold text-gray"
          >
            Trenutno nemamo proizvode u ovoj kategoriji
          </p>
          <ProductList
            :products="
              categoryProducts($route.params.category, sinofarm.products)
            "
          />
          <!-- <button
            class="mt-20 p-4 bg-primary block text-center mt-4 w-60 font-lato font-bold text-white self-center"
          >
            Show more
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      hasProducts: true,
      productsSubcategory: '',
    }
  },
  computed: mapState(['sinofarm']),
  methods: {
    categoryProducts(category, products) {
      const filteredProducts = products.filter((product) => {
        if (product.subcategory.slug === category) {
          return product
        }
      })
      if (filteredProducts.length === 0) {
        this.hasProducts = false
      }
      this.productsSubcategory = filteredProducts[0].subcategory.name_sr
      return filteredProducts
    },
  },
}
</script>

<style lang="scss" scoped></style>
