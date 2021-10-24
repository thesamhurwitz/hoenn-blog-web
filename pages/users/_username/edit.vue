<template>
  <profile-edit v-model="form" :admin="true" @save="save" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Profile, User } from '~/types/hoenn'

import ProfileEdit from '~/components/users/ProfileEdit.vue'

@Component({
  middleware: ['auth-admin'],
  components: {
    ProfileEdit,
  },
})
export default class ProfilePage extends Vue {
  form = {
    username: '',
    email: '',
    role: 'USER',
    bio: ''
  }

  user = {} as User

  async created() {
    this.user = (await this.$axios.$get(
      `users/${this.$route.params.username}`
    )) as User

    this.form = {
      username: this.user.username as string,
      email: this.user.email as string,
      role: this.user.role as string,
      bio: (this.user.profile as Profile)?.bio ?? '',
    }
  }

  async save() {
    try {
      await this.$axios.$patch(`/users/${this.$route.params.username}`, {
        email: this.form.email,
        role: this.form.role,
        bio: this.form.bio.length > 0 ? this.form.bio : undefined
      })

      await this.$swal({
        title: 'Saved',
        icon: 'success',
      })

      this.$router.push(`/users/${this.$route.params.username}`)
    } catch (e: any) {
      if (e.response) {
        this.$swal({
          title: 'Error',
          icon: 'error',
          text: e.response.data?.message?.[0] ?? e.response.statusText,
        })
      }
    }
  }
}
</script>
