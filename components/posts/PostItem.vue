<template>
  <li class="bg-white px-4 py-6 shadow hover:shadow-md sm:p-6 sm:rounded-lg">
    <nuxt-link :to="`/posts/${post.id}`">
      <article aria-labelledby="question-title-81614">
        <div>
          <div class="flex space-x-3">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                :src="'https://techtalk.gfi.com/wp-content/uploads/2016/08/Vladimir_Ceric_GFI_Avatar.png'"
                alt=""
              />
            </div>
            <div class="min-w-0 flex-1">
              <p class="text-sm font-medium text-gray-900">
                <nuxt-link
                  :to="`/blogs/${post.blog.name}`"
                  class="hover:underline"
                  >{{ post.blog.displayName }}</nuxt-link
                >
              </p>
              <p class="text-sm text-gray-500">
                <span>
                  <time datetime="2020-12-09T11:43:00">{{ createdDate }}</time>
                </span>
              </p>
            </div>
            <div class="flex-shrink-0 self-center flex">
              <div class="relative inline-block text-left">
                <div>
                  <button
                    id="options-menu-0-button"
                    type="button"
                    class="
                      -m-2
                      p-2
                      rounded-full
                      flex
                      items-center
                      text-gray-400
                      hover:text-gray-600
                    "
                    aria-expanded="false"
                    aria-haspopup="true"
                    tabindex="0"
                    @focus="optionsOpen = true"
                    @focusout="optionsOpen = false"
                  >
                    <span class="sr-only">Open options</span>
                    <!-- Heroicon name: solid/dots-vertical -->
                    <svg
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                      />
                    </svg>
                  </button>
                </div>

                <!--
                          Dropdown menu, show/hide based on menu state.

                          Entering: "transition ease-out duration-100"
                            From: "transform opacity-0 scale-95"
                            To: "transform opacity-100 scale-100"
                          Leaving: "transition ease-in duration-75"
                            From: "transform opacity-100 scale-100"
                            To: "transform opacity-0 scale-95"
                        -->
                <div
                  v-show="optionsOpen"
                  ref="options"
                  class="
                    origin-top-right
                    absolute
                    right-0
                    mt-2
                    w-56
                    rounded-md
                    shadow-lg
                    bg-white
                    ring-1 ring-black ring-opacity-5
                    focus:outline-none
                  "
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu-0-button"
                  tabindex="0"
                >
                  <div class="py-1" role="none">
                    <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                    <button
                      class="text-gray-700 flex px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="0"
                      id="options-menu-0-item-0"
                      @click="favorite"
                    >
                      <!-- Heroicon name: solid/star -->
                      <svg
                        class="mr-3 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                      <span>Add to favorites</span>
                    </button>
                    <button
                      class="text-gray-700 flex px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="options-menu-0-item-1"
                      @click="embed"
                    >
                      <!-- Heroicon name: solid/code -->
                      <svg
                        class="mr-3 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span>Embed</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2
            id="question-title-81614"
            class="mt-4 text-base font-medium text-gray-900"
          >
            {{ post.title }}
          </h2>
        </div>
        <div class="mt-2 text-sm text-gray-700 space-y-4">
          {{ post.content }}
        </div>
        <div class="mt-6 flex justify-between space-x-8">
          <div class="flex space-x-6">
            <span class="inline-flex items-center text-sm">
              <button
                class="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
              >
                <!-- Heroicon name: solid/thumb-up -->
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
                  />
                </svg>
                <span class="font-medium text-gray-900">29</span>
                <span class="sr-only">likes</span>
              </button>
            </span>
            <span class="inline-flex items-center text-sm">
              <button
                class="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
              >
                <!-- Heroicon name: solid/chat-alt -->
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="font-medium text-gray-900">11</span>
                <span class="sr-only">replies</span>
              </button>
            </span>
            <span class="inline-flex items-center text-sm">
              <button
                class="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
              >
                <!-- Heroicon name: solid/eye -->
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fill-rule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="font-medium text-gray-900">2.7k</span>
                <span class="sr-only">views</span>
              </button>
            </span>
          </div>
          <div class="flex text-sm">
            <span class="inline-flex items-center text-sm">
              <button
                class="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                @click="share"
              >
                <!-- Heroicon name: solid/share -->
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
                  />
                </svg>
                <span class="font-medium text-gray-900">Share</span>
              </button>
            </span>
          </div>
        </div>
      </article>
    </nuxt-link>
  </li>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import moment from 'moment'
import { Post } from '~/types/hoenn'

@Component
export default class HomePage extends Vue {
  @Prop()
  post!: Post

  optionsOpen = false

  get createdDate() {
    return moment(this.post.createdAt).format('MMMM D [at] hh:mm A')
  }

  favorite() {
    console.log('favorite')
  }

  embed() {}

  share() {
    console.log('share')
  }
}
</script>
