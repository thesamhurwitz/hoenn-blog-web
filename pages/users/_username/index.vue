<template>
  <div>
    <profile
      :user="user"
      :edit="$auth.user && $auth.user.role === 'ADMIN'"
      @edit="$router.push(`/users/${$route.params.username}/edit`)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { User } from '~/types/hoenn'

import Profile from '~/components/users/Profile.vue'

@Component({
  middleware: ['auth'],
  components: {
    Profile,
  },
})
export default class UserPage extends Vue {
  user = {} as User

  async created() {
    this.user = (await this.$axios.$get(
      `users/${this.$route.params.username}`
    )) as User
  }
}
</script>
