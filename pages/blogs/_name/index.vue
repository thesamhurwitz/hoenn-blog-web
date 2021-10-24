<template>
  <div>
    <blog-item-static :blog="blog" />

    <div v-if="owner" class="my-2 flex flex-row-reverse">
      <nuxt-link
        :to="`/blogs/${$route.params.name}/edit`"
        type="button"
        class="
          ml-2
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
          <fa-icon icon="pen" />
        </div>
        <span>Edit</span>
      </nuxt-link>
      <nuxt-link
        :to="`/blogs/${$route.params.name}/new`"
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
          text-white
          bg-indigo-600
          hover:bg-indigo-700
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-indigo-500
        "
      >
        <div class="-ml-1 mr-2 h-5 w-5 text-gray-400">
          <fa-icon icon="plus" />
        </div>
        <span>New</span>
      </nuxt-link>
    </div>

    <div class="mt-4">
      <post-list :posts="blogPosts" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import moment from 'moment'

import BlogItemStatic from '~/components/blogs/BlogItemStatic.vue'
import PostList from '~/components/posts/PostList.vue'

import { Post, Blog, UserRole } from '~/types/hoenn'

@Component({
  middleware: ['auth'],
  components: {
    PostList,
    BlogItemStatic,
  },
})
export default class BlogPage extends Vue {
  blog = {} as Blog
  blogPosts = [] as Post[]

  owner = false

  get joinedDate() {
    if (!this.blog) {
      return ''
    }
    return moment(this.blog.createdAt).format('MMMM D YYYY')
  }

  async created() {
    this.blog = (await this.$axios.$get(
      `blogs/${this.$route.params.name}`
    )) as Blog

    this.blogPosts = (await this.$axios.$get(
      `/blogs/${this.blog.name}/posts`
    )) as Post[]

    this.blogPosts.forEach((p) => {
      p.blog = this.blog as Blog
    })

    try {
      if (this.$auth.user?.role === 'ADMIN') {
        this.owner = true;
      } else {
        const response = await this.$axios.get(`/blogs/${this.$route.params.name}/editors/${this.$auth.user?.username}`, {
          validateStatus: (status) => status < 500
        });

        this.owner = response.status === 200;
      }
    } catch (e) {}
  }
}
</script>
