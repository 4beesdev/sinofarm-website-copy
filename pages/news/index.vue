<template>
  <div class="pt-48">
    <Breadcrumb :items="$t('breadcrumb.news')"></Breadcrumb>
    <div class="container mx-auto px-4 py-10">
      <div
        class="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-10 lg:grid-cols-3"
      >
        <NuxtLink
          v-for="article in articles"
          :key="article.id"
          :to="`/news/${article.id}`"
          class="bg-white w-full h-full shadow-lg sm:w-96 mb-10 xl:mb-0 duration-300 transform hover:-translate-y-2"
        >
          <img
            class="w-full h-64 object-cover"
            :src="`https://sinofarm-portal.4bees.io${article.image.url}`"
            alt=""
          />
          <div class="p-6">
            <h2 class="font-lato text-2xl font-bold text-gray mb-5">
              {{ returnLang === 'sr' ? article.title_sr : article.title_en }}
            </h2>
            <p class="font-lato text-gray font-bold">
              {{
                returnLang === 'sr'
                  ? article.short_desc_sr
                  : article.short_desc_en
              }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    returnLang() {
      return this.$i18n.locale
    },
    ...mapState(['articles']),
  },
}
</script>

<style lang="scss" scoped></style>
