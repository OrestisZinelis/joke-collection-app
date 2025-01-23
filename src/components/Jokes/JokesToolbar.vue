<template>
  <SharedToolbar>
    <template #left>
      <SharedButton @click="emit('navigateToCollection')">
        <i class="fa fa-list" />
        My Collection
      </SharedButton>
    </template>
    <template #main>
      <span class="text-gray-700">Joke Type</span>
      <SharedSelect
        :value="jokeType"
        :options="ratingOptions"
        @update:value="emit('update:jokeType', $event as JokeType)"
      />
      <SharedButton @click="emit('getJokes')"> Get Jokes </SharedButton>
    </template>
  </SharedToolbar>
</template>

<script setup lang="ts">
import SharedButton from '@/components/Shared/SharedButton.vue'
import SharedSelect from '@/components/Shared/SharedSelect.vue'
import SharedToolbar from '@/components/Shared/SharedToolbar.vue'
import type { JokeType } from '@/types/joke.types'

defineProps<{
  jokeType: string
}>()

const emit = defineEmits<{
  'update:jokeType': [jokeType: JokeType]
  getJokes: []
  navigateToCollection: []
}>()

const ratingOptions: { value: JokeType; label: string }[] = [
  { value: 'random', label: 'Random' },
  { value: 'programming', label: 'Programming' },
]
</script>
