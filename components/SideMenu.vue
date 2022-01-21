<template>
  <aside class="side-menu">
    <div
      v-for="(cat, i) in menuList"
      :key="i"
      class="category p-2 m-2 bg-red-200"
    >
      <div v-if="cat === menuList.products"></div>
      <div v-else>2</div>
    </div>
  </aside>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      currentCat: '',
      currentSubCat: '',
    }
  },
  computed: {
    menuList() {
      return {
        products: this.sinofarm,
        industries: this.industries,
        brands: this.brands,
      }
    },
    ...mapState(['sinofarm', 'brands', 'industries']),
  },
}
</script>

<style></style>
