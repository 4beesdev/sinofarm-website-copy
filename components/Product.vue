<template>
  <NuxtLink to="/products/lorem-ipsum" class="flex flex-col">
    <div class="w-full h-64 border-2 border-primary mb-3"></div>
    <h3
      class="font-lato font-bold text-xl text-gray mb-3 pb-3 border-b-2 border-gray"
    >
      Lorem ipsum dolor set
    </h3>
    <div class="flex justify-between">
      <div class="flex items-center">
        <img src="@/assets/images/star-full.svg" class="w-6 mr-2" alt="" />
        <img src="@/assets/images/star-full.svg" class="w-6 mr-2" alt="" />
        <img src="@/assets/images/star-full.svg" class="w-6 mr-2" alt="" />
        <img src="@/assets/images/star-full.svg" class="w-6 mr-2" alt="" />
        <img src="@/assets/images/star-outline.svg" class="w-6" alt="" />
      </div>
      <p class="font-lato font-bold text-xl text-gray">4.0</p>
    </div>
  </NuxtLink>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
