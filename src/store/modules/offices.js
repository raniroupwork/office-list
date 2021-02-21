/* eslint no-shadow: ["error", { "allow": ["state"] }]  */
import axios from 'axios';

const URL = 'https://api.jsonbin.io/b/603298067c58305d39582621/1';
const config = {
  headers: {
    'secret-key': '$2b$10$kWIIFcgKUZX/DGMz/HF2HOQRDvDLhrljf/W6AHvnXhf1ETyybNaCe',
  },
};

const state = {
  offices: [],
};

const getters = {
  allOffices: (state) => state.offices,
};

const actions = {
  async fetchOffices({ commit }) {
    const response = await axios.get(URL, config);
    commit('setOffices', response.data);
  },
  async addOffice({ commit }, data) {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', data);
    commit('newOffice', response.data);
  },
  async deleteOffice({ commit }, fullName) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${fullName}`);
    commit('removeOffice', fullName);
  },
};
const mutations = {
  setOffices: (state, offices) => {
    state.offices = offices;
  },
  newOffice: (state, office) => {
    state.offices.unshift(office);
  },
  removeOffice: (state, fullName) => {
    state.offices = state.offices.filter((office) => office.fullName !== fullName);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
