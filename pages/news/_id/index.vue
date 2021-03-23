<template>
  <div class="pt-48">
    <Breadcrumb
      :items="$t('breadcrumb.news')"
      :product-name="`${
        returnLang === 'sr' ? article.title_sr : article.title_en
      }`"
    ></Breadcrumb>
    <div class="container mx-auto px-4 py-10"></div>
  </div>
</template>

<script>
export default {
  computed: {
    article() {
      return this.$store.getters.getArticleById(this.$route.params.id)
    },
    returnLang() {
      return this.$i18n.locale
    },
  },
}
</script>

<style lang="scss" scoped></style>
