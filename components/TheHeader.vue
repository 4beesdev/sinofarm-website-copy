<template>
  <div class="container w-full mx-auto py-4 px-4">
    <header class="w-full flex flex-col">
      <div
        class="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6"
      >
        <div class="flex justify-between items-center mb-6 lg:mb-0">
          <NuxtLink to="/" class="mr-3">
            <img src="@/assets/images/logo.svg" alt="" />
          </NuxtLink>
          <a
            href="#"
            class="flex flex-col lg:hidden justify-center items-center w-14 h-14"
            @click.prevent
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
            placeholder="Search"
          />
          <button
            type="submit"
            class="absolute w-12 flex justify-center items-center h-full right-0 top-0"
          >
            <img src="@/assets/images/search.svg" class="w-6" alt="" />
          </button>
        </div>
        <a
          href="#"
          class="hidden text-base text-gray font-lato font-bold lg:block"
          >SR - EN</a
        >
      </div>
      <div
        class="hidden lg:flex justify-end font-lato text-base font-bold text-gray items-center lg:justify-between"
      >
        <div class="flex">
          <NuxtLink to="/" class="mr-4">Products</NuxtLink>
          <NuxtLink to="/" class="mr-4">Industries</NuxtLink>
          <NuxtLink to="/" class="mr-4">Brands</NuxtLink>
        </div>
        <NuxtLink to="/">Account</NuxtLink>
      </div>
    </header>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
