<template>
  <div class="w-full flex flex-col">
    <button
      class="w-full flex justify-between font-lato font-bold text-gray text-xl border-b-2 border-gray py-6 focus:outline-none"
      @click="toggled = !toggled"
    >
      Categories
      <img src="@/assets/images/arrow-down.svg" class="w-6" alt="" />
    </button>
    <div
      v-if="toggled"
      :class="toggled ? 'active' : ''"
      class="flex flex-col py-5 px-4"
    >
      <NuxtLink
        v-for="(item, index) in categories"
        :key="index"
        class="mb-3"
        to="/"
        >{{ item }}</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    linkItems: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      categories: [],
      toggled: false,
    }
  },
  mounted() {
    const uniqueArray = []
    this.linkItems.forEach((item) => {
      if (!uniqueArray.includes(item.category.name_sr)) {
        uniqueArray.push(item.category.name_sr)
      }
    })
    this.categories = uniqueArray
  },
}
</script>

<style lang="scss" scoped></style>
