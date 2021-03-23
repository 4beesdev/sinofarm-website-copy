<template>
  <div class="pt-48">
    <Breadcrumb
      :items="$t('breadcrumb.products')"
      :product-name="`${
        returnLang === 'sr' ? product.name_sr : product.name_en
      }`"
    />
    <div class="container mx-auto px-4 py-10">
      <div class="flex flex-col lg:flex-row">
        <div class="flex mb-10 flex-col lg:w-3/6 lg:mr-20 relative z-1">
          <button
            class="flex justify-between font-lato font-bold text-gray text-xl border-b-2 border-gray py-6"
          >
            {{ $t('product.overview') }}
            <img
              src="@/assets/images/arrow-down.svg"
              class="w-6 transform -rotate-90"
              alt=""
            />
          </button>
          <a
            href="#"
            class="flex justify-between font-lato font-bold text-gray text-xl border-b-2 border-gray py-6"
          >
            {{ $t('product.specification') }}
            <img
              src="@/assets/images/arrow-down.svg"
              class="w-6 transform -rotate-90"
              alt=""
            />
          </a>
          <a
            href="#"
            class="flex justify-between font-lato font-bold text-gray text-xl border-b-2 border-gray py-6"
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
        <div class="flex flex-col">
          <div class="flex flex-col mb-20 lg:flex-row">
            <div class="w-full h-64 border-2 border-gray md:w-96 lg:mr-10">
              <img
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
          <div id="specification" class="mb-20">
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
          <!-- Details -->
          <!-- <div>
            <h2 class="font-lato font-bold text-2xl text-primary mb-6">
              Details
            </h2>
            <ul class="font-lato font-normal text-lg text-gray list-disc px-4">
              <li class="mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusamus necessitatibus minus reprehenderit labore maiores
                soluta debitis numquam nulla inventore ab, quos saepe in,
                nostrum voluptatum ut recusandae placeat natus? Architecto.
              </li>
              <li class="mb-5">
                Accusamus necessitatibus minus reprehenderit labore maiores
                soluta debitis numquam nulla inventore ab
              </li>
              <li class="mb-5">
                Soluta debitis numquam nulla inventore ab, quos saepe in,
                nostrum voluptatum ut recusandae placeat natus? Architecto.
              </li>
            </ul>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    returnLang() {
      return this.$i18n.locale
    },
    ...mapState(['product']),
  },
  mounted() {
    this.$store.dispatch('getProduct', this.$route.params.product)
  },
}
</script>

<style lang="scss" scoped></style>
