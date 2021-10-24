<template>
  <profile-edit v-model="form" :admin="$auth.user && $auth.user.role === 'ADMIN'" @save="save" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Profile } from '~/types/hoenn'

import ProfileEdit from '~/components/users/ProfileEdit.vue'

@Component({
  middleware: ['auth'],
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

  created() {
    this.form = {
      username: this.$auth.user?.username as string,
      email: this.$auth.user?.email as string,
      role: this.$auth.user?.role as string,
      bio: (this.$auth.user?.profile as Profile)?.bio ?? '',
    }
  }

  async save() {
    try {
      await this.$axios.$patch(`/users/${this.$auth.user?.username}`, {
        email: this.form.email,
        role: this.$auth.user?.role === 'ADMIN' ? this.form.role : undefined,
        bio: this.form.bio.length > 0 ? this.form.bio : undefined
      })

      await this.$swal({
        title: 'Saved',
        icon: 'success',
      })

      await this.$auth.fetchUser()
      this.$router.push('/profile')
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
