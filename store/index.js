import axios from 'axios'

export const state = () => ({
  sinofarm: {
    categories: [],
    products: [],
    subcategories: [],
  },
  product: [],
  articles: [],
  article: [],
  brands: [],
  loading: false,
})

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.sinofarm.categories = categories
  },
  SET_PRODUCTS(state, products) {
    state.sinofarm.products = products
  },
  SET_SUBCATEGORIES(state, subcategories) {
    state.sinofarm.subcategories = subcategories
  },
  SET_PRODUCT(state, product) {
    state.product = product
  },
  SET_ARTICLES(state, articles) {
    state.articles = articles
  },
  SET_ARTICLE(state, article) {
    state.article = article
  },
  SET_BRANDS(state, brands) {
    state.brands = brands
  },
  SET_LOADINGSTATUS(state, status) {
    state.loading = status
  },
}
export const actions = {
  // Get all categories
  async getCategories({ commit }) {
    const categories = await axios.get(
      'https://sinofarm-portal.4bees.io/categories'
    )
    commit('SET_CATEGORIES', categories.data)
  },
  // Get all products
  async getProducts({ commit }) {
    commit('SET_LOADINGSTATUS', true)
    const products = await axios.get(
      'https://sinofarm-portal.4bees.io/products?_limit=-1'
    )
    commit('SET_PRODUCTS', products.data)
    commit('SET_LOADINGSTATUS', false)
  },
  // Get all products
  async getSubcategories({ commit }) {
    const subcategories = await axios.get(
      'https://sinofarm-portal.4bees.io/subcategories'
    )
    commit('SET_SUBCATEGORIES', subcategories.data)
  },
  // Get one products
  async getProduct({ commit }, id) {
    commit('SET_LOADINGSTATUS', true)
    const product = await axios.get(
      `https://sinofarm-portal.4bees.io/products/` + id
    )
    commit('SET_PRODUCT', product.data)
    commit('SET_LOADINGSTATUS', false)
  },
  // Get all articles
  async getArticles({ commit }) {
    const articles = await axios.get(
      'https://sinofarm-portal.4bees.io/articles'
    )
    commit('SET_ARTICLES', articles.data)
  },
  // Get one article
  async getArticle({ commit }, id) {
    commit('SET_LOADINGSTATUS', true)
    const article = await axios.get(
      'https://sinofarm-portal.4bees.io/articles/' + id
    )
    commit('SET_ARTICLE', article.data)
    commit('SET_LOADINGSTATUS', false)
  },

  async getBrands({ commit }) {
    const brands = await axios.get('https://sinofarm-portal.4bees.io/brands')
    commit('SET_BRANDS', brands.data)
  },
}

export const getters = {
  getLoadingStatus: (state) => {
    return state.loading
  },
}
