<template>
<div>
  <profile :user="user" />
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { User } from '~/types/hoenn';

import Profile from '~/components/users/Profile.vue'

@Component({
  middleware: ['auth'],
  components: {
    Profile
  }
})
export default class UserPage extends Vue {
  user = {} as User;

  async mounted() {
    this.user = (await this.$axios.$get(
      `users/${this.$route.params.username}`
    )) as User
  }
}
</script>
