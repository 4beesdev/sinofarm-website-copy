<template>
  <div class="container mx-auto px-4 pt-48 pb-10">
    <BreadcrumbN products :current="categoryName"></BreadcrumbN>
    <h1
      v-if="categoryName"
      class="mt-6 mb-6 font-lato font-bold text-2xl text-primary"
    >
      {{ returnLang === 'en' ? categoryName.name_en : categoryName.name_sr }}
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
              :linkurl="localePath(`/products/${cat.slug}`)"
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
              :to="localePath(`/brands/${brand.slug}`)"
              class="mb-2 flex justify-between items-center font-lato text-primary text-left focus:outline-none focus:text-black"
            >
              {{ brand.name }}
              <img
                v-if="filter.brand && filter.brand.name === brand.name"
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
          v-for="subCat in subcategories"
          :key="subCat.slug"
          class="w-full"
          :to="localePath(`/products/${$route.params.category}/${subCat.slug}`)"
        >
          <img
            :src="`https://sinofarm-portal.4bees.io${subCat.img.url}`"
            class="w-full h-60 object-cover mb-2 border-2 border-primary"
            alt=""
          />
          <p class="font-lato text-normal text-gray mb-3 pb-3 justify-self-end">
            {{ returnLang === 'en' ? subCat.name_en : subCat.name_sr }}
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
        category: true,
        industry: false,
        brand: false,
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
    subcategories() {
      return this.$store.getters.getSubCatFilter(this.$route.params.category)
    },
    categoryName() {
      return this.$store.getters.getCategory(this.$route.params.category)
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
      const category = this.$store.getters.getCategory(
        this.$route.params.category
      )
      if (this.returnLang === 'en') {
        this.pageTitle = category.name_en
      } else {
        this.pageTitle = category.name_sr
      }
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
