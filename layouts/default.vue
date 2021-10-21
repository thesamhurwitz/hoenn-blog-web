<template>
  <div class="min-h-screen bg-gray-100">
    <the-header />
    <div class="py-10">
      <div
        class="
          max-w-3xl
          mx-auto
          sm:px-6
          lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8
        "
      >
        <the-nav />
        <main class="lg:col-span-9 xl:col-span-9">
          <Nuxt />
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import TheHeader from '../components/TheHeader.vue'
import TheNav from '~/components/TheNav.vue'

@Component({
  components: {
    TheHeader,
    TheNav,
  },
  middleware: ['initialize'],
})
export default class HomePage extends Vue {}
</script>
