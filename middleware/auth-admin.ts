import { Middleware } from '@nuxt/types'

const authAdminMiddleware: Middleware = ({ $auth, redirect }) => {
  if ($auth.user && $auth.user.role === 'ADMIN') {
    // ok
  } else {
    redirect('/')
  }
}

export default authAdminMiddleware
