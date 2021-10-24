<template>
  <div>
    <edit-blog v-model="form" :edit="true" @save="save" />
    <div class="hidden sm:block" aria-hidden="true">
      <div class="py-5">
        <div class="border-t border-gray-200"></div>
      </div>
    </div>
    <members-list :members="members" @add="addMember" @delete="deleteMember" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { User, Blog, BlogType } from '~/types/hoenn'

import EditBlog from '~/components/blogs/EditBlog.vue'
import MembersList from '~/components/blogs/MembersList.vue'

@Component({
  components: {
    EditBlog,
    MembersList,
  },
})
export default class EditBlogPage extends Vue {
  form = {
    name: '',
    displayName: '',
    type: 'PERSONAL' as BlogType,
    about: '',
  }

  members = [] as User[]

  async save() {
    try {
      await this.$axios.$patch(`/blogs/${this.$route.params.name}`, {
        ...this.form,
      })

      this.$swal({
        title: 'Saved',
        icon: 'success',
      })
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

  async addMember(username: string) {
    try {
      await this.$axios.$put(`/blogs/${this.$route.params.name}/editors`, {
        username,
      })

      await this.loadMembers()
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

  async deleteMember(username: string) {
    try {
      await this.$axios.$delete(`/blogs/${this.$route.params.name}/editors/${username}`)

      await this.loadMembers()
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

  async loadMembers() {
    this.members = (await this.$axios.$get(
      `/blogs/${this.$route.params.name}/editors`
    )) as User[]
  }

  async mounted() {
    const blog = (await this.$axios.$get(
      `/blogs/${this.$route.params.name}`
    )) as Blog
    this.form = {
      name: blog.name,
      displayName: blog.displayName,
      type: blog.type,
      about: '',
    }

    await this.loadMembers()
  }
}
</script>
