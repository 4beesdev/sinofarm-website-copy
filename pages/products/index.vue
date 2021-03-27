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
          <Spinner v-if="loading" size="large" />
          <ProductList :products="sinofarm.products" />
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
import Spinner from 'vue-simple-spinner'
export default {
  components: {
    Spinner,
  },
  data() {
    return {}
  },
  computed: {
    returnLang() {
      return this.$i18n.locale
    },
    ...mapState(['sinofarm', 'brands']),
    loading() {
      return this.$store.getters.getLoadingStatus
    },
  },
  methods: {
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
