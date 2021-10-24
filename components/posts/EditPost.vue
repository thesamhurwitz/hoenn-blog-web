<template>
  <div>
    <div>
      <div class="space-y-6">
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
                      Title
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input
                        id="company_website"
                        v-model="value.title"
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
                        :disabled="edit"
                        placeholder="This post is about..."
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    for="about"
                    class="block text-sm font-medium text-gray-700"
                  >
                    About
                  </label>
                  <div class="mt-1">
                    <textarea
                      id="about"
                      v-model="value.content"
                      name="about"
                      rows="6"
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
                      placeholder="This post is about cats!! 🐱"
                    ></textarea>
                  </div>
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


@Component
export default class EditPostComponent extends Vue {
  @Prop() value!: {
    title: string;
    content: string;
  }

  @Prop({ default: false }) edit!: boolean

  @Watch('value', { deep: true })
  onValueChanged() {
    this.$emit('input', this.value)
  }
}
</script>
