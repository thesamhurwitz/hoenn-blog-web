<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-md">
    <ul class="divide-y divide-gray-200">
      <blog-item
        v-for="blog in blogs"
        :key="blog.id"
        :blog="blog"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

import BlogItem from '~/components/blogs/BlogItem.vue'
import { Blog } from '~/types/hoenn'

@Component({
  components: {
    BlogItem,
  },
})
export default class BlogsList extends Vue {
  @Prop() blogs!: Blog[]
}
</script>
