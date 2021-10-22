<template>
  <li>
    <nuxt-link :to="`/writers/${writer.name}`" class="block hover:bg-gray-50">
      <div class="flex items-center px-4 py-4 sm:px-6">
        <div class="min-w-0 flex-1 flex items-center">
          <div class="flex-shrink-0">
            <img
              class="h-12 w-12 rounded-full"
              src="https://techtalk.gfi.com/wp-content/uploads/2016/08/Vladimir_Ceric_GFI_Avatar.png"
              alt=""
            />
          </div>
          <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
            <div>
              <p class="text-sm font-medium text-indigo-600 truncate">
                {{ writer.displayName }}
              </p>
              <p class="mt-2 flex items-center text-sm text-gray-500">
                <span class="truncate">{{ writer.type }}</span>
              </p>
            </div>
            <div class="hidden md:block">
              <div>
                <p class="text-sm text-gray-900">
                  Created at
                  <time :datetime="joinedDate">{{ joinedDate }}</time>
                </p>
                <p class="mt-2 flex items-center text-sm text-gray-500">
                  <fa-icon class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" icon="check-circle" />
                  Verified
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <fa-icon class="text-gray-400" icon="angle-right" />
        </div>
      </div>
    </nuxt-link>
  </li>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import moment from 'moment'
import { Writer } from '~/types/hoenn'

@Component
export default class HomePage extends Vue {
  @Prop()
  writer!: Writer

  get joinedDate() {
    return moment(this.writer.createdAt).format('MMMM D YYYY')
  }
}
</script>
