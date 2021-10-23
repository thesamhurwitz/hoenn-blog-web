<template>
<div>
  <edit-writer v-model="form" @save="save" />
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import EditWriter from '~/components/writers/EditWriter.vue'
import { Writer, WriterType } from '~/types/hoenn'


@Component({
  components: {
    EditWriter
  }
})
export default class EditWriterPage extends Vue {
  form = {
    name: '',
    displayName: '',
    type: 'PERSONAL' as WriterType,
    about: ''
  }

  members = [] as Writer[]

  async save() {
    try {
      await this.$axios.$post(`/writers`, {
        ...this.form,
      })

      await this.$swal({
        title: 'Saved',
        icon: 'success'
      })

      this.$router.push(`/writers/${this.form.name}/edit`)
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
