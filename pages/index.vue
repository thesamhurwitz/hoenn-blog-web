<template>
  <post-list :posts="posts" />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import PostList from '~/components/posts/PostList.vue'
import { Post } from '~/types/hoenn';

@Component({
  components: {
    PostList,
  },
})
export default class HomePage extends Vue {
  get posts() {
    return this.$accessor.posts as Post[];
  }

  async mounted() {
    await this.$accessor.loadPosts({ more: false })
  }
}
</script>
