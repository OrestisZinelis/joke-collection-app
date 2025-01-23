<template>
  <SharedToolbar>
    <template #left>
      <SharedButton @click="emit('navigateToJokes')">
        <i class="fa fa-plus" />
        Add Jokes
      </SharedButton>
    </template>
    <template #main>
      <div class="flex-1 min-w-[200px]">
        <input
          :value="searchQuery"
          @input="handleSearchInput"
          type="text"
          placeholder="Search jokes..."
          class="w-full h-[36px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div class="flex items-center gap-2">
        <span for="filterRating" class="text-sm font-medium text-gray-700">Filter</span>
        <SharedSelect
          :value="filterRating"
          :options="ratingOptions"
          @update:value="handleRatingFilterUpdate"
        />
      </div>

      <div class="flex items-center gap-2">
        <span class="text-sm font-medium text-gray-700">Sort</span>
        <SharedSelect :value="sortOption" :options="sortOptions" @update:value="handleSortUpdate" />
      </div>
    </template>
  </SharedToolbar>
</template>

<script setup lang="ts">
import SharedButton from '@/components/Shared/SharedButton.vue'
import SharedSelect from '@/components/Shared/SharedSelect.vue'
import SharedToolbar from '@/components/Shared/SharedToolbar.vue'
import type { CollectionSortOption } from '@/types/collection.types'

defineProps<{
  searchQuery: string
  filterRating: number
  sortOption: CollectionSortOption
}>()

const emit = defineEmits<{
  'update:filterRating': [filter: number]
  'update:searchQuery': [searchQuery: string]
  'update:sortOption': [sortOption: CollectionSortOption]
  navigateToJokes: []
}>()

const ratingOptions = [
  { value: 0, label: 'Filter by Rating' },
  { value: 1, label: '1 Star' },
  { value: 2, label: '2 Stars' },
  { value: 3, label: '3 Stars' },
  { value: 4, label: '4 Stars' },
  { value: 5, label: '5 Stars' },
]

const sortOptions: { value: CollectionSortOption; label: string }[] = [
  { value: '', label: 'Sort by' },
  { value: 'rating', label: 'Rating' },
  { value: 'alphabetical', label: 'Alphabetical' },
]

const handleSearchInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:searchQuery', target.value)
}

const handleRatingFilterUpdate = (value: string) => {
  emit('update:filterRating', parseInt(value))
}

const handleSortUpdate = (value: string) => {
  emit('update:sortOption', value as CollectionSortOption)
}
</script>
