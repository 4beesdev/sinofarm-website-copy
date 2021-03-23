<template>
  <div class="fixed top-0 left-0 w-full z-10 bg-white">
    <div
      v-if="brandsToggled"
      class="fixed top-0 left-0 w-full h-full z-0 bg-black opacity-50"
      @click="brandsToggled = !brandsToggled"
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
          <div class="hidden text-base text-gray font-lato font-bold lg:flex">
            <NuxtLink :to="switchLocalePath('sr')">
              <img src="@/assets/images/serbia.svg" class="w-8" alt="" />
            </NuxtLink>
            <span class="mx-3">/</span>
            <NuxtLink :to="switchLocalePath('en')">
              <img
                src="@/assets/images/united-kingdom.svg"
                class="w-8"
                alt=""
              />
            </NuxtLink>
          </div>
        </div>
        <div
          class="hidden lg:flex justify-end font-lato text-base font-bold text-gray items-center lg:justify-between"
        >
          <div class="flex">
            <NuxtLink
              :to="localePath('/products')"
              class="mr-4 text-lg header-link"
              >{{ $t('header.navigation.products') }}</NuxtLink
            >
            <NuxtLink :to="localePath('/')" class="mr-4 text-lg header-link">{{
              $t('header.navigation.industries')
            }}</NuxtLink>
            <a
              href="#"
              :class="`${brandsToggled ? 'brandsActive' : ''}`"
              class="mr-4 text-lg header-link"
              @click.prevent="brandsToggled = !brandsToggled"
              >{{ $t('header.navigation.brands') }}</a
            >
          </div>
          <!-- <NuxtLink to="/">Account</NuxtLink> -->
        </div>
        <div v-if="brandsToggled" class="flex flex-wrap pt-4 px-1">
          <NuxtLink
            :to="localePath('/products')"
            class="w-64 px-8 py-16 flex flex-col items-center justify-center brand-item"
          >
            <img src="@/assets/images/sinomedic.svg" class="h-10" alt="" />
            <p class="text-center text-lg text-primary mt-4 font-bold">
              Sinomedic
            </p>
          </NuxtLink>
          <NuxtLink
            :to="localePath('/products')"
            class="w-64 px-8 py-16 flex flex-col items-center justify-center brand-item"
          >
            <img src="@/assets/images/sinodreams.svg" class="h-10" alt="" />
            <p class="text-center text-lg text-primary mt-4 font-bold">
              Sinodreams
            </p>
          </NuxtLink>
          <NuxtLink
            :to="localePath('/products')"
            class="w-64 px-8 py-16 flex flex-col items-center justify-center brand-item"
          >
            <img src="@/assets/images/sinofine.svg" class="h-10" alt="" />
            <p class="text-center text-lg text-primary mt-4 font-bold">
              Sinofine
            </p>
          </NuxtLink>
        </div>
      </header>
    </div>
    <div
      v-if="toggled"
      class="w-full h-full fixed bg-white flex justify-center py-10"
    >
      <div
        class="flex flex-col font-lato font-bold text-gray text-3xl text-center"
      >
        <NuxtLink to="/" class="mb-5 p-2">{{
          $t('header.navigation.home')
        }}</NuxtLink>
        <NuxtLink to="/products" class="mb-5 p-2">{{
          $t('header.navigation.products')
        }}</NuxtLink>
        <NuxtLink to="/products" class="mb-5 p-2">{{
          $t('header.navigation.industries')
        }}</NuxtLink>
        <NuxtLink to="/products" class="mb-5 p-2">{{
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
  data() {
    return {
      toggled: false,
      brandsToggled: false,
    }
  },
  watch: {
    $route(newRoute) {
      this.toggled = false
      this.brandsToggled = false
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

.brandsActive {
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
