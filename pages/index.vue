<template>
  <div>
    <Popup></Popup>
    <div class="container mx-auto px-4 pt-48">
      <!-- BANNER -->
      <div class="w-full banner relative flex items-center mb-2">
        <img
          class="w-full h-full object-cover absolute z-1 top-0 left-0"
          src="@/assets/images/cover-image.jpg"
          alt=""
        />
        <div
          class="w-full h-full absolute z-0 top-0 left-0 bg-black opacity-60"
        ></div>
        <div
          ref="bannerText"
          class="px-6 sm:w-96 lg:px-12 relative z-2 banner-text opacity-0 transform translate-y-32"
        >
          <h2 class="font-lato font-bold text-white text-5xl mb-2">Covid 19</h2>
          <p class="font-lato font-normal text-white text-lg">
            {{ $t('homepage.covid') }}
          </p>
          <NuxtLink
            class="p-4 bg-primary block text-center mt-4 w-60 font-lato font-bold text-white button-primary"
            :to="localePath('/covid')"
            >{{ $t('button.more') }}</NuxtLink
          >
        </div>
      </div>
      <!-- HOME NAVIGATION BUTTONS -->
      <div
        ref="homeNavigation"
        class="flex flex-col lg:flex-row font-lato text-white font-normal text-lg opacity-0 transform -translate-y-32"
      >
        <div class="flex mb-2 lg:w-6/12 lg:mb-0 lg:mr-2">
          <NuxtLink
            :to="localePath('/products')"
            class="w-6/12 p-4 bg-primary flex flex-col items-center justify-center mr-2 navigation-button"
          >
            <img src="@/assets/images/products.svg" class="w-12 mb-2" alt="" />
            {{ $t('homepage.navigation.products') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/careers')"
            class="w-6/12 p-4 bg-primary flex flex-col items-center justify-center navigation-button"
          >
            <img src="@/assets/images/careers.svg" class="mb-2 w-12" alt="" />
            {{ $t('homepage.navigation.careers') }}
          </NuxtLink>
        </div>
        <div class="flex lg:w-6/12">
          <div class="w-6/12 relative mr-2">
            <div class="">
              <div
                class="absolute bg-black opacity-40 z-10 w-full h-full top-0 left-0 flex justify-center items-center"
              ></div>
              <p
                class="px-4 py-1 bg-primary border-2 border-white absolute z-20 top-10 right-0"
              >
                {{ $t('homepage.navigation.soon') }}
              </p>
            </div>
            <NuxtLink
              to="/"
              class="p-4 bg-primary flex flex-col items-center justify-center navigation-button"
            >
              <img
                src="@/assets/images/pharmacy.svg"
                class="mb-2 w-12"
                alt=""
              />
              {{ $t('homepage.navigation.pharmacy') }}
            </NuxtLink>
          </div>
          <div class="w-6/12 relative">
            <div class="">
              <div
                class="absolute bg-black opacity-40 z-10 w-full h-full top-0 left-0 flex justify-center items-center"
              ></div>
              <p
                class="px-4 py-1 bg-primary border-2 border-white absolute z-20 top-10 right-0"
              >
                {{ $t('homepage.navigation.soon') }}
              </p>
            </div>
            <NuxtLink
              to="/"
              class="w-full h-full p-4 bg-primary flex flex-col items-center justify-center navigation-button"
            >
              <img src="@/assets/images/portal.svg" class="mb-2 w-12" alt="" />
              {{ $t('homepage.navigation.portal') }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <!-- PRODUCTS -->
      <div class="flex flex-col md:flex-row py-16">
        <div
          ref="products"
          class="md:w-2/6 mb-10 md:mr-10 lg:mr-40 opacity-0 transform -translate-x-32"
        >
          <h2 class="font-medium text-gray text-3xl mb-5">
            {{ $t('homepage.findProduct.title') }}
          </h2>
          <p class="text-gray text-lg mb-5">
            {{ $t('homepage.findProduct.text') }}
          </p>
          <NuxtLink
            class="p-4 bg-primary block text-center w-60 font-lato font-bold text-white button-primary"
            :to="localePath('/products')"
            >{{ $t('button.more') }}</NuxtLink
          >
        </div>
        <div
          class="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          <NuxtLink
            :to="localePath('/products')"
            class="border-2 block border-primary h-64 overflow-hidden"
          >
            <img
              ref="homeProduct1"
              src="@/assets/images/home-product-1.jpg"
              class="w-full h-full object-cover transition duration-300 transform hover:scale-110 opacity-0 translate-x-32"
              alt=""
            />
          </NuxtLink>
          <NuxtLink
            :to="localePath('/products')"
            class="border-2 border-primary h-64 overflow-hidden"
          >
            <img
              ref="homeProduct2"
              src="@/assets/images/home-product-2.png"
              class="w-full h-full object-cover transition duration-300 transform hover:scale-110 opacity-0 transform translate-x-32"
              alt=""
            />
          </NuxtLink>
          <NuxtLink
            :to="localePath('/products')"
            class="border-2 border-primary h-64 overflow-hidden"
          >
            <img
              ref="homeProduct3"
              src="@/assets/images/home-product-3.jpg"
              class="w-full h-full object-cover transition duration-300 transform hover:scale-110 opacity-0 transform translate-x-32"
              alt=""
            />
          </NuxtLink>
          <NuxtLink
            :to="localePath('/products')"
            class="border-2 border-primary h-64 overflow-hidden"
          >
            <img
              ref="homeProduct4"
              src="@/assets/images/home-product-4.jpg"
              class="w-full h-full object-cover transition duration-300 transform hover:scale-110 opacity-0 transform translate-x-32"
              alt=""
            />
          </NuxtLink>
          <NuxtLink
            :to="localePath('/products')"
            class="border-2 border-primary h-64 overflow-hidden"
          >
            <img
              ref="homeProduct5"
              src="@/assets/images/home-product-5.jpg"
              class="w-full h-full object-cover transition duration-300 transform hover:scale-110 opacity-0 transform translate-x-32"
              alt=""
            />
          </NuxtLink>
          <NuxtLink
            :to="localePath('/products')"
            class="border-2 border-primary h-64 overflow-hidden"
          >
            <img
              ref="homeProduct6"
              src="@/assets/images/home-product-6.jpg"
              class="w-full h-full object-cover transition duration-300 transform hover:scale-110 opacity-0 transform translate-x-32"
              alt=""
            />
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- NEWS -->
    <div class="w-full bg-lightGray py-16">
      <div class="container mx-auto px-4">
        <div
          class="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-10 lg:grid-cols-3"
        >
          <div
            v-for="article in articles"
            :key="article.id"
            class="bg-white w-full h-full shadow-lg sm:w-96 mb-10 xl:mb-0 duration-300 transform hover:-translate-y-2"
          >
            <NuxtLink :to="`/news/${article.id}`">
              <img
                class="w-full h-64 object-cover"
                :src="`https://sinofarm-portal.4bees.io${article.image.url}`"
                alt=""
              />
              <div class="p-6">
                <h2 class="font-lato text-2xl font-medium text-gray mb-5">
                  {{
                    returnLang === 'sr' ? article.title_sr : article.title_en
                  }}
                </h2>
                <p class="font-lato text-gray font-regular">
                  {{
                    returnLang === 'sr'
                      ? article.short_desc_sr
                      : article.short_desc_en
                  }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <!-- ABOUT US TEXT -->
    <div class="container mx-auto py-16 px-4">
      <div class="flex flex-col md:flex-row">
        <div
          ref="homeAboutText"
          class="md:w-3/6 md:mr-5 opacity-0 transform -translate-x-32"
        >
          <h2 class="font-lato text-2xl font-bold text-gray mb-4">
            {{ $t('homepage.about.title') }}
          </h2>
          <p
            v-for="(text, index) in $t('homepage.about.text')"
            :key="index"
            class="font-lato text-normal font-normal text-gray mb-2"
          >
            {{ text }}
          </p>
          <div class="flex flex-col">
            <NuxtLink
              v-for="(link, index) in $t('homepage.about.links')"
              :key="index"
              class="text-primary border-b-2 border-primary w-max mb-2"
              :to="localePath(`/${link.link}`)"
              >{{ link.title }}</NuxtLink
            >
          </div>
        </div>
        <div class="w-full mt-5 md:w-3/6">
          <img
            ref="homeAboutImg"
            class="w-full h-full object-cover transform translate-x-32 opacity-0"
            src="@/assets/images/blood sample.jpg"
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
          <div
            ref="infoContact"
            class="flex flex-col items-center mb-10 md:mb-0 opacity-0 transform -translate-y-36"
          >
            <NuxtLink :to="localePath('/contact')">
              <img
                class="w-16 mb-5 transform hover:-translate-y-2 transition duration-300"
                src="@/assets/images/contact.svg"
                alt=""
              />
            </NuxtLink>

            <NuxtLink
              :to="localePath('/contact')"
              class="text-xl text-gray font-lato font-bold mb-2 header-link"
            >
              {{ $t('homepage.contact.title') }}
            </NuxtLink>
            <p
              class="text-normal text-gray font-lato font-normal w-64 text-center lg:w-96"
            >
              {{ $t('homepage.contact.text') }}:
            </p>
          </div>
          <div
            ref="infoLocations"
            class="flex flex-col items-center opacity-0 transform -translate-y-36"
          >
            <NuxtLink :to="localePath('/contact')">
              <img
                class="w-16 mb-5 transform hover:-translate-y-2 transition duration-300"
                src="@/assets/images/locations.svg"
                alt=""
              />
            </NuxtLink>
            <NuxtLink
              :to="localePath('/contact')"
              class="text-xl text-gray font-lato font-bold mb-2 header-link"
            >
              {{ $t('homepage.locations.title') }}
            </NuxtLink>
            <p
              class="text-normal text-gray font-lato font-normal w-64 text-center lg:w-96"
            >
              {{ $t('homepage.locations.text') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}
export default {
  data() {
    return {}
  },
  computed: {
    returnLang() {
      return this.$i18n.locale
    },
    ...mapState(['articles']),
  },
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
  height: 60vh;
  img {
    z-index: -1;
  }
}
.button-primary {
  transition: background-color 0.4s;
  &:hover {
    background-color: #32529d;
  }
}
.navigation-button {
  transition: background-color 0.4s;
  img {
    transition: transform 0.4s;
  }
  &:hover {
    background-color: #32529d;
    img {
      transform: translateY(-5px);
    }
  }
}
.header-link {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0%;
    height: 2px;
    background-color: #3c62bd;
    transition: width 0.4s;
  }
}
.header-link:hover.header-link::after {
  width: 100%;
}
</style>
