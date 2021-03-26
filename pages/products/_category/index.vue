<template>
  <div class="pt-48">
    <Breadcrumb :items="$t('breadcrumb.products')"></Breadcrumb>
    <div class="container mx-auto px-4 py-10">
      <div class="flex flex-col lg:flex-row lg:justify-between">
        <div class="flex mb-10 flex-col lg:w-80 lg:mr-20">
          <Collapsible
            filter
            :link-title="$t('productspage.filter.categories')"
          >
            <template v-slot:body>
              <Collapsible
                v-for="cat in sinofarm.categories"
                :key="cat.name_sr"
                category
                :link-title="returnLang === 'sr' ? cat.name_sr : cat.name_en"
              >
                <template v-slot:body
                  ><NuxtLink
                    v-for="subcategory in returnSubcategories(
                      cat,
                      sinofarm.subcategories
                    )"
                    :key="subcategory.name_sr"
                    :to="`/products/${subcategory.slug}`"
                    class="mb-2 flex font-lato text-gray"
                  >
                    {{
                      returnLang === 'sr'
                        ? subcategory.name_sr
                        : subcategory.name_en
                    }}
                  </NuxtLink>
                </template>
              </Collapsible>
            </template>
          </Collapsible>
          <button
            class="flex justify-between font-lato font-bold text-gray text-xl border-b-2 border-gray py-6"
          >
            {{ $t('productspage.filter.industries') }}
            <img src="@/assets/images/arrow-down.svg" class="w-6" alt="" />
          </button>
          <Collapsible filter :link-title="$t('productspage.filter.brands')">
            <template v-slot:body>
              <NuxtLink
                v-for="brand in brands"
                :key="brand.name"
                :to="`/products/${brand.slug}`"
                class="mb-2 flex font-lato text-gray"
              >
                {{ brand.name }}
              </NuxtLink>
            </template>
          </Collapsible>
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
  computed: mapState(['sinofarm', 'brands']),
  methods: {
    categoryProducts(category, products) {
      const filteredProducts = products.filter((product) => {
        if (
          product.subcategory.slug === category ||
          product.brand.slug === category
        ) {
          return product
        }
      })
      if (filteredProducts.length === 0) {
        this.hasProducts = false
        return []
      } else {
        this.productsSubcategory = filteredProducts[0].subcategory.name_sr
        return filteredProducts
      }
    },
    returnSubcategories(cat, subcategories) {
      const subcat = subcategories.filter(
        (sub) => sub.category.name_sr === cat.name_sr
      )
      return subcat
    },
  },
}
</script>

<style lang="scss" scoped></style>
