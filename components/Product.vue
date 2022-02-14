<template>
  <div v-if="product" class="flex w-full flex-col" tabindex="0">
    <div class="flex flex-col mb-10 lg:flex-row">
      <a
        ref="overview"
        :href="`https://sinofarm-portal.4bees.io${product.image.url}`"
        target="_blank"
        class="product-image border-2 border-primary md:w-96 lg:mr-10"
      >
        <img
          v-if="product.image.url"
          :src="`https://sinofarm-portal.4bees.io${product.image.url}`"
          class="w-full h-full object-cover"
          alt=""
        />
      </a>
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
    <div
      v-if="
        product.specification_sr ||
        product.specification_en ||
        product.refNumber
      "
      id="specification"
      ref="specification"
      class="mb-20"
    >
      <h2 class="font-lato font-bold text-2xl text-primary mb-6">
        {{ $t('product.specification') }}
      </h2>
      <div v-if="product.refNumber !== null" class="overflow-x-auto mb-6">
        <div class="bg-primary flex text-white py-2 row-container">
          <div class="flex-1 pl-2">REF Number</div>
          <div class="flex-1 pl-2">Type</div>
          <div class="flex-1 pl-2">Size</div>
          <div class="flex-1 pl-2">Color</div>
          <div class="flex-1 pl-2">Package</div>
        </div>
        <div
          v-for="spec in formatSpec(product)"
          :key="spec.ref"
          class="border-primary border-b border-l border-r flex row-container"
        >
          <div class="flex-1 border-r border-primary p-2">
            {{ spec.ref }}
          </div>
          <div class="flex-1 border-r border-primary p-2">
            {{ spec.type }}
          </div>
          <div class="flex-1 border-r border-primary p-2">
            {{ spec.size }}
          </div>
          <div class="flex-1 border-r border-primary p-2">
            {{ returnLang === 'en' ? spec.color : spec.color_sr }}
          </div>
          <div class="flex-1 p-2">
            {{ spec.pack }}
          </div>
        </div>
      </div>
      <div class="whitespace-pre-line">
        {{
          returnLang === 'sr'
            ? product.specification_sr
            : product.specification_en
        }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    returnLang() {
      return this.$i18n.locale
    },
    // product() {
    //   return this.$store.getters.getProductById(
    //     parseInt(this.$route.params.product)
    //   )
    // },
  },
  methods: {
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
}
</script>

<style lang="scss" scoped></style>
