export default {
  namespaced: true,
  state: {
    status: true
  },
  getters: {
    getStatusDrawer: state => {
      return state.status
    }
  },
  actions: {
    //
  },
  mutations: {
    toogleStatus (state) {
      state.status = !state.drawer.status
    }
  }
}
