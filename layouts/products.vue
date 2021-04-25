<template>
  <div>
    <PrivacyPopup />
    <TheHeader :header-data="{ sinofarm, brands, industries }" />
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
            <Collapsible
              filter
              :link-title="$t('productspage.filter.industries')"
            >
              <template v-slot:body>
                <NuxtLink
                  v-for="industry in industries"
                  :key="industry.title_sr"
                  :to="`/products/industry/${industry.slug}`"
                  class="mb-2 flex font-lato text-gray"
                >
                  {{ industry.title_sr }}
                </NuxtLink>
              </template>
            </Collapsible>
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
            <Spinner v-if="loading" size="large" class="mb-10" />
            <Nuxt />
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
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
    ...mapState(['sinofarm', 'brands', 'industries']),
    loading() {
      return this.$store.getters.getLoadingStatus
    },
  },
  created() {
    this.$store.dispatch('getCategories')
    this.$store.dispatch('getProducts')
    this.$store.dispatch('getSubcategories')
    this.$store.dispatch('getBrands')
    this.$store.dispatch('getIndustries')
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
