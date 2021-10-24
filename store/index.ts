import {
  getterTree,
  getAccessorType,
  mutationTree,
  actionTree,
} from 'typed-vuex'

import * as user from './user'

import { Post, Blog } from '~/types/hoenn'


export const state = () => ({
  posts: null as Post[] | null,
  blogs: null as Blog[] | null,
})

export const getters = getterTree(state, {
  posts: (state) => state.posts,
  blogs: (state) => state.blogs,
})

export const mutations = mutationTree(state, {
  pushPosts(state, newValue: Post[]) {
    if (!state.posts) {
      state.posts = [];
    }

    state.posts.push(...newValue);
  },
  pushBlogs(state, newValue: Blog[]) {
    if (!state.blogs) {
      state.blogs = []
    }

    state.blogs.push(...newValue);
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
    async loadBlogs({ commit, state }, { more }: { more: boolean }): Promise<boolean> {
      if (state.blogs && !more) {
        return true;
      }

      const blogs = await this.$axios.$get('/blogs', {
        params: {
          take: 5,
          skip: state.blogs?.length ?? 0,
        }
      }) as Blog[];


      commit('pushBlogs', blogs);

      if (blogs.length > 0) {
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
