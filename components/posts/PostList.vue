<template>
  <div>
    <div class="px-4 sm:px-0">
      <div class="sm:hidden">
        <label for="question-tabs" class="sr-only">Select a tab</label>
        <select
          id="question-tabs"
          class="
            block
            w-full
            rounded-md
            border-gray-300
            text-base
            font-medium
            text-gray-900
            shadow-sm
            focus:border-rose-500 focus:ring-rose-500
          "
        >
          <option selected>Recent</option>

          <option>Most Liked</option>

          <option>Most Answers</option>
        </select>
      </div>
      <div class="hidden sm:block">
        <nav
          class="relative z-0 rounded-lg shadow flex divide-x divide-gray-200"
          aria-label="Tabs"
        >
          <!-- Current: "text-gray-900", Default: "text-gray-500 hover:text-gray-700" -->
          <a
            href="#"
            aria-current="page"
            class="
              text-gray-900
              rounded-l-lg
              group
              relative
              min-w-0
              flex-1
              overflow-hidden
              bg-white
              py-4
              px-6
              text-sm
              font-medium
              text-center
              hover:bg-gray-50
              focus:z-10
            "
          >
            <span>Recent</span>
            <span
              aria-hidden="true"
              class="bg-rose-500 absolute inset-x-0 bottom-0 h-0.5"
            ></span>
          </a>

          <a
            href="#"
            class="
              text-gray-500
              hover:text-gray-700
              group
              relative
              min-w-0
              flex-1
              overflow-hidden
              bg-white
              py-4
              px-6
              text-sm
              font-medium
              text-center
              hover:bg-gray-50
              focus:z-10
            "
          >
            <span>Most Liked</span>
            <span
              aria-hidden="true"
              class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
            ></span>
          </a>

          <a
            href="#"
            class="
              text-gray-500
              hover:text-gray-700
              rounded-r-lg
              group
              relative
              min-w-0
              flex-1
              overflow-hidden
              bg-white
              py-4
              px-6
              text-sm
              font-medium
              text-center
              hover:bg-gray-50
              focus:z-10
            "
          >
            <span>Most Answers</span>
            <span
              aria-hidden="true"
              class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
            ></span>
          </a>
        </nav>
      </div>
    </div>
    <div class="mt-4">
      <h1 class="sr-only">Recent questions</h1>
      <ul class="space-y-4">
        <post-item v-for="post in posts" :key="post.id" :post="post" />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

import PostItem from '~/components/posts/PostItem.vue'
import { Post } from '~/types/hoenn'

@Component({
  components: {
    PostItem,
  },
})
export default class PostList extends Vue {
  @Prop() posts!: Post[]
}
</script>
