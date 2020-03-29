export const state = () => ({
  nav: []
})

export const mutations = {
  setNav(state, nav) {
    state.nav = nav
  }
}

export const getters = {
  getNav(state) {
    return state.nav
  }
}
