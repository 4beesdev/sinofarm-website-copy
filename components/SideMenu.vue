<template>
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
                returnLang === 'sr' ? subcategory.name_sr : subcategory.name_en
              }}
              <img
                v-if="$route.params.subcat === subcategory.slug"
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
        </NuxtLink>
      </template>
    </Collapsible>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
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
    this.fillCategories()
    this.setCatToggledOnMount(this.$route.params.category)
  },
  methods: {
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
}
</script>

<style lang="scss" scoped>
.filterContainer {
  @media only screen and(min-width: 1024px) {
    max-width: 20rem !important;
  }
}
</style>
