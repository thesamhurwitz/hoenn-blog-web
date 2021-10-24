<template>
  <div class="lg:px-4">
    <h1 class="text-3xl mt-2 text-gray-900 font-bold">Profile</h1>
    <profile :user="user" :edit="true" @edit="$router.push('/profile/edit')" />

    <div v-if="blogs.length > 0 || canCreateBlogs">
      <div class="divide-y divide-gray-200">
        <h1 class="text-xl font-medium text-gray-900 mb-2">Blogs</h1>
      </div>
      <blogs-list :blogs="blogs" />

      <blog-item-new
        v-if="canCreateBlogs"
        @create="$router.push('/blogs/new')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { User, Blog } from '~/types/hoenn'

import Profile from '~/components/users/Profile.vue'
import BlogsList from '~/components/blogs/BlogsList.vue'
import BlogItemNew from '~/components/blogs/BlogItemNew.vue'

@Component({
  middleware: ['auth'],
  components: {
    Profile,
    BlogsList,
    BlogItemNew,
  },
})
export default class ProfilePage extends Vue {
  get user() {
    return this.$auth.user as User
  }

  blogs = [] as Blog[]
  canCreateBlogs = false

  created() {
    const role = this.$auth.user?.role as string
    this.canCreateBlogs = ['ADMIN', 'WRITER'].includes(role)
  }

  async mounted() {
    this.blogs = (await this.$axios.$get(
      `/users/${this.user.username}/blogs`
    )) as Blog[]
  }
}
</script>
