import Cookies from 'js-cookie'

const caseData = {
  state: {
    caseData: {}
  },
  mutations: {
    SET_CASEDATA: (state, CASEDATA) => {
      state.caseData = CASEDATA
      Cookies.set('caseData', CASEDATA)
    }
  },
  actions: {
    setCaseData({ commit }, CASEDATA) {
      commit('SET_CASEDATA', CASEDATA)
    }
  }
}

export default caseData
