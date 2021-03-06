<template>
  <div class="container mx-auto px-4 pt-48 pb-10">
    <div class="banner w-full mb-10">
      <img
        src="@/assets/images/home-banner.png"
        class="w-full h-full object-cover mb-10"
        alt=""
      />
    </div>
    <h2 class="text-3xl font-bold text-gray font-lato mb-5">
      {{ $t('careers.title') }}
    </h2>
    <div class="grid grid-cols-1 gap-5 lg:gap-10 lg:grid-cols-2">
      <p class="text-lg font-lato text-gray">{{ $t('careers.text1') }}</p>
      <p class="text-lg font-lato text-gray">{{ $t('careers.text2') }}</p>
    </div>
    <div
      class="flex flex-col items-center py-10 lg:flex-row lg:justify-between"
    >
      <div class="w-44 h-2 bg-lightBlue mb-10 lg:mb-0"></div>
      <div class="w-44 h-44 bg-lightBlue rounded-full mb-5 lg:mb-0"></div>
      <div class="w-44 h-44 bg-lightBlue rounded-full mb-5 lg:mb-0"></div>
      <div class="w-44 h-44 bg-lightBlue rounded-full mb-10 lg:mb-0"></div>
      <div class="w-44 h-2 bg-lightBlue"></div>
    </div>
    <h2 class="text-3xl font-bold text-gray font-lato mb-5 lg:text-center">
      {{ $t('careers.cta') }}
    </h2>
    <NuxtLink
      class="p-4 bg-primary block text-center mt-4 w-60 font-lato font-bold text-white lg:mx-auto"
      :to="localePath('/contact')"
      >{{ $t('careers.btn') }}</NuxtLink
    >
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.banner {
  height: 50vh;
}
</style>
