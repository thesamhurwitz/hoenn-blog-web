<template>
  <div>
    <div class="px-4 mb-4 mt-2">
      <h1 class="text-2xl font-medium text-gray-900">
        New post
      </h1>
    </div>

    <ul class="bg-white mb-2 rounded-md">
      <blog-item :blog="blog" />
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
export default class NewPostPage extends Vue {
  form = {
    title: '',
    content: '',
  }

  blog = {} as Blog

  async save() {
    try {
      const payload = {
        ...this.form,
        blog: this.blog.name,
      }

      const createdPost = await this.$axios.$post('/posts', payload) as Post;

      console.log(createdPost)

      await this.$swal({
        title: 'Saved',
        icon: 'success',
      })

      this.$router.push(`/posts/${createdPost.id}`)
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
    this.blog = (await this.$axios.$get(
      `/blogs/${this.$route.params.name}`
    )) as Blog
  }
}
</script>
