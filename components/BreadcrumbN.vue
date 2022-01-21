<template>
  <div class="flex flex-wrap border-t-2 py-4 px-4 border-b-2 border-primary">
    <NuxtLink class="mr-2" :to="localePath('/')">
      {{ returnLang === 'en' ? 'Home' : 'Početna' }}
      <span class="ml-2">/</span>
    </NuxtLink>
    <NuxtLink v-if="products" class="mr-2" :to="localePath('/products')">
      {{ returnLang === 'en' ? 'Products' : 'Proizvodi' }}
      <span class="ml-2">/</span>
    </NuxtLink>
    <NuxtLink
      v-if="category"
      class="mr-2"
      :to="localePath(`/products/${category.slug}`)"
    >
      {{ returnLang === 'en' ? category.name_en : category.name_sr }}
      <span class="ml-2">/</span>
    </NuxtLink>
    <NuxtLink
      v-if="subcategory"
      class="mr-2"
      :to="localePath(`/products/${category.slug}/${subcategory.slug}`)"
    >
      {{ returnLang === 'en' ? subcategory.name_en : subcategory.name_sr }}
      <span class="ml-2">/</span>
    </NuxtLink>
    <span v-if="current" class="mr-2">
      {{ returnLang === 'en' ? current.name_en : current.name_sr }}
      {{ returnLang === 'en' ? current.title_en : current.title_sr }}
      {{ current.name }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Boolean,
      default: false,
    },
    current: {
      type: Object,
      default: () => {},
    },
    category: {
      type: Object,
      default: () => {},
    },
    subcategory: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    returnLang() {
      return this.$i18n.locale
    },
  },
}
</script>

<style lang="scss" scoped></style>
