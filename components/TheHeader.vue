<template>
  <header class="bg-white shadow">
    <div
      class="
        max-w-7xl
        mx-auto
        px-2
        sm:px-4
        lg:divide-y lg:divide-gray-200 lg:px-8
      "
    >
      <div class="relative h-16 flex justify-between">
        <!-- Logo -->
        <div class="relative z-10 px-2 flex lg:px-0">
          <nuxt-link to="/" class="flex-shrink-0 flex items-center">
            <img
              class="block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <div
              class="
                hidden
                lg:block
                ml-4
                text-3xl
                font-bold
                text-gray-800
                subpixel-antialiased
                underline
              "
              style="
                text-decoration-color: rgb(9, 70, 229);
                text-decoration-thickness: 4px;
              "
            >
              Hoenn Blog
            </div>
          </nuxt-link>
        </div>
        <!-- Search -->
        <div
          class="
            relative
            z-0
            flex-1
            px-2
            flex
            items-center
            justify-center
            sm:absolute sm:inset-0
          "
        >
          <div class="w-full sm:max-w-lg">
            <label for="search" class="sr-only">Search</label>
            <div class="relative">
              <div
                class="
                  pointer-events-none
                  absolute
                  inset-y-0
                  left-0
                  pl-3
                  flex
                  items-center
                "
              >
                <fa-icon class="text-gray-400 h-5 w-5" icon="search" />
              </div>
              <input
                id="search"
                name="search"
                class="
                  block
                  w-full
                  bg-gray-100
                  rounded-md
                  py-2
                  pl-10
                  pr-3
                  text-sm
                  placeholder-gray-500
                  focus:outline-none
                  focus:text-gray-900
                  focus:placeholder-gray-400
                  focus:ring-1
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  sm:text-sm
                "
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
        </div>
        <!-- Mobile menu button -->
        <div class="relative z-10 flex items-center lg:hidden">
          <button
            type="button"
            class="
              rounded-md
              p-2
              inline-flex
              items-center
              justify-center
              text-gray-400
              hover:bg-gray-100 hover:text-gray-500
              focus:outline-none
              focus:ring-2
              focus:ring-inset
              focus:ring-indigo-500
            "
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="menuOpen = !menuOpen"
          >
            <span class="sr-only">Open menu</span>
            <div v-show="!menuOpen" class="block h-6 w-6">
              <fa-icon icon="bars" />
            </div>
            <div v-show="menuOpen" class="block h-6 w-6">
              <fa-icon icon="times" />
            </div>
          </button>
        </div>
        <div class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
          <button
            class="
              flex-shrink-0
              bg-white
              rounded-full
              p-1
              text-gray-400
              hover:text-gray-500
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500
            "
          >
            <span class="sr-only">View notifications</span>
            <fa-icon icon="bell" />
          </button>

          <div v-if="$auth.loggedIn" class="flex-shrink-0 relative ml-4">
            <div class="flex flex-row items-center">
              <nuxt-link
                to="/profile"
                class="
                  bg-white
                  rounded-full
                  flex
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <img
                  class="h-8 w-8 rounded-full object-cover"
                  src="https://e7.pngegg.com/pngimages/78/788/png-clipart-computer-icons-avatar-business-computer-software-user-avatar-child-face.png"
                  alt=""
                />
              </nuxt-link>
              <div class="ml-3 w-30">
                <div class="text-base font-medium text-gray-800">
                  {{ $auth.user ? $auth.user.username : '' }}
                </div>
                <div class="text-sm font-medium text-gray-500">
                  {{ $auth.user ? $auth.user.role : '' }}
                </div>
              </div>
              <button
                class="
                  flex
                  ml-4
                  justify-center
                  py-2
                  px-2
                  border border-transparent
                  rounded-md
                  shadow-sm
                  text-sm
                  font-medium
                  text-gray-500
                  bg-gray-100
                  hover:bg-gray-200
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
                @click="$auth.logout()"
              >
                <fa-icon icon="sign-out-alt" />
              </button>
            </div>
          </div>

          <div
            v-if="!$auth.loggedIn"
            class="flex-shrink-0 relative ml-4 flex flex-row gap-4"
          >
            <nuxt-link
              to="/auth/login"
              class="
                flex
                justify-center
                py-2
                px-4
                border border-transparent
                rounded-md
                shadow-sm
                text-sm
                font-medium
                text-gray-900
                bg-gray-100
                hover:bg-gray-200
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-indigo-500
              "
            >
              Log in
            </nuxt-link>

            <nuxt-link
              to="/auth/register"
              class="
                flex
                justify-center
                py-2
                px-4
                border border-transparent
                rounded-md
                shadow-sm
                text-sm
                font-medium
                text-white
                bg-indigo-600
                hover:bg-indigo-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-indigo-500
              "
            >
              Sign up
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <nav
      v-show="menuOpen"
      class="lg:hidden"
      aria-label="Global"
      id="mobile-menu"
    >
      <div class="pt-2 pb-3 px-2 space-y-1">
        <nuxt-link
          v-for="item in menu"
          :key="item.name"
          :to="item.path"
          exact-active-class="bg-gray-100 text-gray-900"
          class="
            text-gray-900
            hover:bg-gray-50 hover:text-gray-900
            block
            rounded-md
            py-2
            px-3
            text-base
            font-medium
          "
          aria-current="page"
          >{{ item.name }}</nuxt-link
        >
      </div>
      <div class="border-t border-gray-200 pt-4 pb-3">
        <div v-show="$auth.loggedIn" class="px-4 flex items-center">
          <nuxt-link
            to="/profile"
            class="
              flex-shrink-0
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500
              rounded-full
            "
          >
            <img
              class="h-8 w-8 rounded-full object-cover"
              src="https://e7.pngegg.com/pngimages/78/788/png-clipart-computer-icons-avatar-business-computer-software-user-avatar-child-face.png"
              alt=""
            />
          </nuxt-link>
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800">
              {{ $auth.user ? $auth.user.username : '' }}
            </div>
            <div class="text-sm font-medium text-gray-500">
              {{ $auth.user ? $auth.user.role : '' }}
            </div>
          </div>
          <button
            class="
              ml-auto
              flex-shrink-0
              bg-white
              rounded-full
              p-1
              text-gray-400
              hover:text-gray-500
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500
            "
          >
            <span class="sr-only">View notifications</span>
            <fa-icon icon="bell" />
          </button>
          <button
            to="/auth/register"
            class="
              flex
              ml-4
              justify-center
              py-2
              px-2
              border border-transparent
              rounded-md
              shadow-sm
              text-sm
              font-medium
              text-gray-500
              bg-gray-100
              hover:bg-gray-200
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500
            "
            @click="$auth.logout()"
          >
            <fa-icon icon="sign-out-alt" />
          </button>
        </div>
        <div v-show="!$auth.loggedIn" class="px-4 flex items-center">
          <nuxt-link
            to="/auth/login"
            class="
              flex
              justify-center
              py-2
              px-4
              border border-transparent
              rounded-md
              shadow-sm
              text-sm
              font-medium
              text-gray-900
              bg-gray-100
              hover:bg-gray-200
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500
            "
          >
            Log in
          </nuxt-link>

          <nuxt-link
            to="/auth/register"
            class="
              flex
              justify-center
              py-2
              px-4
              border border-transparent
              rounded-md
              shadow-sm
              text-sm
              font-medium
              text-white
              bg-indigo-600
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500
            "
          >
            Sign up
          </nuxt-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'

import menu from './menu'

@Component
export default class TheHeader extends Vue {
  menuOpen = false
  menu = menu

  get user() {
    return this.$accessor.user.user
  }

  data() {
    return {}
  }
}
</script>
