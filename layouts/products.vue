<template>
  <div>
    <PrivacyPopup />
    <TheHeader :header-data="{ sinofarm, brands, industries }" />
    <ScrollTop></ScrollTop>
    <div class="pt-48 productList">
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
                    ><button
                      v-for="subcategory in returnSubcategories(
                        cat,
                        sinofarm.subcategories
                      )"
                      :key="subcategory.name_sr"
                      class="
                        mb-1
                        flex
                        justify-between
                        items-center
                        text-left
                        font-lato
                        text-gray
                        focus:outline-none focus:text-black
                      "
                      @click="
                        setCategory(
                          subcategory.slug,
                          returnLang === 'en'
                            ? subcategory.name_en
                            : subcategory.name_sr
                        )
                      "
                    >
                      {{
                        returnLang === 'sr'
                          ? subcategory.name_sr
                          : subcategory.name_en
                      }}
                      <img
                        v-if="categoryQuery === subcategory.slug"
                        src="~/assets/images/checked.svg"
                        alt=""
                        class="w-4 h-4"
                      />
                    </button>
                  </template>
                </Collapsible>
              </template>
            </Collapsible>
            <Collapsible
              filter
              :link-title="$t('productspage.filter.industries')"
            >
              <template v-slot:body>
                <button
                  v-for="industry in industries"
                  :key="industry.title_sr"
                  class="
                    mb-2
                    flex
                    justify-between
                    items-center
                    text-left
                    font-lato
                    text-gray
                    focus:outline-none focus:text-black
                  "
                  @click="
                    setIndustry(
                      industry.slug,
                      returnLang === 'en'
                        ? industry.title_en
                        : industry.title_sr
                    )
                  "
                >
                  {{ industry.title_sr }}
                  <img
                    v-if="industryQuery === industry.slug"
                    src="~/assets/images/checked.svg"
                    alt=""
                    class="w-4 h-4"
                  />
                </button>
              </template>
            </Collapsible>
            <Collapsible filter :link-title="$t('productspage.filter.brands')">
              <template v-slot:body>
                <button
                  v-for="brand in brands"
                  :key="brand.name"
                  class="
                    mb-2
                    flex
                    justify-between
                    items-center
                    font-lato
                    text-gray text-left
                    focus:outline-none focus:text-black
                  "
                  @click="setBrand(brand.slug, brand.name)"
                >
                  {{ brand.name }}
                  <img
                    v-if="brandQuery === brand.slug"
                    src="~/assets/images/checked.svg"
                    alt=""
                    class="w-4 h-4"
                  />
                </button>
              </template>
            </Collapsible>
          </div>
          <div class="flex w-full flex-col">
            <transition name="fade">
              <div v-if="hasFilters" class="flex flex-wrap pb-6">
                <button
                  v-if="categoryQuery !== 'none'"
                  class="
                    border-2
                    flex
                    items-center
                    border-primary
                    px-4
                    py-2
                    font-bold
                    text-gray
                    mb-3
                    lg:mr-3
                  "
                  @click="removeFilter('category')"
                >
                  {{ $t('productspage.filterIcon.category') }}:
                  <span class="ml-1 font-bold text-primary">{{
                    selected.category
                  }}</span>
                  <img
                    src="@/assets/images/close.svg"
                    class="w-3 h-3 ml-2"
                    alt=""
                  />
                </button>
                <button
                  v-if="industryQuery !== 'none'"
                  class="
                    border-2
                    flex
                    items-center
                    border-primary
                    px-4
                    py-2
                    font-bold
                    text-gray
                    mb-3
                    lg:mr-3
                  "
                  @click="removeFilter('industry')"
                >
                  {{ $t('productspage.filterIcon.industry') }}:
                  <span class="ml-1 font-bold text-primary">{{
                    selected.industry
                  }}</span>
                  <img
                    src="@/assets/images/close.svg"
                    class="w-3 h-3 ml-2"
                    alt=""
                  />
                </button>
                <button
                  v-if="brandQuery !== 'none'"
                  class="
                    border-2
                    flex
                    items-center
                    border-primary
                    px-4
                    py-2
                    font-bold
                    text-gray
                    mb-3
                    lg:mr-3
                  "
                  @click="removeFilter('brand')"
                >
                  {{ $t('productspage.filterIcon.brand') }}:
                  <span class="ml-1 font-bold text-primary">{{
                    selected.brand
                  }}</span>
                  <img
                    src="@/assets/images/close.svg"
                    class="w-3 h-3 ml-2"
                    alt=""
                  />
                </button>
              </div>
            </transition>
            <Spinner v-if="loading" size="large" class="mb-10" />
            <transition name="fade">
              <Nuxt />
            </transition>
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
    return {
      categoryQuery: 'none',
      industryQuery: 'none',
      brandQuery: 'none',
      selected: {
        category: '',
        brand: '',
        industry: '',
      },
    }
  },
  computed: {
    returnLang() {
      return this.$i18n.locale
    },
    ...mapState(['sinofarm', 'brands', 'industries']),
    loading() {
      return this.$store.getters.getLoadingStatus
    },
    hasFilters() {
      if (
        this.categoryQuery !== 'none' ||
        this.industryQuery !== 'none' ||
        this.brandQuery !== 'none'
      ) {
        return true
      } else {
        return false
      }
    },
  },
  created() {
    this.$store.dispatch('getCategories')
    this.$store.dispatch('getProducts')
    this.$store.dispatch('getSubcategories')
    this.$store.dispatch('getBrands')
    this.$store.dispatch('getIndustries')
  },
  mounted() {
    this.categoryQuery = 'none'
    this.industryQuery = 'none'
    this.brandQuery = 'none'
    this.langRouterPush('/products')
  },
  methods: {
    returnSubcategories(cat, subcategories) {
      const subcat = subcategories.filter(
        (sub) => sub.category.name_sr === cat.name_sr
      )
      return subcat
    },
    setCategory(category, categoryName) {
      if (this.categoryQuery === category) {
        this.categoryQuery = 'none'
        if (
          this.categoryQuery === 'none' &&
          this.industryQuery === 'none' &&
          this.brandQuery === 'none'
        ) {
          this.$nuxt.$options.router.push(`/products`)
        } else {
          this.langRouterPush(
            `/products/${this.categoryQuery}+${this.industryQuery}+${this.brandQuery}`
          )
        }
      } else {
        this.categoryQuery = category
        this.selected.category = categoryName
        if (this.industryQuery === 'none' && this.brandQuery === 'none') {
          this.langRouterPush(`/products/${this.categoryQuery}+none+none`)
        } else if (
          this.industryQuery !== 'none' ||
          this.brandQuery !== 'none'
        ) {
          if (this.industryQuery !== 'none' && this.brandQuery === 'none') {
            this.langRouterPush(
              `/products/${this.categoryQuery}+${this.industryQuery}+none`
            )
          } else if (
            this.brandQuery !== 'none' &&
            this.industryQuery === 'none'
          ) {
            this.langRouterPush(
              `/products/${this.categoryQuery}+none+${this.brandQuery}`
            )
          } else if (
            this.brandQuery !== 'none' &&
            this.industryQuery !== 'none'
          ) {
            this.langRouterPush(
              `/products/${this.categoryQuery}+${this.industryQuery}+${this.brandQuery}`
            )
          }
        }
      }
    },
    setIndustry(industry, industryName) {
      // check if this industry is already selected
      if (this.industryQuery === industry) {
        this.industryQuery = 'none'
        if (
          this.categoryQuery === 'none' &&
          this.industryQuery === 'none' &&
          this.brandQuery === 'none'
        ) {
          this.$nuxt.$options.router.push(`/products`)
        } else {
          this.langRouterPush(
            `/products/${this.categoryQuery}+${this.industryQuery}+${this.brandQuery}`
          )
        }
      } else {
        this.industryQuery = industry
        this.selected.industry = industryName
        if (this.categoryQuery === 'none' && this.brandQuery === 'none') {
          this.langRouterPush(`/products/none+${this.industryQuery}+none`)
        } else if (
          this.categoryQuery !== 'none' ||
          this.brandQuery !== 'none'
        ) {
          if (this.categoryQuery !== 'none' && this.brandQuery === 'none') {
            this.langRouterPush(
              `/products/${this.categoryQuery}+${this.industryQuery}+none`
            )
          } else if (
            this.brandQuery !== 'none' &&
            this.categoryQuery === 'none'
          ) {
            this.langRouterPush(
              `/products/none+${this.industryQuery}+${this.brandQuery}`
            )
          } else if (
            this.categoryQuery !== 'none' &&
            this.brandQuery !== 'none'
          ) {
            this.langRouterPush(
              `/products/${this.categoryQuery}+${this.industryQuery}+${this.brandQuery}`
            )
          }
        }
      }
    },
    setBrand(brand, brandName) {
      // check if this brand is already selected
      this.closeBrandCollapse = true
      if (this.brandQuery === brand) {
        this.brandQuery = 'none'
        if (
          this.categoryQuery === 'none' &&
          this.industryQuery === 'none' &&
          this.brandQuery === 'none'
        ) {
          this.$nuxt.$options.router.push(`/products`)
        } else {
          this.langRouterPush(
            `/products/${this.categoryQuery}+${this.industryQuery}+${this.brandQuery}`
          )
        }
      } else {
        this.brandQuery = brand
        this.selected.brand = brandName
        // if brand is selected alone
        if (this.categoryQuery === 'none' && this.industryQuery === 'none') {
          this.langRouterPush(`/products/none+none+${this.brandQuery}`)
          // if either category or industry is selected
        } else if (
          this.categoryQuery !== 'none' ||
          this.industryQuery !== 'none'
        ) {
          // if category is selected but industry is not
          if (this.categoryQuery !== 'none' && this.industryQuery === 'none') {
            this.langRouterPush(
              `/products/${this.categoryQuery}+none+${this.brandQuery}`
            )
            // if industry is selected but category is not
          } else if (
            this.industryQuery !== 'none' &&
            this.categoryQuery === 'none'
          ) {
            this.langRouterPush(
              `/products/none+${this.industryQuery}+${this.brandQuery}`
            )
            // if both industry and category are selected
          } else if (
            this.categoryQuery !== 'none' &&
            this.industryQuery !== 'none'
          ) {
            this.langRouterPush(
              `/products/${this.categoryQuery}+${this.industryQuery}+${this.brandQuery}`
            )
          }
        }
      }
    },
    removeFilter(filter) {
      if (filter === 'category') {
        this.categoryQuery = 'none'
        this.selected.category = ''
      }
      if (filter === 'industry') {
        this.industryQuery = 'none'
        this.selected.industry = ''
      }
      if (filter === 'brand') {
        this.brandQuery = 'none'
        this.selected.brand = ''
      }
      if (
        this.categoryQuery === 'none' &&
        this.brandQuery === 'none' &&
        this.industryQuery === 'none'
      ) {
        this.langRouterPush(`/products`)
      } else {
        this.langRouterPush(
          `/products/${this.categoryQuery}+${this.industryQuery}+${this.brandQuery}`
        )
      }
    },
    langRouterPush(url) {
      if (this.$i18n.locale === 'en') {
        this.$nuxt.$options.router.push('/en' + url)
      } else {
        this.$nuxt.$options.router.push(`${url}`)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
