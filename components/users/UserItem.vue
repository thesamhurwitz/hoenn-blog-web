<template>
  <li class="p-4 hover:bg-gray-50">
    <nuxt-link
      class="flex items-center"
      :to="`/users/${user.username}`"
    >
      <img
        class="h-10 w-10 rounded-full object-cover"
        src="https://e7.pngegg.com/pngimages/78/788/png-clipart-computer-icons-avatar-business-computer-software-user-avatar-child-face.png"
        alt=""
      />
      <div class="ml-3">
        <p class="text-sm font-medium text-gray-900">{{ user.username }}</p>
        <p class="text-sm text-gray-500">{{ user.email }}</p>
      </div>
      <div class="ml-auto">
        <button
          title="Delete member from team"
          class="text-gray-400 hover:text-gray-500"
          @click.stop.prevent="$emit('delete')"
        >
          <fa-icon icon="times" />
        </button>
      </div>
    </nuxt-link>
  </li>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { User } from '~/types/hoenn'

@Component
export default class UserItem extends Vue {
  @Prop()
  user!: User
}
</script>
