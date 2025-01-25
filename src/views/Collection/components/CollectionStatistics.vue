<template>
  <div
    class="flex justify-between items-center w-full bg-blue-100 text-blue-500 rounded-md p-4 shadow-md mb-6"
  >
    <div class="text-lg font-medium">
      <i class="fa fa-list" aria-hidden="true"></i>
      Saved Jokes: <span class="font-bold">{{ totalFavorites }}</span>
    </div>
    <div class="text-lg font-medium">
      <i class="fa fa-star" aria-hidden="true"></i>
      Average Rating:
      <span class="font-bold">{{ averageRating || 'N/A' }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useJokeStore } from '@/stores/joke.store'
import { storeToRefs } from 'pinia'

const { totalFavorites, averageRating } = storeToRefs(useJokeStore())
</script>
