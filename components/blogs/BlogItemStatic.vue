<template>
  <div class="lg:flex lg:items-center lg:justify-between">
    <div class="flex-shrink-0 mr-4 -mb-4">
      <img
        class="mx-auto h-16 w-16 rounded-full"
        src="https://techtalk.gfi.com/wp-content/uploads/2016/08/Vladimir_Ceric_GFI_Avatar.png"
        alt=""
      />
    </div>
    <div class="flex-1 min-w-0">
      <h2
        class="
          mt-2
          text-2xl
          font-bold
          leading-7
          text-gray-900
          sm:text-3xl sm:truncate
        "
      >
        {{ blog.displayName }}
      </h2>
      <div
        class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6"
      >
        <div class="mt-2 flex items-center text-sm text-gray-500">
          <fa-icon
            class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
            icon="calendar"
          />
          Created at {{ joinedDate }}
        </div>

        <div class="mt-2 flex items-center text-sm text-gray-500">
          <fa-icon
            class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
            :icon="
              blog && blog.type == 'ORGANIZATION' ? 'building' : 'user-alt'
            "
          />
          {{ blog.type }}
        </div>
      </div>
    </div>
    <div>
      <div class="mt-5 flex lg:mt-0 lg:ml-4">
        <span class="sm:ml-3">
          <button
            type="button"
            class="
              relative
              inline-flex
              items-center
              px-4
              py-2
              border border-gray-300
              shadow-sm
              text-sm
              font-medium
              rounded-md
              text-gray-700
              hover:bg-gray-200
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500
            "
          >
            <div class="-ml-1 mr-2 h-5 w-5 text-gray-400">
              <fa-icon icon="user-plus" />
            </div>
            <span>Follow</span>
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import moment from 'moment'
import { Blog } from '~/types/hoenn'

@Component
export default class BlogItem extends Vue {
  @Prop()
  blog!: Blog

  get joinedDate() {
    return moment(this.blog.createdAt).format('MMMM D YYYY')
  }
}
</script>
