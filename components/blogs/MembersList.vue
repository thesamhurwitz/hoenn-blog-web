<template>
  <div>
    <div class="mt-10 sm:mt-0">
      <div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="text-xl text-gray-900">Members</div>
              <div>
                <users-list :users="members" @delete="(username) => $emit('delete', username)" />
              </div>
              <form @submit.prevent="$emit('add', username); username = ''">
                <div class="mt-4 mb-2 text-lg text-gray-900">
                  Add more people
                </div>
                <div class="w-full flex flex-row">
                  <div class="w-full md:w-1/2 flex items-center">
                    <input
                      v-model="username"
                      type="text"
                      name="about"
                      class="
                        shadow-sm
                        mr-2
                        flex-grow
                        focus:ring-indigo-500 focus:border-indigo-500
                        block
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      "
                      placeholder="Username"
                    />
                    <button
                      to="/auth/login"
                      type="submit"
                      class="
                        flex flex-row
                        justify-center
                        items-center
                        py-2
                        px-4
                        border border-gray-300
                        rounded-md
                        shadow-sm
                        text-sm
                        font-medium
                        text-gray-900
                        bg-white
                        hover:bg-gray-100
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-indigo-500
                      "
                    >
                      <div class="mr-2 text-gray-600">
                        <fa-icon icon="plus" size="sm" />
                      </div>
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Blog } from '~/types/hoenn'

import UsersList from '~/components/users/UsersList.vue'

@Component({
  components: {
    UsersList,
  },
})
export default class MembersListComponent extends Vue {
  @Prop() members!: Blog[]

  username = ''
}
</script>
