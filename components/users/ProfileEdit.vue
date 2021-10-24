<template>
  <div>
    <div>
      <div class="space-y-6">
        <div class="">
          <div class="px-4">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Info</h3>
            <p class="mt-1 text-sm text-gray-600">
              Public information about your blog
            </p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-4">
          <form @submit.prevent="$emit('save')">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div class="grid grid-cols-3 gap-6">
                  <div class="col-span-3 sm:col-span-2">
                    <label
                      for="company_website"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Username
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <span
                        class="
                          inline-flex
                          items-center
                          px-3
                          rounded-l-md
                          border border-r-0 border-gray-300
                          bg-gray-50
                          text-gray-500 text-sm
                        "
                      >
                        @
                      </span>
                      <input
                        id="company_website"
                        v-model="value.username"
                        type="text"
                        name="company_website"
                        class="
                          focus:ring-indigo-500 focus:border-indigo-500
                          flex-1
                          block
                          w-full
                          rounded-none rounded-r-md
                          sm:text-sm
                          border-gray-300
                        "
                        disabled
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    for="about"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div class="mt-1">
                    <!-- TODO -->
                    <input
                      id="displayName"
                      type="text"
                      name="about"
                      required
                      class="
                        shadow-sm
                        focus:ring-indigo-500 focus:border-indigo-500
                        mt-1
                        block
                        w-full
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      "
                      placeholder="Name"
                    />
                  </div>
                </div>

                <div v-if="admin">
                  <label
                    for="about"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Role
                  </label>
                  <div class="mt-1">
                    <span class="relative z-0 inline-flex shadow-sm rounded-md">
                      <button
                        type="button"
                        class="
                          relative
                          inline-flex
                          items-center
                          px-4
                          py-2
                          rounded-l-md
                          border border-gray-300
                          bg-white
                          text-sm
                          font-medium
                          hover:bg-gray-50
                          focus:z-10
                          focus:outline-none
                          focus:ring-1
                          focus:ring-indigo-500
                          focus:border-indigo-500
                        "
                        :class="{
                          'text-white bg-indigo-600 hover:bg-indigo-700':
                            value.role === 'USER',
                          'text-gray-700': value.role !== 'USER',
                        }"
                        @click="setRole('USER')"
                      >
                        User
                      </button>
                      <button
                        type="button"
                        class="
                          -ml-px
                          relative
                          inline-flex
                          items-center
                          px-4
                          py-2
                          border border-gray-300
                          bg-white
                          text-sm
                          font-medium
                          hover:bg-gray-50
                          focus:z-10
                          focus:outline-none
                          focus:ring-1
                          focus:ring-indigo-500
                          focus:border-indigo-500
                        "
                        :class="{
                          'text-white bg-indigo-600 hover:bg-indigo-700':
                            value.role === 'WRITER',
                          'text-gray-700': value.role !== 'WRITER',
                        }"
                        @click="setRole('WRITER')"
                      >
                        Writer
                      </button>
                      <button
                        type="button"
                        class="
                          -ml-px
                          relative
                          inline-flex
                          items-center
                          px-4
                          py-2
                          rounded-r-md
                          border border-gray-300
                          bg-white
                          text-sm
                          font-medium
                          hover:bg-gray-50
                          focus:z-10
                          focus:outline-none
                          focus:ring-1
                          focus:ring-indigo-500
                          focus:border-indigo-500
                        "
                        :class="{
                          'text-white bg-indigo-600 hover:bg-indigo-700':
                            value.role === 'ADMIN',
                          'text-gray-700': value.role !== 'ADMIN',
                        }"
                        @click="setRole('ADMIN')"
                      >
                        Admin
                      </button>
                    </span>
                  </div>
                </div>

                <div>
                  <label
                    for="about"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div class="mt-1">
                    <input
                      id="about"
                      v-model="value.email"
                      type="text"
                      name="about"
                      class="
                        shadow-sm
                        focus:ring-indigo-500 focus:border-indigo-500
                        mt-1
                        block
                        w-full
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      "
                      placeholder="user@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Avatar
                  </label>
                  <div class="mt-1 flex items-center">
                    <span
                      class="
                        inline-block
                        h-12
                        w-12
                        rounded-full
                        overflow-hidden
                        bg-gray-100
                      "
                    >
                      <svg
                        class="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </span>
                    <button
                      type="button"
                      class="
                        ml-5
                        bg-white
                        py-2
                        px-3
                        border border-gray-300
                        rounded-md
                        shadow-sm
                        text-sm
                        leading-4
                        font-medium
                        text-gray-700
                        hover:bg-gray-50
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-indigo-500
                      "
                    >
                      Change
                    </button>
                  </div>
                </div>

                <div>
                  <label
                    for="about"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Bio
                  </label>
                  <div class="mt-1">
                    <textarea
                      id="about"
                      v-model="value.bio"
                      name="about"
                      rows="3"
                      class="
                        shadow-sm
                        focus:ring-indigo-500 focus:border-indigo-500
                        mt-1
                        block
                        w-full
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      "
                      placeholder="I love cats 🐱"
                    ></textarea>
                  </div>
                  <p class="mt-2 text-sm text-gray-500">Tell something about yourself</p>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  class="
                    inline-flex
                    justify-center
                    py-2
                    px-4
                    border border-transparent
                    shadow-sm
                    text-sm
                    font-medium
                    rounded-md
                    text-white
                    bg-indigo-600
                    hover:bg-indigo-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-indigo-500
                  "
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'nuxt-property-decorator'
import { UserRole } from '~/types/hoenn'


@Component
export default class EditProfileComponent extends Vue {
  @Prop() value!: {
    username: string,
    email: string,
    role: UserRole,
    bio: string;
  }

  @Prop({ default: false }) admin!: boolean

  @Watch('value', { deep: true })
  onValueChanged() {
    this.$emit('input', this.value)
  }

  setRole(role: string) {
    this.value.role = role as UserRole
  }
}
</script>
