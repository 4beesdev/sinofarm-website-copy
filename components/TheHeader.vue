<template>
  <div class="fixed top-0 left-0 w-full z-30 bg-white">
    <div
      v-if="brandsToggled || industriesToggled || productsToggled"
      class="fixed top-0 left-0 w-full h-full z-0 bg-black opacity-50"
      @click="clearToggles"
    ></div>
    <div class="container relative z-2 bg-white w-full mx-auto py-4 px-4">
      <header class="w-full bg-white flex flex-col">
        <div
          class="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:mb-6"
        >
          <div class="flex justify-between items-center mb-6 lg:mb-0">
            <NuxtLink :to="localePath('/')" class="mr-3">
              <img src="@/assets/images/logo.svg" alt="" />
            </NuxtLink>
            <a
              href="#"
              class="flex flex-col lg:hidden justify-center items-center w-14 h-14"
              @click.prevent="toggled = !toggled"
            >
              <span class="block h-1 w-12 bg-primary mb-2"></span>
              <span class="block h-1 w-12 bg-primary mb-2"></span>
              <span class="block h-1 w-12 bg-primary"></span>
            </a>
          </div>
          <div class="relative w-full h-full lg:w-96">
            <input
              id=""
              class="w-full border-2 border-primary p-2 rounded-2xl focus:outline-none"
              type="text"
              name=""
              :placeholder="$t('header.search')"
            />
            <button
              type="submit"
              class="absolute w-12 flex justify-center items-center h-full right-0 top-0"
            >
              <img src="@/assets/images/search.svg" class="w-6" alt="" />
            </button>
          </div>
          <div
            class="hidden text-base text-gray font-lato relative font-bold lg:flex lg:flex-col"
          >
            <a
              href="#"
              class="flex items-center"
              @click.prevent="langToggled = !langToggled"
            >
              <img
                src="@/assets/images/earth-grid-symbol.svg"
                class="w-6"
                alt=""
              />
              <img
                src="@/assets/images/arrow-down.svg"
                class="w-3 ml-3"
                alt=""
              />
            </a>
            <div
              v-if="langToggled"
              class="p-2 flex flex-col items-center w-full absolute transform translate-y-10 bg-white"
            >
              <NuxtLink :to="switchLocalePath('sr')" class="mb-2">
                SR
              </NuxtLink>
              <NuxtLink :to="switchLocalePath('en')"> EN </NuxtLink>
            </div>
            <!-- <NuxtLink :to="switchLocalePath('sr')">
              <img src="@/assets/images/serbia.svg" class="w-8" alt="" />
            </NuxtLink>
            <span class="mx-3">/</span>
            <NuxtLink :to="switchLocalePath('en')">
              <img
                src="@/assets/images/united-kingdom.svg"
                class="w-8"
                alt=""
              />
            </NuxtLink> -->
          </div>
        </div>
        <div
          class="hidden lg:flex justify-end text-base text-gray items-center lg:justify-between"
        >
          <div class="flex">
            <a
              href="#"
              :class="`${productsToggled ? 'active-link' : ''}`"
              class="mr-4 text-2xl header-link"
              @click.prevent="toggleProducts"
              >{{ $t('header.navigation.products') }}</a
            >
            <a
              href="#"
              :class="`${industriesToggled ? 'active-link' : ''}`"
              class="mr-4 text-2xl header-link"
              @click.prevent="toggleIndustries"
              >{{ $t('header.navigation.industries') }}</a
            >
            <a
              href="#"
              :class="`${brandsToggled ? 'active-link' : ''}`"
              class="mr-4 text-2xl header-link"
              @click.prevent="toggleBrands"
              >{{ $t('header.navigation.brands') }}</a
            >
          </div>
          <NuxtLink to="http://www.apotekasinofarm.rs/">
            <img
              src="@/assets/images/Apoteka-Sinofarm-Logo-svg-1.svg"
              class="w-40"
              alt=""
            />
          </NuxtLink>
        </div>
        <div v-if="brandsToggled" class="grid grid-cols-4 pt-6 px-1">
          <NuxtLink
            v-for="brand in headerData.brands"
            :key="brand.name"
            :to="localePath(`/products/${brand.slug}`)"
            class="flex flex-col items-center text-normal text-center text-base text-gray p-4 my-2 hover:bg-lightGray transition duration-300 ease-in-out"
          >
            <div v-if="brand.logo">
              <img
                :src="`https://sinofarm-portal.4bees.io${brand.logo.url}`"
                alt=""
                class="w-44 h-8"
              />
            </div>
            <p v-if="!brand.logo">{{ brand.name }}</p>
          </NuxtLink>
        </div>
        <div
          v-if="industriesToggled"
          class="grid grid-cols-3 xl:grid-cols-4 pt-6 px-1"
        >
          <NuxtLink
            v-for="industry in headerData.industries"
            :key="industry.title_sr"
            :to="localePath(`/products/${industry.slug}`)"
            class="text-normal text-left text-base text-gray py-2 px-3 my-2 hover:bg-lightGray transition duration-300 ease-in-out"
          >
            {{ industry.title_sr }}
          </NuxtLink>
        </div>
        <div
          v-if="productsToggled"
          class="grid grid-cols-3 xl:grid-cols-4 pt-6 px-1"
        >
          <NuxtLink
            v-for="cat in headerData.sinofarm.categories"
            :key="cat.slug"
            :to="localePath(`/products/${cat.slug}`)"
            class="truncate w-64 mb-2 text-gray hover:bg-lightGray transition duration-300 p-1"
            >{{ returnLang === 'sr' ? cat.name_sr : cat.name_en }}</NuxtLink
          >
          <NuxtLink
            to="/products"
            class="col-span-full text-center font-bold text-gray mt-3 hover:bg-lightGray transition duration-300 p-1"
            >{{ $t('header.products') }}</NuxtLink
          >
        </div>
      </header>
    </div>
    <div
      class="w-full h-0 fixed overflow-hidden bg-white flex justify-center transition-all duration-500 ease-in-out"
      :class="toggled ? 'h-full py-16' : ''"
    >
      <div
        class="flex flex-col font-lato font-bold text-gray text-3xl text-center opacity-0 transition-all duration-500 delay-300"
        :class="toggled ? 'opacity-100' : ''"
      >
        <NuxtLink to="/" class="mb-5 p-2">{{
          $t('header.navigation.home')
        }}</NuxtLink>
        <NuxtLink :to="localePath('/products')" class="mb-5 p-2">{{
          $t('header.navigation.products')
        }}</NuxtLink>
        <NuxtLink :to="localePath('/products')" class="mb-5 p-2">{{
          $t('header.navigation.industries')
        }}</NuxtLink>
        <NuxtLink :to="localePath('/products')" class="mb-5 p-2">{{
          $t('header.navigation.brands')
        }}</NuxtLink>
        <div
          class="text-base text-gray font-lato font-bold flex justify-center items-center"
        >
          <NuxtLink :to="switchLocalePath('sr')">
            <img src="@/assets/images/serbia.svg" class="w-8" alt="" />
          </NuxtLink>
          <span class="mx-3">/</span>
          <NuxtLink :to="switchLocalePath('en')">
            <img src="@/assets/images/united-kingdom.svg" class="w-8" alt="" />
          </NuxtLink>
        </div>
        <!-- <NuxtLink to="/products" class="mb-5 p-2">Account</NuxtLink> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headerData: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      toggled: false,
      brandsToggled: false,
      langToggled: false,
      industriesToggled: false,
      productsToggled: false,
    }
  },
  computed: {
    returnLang() {
      return this.$i18n.locale
    },
  },
  watch: {
    $route(newRoute) {
      this.toggled = false
      this.langToggled = false
      this.clearToggles()
    },
  },
  methods: {
    toggleBrands() {
      this.brandsToggled = !this.brandsToggled
      this.industriesToggled = false
      this.productsToggled = false
    },
    toggleProducts() {
      this.productsToggled = !this.productsToggled
      this.industriesToggled = false
      this.brandsToggled = false
    },
    toggleIndustries() {
      this.industriesToggled = !this.industriesToggled
      this.productsToggled = false
      this.brandsToggled = false
    },
    clearToggles() {
      this.productsToggled = false
      this.industriesToggled = false
      this.brandsToggled = false
    },
    returnSubcategories(cat, subcategories) {
      const subcat = subcategories.filter(
        (sub) => sub.category.name_sr === cat.name_sr
      )
      return subcat
    },
  },
}
</script>

<style lang="scss" scoped>
.header-link {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0%;
    height: 2px;
    background-color: #3c62bd;
    transition: width 0.4s;
  }
}
.header-link:hover.header-link::after {
  width: 100%;
}

.active-link {
  &::after {
    width: 100%;
  }
}

.brand-item {
  transition: background-color 0.4s;
  img,
  p {
    transition: transform 0.4s;
  }
  &:hover {
    background-color: #f2f2f2;
    img,
    p {
      transform: translateY(-5px);
    }
  }
}
</style>
