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
        v-for="category in dataInfo.categories"
        :key="category.name_sr"
        :title="category"
        :subcategories="returnSubcategories(category)"
      ></CollapsibleCategory>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataInfo: {
      type: Object,
      default() {
        return {}
      },
    },
    linkTitle: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      subToggle: false,
      toggled: false,
    }
  },
  methods: {
    returnSubcategories(cat) {
      const subcat = this.dataInfo.subcategories.filter(
        (sub) => sub.category.name_sr === cat.name_sr
      )
      return subcat
    },
  },
}
</script>

<style lang="scss" scoped></style>
