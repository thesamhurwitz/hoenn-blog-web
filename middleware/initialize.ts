import { Middleware } from '@nuxt/types'

const initializeMiddleware: Middleware = ({ store }) => {
  if (!store.state.user.user.username) {
    // await store.dispatch('user/load')
  }
}

export default initializeMiddleware
