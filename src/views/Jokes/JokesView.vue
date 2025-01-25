<template>
  <div class="flex flex-col items-center w-full p-6">
    <JokesToolbar
      :jokeType="jokeType"
      @update:jokeType="handleUpdateJokeType"
      @get-jokes="getJokes"
      @navigate-to-collection="navigateToCollection"
    />

    <div
      v-if="!isFetchingJokes"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
    >
      <JokeCard
        v-for="joke in jokes"
        :key="joke.id"
        :joke="joke"
        :is-favorite="isFavorite(joke.id)"
        show-show-button
        @toggle-favorite="toggleFavorite(joke)"
      />
    </div>
    <div v-else class="fixed inset-0 flex justify-center items-center bg-opacity-50 z-50">
      <BaseSpinner />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useJokeStore } from '@/stores/joke.store'
import { useRouter } from 'vue-router'
import { fetchRandomJokes, fetchJokesByType } from '@/api/jokes.api'
import JokesToolbar from '@/views/Jokes/components/JokesToolbar.vue'
import { RouteNames } from '@/router'
import JokeCard from '@/components/JokeCard.vue'
import BaseSpinner from '@/components/Shared/BaseSpinner.vue'
import type { Joke, JokeType } from '@/types/joke.types'

const router = useRouter()

const { removeFavorite, addFavorite } = useJokeStore()
const { favorites } = storeToRefs(useJokeStore())

const jokeType = ref<JokeType>('random')
const jokes = ref<Joke[]>([])
const punchlineVisibility = ref<Record<number, boolean>>({})
const isFetchingJokes = ref(false)
const hasFetchError = ref(false)

const favoriteIds = computed(() => new Set(favorites.value.map((fav) => fav.id)))

const getJokes = async () => {
  hasFetchError.value = false
  isFetchingJokes.value = true

  try {
    const data =
      jokeType.value === 'random'
        ? await fetchRandomJokes()
        : await fetchJokesByType(jokeType.value)

    jokes.value = data
  } catch (error) {
    hasFetchError.value = true
    alert('Oops! Something went wrong while fetching the jokes. Please try again later.')
    console.error('Error fetching jokes:', error)
  } finally {
    isFetchingJokes.value = false
  }
}

const handleUpdateJokeType = (type: JokeType) => {
  jokeType.value = type
}

const toggleFavorite = (joke: Joke) =>
  isFavorite(joke.id) ? removeFavorite(joke.id) : addFavorite(joke)

const isFavorite = (id: Joke['id']) => favoriteIds.value.has(id)

const navigateToCollection = () => {
  router.push({ name: RouteNames.Collection })
}

onMounted(() => {
  punchlineVisibility.value = {}
})
</script>
