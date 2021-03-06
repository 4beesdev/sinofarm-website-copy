<template>
  <div class="container mx-auto px-4">
    <div class="flex border-t-2 py-4 border-b-2 border-primary">
      <NuxtLink v-for="item in items" :key="item.link" :to="item.link">{{
        item.title
      }}</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
