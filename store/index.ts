import {
  getterTree,
  getAccessorType,
  mutationTree,
  actionTree,
} from 'typed-vuex'

import * as user from './user'

import { Post, Writer } from '~/types/hoenn'


export const state = () => ({
  posts: null as Post[] | null,
  writers: null as Writer[] | null,
})

export const getters = getterTree(state, {
  posts: (state) => state.posts,
  writers: (state) => state.writers,
})

export const mutations = mutationTree(state, {
  pushPosts(state, newValue: Post[]) {
    if (!state.posts) {
      state.posts = [];
    }

    state.posts.push(...newValue);
  },
  pushWriters(state, newValue: Writer[]) {
    if (!state.writers) {
      state.writers = []
    }

    state.writers.push(...newValue);
  }
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async loadPosts({ commit, state }, { more }: { more: boolean }): Promise<boolean> {
      if (state.posts && !more) {
        return true;
      }

      const posts = await this.$axios.$get('/posts', {
        params: {
          take: 5,
          skip: state.posts?.length ?? 0,
        }
      }) as Post[];


      commit('pushPosts', posts);

      if (posts.length > 0) {
        return true;
      }

      return false;
    },
    async loadWriters({ commit, state }, { more }: { more: boolean }): Promise<boolean> {
      if (state.writers && !more) {
        return true;
      }

      const writers = await this.$axios.$get('/writers', {
        params: {
          take: 5,
          skip: state.writers?.length ?? 0,
        }
      }) as Writer[];


      commit('pushWriters', writers);

      if (writers.length > 0) {
        return true;
      }

      return false;
    }
  },
)

export const accessorType = getAccessorType({
  actions,
  getters,
  mutations,
  state,
  modules: {
    user,
  },
})
