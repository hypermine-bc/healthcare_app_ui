import Cookies from 'js-cookie'
const inItialCaseData = {
  patientDetail: '',
  doctorDetail: '',
  rxList: [],
  file: [],
  comment: ''
}

const caseData = {
  state: {
    caseData: {
      patientDetail: '',
      doctorDetail: '',
      rxList: [],
      file: [],
      comment: ''
    }
  },
  mutations: {
    SET_CASEDATA: (state, CASEDATA) => {
      state.caseData = CASEDATA
      Cookies.set('caseData', CASEDATA)
    },
    SET_INITIAL_CASEDATA: (state, CASEDATA) => {
      state.caseData = inItialCaseData
      Cookies.set('caseData', inItialCaseData)
    }
  },
  actions: {
    setCaseData({ commit }, CASEDATA) {
      commit('SET_CASEDATA', CASEDATA)
    },
    setInitialCaseData({ commit }, CASEDATA) {
      commit('SET_INITIAL_CASEDATA', CASEDATA)
    }
  }
}

export default caseData
