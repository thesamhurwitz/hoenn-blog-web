<template>
  <div>
    <div class="px-4 mb-4 mt-2">
      <h1 class="text-2xl font-medium text-gray-900">
        New post
      </h1>
    </div>

    <ul class="bg-white mb-2 rounded-md">
      <blog-item :blog="post.blog" />
    </ul>

    <edit-post v-model="form" @save="save" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Blog, Post } from '~/types/hoenn'

import EditPost from '~/components/posts/EditPost.vue'
import BlogItem from '~/components/blogs/BlogItem.vue'

@Component({
  components: {
    EditPost,
    BlogItem,
  },
})
export default class EditPostPage extends Vue {
  form = {
    title: '',
    content: '',
  }

  post = {
    blog: {} as Blog,
  } as Post;

  async save() {
    try {
      const payload = {
        ...this.form,
      }

      const patchedPost = await this.$axios.$patch(`/posts/${this.post.id}`, payload) as Post;

      await this.$swal({
        title: 'Saved',
        icon: 'success',
      })

      this.$router.push(`/posts/${patchedPost.id}`)
    } catch (e: any) {
      if (e.response) {
        this.$swal({
          title: 'Error',
          icon: 'error',
          text: e.response.data?.message?.[0] ?? e.response.statusText,
        })
      }
    }
  }

  async created() {
    this.post = await this.$axios.$get(`/posts/${this.$route.params.id}`) as Post;

    console.log(this.post)

    this.form = {
      title: this.post.title,
      content: this.post.content ?? ''
    }
  }
}
</script>
