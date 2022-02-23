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
      v-if="product.refNumber"
      id="specification"
      ref="specification"
      class="mb-20"
    >
      <h2 class="font-lato font-bold text-2xl text-primary mb-6">
        {{ $t('product.specification') }}
      </h2>
      <div class="refs overflow-x-scroll">
        <table
          v-if="product.refNumber !== null"
          class="product-table mb-6 w-full border border-primary"
        >
          <tr class="bg-primary text-white text-left">
            <th class="sm:pl-2 w-4 sm:w-1/5 font-normal py-2">
              {{ returnLang === 'en' ? 'REF Number' : 'REF Broj' }}
            </th>
            <th class="sm:pl-2 font-normal w-1/5">
              {{ returnLang === 'en' ? 'Type' : 'Tip' }}
            </th>
            <th class="sm:pl-2 font-normal w-1/5">
              {{ returnLang === 'en' ? 'Size' : 'Veličina' }}
            </th>
            <th class="sm:pl-2 font-normal w-1/5">
              {{ returnLang === 'en' ? 'Color' : 'Boja' }}
            </th>
            <th class="sm:pl-2 font-normal w-auto">
              {{ returnLang === 'en' ? 'Package' : 'Pakovanje' }}
            </th>
          </tr>
          <tr v-for="spec in formatSpec(product)" :key="spec.ref" class="">
            <td class="py-2 sm:p-2">{{ spec.ref }}</td>
            <td class="sm:p-2">{{ spec.type }}</td>
            <td class="sm:p-2 break-words">{{ spec.size }}</td>
            <td class="sm:p-2">
              {{ returnLang === 'en' ? spec.color : spec.color_sr }}
            </td>
            <td class="sm:p-2">{{ spec.pack }}</td>
          </tr>
        </table>
      </div>
      <div
        v-if="product.specification_sr || product.specification_en"
        class="whitespace-pre-line"
      >
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
  },
  methods: {
    formatSpec(product) {
      const ref = product.refNumber.split('-').map((item) => item.trim())
      const type = product.type.split('-').map((item) => item.trim())
      const size = product.size.split('-').map((item) => item.trim())
      const color = product.color.split('-').map((item) => item.trim())
      // eslint-disable-next-line
      let color_sr = null
      // eslint-disable-next-line
      product.color_sr ? color_sr = product.color_sr.split('-').map((item) => item.trim()) : color_sr = product.color.split('-').map((item) => item.trim())
      const pack = product.package.split('-').map((item) => item.trim())

      const specification = []
      ref.forEach((el, i) => {
        const temp = {}
        temp.ref = el
        temp.type = type[i]
        temp.size = size[i]
        temp.color = color[i]
        // eslint-disable-next-line
        temp.color_sr = color_sr[i]
        temp.pack = pack[i]
        specification.push(temp)
      })
      return specification
    },
  },
}
</script>

<style lang="scss">
.refs {
  max-width: 100vw;

  &::-webkit-scrollbar {
    display: none;
  }
}
.product-table {
  tr + tr {
    @apply border-t border-primary;
  }
  td + td {
    @apply border-l border-primary;
  }
}
</style>
