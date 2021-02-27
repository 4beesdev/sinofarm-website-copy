<template>
  <div class="w-full bg-secondary">
    <div class="container mx-auto py-16 px-4">
      <div
        class="flex flex-col text-white md:flex-row md:flex-wrap md:justify-center lg:justify-between"
      >
        <div class="mb-4 md:mr-10 lg:mr-0">
          <img src="@/assets/images/logo-white.svg" class="w-48 mb-2" alt="" />
          <p class="font-mulish font-medium text-white">
            Sinofarm. All rights reserved 2021.
          </p>
        </div>
        <div class="mb-4 flex flex-col md:mr-10 lg:mr-0">
          <h3 class="font-lato text-lg uppercase mb-2">Our company</h3>
          <NuxtLink to="/" class="font-lato font-normal mb-2"
            >About Sinofarm</NuxtLink
          >
          <NuxtLink to="/" class="font-lato font-normal mb-2">Careers</NuxtLink>
          <NuxtLink to="/" class="font-lato font-normal mb-2"
            >Investor Relations</NuxtLink
          >
          <NuxtLink to="/" class="font-lato font-normal mb-2"
            >Partners and Suppliers</NuxtLink
          >
          <NuxtLink to="/" class="font-lato font-normal mb-2"
            >Sustainability</NuxtLink
          >
          <NuxtLink to="/" class="font-lato font-normal mb-2"
            >Ethics and Compliance</NuxtLink
          >
        </div>
        <div class="mb-4 flex flex-col">
          <h3 class="font-lato text-lg uppercase mb-2">News</h3>
          <NuxtLink to="/" class="font-lato font-normal mb-2"
            >News Center</NuxtLink
          >
          <NuxtLink to="/" class="font-lato font-normal mb-2"
            >Press Releases</NuxtLink
          >
        </div>
        <div class="mb-4 flex flex-col sm:mr-10 md:w-72 lg:mr-0">
          <h3 class="font-lato text-lg uppercase mb-2">Regulatory</h3>
          <NuxtLink to="/" class="font-lato font-normal mb-2"
            >SDS, RDS, More Regulatory & Compliance Information</NuxtLink
          >
          <NuxtLink to="/" class="font-lato font-normal mb-2"
            >Transport Information Search</NuxtLink
          >
          <NuxtLink to="/" class="font-lato font-normal mb-2"
            >CPSIA Certification Search</NuxtLink
          >
          <NuxtLink to="/" class="font-lato font-normal mb-2"
            >Transparency in Supply Chains and Modern Slavery
            Disclosures</NuxtLink
          >
          <NuxtLink to="/" class="font-lato font-normal mb-2"
            >US Ingredient Communication</NuxtLink
          >
        </div>
        <div class="flex flex-col">
          <h3 class="font-lato text-lg uppercase mb-2">Help</h3>
          <NuxtLink to="/" class="font-lato font-normal mb-2"
            >Help Center</NuxtLink
          >
          <NuxtLink to="/" class="font-lato font-normal mb-2"
            >Site Map</NuxtLink
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
