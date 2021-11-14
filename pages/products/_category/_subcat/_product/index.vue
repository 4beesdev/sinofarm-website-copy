<template>
  <div class="pt-48">
    <div class="container mx-auto px-4 py-10">
      <BreadcrumbN
        products
        :category="subcategory.category"
        :subcategory="subcategory"
      ></BreadcrumbN>
      <div class="flex flex-col lg:flex-row mt-4 lg:mt-16">
        <div class="flex mb-10 flex-col lg:w-80 lg:mr-20 relative z-1">
          <button
            class="
              flex
              justify-between
              font-lato font-bold
              text-gray text-xl
              border-b-2 border-gray
              py-6
              focus:outline-none
            "
            @click="scrollOverview()"
          >
            {{ $t('product.overview') }}
            <img
              src="@/assets/images/arrow-down.svg"
              class="w-6 transform -rotate-90"
              alt=""
            />
          </button>
          <button
            class="
              flex
              justify-between
              font-lato font-bold
              text-gray text-xl
              border-b-2 border-gray
              py-6
              focus:outline-none
            "
            @click="scrollSpec()"
          >
            {{ $t('product.specification') }}
            <img
              src="@/assets/images/arrow-down.svg"
              class="w-6 transform -rotate-90"
              alt=""
            />
          </button>
          <a
            href="#"
            class="
              flex
              justify-between
              font-lato font-bold
              text-gray text-xl
              border-b-2 border-gray
              py-6
            "
            @click.prevent=""
          >
            {{ $t('product.details') }}
            <img
              src="@/assets/images/arrow-down.svg"
              class="w-6 transform -rotate-90"
              alt=""
            />
          </a>
        </div>
        <!-- Product info -->
        <!-- <div v-if="loading" class="flex w-full justify-center">
          <Spinner size="large" />
        </div> -->

        <div v-if="product" class="flex w-full flex-col">
          <div class="flex flex-col mb-20 lg:flex-row">
            <div
              ref="overview"
              class="w-full h-64 border-2 border-gray md:w-96 lg:mr-10"
            >
              <img
                v-if="product.image.url"
                :src="`https://sinofarm-portal.4bees.io${product.image.url}`"
                class="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div class="lg:w-4/6">
              <h1 class="font-lato font-bold text-2xl text-primary mt-6 mb-6">
                {{ returnLang === 'sr' ? product.name_sr : product.name_en }}
              </h1>
              <p class="font-lato font-normal text-lg text-gray">
                {{
                  returnLang === 'sr'
                    ? product.description_sr
                    : product.description_en
                }}
              </p>
            </div>
          </div>
          <!-- Specification -->
          <div id="specification" ref="specification" class="mb-20">
            <h2 class="font-lato font-bold text-2xl text-primary mb-6">
              {{ $t('product.specification') }}
            </h2>
            <p class="font-lato font-normal text-lg text-gray">
              {{
                returnLang === 'sr'
                  ? product.specification_sr
                  : product.specification_en
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
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
        offset: -250,
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
