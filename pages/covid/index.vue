<template>
  <div class="container mx-auto px-4 pt-48 pb-10">
    <div class="banner w-full mb-10">
      <img
        src="@/assets/images/covid.jpg"
        class="w-full h-full object-cover"
        alt=""
      />
    </div>
    <h2 class="text-3xl font-bold text-gray font-lato mb-5">Covid</h2>
    <div class="grid grid-cols-1 gap-10 sm:grid-cols-2">
      <p class="text-lg font-lato text-gray text-justify">
        {{ $t('covidpage.text1') }}
      </p>
      <div>
        <div class="flex justify-between items-center mb-10">
          <img src="@/assets/images/covid-19.svg" class="w-20" alt="" />
          <img src="@/assets/images/covid-distance.svg" class="w-20" alt="" />
          <img src="@/assets/images/covid-person.svg" class="w-20" alt="" />
        </div>
        <p class="text-lg font-lato text-gray text-justify">
          {{ $t('covidpage.text2') }}
        </p>
      </div>
      <p
        class="text-lg font-lato text-white bg-danger p-4 col-span-full text-center"
      >
        {{ $t('covidpage.text3') }}
      </p>
      <div class="grid col-span-full gap-x-10 grid-col-1 sm:grid-cols-2">
        <h2 class="text-3xl font-bold text-gray font-lato mb-5 col-span-full">
          {{ $t('covidpage.title2') }}
        </h2>
        <p class="text-lg font-lato text-gray mb-2 text-justify">
          {{ $t('covidpage.text4') }}
        </p>
        <p class="text-lg font-lato text-gray text-justify">
          {{ $t('covidpage.text5') }}
        </p>
      </div>
    </div>
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
