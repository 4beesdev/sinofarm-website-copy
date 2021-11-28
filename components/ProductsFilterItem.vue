<template>
  <div v-if="toggled">
    <div v-if="category">
      <button
        v-for="item in items"
        :key="item.name_sr"
        class="flex justify-between items-center w-full pt-2 mb-2"
        @click="bodyToggled = !bodyToggled"
      >
        {{ returnLang === 'sr' ? item.name_sr : item.name_en }}
        <img src="@/assets/images/arrow-down.svg" class="w-4" alt="" />
      </button>
    </div>
    <div v-if="bodyToggled">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    toggled: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: () => [],
    },
    category: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      bodyToggled: false,
    }
  },
  computed: {
    returnLang() {
      return this.$i18n.locale
    },
  },
}
</script>

<style lang="scss" scoped></style>
