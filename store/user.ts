import { getterTree, mutationTree, actionTree } from 'typed-vuex'
import { User } from '~/types/hoenn'

export const namespaced = true

export const state = () => ({
  user: {} as User,
})

export const getters = getterTree(state, {
  user: (state) => state.user,
})

export const mutations = mutationTree(state, {
  setUser(state, newValue: User) {
    state.user = newValue
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async load({ commit }) {
      const user = (await this.$axios.$get('/users/admin')) as User;
      commit('setUser', user);
    },
  }
)
