<template>
  <div
    v-if="products.length > 0"
    class="w-full grid gap-5 grid-columns-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <Product
      v-for="product in products"
      :key="product.id"
      :product-info="product"
    />
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
