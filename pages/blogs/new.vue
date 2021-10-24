<template>
<div>
  <edit-blog v-model="form" @save="save" />
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import EditBlog from '~/components/blogs/EditBlog.vue'
import { Blog, BlogType } from '~/types/hoenn'


@Component({
  components: {
    EditBlog
  }
})
export default class NewBlogPage extends Vue {
  form = {
    name: '',
    displayName: '',
    type: 'PERSONAL' as BlogType,
    about: ''
  }

  members = [] as Blog[]

  async save() {
    try {
      await this.$axios.$post(`/blogs`, {
        ...this.form,
      })

      await this.$swal({
        title: 'Saved',
        icon: 'success'
      })

      this.$router.push(`/blogs/${this.form.name}/edit`)
    } catch (e: any) {
      if (e.response) {
        this.$swal({
          title: 'Error',
          icon: 'error',
          text: e.response.data?.message?.[0] ?? e.response.statusText
        })
      }
    }
  }

  async mounted() {

  }
}
</script>
