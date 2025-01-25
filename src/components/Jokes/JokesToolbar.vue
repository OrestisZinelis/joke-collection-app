<template>
  <BaseToolbar>
    <template #left>
      <BaseButton @click="emit('navigateToCollection')">
        <i class="fa fa-list" />
        My Collection
      </BaseButton>
    </template>
    <template #main>
      <span class="text-gray-700">Joke Type</span>
      <BaseSelect
        :value="jokeType"
        :options="ratingOptions"
        @update:value="emit('update:jokeType', $event as JokeType)"
      />
      <BaseButton @click="emit('getJokes')"> Get Jokes </BaseButton>
    </template>
  </BaseToolbar>
</template>

<script setup lang="ts">
import BaseButton from '@/components/Shared/BaseButton.vue'
import BaseSelect from '@/components/Shared/BaseSelect.vue'
import BaseToolbar from '@/components/Shared/BaseToolbar.vue'
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
