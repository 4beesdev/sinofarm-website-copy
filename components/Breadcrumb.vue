<template>
  <div class="container mx-auto px-4">
    <div class="flex border-t-2 py-4 px-4 border-b-2 border-primary">
      <NuxtLink
        v-for="item in items"
        :key="item.link"
        class="font-lato font-bold text-gray"
        :to="localePath(item.link)"
        >{{ item.title }} <span class="mx-5">/</span></NuxtLink
      >
      <p v-if="productName !== ''">{{ productName }}</p>
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
    productName: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
