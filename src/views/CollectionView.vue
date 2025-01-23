<template>
  <div class="flex flex-col items-center w-full p-6">
    <CollectionToolbar
      v-model:searchQuery="searchQuery"
      v-model:filterRating="filterRating"
      v-model:sortOption="sortOption"
      @navigate-to-jokes="navigateToJokes"
    />

    <CollectionStatistics />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      <JokeCard
        v-for="joke in filteredAndSortedJokes"
        :key="joke.id"
        :joke="joke"
        is-favorite
        show-remove-button
        @toggle-favorite="removeFavorite(joke.id)"
      >
        <RatingComponent
          class="flex w-full justify-center"
          :rating="joke.rating"
          @set-rating="(rating) => setRating(joke.id, rating)"
        />
      </JokeCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useJokeStore } from '@/stores/joke.store'
import JokeCard from '@/components/Jokes/JokeCard.vue'
import RatingComponent from '@/components/Shared/RatingComponent.vue'
import CollectionToolbar from '@/components/Collection/CollectionToolbar.vue'
import CollectionStatistics from '@/components/Collection/CollectionStatistics.vue'
import { RouteNames } from '@/router'
import type { CollectionSortOption } from '@/types/collection.types'

const router = useRouter()
const { removeFavorite, setRating } = useJokeStore()
const { favorites } = storeToRefs(useJokeStore())

const searchQuery = ref('')
const filterRating = ref<number>(0)
const sortOption = ref<CollectionSortOption>('')

const filteredAndSortedJokes = computed(() => {
  let jokes = [...favorites.value]

  if (searchQuery.value.trim()) {
    const query = searchQuery.value.trim().toLowerCase()
    jokes = jokes.filter(
      (joke) =>
        joke.setup.toLowerCase().includes(query) || joke.punchline.toLowerCase().includes(query),
    )
  }

  if (filterRating.value) jokes = jokes.filter((joke) => joke.rating === filterRating.value)

  if (sortOption.value === 'rating') {
    jokes = [...jokes].sort((a, b) => (b.rating || 0) - (a.rating || 0))
  } else if (sortOption.value === 'alphabetical') {
    jokes = [...jokes].sort((a, b) => a.setup.toLowerCase().localeCompare(b.setup.toLowerCase()))
  }

  return jokes
})

const navigateToJokes = () => {
  router.push({ name: RouteNames.Jokes })
}
</script>
