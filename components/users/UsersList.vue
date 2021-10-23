<template>
  <div>
    <ul class="divide-y divide-gray-200 max-w-md">
      <user-item
        v-for="user in users"
        :key="user.id"
        :user="user"
        @delete="$emit('delete', user.username)"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

import UserItem from '~/components/users/UserItem.vue'
import { User } from '~/types/hoenn'

@Component({
  components: {
    UserItem,
  },
})
export default class UsersList extends Vue {
  @Prop() users!: User[]
}
</script>
