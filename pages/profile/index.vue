<template>
  <div class="lg:px-4">
    <h1 class="text-3xl mt-2 text-gray-900 font-bold">Profile</h1>
    <profile :user="user" />
    <div class="divide-y divide-gray-200">
      <h1 class="text-xl font-medium text-gray-900 mb-2">Writers</h1>
    </div>
    <writers-list :writers="writers" />

    <writer-item-new @create="$router.push('/writers/new')" />

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { User, Writer } from '~/types/hoenn'

import Profile from '~/components/users/Profile.vue'
import WriterList from '~/components/writers/WritersList.vue'
import WriterItemNew from '~/components/writers/WriterItemNew.vue'

@Component({
  middleware: ['auth'],
  components: {
    Profile,
    WriterList,
    WriterItemNew
  },
})
export default class ProfilePage extends Vue {
  get user() {
    return this.$auth.user as User
  }

  writers = [] as Writer[]

  async mounted() {
    this.writers = (await this.$axios.$get(
      `/users/${this.user.username}/writers`
    )) as Writer[]
  }
}
</script>
