<template>
  <div>
    <edit-writer v-model="form" :edit="true" @save="save" />
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
import { User, Writer, WriterType } from '~/types/hoenn'

import EditWriter from '~/components/writers/EditWriter.vue'
import MembersList from '~/components/writers/MembersList.vue'

@Component({
  components: {
    EditWriter,
    MembersList,
  },
})
export default class EditWriterPage extends Vue {
  form = {
    name: '',
    displayName: '',
    type: 'PERSONAL' as WriterType,
    about: '',
  }

  members = [] as User[]

  async save() {
    try {
      await this.$axios.$patch(`/writers/${this.$route.params.name}`, {
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
      await this.$axios.$put(`/writers/${this.$route.params.name}/editors`, {
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
      await this.$axios.$delete(`/writers/${this.$route.params.name}/editors/${username}`)

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
      `/writers/${this.$route.params.name}/editors`
    )) as User[]
  }

  async mounted() {
    const writer = (await this.$axios.$get(
      `/writers/${this.$route.params.name}`
    )) as Writer
    this.form = {
      name: writer.name,
      displayName: writer.displayName,
      type: writer.type,
      about: '',
    }

    await this.loadMembers()
  }
}
</script>
