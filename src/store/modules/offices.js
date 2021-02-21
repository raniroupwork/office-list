/* eslint no-shadow: ["error", { "allow": ["state"] }]  */
// import axios from 'axios';

const state = {
  offices: [
    {
      id: 0,
      title: 'Headquarters 0',
      address: '3763 W. Dallas St.',
      fullName: 'Hellena John',
      jobPosition: 'Software Tester',
      email: 'georgia.young@example.com',
      phone: '(808) 555-0111',
    },
    {
      id: 1,
      title: 'Headquarters 1',
      address: '3764 W. Dallas St.',
      fullName: 'Alice John',
      jobPosition: 'Software Tester',
      email: 'alice.young@example.com',
      phone: '(808) 555-0222',
    },
  ],
};
const getters = {
  allOffices: (state) => state.offices,
};
const actions = {};
const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
