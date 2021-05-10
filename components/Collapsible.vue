<template>
  <div class="w-full flex flex-col">
    <button
      v-if="filter"
      class="w-full flex items-center justify-between font-lato font-bold text-gray text-xl border-b-2 border-gray py-4 focus:outline-none"
      @click="toggled = !toggled"
    >
      {{ linkTitle }}
      <img src="@/assets/images/arrow-down.svg" class="w-4" alt="" />
    </button>
    <button
      v-if="category"
      class="text-left w-full mb-2 flex justify-between items-center font-lato font-bold text-gray focus:outline-none"
      @click="toggled = !toggled"
    >
      {{ linkTitle }}
      <img src="@/assets/images/arrow-down.svg" class="w-3 ml-2" alt="" />
    </button>
    <div
      v-if="toggled"
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
  },
  data() {
    return {
      toggled: false,
    }
  },
  watch: {
    $route(newRoute) {
      this.toggled = false
    },
  },
}
</script>

<style lang="scss" scoped></style>
