<template>
  <div>
    <div class="container mx-auto px-4 pt-48">
      <!-- BANNER -->
      <div class="w-full banner relative flex items-center mb-2">
        <img
          class="w-full h-full object-cover absolute"
          src="@/assets/images/home-banner.png"
          alt=""
        />
        <div class="px-6 sm:w-96 lg:px-12 banner-text">
          <h2 class="font-lato font-bold text-gray text-5xl mb-2">Covid 19</h2>
          <p class="font-lato font-normal text-gray text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            fuga distinctio, sed tempora velit soluta maxime exercitationem.
          </p>
          <NuxtLink
            class="p-4 bg-primary block text-center mt-4 w-60 font-lato font-bold text-white"
            to="/"
            >Learn more</NuxtLink
          >
        </div>
      </div>
      <!-- HOME NAVIGATION BUTTONS -->
      <div
        class="flex flex-col lg:flex-row font-lato text-white font-normal text-lg"
      >
        <div class="flex mb-2 lg:w-6/12 lg:mb-0 lg:mr-2">
          <NuxtLink
            to="/products"
            class="w-6/12 p-4 bg-primary flex flex-col items-center justify-center mr-2"
          >
            <img src="@/assets/images/products.svg" class="w-12 mb-2" alt="" />
            Our products
          </NuxtLink>
          <NuxtLink
            to="/"
            class="w-6/12 p-4 bg-primary flex flex-col items-center justify-center"
          >
            <img src="@/assets/images/careers.svg" class="mb-2 w-12" alt="" />
            Careers
          </NuxtLink>
        </div>
        <div class="flex lg:w-6/12">
          <NuxtLink
            to="/"
            class="w-6/12 p-4 bg-primary flex flex-col items-center justify-center mr-2"
          >
            <img src="@/assets/images/pharmacy.svg" class="mb-2 w-12" alt="" />
            Pharmacy
          </NuxtLink>
          <NuxtLink
            to="/"
            class="w-6/12 p-4 bg-primary flex flex-col items-center justify-center"
          >
            <img src="@/assets/images/portal.svg" class="mb-2 w-12" alt="" />
            Portal
          </NuxtLink>
        </div>
      </div>
      <!-- PRODUCTS -->
      <div class="flex flex-col md:flex-row py-16">
        <div class="md:w-2/6 mb-10 md:mr-10 lg:mr-40">
          <h2 class="font-lato font-bold text-gray text-2xl mb-5">
            Find your product
          </h2>
          <p class="font-lato text-gray mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt iusto
            suscipit vel nemo corporis architecto! Modi doloremque harum enim
            adipisci suscipit sapiente sequi dignissimos necessitatibus, cumque
            vel iusto quod quo?
          </p>
          <NuxtLink
            class="p-4 bg-primary block text-center w-60 font-lato font-bold text-white"
            to="/"
            >Learn more</NuxtLink
          >
        </div>
        <div
          class="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div class="border-2 border-primary h-64"></div>
          <div class="border-2 border-primary h-64"></div>
          <div class="border-2 border-primary h-64"></div>
          <div class="border-2 border-primary h-64"></div>
          <div class="border-2 border-primary h-64"></div>
          <div class="border-2 border-primary h-64"></div>
        </div>
      </div>
    </div>
    <!-- NEWS -->
    <div class="w-full bg-lightGray py-16">
      <div class="container mx-auto px-4">
        <div
          class="flex flex-col items-center md:flex-wrap md:flex-row md:items-start md:justify-around xl:justify-between"
        >
          <div class="bg-white w-full shadow-lg sm:w-96 mb-10 xl:mb-0">
            <img
              class="w-full h-50 object-cover"
              src="@/assets/images/news-1.png"
              alt=""
            />
            <div class="p-6">
              <h2 class="font-lato text-2xl font-bold text-gray mb-5">
                Lorem Ipsum dolor sit amet
              </h2>
              <p class="font-lato text-gray font-bold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores, voluptatum, quas nihil magnam libero ipsa laudantium,
                optio explicabo itaque delectus adipisci. Consequatur, ipsum!
                Deserunt quae commodi sequi ipsum deleniti iure?
              </p>
            </div>
          </div>
          <div class="bg-white w-full shadow-lg sm:w-96 mb-10 xl:mb-0">
            <img
              class="w-full h-50 object-cover"
              src="@/assets/images/news-2.png"
              alt=""
            />
            <div class="p-6">
              <h2 class="font-lato text-2xl font-bold text-gray mb-5">
                Lorem Ipsum dolor sit amet
              </h2>
              <p class="font-lato text-gray font-bold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores, voluptatum, quas nihil magnam libero ipsa laudantium,
                optio explicabo itaque delectus adipisci. Consequatur, ipsum!
                Deserunt quae commodi sequi ipsum deleniti iure?
              </p>
            </div>
          </div>
          <div class="bg-white w-full shadow-lg sm:w-96">
            <img
              class="w-full h-50 object-cover"
              src="@/assets/images/news-3.png"
              alt=""
            />
            <div class="p-6">
              <h2 class="font-lato text-2xl font-bold text-gray mb-5">
                Lorem Ipsum dolor sit amet
              </h2>
              <p class="font-lato text-gray font-bold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores, voluptatum, quas nihil magnam libero ipsa laudantium,
                optio explicabo itaque delectus adipisci. Consequatur, ipsum!
                Deserunt quae commodi sequi ipsum deleniti iure?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ABOUT US TEXT -->
    <div class="container mx-auto py-16 px-4">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-3/6 md:mr-5">
          <h2 class="font-lato text-2xl font-bold text-gray mb-4">About us</h2>
          <p class="font-lato text-normal font-normal text-gray mb-2">
            Sinofarm d.o.o. je privatna kompanija iz Beograda, partner velikih
            svetskih proizvođača. Već dve decenije se uspešno bavimo
            distribucijom i proizvodnjom medicinskih sredstava.
          </p>
          <p class="font-lato text-normal font-normal text-gray mb-2">
            Odabran tim lekara, tehnologa, ekonomista i pravnika posvetio se
            razvoju prvog srpskog brenda medicinskog potrošnog materijala i
            medicinskih pomagala –
            <span class="font-bold">SINOMEDIC, SINOFINE I SINODREAMS</span>.
          </p>
          <p class="font-lato text-normal font-normal text-gray mb-5">
            Učestvujemo u više socijalnih projekata, i izlažemo na sajmovima i
            kongresima širom zemlje i inostranstva.
          </p>
          <div class="flex flex-col">
            <NuxtLink
              class="text-primary border-b-2 border-primary w-max mb-2"
              to="/"
              >O nama</NuxtLink
            >
            <NuxtLink
              class="text-primary border-b-2 border-primary w-max mb-2"
              to="/"
              >Nasi brendovi</NuxtLink
            >
            <NuxtLink
              class="text-primary border-b-2 border-primary w-max mb-2"
              to="/"
              >Drustvena odgovornost</NuxtLink
            >
            <NuxtLink
              class="text-primary border-b-2 border-primary w-max mb-2"
              to="/"
              >Karijera</NuxtLink
            >
          </div>
        </div>
        <div class="w-full mt-5 md:w-3/6">
          <img
            class="w-full h-full object-cover"
            src="@/assets/images/about-us.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <!-- INFO -->
    <div class="w-full bg-lightGray">
      <div class="container mx-auto py-16 px-4">
        <div
          class="flex flex-col items-center md:flex-row md:items-start md:justify-around"
        >
          <div class="flex flex-col items-center mb-10 md:mb-0">
            <img class="w-16 mb-5" src="@/assets/images/contact.svg" alt="" />
            <h2 class="text-xl text-gray font-lato font-bold mb-2">Contact</h2>
            <p
              class="text-normal text-gray font-lato font-normal w-64 text-center lg:w-96 lg:text-left"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div class="flex flex-col items-center">
            <img class="w-16 mb-5" src="@/assets/images/locations.svg" alt="" />
            <h2 class="text-xl text-gray font-lato font-bold mb-2">
              Locations
            </h2>
            <p
              class="text-normal text-gray font-lato font-normal w-64 text-center lg:w-96 lg:text-left"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
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
.banner {
  height: 60vh;
  img {
    z-index: -1;
  }
  &-text {
    z-index: -1;
  }
}
</style>
