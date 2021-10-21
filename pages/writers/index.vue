<template>
<div>
  <writers-list :writers="writers" />
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import WritersList from '~/components/writers/WritersList.vue'

@Component({
  components: {
    WritersList
  }
})
export default class WritersPage extends Vue {
  get writers() {
    return this.$accessor.writers || []
  }

  async mounted() {
    await this.$accessor.loadWriters({ more: false })
  }
}
</script>
