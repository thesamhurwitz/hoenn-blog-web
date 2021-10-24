<template>
<div>
  <blogs-list :blogs="blogs" />
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import BlogsList from '~/components/blogs/BlogsList.vue'

@Component({
  components: {
    BlogsList
  }
})
export default class BlogsPage extends Vue {
  get blogs() {
    return this.$accessor.blogs || []
  }

  async mounted() {
    await this.$accessor.loadBlogs({ more: false })
  }
}
</script>
