import axios from 'axios'

export const state = () => ({
  sinofarm: {
    categories: [],
    products: [],
    subcategories: [],
  },
  product: {},
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
}
