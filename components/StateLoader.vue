<template>
  <div class="w-screen h-screen bg-white z-30 flex items-center justify-center">
    <Spinner size="large" />
  </div>
</template>

<script>
import Spinner from 'vue-simple-spinner'
export default {
  components: {
    Spinner,
  },
}
</script>

<style lang="scss" scoped></style>
