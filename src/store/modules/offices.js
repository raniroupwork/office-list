/* eslint no-shadow: ["error", { "allow": ["state"] }]  */
import axios from 'axios';
// eslint-disable-next-line import/no-unresolved
import parameters from '../../services/parameters';

const state = {
  offices: [],
};

const getters = {
  allOffices: (state) => state.offices,
};

const actions = {
  async fetchOffices({ commit }) {
    const response = await axios.get(parameters.DB_URL, parameters.config);
    commit('setOffices', response.data);
  },
  async addOffice({ commit }, data) {
    const response = await axios.post(parameters.TEST_URL, data);
    commit('newOffice', response.data);
  },
  async deleteOffice({ commit }, id) {
    await axios.delete(`${parameters.TEST_URL}/${id}`);
    commit('removeOffice', id);
  },
  async updateOffice({ commit }, updOffice) {
    console.log(updOffice);
    await axios.put(`${parameters.TEST_URL}/${updOffice.id}`);
    commit('updateOffice', updOffice);
  },
};

const mutations = {
  setOffices: (state, offices) => {
    state.offices = offices;
  },
  newOffice: (state, office) => {
    state.offices.unshift(office);
  },
  removeOffice: (state, id) => {
    state.offices = state.offices.filter((office) => office.id !== id);
  },
  updateOffice: (state, updOffice) => {
    const index = state.offices.findIndex((office) => office.id === updOffice.id);
    if (index !== -1) {
      state.offices.splice(index, 1, updOffice);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
