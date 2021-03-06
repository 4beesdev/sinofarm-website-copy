<template>
  <div>
    <button
      class="text-left w-full mb-3 flex justify-between items-center font-lato font-bold text-gray focus:outline-none"
      @click="toggled = !toggled"
    >
      {{ title }}
      <img src="@/assets/images/arrow-down.svg" class="w-3 ml-2" alt="" />
    </button>
    <div v-if="toggled" class="px-2 pb-3">
      <p
        v-for="subcategory in subcategories"
        :key="subcategory.name_sr"
        class="mb-2 font-lato text-gray"
      >
        {{ subcategory.name_sr }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    subcategories: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      toggled: false,
    }
  },
}
</script>

<style lang="scss" scoped></style>
