<template>
  <div class="pt-48">
    <div class="container mx-auto px-4 py-10">
      <BreadcrumbN
        products
        :category="subcategory.category"
        :subcategory="subcategory"
        :current="product"
      ></BreadcrumbN>
      <div class="flex flex-col lg:flex-row mt-4 lg:mt-16">
        <!-- for side menu -->
        <!-- <div class="flex mb-10 flex-col lg:w-80 lg:mr-20 relative z-1"></div> -->
        <SideMenu />
        <Product v-if="product" :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: '',
    }
  },
  computed: {
    returnLang() {
      return this.$i18n.locale
    },
    product() {
      return this.$store.getters.getProductById(
        parseInt(this.$route.params.product)
      )
    },
    subcategory() {
      return this.$store.getters.getSubcategory(this.product.subcategory.slug)
    },
  },
  mounted() {
    this.setPageTitle()
  },
  methods: {
    scrollOverview() {
      this.$scrollTo(this.$refs.overview, 500, {
        easing: 'ease-in',
        offset: -150,
      })
    },
    scrollSpec() {
      this.$scrollTo(this.$refs.specification, 500, {
        easing: 'ease-in',
        offset: -270,
      })
    },
    setPageTitle() {
      const product = this.$store.getters.getProductById(
        parseInt(this.$route.params.product)
      )
      if (this.returnLang === 'en') {
        this.pageTitle = product.name_en
      } else {
        this.pageTitle = product.name_sr
      }
    },
    formatSpec(product) {
      const ref = product.refNumber.split('-').map((item) => item.trim())
      const type = product.type.split('-').map((item) => item.trim())
      const size = product.size.split('-').map((item) => item.trim())
      const color = product.color.split('-').map((item) => item.trim())
      const pack = product.package.split('-').map((item) => item.trim())

      const specification = []
      ref.forEach((el, i) => {
        const temp = {}
        temp.ref = el
        temp.type = type[i]
        temp.size = size[i]
        temp.color = color[i]
        temp.pack = pack[i]
        specification.push(temp)
      })
      return specification
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
.product-image {
  width: 50%;
}
@media only screen and(max-width: 1024px) {
  .row-container {
    min-width: 800px;
  }
  .product-image {
    width: 100%;
  }
}
</style>
