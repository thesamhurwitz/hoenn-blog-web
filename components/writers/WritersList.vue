<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-md">
    <ul class="divide-y divide-gray-200">
      <writer-item
        v-for="writer in writers"
        :key="writer.id"
        :writer="writer"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

import WriterItem from '~/components/writers/WriterItem.vue'
import { Writer } from '~/types/hoenn'

@Component({
  components: {
    WriterItem,
  },
})
export default class WritersList extends Vue {
  @Prop() writers!: Writer[]
}
</script>
