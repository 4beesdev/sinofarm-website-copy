<template>
  <div class="w-full flex flex-col">
    <button
      class="w-full flex justify-between font-lato font-bold text-gray text-xl border-b-2 border-gray py-6 focus:outline-none"
      @click="toggled = !toggled"
    >
      {{ linkTitle }}
      <img src="@/assets/images/arrow-down.svg" class="w-6" alt="" />
    </button>
    <div
      v-if="toggled"
      :class="toggled ? 'active' : ''"
      class="flex flex-col py-5 px-2"
    >
      <CollapsibleCategory
        v-for="category in categories"
        :key="category.title"
        :title="category.title"
        :subcategories="category.subcategories"
      ></CollapsibleCategory>
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
    linkTitle: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      categories: [],
      subToggle: false,
      toggled: false,
    }
  },
  mounted() {
    const categories = []
    const fullCategories = []
    this.linkItems.forEach((item) => {
      if (!categories.includes(item.category.name_sr)) {
        categories.push(item.category.name_sr)
      }
    })
    categories.forEach((category, index) => {
      fullCategories.push({ title: category, subcategories: [] })
      this.linkItems.forEach((item) => {
        if (item.category.name_sr === category) {
          fullCategories[index].subcategories.push(item)
        }
      })
    })
    this.categories = fullCategories
  },
}
</script>

<style lang="scss" scoped></style>
