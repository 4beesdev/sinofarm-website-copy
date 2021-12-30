<template>
  <transition name="fade">
    <div
      v-if="ifShow"
      class="w-full flex items-center px-4 justify-center h-full fixed top-0 left-0 z-30"
    >
      <div
        class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 z-30"
        @click="showPopup = !showPopup"
      ></div>
      <div class="w-full h-96 lg:w-96 bg-white relative z-40 p-4">
        <a
          href="#"
          class="flex justify-between border-b-2 pb-4 text-gray"
          @click.prevent="showPopup = !showPopup"
        >
          <div></div>
          <div class="flex items-center">
            <p class="mr-4 font-bold">{{ $t('langPopup.close') }}</p>
            <img src="~/assets/images/close.svg" class="w-6 h-6" alt="" />
          </div>
        </a>
        <p class="text-xl font-bold text-center mb-3 py-2 text-gray">
          {{ $t('langPopup.title') }}
        </p>
        <div class="flex flex-col h-64 justify-center bg-lightGray p-2">
          <a
            href="#"
            class="w-full flex items-center mb-5 hover:bg-white transition duration-300"
            @click.prevent="setLang('sr')"
          >
            <img
              src="~/assets/images/serbia.svg"
              class="w-24 h-20 mr-5"
              alt=""
            />
            <p class="text-gray text-lg font-bold">
              {{ $t('langPopup.langSr') }}
            </p>
          </a>
          <a
            href="#"
            class="w-full flex items-center hover:bg-white transition duration-300"
            @click.prevent="setLang('en')"
          >
            <img
              src="~/assets/images/united-kingdom.svg"
              class="w-24 h-20 mr-5"
              alt=""
            />
            <p class="text-gray text-lg font-bold">
              {{ $t('langPopup.langEn') }}
            </p>
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      showPopup: false,
      selectedLang: '',
    }
  },
  computed: {
    ifShow() {
      return this.showPopup
    },
  },
  mounted() {
    if (process.browser) {
      if (localStorage.lang !== undefined) {
        if (localStorage.lang === 'sr' || localStorage.lang === 'en') {
          this.showPopup = false
        }
      } else {
        setTimeout(() => {
          this.showPopup = true
        }, 1000)
      }
    }
  },
  methods: {
    setLang(lang) {
      this.selectedLang = lang
      if (process.browser) {
        localStorage.lang = lang
      }
      if (lang === 'en') {
        window.location.href = 'en'
      } else if (lang === 'sr') {
        window.location.href = '/'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transform: translateY(0);
  transition: opacity 0.6s;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
</style>
