import axios from 'axios'

export const state = () => ({
  sinofarm: {
    categories: [],
    products: [],
    subcategories: [],
  },
  product: {},
  articles: [],
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
    const products = await axios.get(
      'https://sinofarm-portal.4bees.io/products'
    )
    commit('SET_PRODUCTS', products.data)
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
    const product = await axios.get(
      `https://sinofarm-portal.4bees.io/products/` + id
    )
    commit('SET_PRODUCT', product.data)
  },
  // Get all news
  async getArticles({ commit }) {
    const articles = await axios.get(
      'https://sinofarm-portal.4bees.io/articles'
    )
    commit('SET_ARTICLES', articles.data)
  },

  // getProductById({ commit, state }, id) {
  //   const product = state.sinofarm.products.find((prod) => (prod.id = id.id))
  //   commit('SET_PRODUCT', product)
  //   console.log(product)
  // },
}

export const getters = {
  getArticleById: (state) => (id) => {
    return state.articles.find((article) => (article.id = id))
  },
}
