<template>
  <div class="hidden lg:block lg:col-span-3 xl:col-span-2">
    <nav aria-label="Sidebar" class="sticky top-4 divide-y divide-gray-300">
      <div class="pb-8 space-y-1">
        <!-- Current: "bg-gray-200 text-gray-900", Default: "text-gray-600 hover:bg-gray-50" -->
        <nuxt-link
          v-for="item in menu"
          :key="item.name"
          :to="item.path"
          exact-active-class="bg-gray-200 text-gray-900"
          class="
            text-gray-600
            hover:bg-gray-50
            group
            flex
            items-center
            px-3
            py-2
            text-sm
            font-medium
            rounded-md
          "
          aria-current="page"
        >
          <div class="text-gray-400 flex-shrink-0 -ml-1 mr-3 h-6 w-6 flex items-center">
            <fa-icon :icon="['fas', item.icon]" size="lg" />
          </div>
          <span class="truncate">{{ item.name }}</span>
        </nuxt-link>
      </div>
      <div class="pt-10">
        <p
          class="
            px-3
            text-xs
            font-semibold
            text-gray-500
            uppercase
            tracking-wider
          "
          id="communities-headline"
        >
          My communities
        </p>
        <div class="mt-3 space-y-2" aria-labelledby="communities-headline">
          <a
            href="#"
            class="
              group
              flex
              items-center
              px-3
              py-2
              text-sm
              font-medium
              text-gray-600
              rounded-md
              hover:text-gray-900 hover:bg-gray-50
            "
          >
            <span class="truncate"> Movies </span>
          </a>

          <a
            href="#"
            class="
              group
              flex
              items-center
              px-3
              py-2
              text-sm
              font-medium
              text-gray-600
              rounded-md
              hover:text-gray-900 hover:bg-gray-50
            "
          >
            <span class="truncate"> Food </span>
          </a>

          <a
            href="#"
            class="
              group
              flex
              items-center
              px-3
              py-2
              text-sm
              font-medium
              text-gray-600
              rounded-md
              hover:text-gray-900 hover:bg-gray-50
            "
          >
            <span class="truncate"> Sports </span>
          </a>

          <a
            href="#"
            class="
              group
              flex
              items-center
              px-3
              py-2
              text-sm
              font-medium
              text-gray-600
              rounded-md
              hover:text-gray-900 hover:bg-gray-50
            "
          >
            <span class="truncate"> Animals </span>
          </a>

          <a
            href="#"
            class="
              group
              flex
              items-center
              px-3
              py-2
              text-sm
              font-medium
              text-gray-600
              rounded-md
              hover:text-gray-900 hover:bg-gray-50
            "
          >
            <span class="truncate"> Science </span>
          </a>

          <a
            href="#"
            class="
              group
              flex
              items-center
              px-3
              py-2
              text-sm
              font-medium
              text-gray-600
              rounded-md
              hover:text-gray-900 hover:bg-gray-50
            "
          >
            <span class="truncate"> Dinosaurs </span>
          </a>

          <a
            href="#"
            class="
              group
              flex
              items-center
              px-3
              py-2
              text-sm
              font-medium
              text-gray-600
              rounded-md
              hover:text-gray-900 hover:bg-gray-50
            "
          >
            <span class="truncate"> Talents </span>
          </a>

          <a
            href="#"
            class="
              group
              flex
              items-center
              px-3
              py-2
              text-sm
              font-medium
              text-gray-600
              rounded-md
              hover:text-gray-900 hover:bg-gray-50
            "
          >
            <span class="truncate"> Gaming </span>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'

import menu from './menu'

@Component
export default class TheNav extends Vue {
  menu = menu;
}
</script>
