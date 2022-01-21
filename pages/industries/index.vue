<template>
  <div class="industries container mx-auto px-4 pt-48 pb-10">
    <SideMenu />
  </div>
</template>

<script>
window.onNuxtReady(() => {
  window.$nuxt.$router.push('/products')
})
export default {}
</script>

<style scoped></style>
