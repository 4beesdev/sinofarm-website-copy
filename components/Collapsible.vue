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
    <NuxtLink
      v-if="category"
      :to="linkurl"
      class="text-left w-full mb-2 flex justify-between items-center focus:outline-none"
      :class="getCtgClasses()"
    >
      {{ linkTitle }}
      <img src="@/assets/images/arrow-down.svg" class="w-3 ml-2" alt="" />
    </NuxtLink>
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
    linkurl: {
      type: String,
      default: '/products',
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

<style lang="scss" scoped></style>
