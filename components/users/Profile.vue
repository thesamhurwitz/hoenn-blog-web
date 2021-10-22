<template>
  <main class="py-10">
    <div
      class="
        max-w-3xl
        mx-auto
        px-4
        sm:px-6
        md:flex md:items-center md:justify-between md:space-x-5
        lg:max-w-7xl lg:px-8
      "
    >
      <div class="flex items-center space-x-5">
        <div class="flex-shrink-0">
          <div class="relative">
            <img
              class="h-16 w-16 rounded-full object-cover"
              src="https://e7.pngegg.com/pngimages/78/788/png-clipart-computer-icons-avatar-business-computer-software-user-avatar-child-face.png"
              alt=""
            />
            <span
              class="absolute inset-0 shadow-inner rounded-full"
              aria-hidden="true"
            ></span>
          </div>
        </div>
        <div>
          <h1 class="text-2xl font-bold text-gray-900">{{ user.username }}</h1>
          <p class="text-sm font-medium text-gray-500">
            {{ user.role }}
          </p>
        </div>
      </div>

      <!-- <nuxt-link
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
          bg-gray-50
          hover:bg-white
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-indigo-500
        "
      >
        <div class="mr-2">
          <fa-icon icon="sign-out-alt" />
        </div>
        Log out
      </nuxt-link> -->
    </div>

    <div
      class="mt-8 max-w-3xl mx-auto gap-6 lg:max-w-full lg:grid-flow-col-dense"
    >
      <div class="space-y-6">
        <section aria-labelledby="applicant-information-title">
          <div class="bg-white shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6">
              <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">Joined on</dt>
                  <dd class="mt-1 text-sm text-gray-900">{{ joinedDate }}</dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900">
                    <a class="hover:underline" :href="`mailto:${user.email}`">{{
                      user.email
                    }}</a>
                  </dd>
                </div>
                <div v-if="user.profile" class="sm:col-span-2">
                  <dt class="text-sm font-medium text-gray-500">Bio</dt>
                  <dd class="mt-1 text-sm text-gray-900">
                    {{ user.profile.bio }}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import moment from 'moment'
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { User } from '~/types/hoenn'

@Component
export default class ProfileComponent extends Vue {
  @Prop() user!: User

  get joinedDate() {
    return moment(this.user.createdAt).format('MMMM D YYYY [at] hh:mm A')
  }
}
</script>
