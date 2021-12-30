<template>
  <div class="w-full flex flex-col">
    <button
      v-if="filter"
      class="w-full flex items-center justify-between text-xl border-b-2 border-gray py-4 focus:outline-none"
      :class="getMainClassses()"
    >
      {{ linkTitle }}
      <img src="@/assets/images/arrow-down.svg" class="w-4 main" alt="" />
    </button>
    <button
      v-if="category"
      class="text-left w-full mb-2 flex justify-between items-center focus:outline-none"
      :class="getCtgClasses()"
    >
      {{ linkTitle }}
      <img src="@/assets/images/arrow-down.svg" class="w-3 ml-2" alt="" />
    </button>
    <div
      v-if="isToggled"
      :class="`${category === true ? 'py-1' : 'py-3'}`"
      class="flex flex-col px-2"
    >
      <slot name="body"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    linkTitle: {
      type: String,
      default: '',
    },
    category: {
      type: Boolean,
      default: false,
    },
    filter: {
      type: Boolean,
      default: false,
    },
    textColor: {
      type: String,
      default: 'text-gray',
    },
    isToggled: {
      type: Boolean,
      default: false,
    },
    main: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  watch: {
    $route(newRoute) {
      this.toggled = false
    },
  },
  methods: {
    getMainClassses() {
      return {
        'font-semibold': this.isToggled,
        'text-primary main': this.textColor + this.main,
      }
    },
    getCtgClasses() {
      return {
        'font-semibold': this.isToggled,
        'text-primary': this.textColor,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
// .with-arrow {
//   position: relative;

//   &::after {
//     content: '';
//     background-image: url('~assets/images/arrow-down.svg');
//     width: 2rem;
//     height: auto;
//     position: absolute;
//     left: 0;
//   }
// }
</style>
