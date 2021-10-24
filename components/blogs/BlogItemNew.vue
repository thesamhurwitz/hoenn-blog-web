<template>
  <div
    class="
      block
      mt-4
      bg-transparent
      rounded-md
      border-4 border-gray-300
      hover:border-gray-400
      border-dashed
      cursor-pointer
    "
    @click="$emit('create')"
  >
    <div class="flex flex-col items-center px-3 py-3 sm:px-6 text-gray-500">
      <div>
        <fa-icon icon="plus" size="lg" />
      </div>
      <div>Create new blog</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class BlogItemNew extends Vue {}
</script>
