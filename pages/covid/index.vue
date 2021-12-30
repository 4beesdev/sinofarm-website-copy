<template>
  <div class="container mx-auto px-4 pt-48 pb-10">
    <div class="banner w-full mb-10">
      <img
        ref="covidBanner"
        src="@/assets/images/covid.jpg"
        class="w-full h-full object-cover opacity-0 transform -translate-y-32"
        alt=""
      />
    </div>
    <h2
      ref="covidTitle"
      class="text-3xl font-bold text-gray font-lato mb-5 opacity-0 transform -translate-x-32"
    >
      Covid
    </h2>
    <div class="grid grid-cols-1 gap-10 sm:grid-cols-2">
      <p
        ref="par1"
        class="text-lg font-lato text-gray text-justify opacity-0 transform -translate-x-32"
      >
        {{ $t('covidpage.text1') }}
      </p>
      <div ref="text2" class="opacity-0 transform translate-x-32">
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
        ref="covidDanger"
        class="text-lg font-lato text-white bg-danger p-4 col-span-full text-center opacity-0 transform translate-y-32"
      >
        {{ $t('covidpage.text3') }}
      </p>
      <div class="grid col-span-full gap-x-10 grid-col-1 sm:grid-cols-2">
        <h2
          ref="covidTitle2"
          class="text-3xl font-bold text-gray font-lato mb-5 col-span-full opacity-0 transform -translate-x-32"
        >
          {{ $t('covidpage.title2') }}
        </h2>
        <p
          ref="text3"
          class="text-lg font-lato text-gray mb-2 text-justify opacity-0 transform -translate-x-32"
        >
          {{ $t('covidpage.text4') }}
        </p>
        <p
          ref="text4"
          class="text-lg font-lato text-gray text-justify opacity-0 transform translate-x-32"
        >
          {{ $t('covidpage.text5') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}
export default {
  mounted() {
    const elements = this.$refs
    for (const el in elements) {
      gsap.to(elements[el], {
        scrollTrigger: {
          trigger: elements[el],
          start: 'center bottom',
        },
        y: 0,
        x: 0,
        opacity: 1,
        duration: 0.5,
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.banner {
  height: 50vh;
}
</style>
