<template>
  <div class="container mx-auto px-4 pt-48 pb-10">
    <BreadcrumbN products :current="brandName"></BreadcrumbN>
    <h1
      v-if="brandName"
      class="mt-6 mb-6 font-lato font-bold text-2xl text-primary"
    >
      {{ returnLang === 'en' ? brandName.title_en : brandName.title_sr }}
    </h1>
    <div class="flex flex-col lg:flex-row">
      <div class="flex mb-10 flex-col w-full filterContainer lg:mr-10">
        <Collapsible
          filter
          :link-title="$t('productspage.filter.categories')"
          text-color="text-primary"
          :is-toggled="watchToggled.category"
          main
          @click.native="setToggled($event, 'category', !toggled.category)"
        >
          <template v-slot:body>
            <Collapsible
              v-for="cat in sinofarm.categories"
              :key="cat.name_sr"
              category
              :link-title="returnLang === 'sr' ? cat.name_sr : cat.name_en"
              text-color="text-primary"
              :is-toggled="isCatToggled(watchCategories, cat)"
              @click.native="setCatToggled(cat)"
            >
              <template v-slot:body
                ><NuxtLink
                  v-for="subcategory in returnSubcategories(
                    cat,
                    sinofarm.subcategories
                  )"
                  :key="subcategory.name_sr"
                  :to="
                    localePath(
                      `/products/${subcategory.category.slug}/${subcategory.slug}`
                    )
                  "
                  class="mb-1 flex justify-between items-center text-left font-lato text-gray focus:outline-none focus:text-black"
                >
                  {{
                    returnLang === 'sr'
                      ? subcategory.name_sr
                      : subcategory.name_en
                  }}
                  <img
                    v-if="
                      filter.category &&
                      filter.category.slug === subcategory.slug
                    "
                    src="~/assets/images/checked.svg"
                    alt=""
                    class="w-4 h-4"
                  />
                </NuxtLink>
              </template>
            </Collapsible>
          </template>
        </Collapsible>
        <Collapsible
          filter
          :link-title="$t('productspage.filter.industries')"
          text-color="text-primary"
          :is-toggled="watchToggled.industry"
          main
          @click.native="setToggled($event, 'industry', !toggled.industry)"
        >
          <template v-slot:body>
            <NuxtLink
              v-for="industry in industries"
              :key="industry.title_sr"
              :to="localePath(`/industries/${industry.slug}`)"
              class="mb-2 flex justify-between items-center text-left font-lato text-primary focus:outline-none focus:text-black"
            >
              {{ industry.title_sr }}
              <img
                v-if="filter.industry && filter.industry.slug === industry.slug"
                src="~/assets/images/checked.svg"
                alt=""
                class="w-4 h-4"
              />
            </NuxtLink>
          </template>
        </Collapsible>
        <Collapsible
          filter
          :link-title="$t('productspage.filter.brands')"
          text-color="text-primary"
          :is-toggled="watchToggled.brand"
          main
          @click.native="setToggled($event, 'brand', !toggled.brand)"
        >
          <template v-slot:body>
            <NuxtLink
              v-for="brand in brands"
              :key="brand.name"
              :to="
                brand.slug !== $route.params.slug
                  ? localePath(`/brands/${brand.slug}`)
                  : localePath(`/products`)
              "
              class="mb-2 flex justify-between items-center font-lato text-primary text-left focus:outline-none focus:text-black"
            >
              {{ brand.name }}
              <img
                v-if="$route.params.slug === brand.slug"
                src="~/assets/images/checked.svg"
                alt=""
                class="w-4 h-4"
              />
            </NuxtLink>
          </template>
        </Collapsible>
      </div>
      <div
        class="grid gap-4 grid-columns-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <NuxtLink
          v-for="product in products"
          :key="product.id"
          class="w-full"
          :to="localePath(productUrl(product))"
        >
          <div class="w-full h-60 border-2 border-primary mb-3 overflow-hidden">
            <img
              v-if="product.image"
              :src="`https://sinofarm-portal.4bees.io${product.image.url}`"
              class="w-full h-full object-cover transition duration-300 transform hover:scale-110"
              alt=""
            />
          </div>
          <p class="font-lato text-normal text-gray mb-3 pb-3 justify-self-end">
            {{ returnLang === 'en' ? product.name_en : product.name_sr }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      pageTitle: '',
      toggled: {
        category: false,
        industry: false,
        brand: true,
      },
      filter: {
        category: null,
        brand: null,
        industry: null,
      },
      categories: [],
    }
  },
  computed: {
    returnLang() {
      return this.$i18n.locale
    },
    products() {
      return this.$store.getters.getProductsByBrand(this.$route.params.slug)
    },
    brandName() {
      return this.$store.getters.getBrand(this.$route.params.slug)
    },
    watchToggled() {
      return this.toggled
    },
    watchCategories() {
      return this.categories
    },
    ...mapState(['sinofarm', 'brands', 'industries']),
  },
  mounted() {
    this.setPageTitle()
    this.fillCategories()
    this.setCatToggledOnMount(this.$route.params.category)
  },
  methods: {
    setPageTitle() {
      const category = this.$store.getters.getBrand(this.$route.params.slug)
      this.pageTitle = category.name
    },
    returnSubcategories(cat, subcategories) {
      const subcat = subcategories.filter(
        (sub) => sub.category.name_sr === cat.name_sr
      )
      return subcat
    },
    setFilter(item, type) {
      if (type === 'category') {
        this.filter.category = item
      } else if (type === 'industry') {
        this.filter.industry = item
      } else if (type === 'brand') {
        this.filter.brand = item
      }
      this.filteredProducts = this.products.filter(this.filterProducts)
    },
    setToggled(event, type, value) {
      if (event.target.classList.contains('main')) {
        if (type === 'category') {
          this.toggled.category = !this.toggled.category
          this.toggled.brand = false
          this.toggled.industry = false
        } else if (type === 'brand') {
          this.toggled.category = false
          this.toggled.brand = !this.toggled.brand
          this.toggled.industry = false
        } else if (type === 'industry') {
          this.toggled.category = false
          this.toggled.brand = false
          this.toggled.industry = !this.toggled.industry
        }
      }
    },
    setCatToggled(category) {
      this.categories.forEach((cat) => {
        if (cat.slug === category.slug) {
          cat.toggled = !cat.toggled
        } else {
          cat.toggled = false
        }
      })
    },
    setCatToggledOnMount(slug) {
      this.categories.forEach((cat) => {
        if (cat.slug === slug) {
          cat.toggled = true
        } else {
          cat.toggled = false
        }
      })
    },
    isCatToggled(categories, cat) {
      let isToggled = false
      categories.forEach((el) => {
        if (el.slug === cat.slug) {
          if (el.toggled) {
            isToggled = true
          } else {
            isToggled = false
          }
        }
      })
      return isToggled
    },
    fillCategories() {
      const categories = this.$store.getters.getCategories
      categories.forEach((cat) => {
        const item = {}
        item.slug = cat.slug
        item.toggled = false
        this.categories.push(item)
      })
    },
    productUrl(product) {
      const subcategory = this.$store.getters.getSubcategory(
        product.subcategory.slug
      )
      if (subcategory) {
        return `/products/${subcategory.category.slug}/${subcategory.slug}/${product.id}`
      } else {
        return `/product/${product.id}`
      }
    },
  },
  head() {
    return {
      title: `Sinofarm | ${this.pageTitle}`,
    }
  },
}
</script>

<style lang="scss" scoped>
.filterContainer {
  @media only screen and(min-width: 1024px) {
    max-width: 20rem !important;
  }
}
</style>
