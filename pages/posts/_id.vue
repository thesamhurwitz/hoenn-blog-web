<template>
  <div class="w-full mx-auto sm:px-6">
    <div
      class="
        md:flex md:items-center md:justify-between md:space-x-4
        xl:border-b xl:pb-6
      "
    >
      <div class="lg:flex lg:items-center lg:justify-between">
        <div class="flex-1 min-w-0">
          <!-- <nav class="flex" aria-label="Breadcrumb">
            <ol class="flex items-center space-x-4" role="list">
              <li>
                <div>
                  <a
                    href="#"
                    class="
                      text-sm
                      font-medium
                      text-gray-500
                      hover:text-gray-700
                    "
                    >Jobs</a
                  >
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <a
                    href="#"
                    class="
                      ml-4
                      text-sm
                      font-medium
                      text-gray-500
                      hover:text-gray-700
                    "
                    >Engineering</a
                  >
                </div>
              </li>
            </ol>
          </nav> -->
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
            {{ post ? post.title : '' }}
          </h2>
        </div>
      </div>
    </div>

    <div class="space-y-6">
      <div class="py-5 border-b border-gray-200 sm:px-6">
        <div
          class="
            -ml-4
            -mt-4
            flex
            justify-between
            items-center
            flex-wrap
            sm:flex-nowrap
          "
        >
          <div class="ml-4 mt-4">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="h-12 w-12 rounded-full"
                  src="https://techtalk.gfi.com/wp-content/uploads/2016/08/Vladimir_Ceric_GFI_Avatar.png"
                  alt=""
                />
              </div>
              <div class="ml-4">
                <h3 class="text-lg leading-6 font-medium text-gray-900 hover:underline">
                  <nuxt-link :to="`/writers/${post ? post.writer.name : ''}`">{{ post ? post.writer.displayName : ''}} </nuxt-link>
                </h3>
                <p class="text-sm text-gray-500">
                  {{ post ? post.writer.type : ''}}
                </p>
              </div>
            </div>
          </div>
          <div class="ml-4 mt-4 flex-shrink-0 flex">
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
          </div>
        </div>
      </div>
    </div>

    <div class="min-h-screen mt-6 text-gray-900">
      {{ post ? post.content : '' }}
    </div>

    <comment-section />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import CommentSection from '~/components/comments/CommentSection.vue'

import { Post } from '~/types/hoenn'

@Component({
  components: {
    CommentSection,
  },
})
export default class PostPage extends Vue {
  post: Post | null = null;

  async mounted() {
    this.post = (await this.$axios.$get(
      `posts/${this.$route.params.id}`
    )) as Post
  }
}
</script>
