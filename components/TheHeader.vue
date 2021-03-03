<template>
  <div class="fixed top-0 left-0 w-full z-10 bg-white">
    <div class="container w-full mx-auto py-4 px-4">
      <header class="w-full flex flex-col">
        <div
          class="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6"
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
            <NuxtLink :to="switchLocalePath('sr')">SR</NuxtLink>
            <span class="mx-3">/</span>
            <NuxtLink :to="switchLocalePath('en')">EN</NuxtLink>
          </div>
        </div>
        <div
          class="hidden lg:flex justify-end font-lato text-base font-bold text-gray items-center lg:justify-between"
        >
          <div class="flex">
            <NuxtLink to="/products" class="mr-4">{{
              $t('header.navigation.products')
            }}</NuxtLink>
            <NuxtLink to="/" class="mr-4">{{
              $t('header.navigation.industries')
            }}</NuxtLink>
            <NuxtLink to="/" class="mr-4">{{
              $t('header.navigation.brands')
            }}</NuxtLink>
          </div>
          <!-- <NuxtLink to="/">Account</NuxtLink> -->
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
    }
  },
  watch: {
    $route(newRoute) {
      this.toggled = false
    },
  },
}
</script>

<style lang="scss" scoped></style>
