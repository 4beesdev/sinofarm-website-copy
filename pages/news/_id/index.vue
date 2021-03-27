<template>
  <div class="pt-48">
    <Breadcrumb
      v-if="!loading"
      :items="$t('breadcrumb.news')"
      :product-name="returnLang === 'sr' ? article.title_sr : article.title_en"
    ></Breadcrumb>
    <Breadcrumb
      v-if="loading"
      class="hidden lg:block"
      :items="$t('breadcrumb.news')"
    ></Breadcrumb>
    <div class="container mx-auto px-4 py-10">
      <div v-if="loading" class="w-full flex justify-center">
        <Spinner size="large" />
      </div>
      <div v-if="!loading">
        <div class="w-full h-96">
          <img
            :src="`https://sinofarm-portal.4bees.io${article.image.url}`"
            class="w-full h-full object-cover"
            alt=""
          />
        </div>
        <h1 class="text-2xl text-primary my-10">
          {{ returnLang === 'sr' ? article.title_sr : article.title_en }}
        </h1>
        <p class="text-lg text-gray">
          {{
            returnLang === 'sr'
              ? article.description_sr
              : article.description_en
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Spinner from 'vue-simple-spinner'

export default {
  components: {
    Spinner,
  },
  computed: {
    returnLang() {
      return this.$i18n.locale
    },
    ...mapState(['article', 'loading']),
  },
  mounted() {
    this.$store.dispatch('getArticle', this.$route.params.id)
  },
}
</script>

<style lang="scss" scoped></style>
