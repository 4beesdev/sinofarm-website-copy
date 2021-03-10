<template>
  <div class="container mx-auto px-4 pt-48">
    <!-- <Breadcrumb :items="links" /> -->
    <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 sm:mb-10">
      <div class="flex flex-col">
        <div class="bg-lightBlue px-4 py-10 mb-10 lg:px-10">
          <h2 class="text-3xl font-bold text-gray font-lato mb-5">
            {{ $t('aboutpage.title') }}
          </h2>
          <p
            v-for="(text, i) in $t('aboutpage.text')"
            :key="i"
            class="mb-3 text-lg font-lato text-gray"
          >
            {{ text }}
          </p>
        </div>
        <img
          src="@/assets/images/injection.jpg"
          class="w-full h-96 object-cover"
          alt=""
        />
      </div>
      <div class="flex flex-col mb-10 sm:flex-col-reverse sm:justify-end">
        <div class="px-4 py-10">
          <h2 class="text-3xl font-bold text-gray font-lato mb-5 lg:mb-10">
            {{ $t('aboutpage.brands') }}
          </h2>
          <div class="flex flex-col items-center">
            <img src="@/assets/images/sinomedic.svg" class="w-96 mb-5" alt="" />
            <img
              src="@/assets/images/sinodreams.svg"
              class="w-96 mb-5"
              alt=""
            />
            <img src="@/assets/images/sinofine.svg" class="w-96 h-20" alt="" />
          </div>
        </div>
        <img
          src="@/assets/images/epruvetice.jpg"
          class="w-full h-96 object-cover"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [{ title: '' }],
    }
  },
}
</script>

<style lang="scss" scoped></style>
