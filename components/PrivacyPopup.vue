<template>
  <div
    v-if="active"
    class="w-full py-10 fixed left-0 bottom-0 opacity-90 bg-white z-30 font-lato flex justify-center px-10"
  >
    <div class="flex flex-col sm:flex-row">
      <div class="sm:mr-10 text-center lg:text-left">
        <h2 class="text-2xl font-bold text-primary mb-3">
          {{ $t('privacyPolicy.title') }}
        </h2>
        <p class="text-lg font-bold text-gray mb-5">
          {{ $t('privacyPolicy.text') }}
        </p>
      </div>
      <div class="flex flex-col sm:flex-row items-center">
        <button
          class="mb-5 bg-primary w-44 text-white px-4 py-3 font-semibold text-lg sm:mb-0 sm:mr-10"
          @click="hideModal"
        >
          {{ $t('privacyPolicy.accept') }}
        </button>
        <a
          href="/pdf/SINOFARM PRIVACY POLICY.pdf"
          target="_blank"
          class="border-2 border-primary w-44 text-center text-primary px-4 py-3 font-semibold text-lg"
          >{{ $t('privacyPolicy.read') }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: null,
    }
  },
  mounted() {
    if (process.browser) {
      if (localStorage.popup !== undefined) {
        if (localStorage.popup === true) {
          this.active = true
        } else {
          this.active = false
        }
      } else {
        this.active = true
      }
    }
  },
  methods: {
    hideModal() {
      if (process.browser) {
        localStorage.setItem('popup', false)
        this.active = false
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
