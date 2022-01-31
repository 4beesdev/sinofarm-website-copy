<template>
  <div class="w-full bg-secondary">
    <div class="container mx-auto py-16 px-4">
      <div
        class="flex flex-col text-white md:flex-row md:flex-wrap md:justify-center lg:justify-between"
      >
        <div class="mb-4 md:mr-10 lg:mr-0">
          <img src="@/assets/images/logo-white.svg" class="w-48 mb-2" alt="" />
          <p class="font-mulish font-medium text-white">
            {{ $t('footer.copy') }}
          </p>
        </div>
        <div class="mb-4 flex flex-col md:mr-10 lg:mr-0">
          <span class="font-lato text-lg text-lightBlue uppercase mb-2">
            {{ $t('footer.company.title') }}
          </span>
          <NuxtLink
            :to="localePath('/about-us')"
            class="font-lato font-normal mb-2"
            >{{ $t('footer.company.link1') }}</NuxtLink
          >
          <NuxtLink
            :to="localePath('/careers')"
            class="font-lato font-normal mb-2"
            >{{ $t('footer.company.link2') }}</NuxtLink
          >
          <NuxtLink
            :to="localePath('/about-us')"
            class="font-lato font-normal mb-2"
            >{{ $t('footer.company.link3') }}</NuxtLink
          >
        </div>
        <div class="mb-4 flex flex-col">
          <span class="font-lato text-lightBlue text-lg uppercase mb-2">
            {{ $t('footer.news.title') }}
          </span>
          <NuxtLink
            :to="localePath('/news')"
            class="font-lato font-normal mb-2"
            >{{ $t('footer.news.news') }}</NuxtLink
          >
        </div>
        <div class="flex flex-col">
          <span class="font-lato text-lg text-lightBlue uppercase mb-2">
            {{ $t('footer.help.title') }}
          </span>
          <NuxtLink
            :to="localePath('/contact')"
            class="font-lato font-normal mb-2"
            >{{ $t('footer.help.help') }}</NuxtLink
          >
          <NuxtLink
            :to="localePath('/contact')"
            class="font-lato font-normal mb-2"
            >{{ $t('footer.help.contact') }}</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
