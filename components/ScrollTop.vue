<template>
  <transition name="slideUp">
    <button
      v-if="scrollPosition > 300"
      class="bg-primary p-6 fixed z-30 bottom-5 right-5 lg:bottom-10 lg:right-10"
      @click="scrollTop"
    >
      <img
        src="~/assets/images/arrow-down-white.svg"
        class="w-4 h-4 transform rotate-180"
        alt=""
      />
    </button>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.setScrollPosition()
    })
  },
  methods: {
    setScrollPosition() {
      this.scrollPosition = window.scrollY
    },
    scrollTop() {
      this.$scrollTo('.productList', 500, {
        easing: 'ease-in',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.slideUp-enter-active,
.slideUp-leave-active {
  transition: all 0.5s;
  transform: translateY(0);
}
.slideUp-enter,
.slideUp-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
