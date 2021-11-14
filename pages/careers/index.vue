<template>
  <div class="container mx-auto px-4 pt-48 pb-10">
    <div class="banner w-full mb-10">
      <img
        ref="bannerImg"
        src="@/assets/images/careers.jpg"
        class="
          w-full
          h-full
          object-cover
          mb-10
          transform
          -translate-y-32
          opacity-0
        "
        alt=""
      />
    </div>
    <h2
      ref="heading"
      class="
        text-3xl
        font-bold
        text-gray
        font-lato
        mb-5
        transform
        -translate-x-32
        opacity-0
      "
    >
      {{ $t('careers.title') }}
    </h2>
    <div class="grid grid-cols-1 gap-5 lg:gap-10 lg:grid-cols-2">
      <p
        ref="text1"
        class="text-lg font-lato text-gray transform -translate-x-32 opacity-0"
      >
        {{ $t('careers.text1') }}
      </p>
      <p
        ref="text2"
        class="text-lg font-lato text-gray transform -translate-x-32 opacity-0"
      >
        {{ $t('careers.text2') }}
      </p>
    </div>
    <div
      ref="icons"
      class="
        flex flex-col
        items-center
        py-10
        lg:flex-row lg:justify-between
        transform
        -translate-x-32
        opacity-0
      "
    >
      <div class="w-44 h-2 bg-lightBlue mb-10 lg:mb-0"></div>
      <div
        class="
          w-44
          h-44
          bg-lightBlue
          flex
          justify-center
          items-center
          rounded-full
          mb-5
          lg:mb-0
        "
      >
        <img src="@/assets/images/careers-people.svg" class="w-20" alt="" />
      </div>
      <div
        class="
          w-44
          h-44
          bg-lightBlue
          flex
          justify-center
          items-center
          rounded-full
          mb-5
          lg:mb-0
        "
      >
        <img src="@/assets/images/careers-hand.svg" class="w-20" alt="" />
      </div>
      <div
        class="
          w-44
          h-44
          bg-lightBlue
          flex
          justify-center
          items-center
          rounded-full
          mb-10
          lg:mb-0
        "
      >
        <img src="@/assets/images/careers-up.svg" class="w-20" alt="" />
      </div>
      <div class="w-44 h-2 bg-lightBlue"></div>
    </div>
    <h2
      ref="cta"
      class="
        text-3xl
        font-bold
        text-gray
        font-lato
        mb-5
        lg:text-center
        transform
        -translate-x-32
        opacity-0
      "
    >
      {{ $t('careers.cta') }}
    </h2>
    <NuxtLink
      class="
        p-4
        bg-primary
        block
        text-center
        mt-4
        w-60
        font-lato font-bold
        text-white
        lg:mx-auto
      "
      :to="localePath('/contact')"
      >{{ $t('careers.btn') }}</NuxtLink
    >
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
