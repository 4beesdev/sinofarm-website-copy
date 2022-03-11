<template>
  <div>
    <h1 class="mt-6 mb-6 font-lato font-bold text-2xl text-primary">
      {{ returnLang === 'en' ? 'All products' : 'Svi proizvodi' }}
    </h1>
    <div class="flex flex-col lg:flex-row">
      <div
        ref="aside"
        class="flex mb-10 flex-col w-full filterContainer lg:mr-10"
      >
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
                ><button
                  v-for="subcategory in returnSubcategories(
                    cat,
                    sinofarm.subcategories
                  )"
                  :key="subcategory.name_sr"
                  class="mb-1 flex justify-between items-center text-left font-lato text-gray focus:outline-none focus:text-black"
                  @click.stop="setFilter(subcategory, 'subcategory')"
                >
                  {{
                    returnLang === 'sr'
                      ? subcategory.name_sr
                      : subcategory.name_en
                  }}
                  <img
                    v-if="
                      chosenFilter.subcategory &&
                      chosenFilter.subcategory.slug === subcategory.slug
                    "
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
          text-color="text-primary"
          :is-toggled="watchToggled.industry"
          main
          @click.native="setToggled($event, 'industry', !toggled.industry)"
        >
          <template v-slot:body>
            <button
              v-for="industry in industries"
              :key="industry.title_sr"
              class="mb-1 flex justify-between items-center text-left font-lato text-gray focus:outline-none focus:text-black"
              @click="setFilter(industry, 'industry')"
            >
              {{ industry.title_sr }}
              <img
                v-if="
                  chosenFilter.industry &&
                  chosenFilter.industry.slug === industry.slug
                "
                src="~/assets/images/checked.svg"
                alt=""
                class="w-4 h-4"
              />
            </button>
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
            <button
              v-for="brand in brands"
              :key="brand.name"
              class="mb-2 flex justify-between items-center font-lato text-primary text-left focus:outline-none focus:text-black"
              @click="setFilter(brand, 'brand')"
            >
              {{ brand.name }}
              <img
                v-if="
                  chosenFilter.brand && chosenFilter.brand.name === brand.name
                "
                src="~/assets/images/checked.svg"
                alt=""
                class="w-4 h-4"
              />
            </button>
          </template>
        </Collapsible>
      </div>
      <!-- List of products starts here -->
      <div v-if="!chosenFilter.product" class="flex flex-col">
        <div
          v-if="
            chosenFilter.category || chosenFilter.brand || chosenFilter.industry
          "
          class="flex flex-col my-5"
        >
          <p class="mb-2 text-xl text-primary">
            {{ returnLang === 'en' ? 'Selected filters' : 'Izabrani filteri' }}
          </p>
          <div class="flex flex-wrap">
            <div
              v-if="chosenFilter.subcategory"
              class="flex items-center border p-2 border-primary mr-2"
            >
              {{
                returnLang === 'en'
                  ? chosenFilter.subcategory.name_en
                  : chosenFilter.subcategory.name_sr
              }}
              <button class="p-2 ml-2" @click="clearFilter('subcategory')">
                <img src="@/assets/images/close.svg" class="w-2" alt="" />
              </button>
            </div>
            <div
              v-else-if="chosenFilter.category"
              class="flex items-center border p-2 border-primary mr-2"
            >
              {{
                returnLang === 'en'
                  ? chosenFilter.category.name_en
                  : chosenFilter.category.name_sr
              }}
              <button class="p-2 ml-2" @click="clearFilter('category')">
                <img src="@/assets/images/close.svg" class="w-2" alt="" />
              </button>
            </div>
            <div
              v-if="chosenFilter.brand"
              class="flex items-center border p-2 border-primary mr-2"
            >
              {{
                returnLang === 'en'
                  ? chosenFilter.brand.name
                  : chosenFilter.brand.name
              }}
              <button class="p-2 ml-2" @click="clearFilter('brand')">
                <img src="@/assets/images/close.svg" class="w-2" alt="" />
              </button>
            </div>
            <div
              v-if="chosenFilter.industry"
              class="flex items-center border p-2 border-primary mr-2"
            >
              {{
                returnLang === 'en'
                  ? chosenFilter.industry.title_en
                  : chosenFilter.industry.title_sr
              }}
              <button class="p-2 ml-2" @click="clearFilter('industry')">
                <img src="@/assets/images/close.svg" class="w-2" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div
          class="grid gap-4 grid-columns-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <div
            v-for="product in watchProducts"
            :key="product.id"
            class="w-full flex flex-col cursor-pointer"
            @click="setFilter(product, 'product')"
          >
            <div
              class="w-full h-60 border-2 border-primary mb-3 overflow-hidden"
            >
              <img
                v-if="product.image"
                :src="`https://sinofarm-portal.4bees.io${product.image.url}`"
                class="w-full h-full object-cover transition duration-300 transform hover:scale-110"
                :alt="returnLang === 'sr' ? product.name_sr : product.name_en"
              />
            </div>
            <p
              class="font-lato text-normal text-gray mb-3 pb-3 justify-self-end"
            >
              {{ returnLang === 'sr' ? product.name_sr : product.name_en }}
            </p>
          </div>
        </div>
      </div>
      <Product v-if="chosenFilter.product" :product="chosenFilter.product" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      products: [],
      filteredProducts: [],
      chosenFilter: {
        product: null,
        category: null,
        subcategory: null,
        brand: null,
        industry: null,
      },
      toggled: {
        category: false,
        industry: false,
        brand: false,
      },
      categories: [],
    }
  },
  computed: {
    returnLang() {
      return this.$i18n.locale
    },
    watchToggled() {
      return this.toggled
    },
    watchProducts() {
      return this.filteredProducts
    },
    watchCategories() {
      return this.categories
    },
    ...mapState(['sinofarm', 'brands', 'industries']),
  },
  mounted() {
    this.getProducts()
    this.fillCategories()
  },
  methods: {
    getProducts() {
      this.products = this.$store.getters.getProducts
      this.filteredProducts = this.products
    },
    productUrl(product) {
      const subcategory = this.$store.getters.getSubcategory(
        product.subcategory.slug
      )
      if (subcategory) {
        return `/products/${subcategory.category.slug}/${subcategory.slug}/${product.id}`
      } else {
        return '/'
      }
    },
    returnSubcategories(cat, subcategories) {
      const subcat = subcategories.filter(
        (sub) => sub.category.name_sr === cat.name_sr
      )
      return subcat
    },
    setFilter(item, type) {
      if (type !== 'product') {
        this.clearFilter('product')
      } else {
        this.chosenFilter.subcategory = item.subcategory
      }
      for (const [key, value] of Object.entries(this.chosenFilter)) {
        if (key === type) {
          value === item
            ? this.clearFilter(type)
            : (this.chosenFilter[key] = item)
          if (type === 'category' && value === item) {
            this.clearFilter('subcategory')
          } else if (type === 'category' && value !== item) {
            this.chosenFilter.subcategory = null
          }
        }
      }
      this.filteredProducts = this.products.filter(this.filterProducts)
      // this.$emit('scrollToStart')
      this.scrollToAside()
    },
    filterProducts(product) {
      // TODO: change filter category for subcategory
      let valid = false

      // Only category is selected
      if (
        this.chosenFilter.category &&
        !this.chosenFilter.brand &&
        !this.chosenFilter.industry
      ) {
        // if there is a subcategory and slugs match
        if (this.chosenFilter.subcategory) {
          if (product.subcategory.slug === this.chosenFilter.subcategory.slug) {
            valid = true
          }
          // if no subcategory's selected
        } else if (
          product.subcategory.category === this.chosenFilter.category.id
        ) {
          valid = true
        }

        // category and brand selected
      } else if (
        this.chosenFilter.category &&
        this.chosenFilter.brand &&
        !this.chosenFilter.industry
      ) {
        if (this.chosenFilter.subcategory) {
          if (
            product.subcategory.slug === this.chosenFilter.subcategory.slug &&
            product.brand.slug === this.chosenFilter.brand.slug
          ) {
            valid = true
          }
        } else if (
          product.subcategory.category === this.chosenFilter.category.id &&
          product.brand.slug === this.chosenFilter.brand.slug
        ) {
          valid = true
        }

        // Category, brand, industries selected
      } else if (
        this.chosenFilter.category &&
        this.chosenFilter.brand &&
        this.chosenFilter.industry
      ) {
        const industries = []
        product.industries.forEach((el) => {
          industries.push(el.slug)
        })

        if (this.chosenFilter.subcategory) {
          if (
            product.subcategory.slug === this.chosenFilter.subcategory.slug &&
            product.brand.slug === this.chosenFilter.brand.slug &&
            industries.includes(this.chosenFilter.industry.slug)
          ) {
            valid = true
          }
        } else if (
          product.subcategory.category === this.chosenFilter.category.id &&
          product.brand.slug === this.chosenFilter.brand.slug &&
          industries.includes(this.chosenFilter.industry.slug)
        ) {
          valid = true
        }
        // Only brand is selected
      } else if (
        !this.chosenFilter.subcategory &&
        this.chosenFilter.brand &&
        !this.chosenFilter.industry
      ) {
        if (product.brand.slug === this.chosenFilter.brand.slug) {
          valid = true
        }
        // Brand and industries selected
      } else if (
        this.chosenFilter.brand &&
        this.chosenFilter.industry &&
        !this.chosenFilter.subcategory
      ) {
        const industries = []
        product.industries.forEach((el) => {
          industries.push(el.slug)
        })
        if (
          product.brand.slug === this.chosenFilter.brand.slug &&
          industries.includes(this.chosenFilter.industry.slug)
        ) {
          valid = true
        }
        // only industry is selected
      } else if (
        !this.chosenFilter.brand &&
        this.chosenFilter.industry &&
        !this.chosenFilter.subcategory
      ) {
        const industries = []
        product.industries.forEach((el) => {
          industries.push(el.slug)
        })
        if (industries.includes(this.chosenFilter.industry.slug)) {
          valid = true
        }
        // none are chosen
      } else if (
        !this.chosenFilter.subcategory &&
        !this.chosenFilter.brand &&
        !this.chosenFilter.industry
      ) {
        valid = true
      }
      return valid
    },
    clearFilter(type) {
      for (const [key] of Object.entries(this.chosenFilter)) {
        if (type === key) {
          this.chosenFilter[key] = null
        }
      }
      this.filteredProducts = this.products.filter(this.filterProducts)
    },
    setToggled(event, type, value) {
      if (event.target.classList.contains('main')) {
        if (type === 'category') {
          this.toggled.category = value
          this.toggled.brand = false
          this.toggled.industry = false
        } else if (type === 'brand') {
          this.toggled.category = false
          this.toggled.brand = value
          this.toggled.industry = false
        } else if (type === 'industry') {
          this.toggled.category = false
          this.toggled.brand = false
          this.toggled.industry = value
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
      this.setFilter(category, 'category')
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
    scrollToAside() {
      this.$scrollTo(this.$refs.aside, 500, {
        easing: 'ease-in',
        offset: -150,
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
