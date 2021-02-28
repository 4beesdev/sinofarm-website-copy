<template>
  <div class="pt-48">
    <Breadcrumb />
    <div class="container mx-auto px-4 py-10">
      <div class="flex flex-col lg:flex-row">
        <div class="flex mb-10 flex-col lg:w-3/6 lg:mr-20 relative z-1">
          <button
            class="flex justify-between font-lato font-bold text-gray text-xl border-b-2 border-gray py-6"
          >
            Overview
            <img
              src="@/assets/images/arrow-down.svg"
              class="w-6 transform -rotate-90"
              alt=""
            />
          </button>
          <button
            class="flex justify-between font-lato font-bold text-gray text-xl border-b-2 border-gray py-6"
          >
            Specifications
            <img
              src="@/assets/images/arrow-down.svg"
              class="w-6 transform -rotate-90"
              alt=""
            />
          </button>
          <button
            class="flex justify-between font-lato font-bold text-gray text-xl border-b-2 border-gray py-6"
          >
            Details
            <img
              src="@/assets/images/arrow-down.svg"
              class="w-6 transform -rotate-90"
              alt=""
            />
          </button>
        </div>
        <!-- Product info -->
        <div class="flex flex-col">
          <div class="flex flex-col mb-20 lg:flex-row">
            <div
              class="w-full h-64 border-2 border-gray md:w-96 lg:mr-10"
            ></div>
            <div class="lg:w-4/6">
              <h1 class="font-lato font-bold text-2xl text-primary mt-6 mb-6">
                Lorem ipsum dolor sit amet.
              </h1>
              <p class="font-lato font-normal text-lg text-gray">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facere, distinctio? Nemo in magni ad voluptatem commodi
                repellendus tempora vitae exercitationem recusandae, mollitia
                vero eaque. Voluptatum repellendus impedit sapiente
                necessitatibus voluptate.
              </p>
            </div>
          </div>
          <!-- Specification -->
          <div class="mb-20">
            <h2 class="font-lato font-bold text-2xl text-primary mb-6">
              Specification
            </h2>
            <p class="font-lato font-normal text-lg text-gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              reiciendis labore vel maxime, illum maiores magnam beatae fugiat
              quos quaerat, iste suscipit et sed hic officia debitis fugit?
              Commodi, consequatur.
            </p>
          </div>
          <!-- Details -->
          <div>
            <h2 class="font-lato font-bold text-2xl text-primary mb-6">
              Details
            </h2>
            <ul class="font-lato font-normal text-lg text-gray list-disc px-4">
              <li class="mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusamus necessitatibus minus reprehenderit labore maiores
                soluta debitis numquam nulla inventore ab, quos saepe in,
                nostrum voluptatum ut recusandae placeat natus? Architecto.
              </li>
              <li class="mb-5">
                Accusamus necessitatibus minus reprehenderit labore maiores
                soluta debitis numquam nulla inventore ab
              </li>
              <li class="mb-5">
                Soluta debitis numquam nulla inventore ab, quos saepe in,
                nostrum voluptatum ut recusandae placeat natus? Architecto.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
/* .product-nav {
  z-index: -1; */
/* } */
</style>
