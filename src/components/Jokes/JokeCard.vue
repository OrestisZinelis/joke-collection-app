<template>
  <div class="flex flex-col h-full p-4 border rounded shadow hover:shadow-lg bg-white relative">
    <p class="font-medium transition-all duration-300 ease-in-out">{{ joke.setup }}</p>

    <p
      class="flex-grow mt-2 text-gray-700 transition-all duration-300 ease-in-out"
      :class="{
        'opacity-0': !showPunchLine,
        'opacity-100': showPunchLine,
      }"
    >
      {{ joke.punchline }}
    </p>

    <div class="flex justify-between items-center gap-1 mt-4">
      <div>
        <BaseButton
          v-if="!showPunchLine"
          @click="showPunchLine = true"
          :variant="showPunchLine ? 'secondary' : 'primary'"
        >
          Show
        </BaseButton>
      </div>
      <div>
        <BaseButton
          v-if="showRemoveButton"
          :variant="'danger'"
          @click="emit('toggleFavorite', joke.id)"
        >
          <i class="fa fa-trash" />
        </BaseButton>
        <BaseButton
          v-else
          :variant="isFavorite ? 'success' : 'secondary'"
          @click="emit('toggleFavorite', joke.id)"
        >
          <i class="fa fa-save" />
        </BaseButton>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '@/components/Shared/BaseButton.vue'
import type { Joke } from '@/types/joke.types'

const props = defineProps<{
  joke: Joke
  isFavorite?: boolean
  showShowButton?: boolean
  showRemoveButton?: boolean
}>()

const emit = defineEmits<{
  toggleFavorite: [id: Joke['id']]
  setRating: [rating: Joke['rating'], id: Joke['id']]
}>()

const showPunchLine = ref(!props.showShowButton)
</script>
