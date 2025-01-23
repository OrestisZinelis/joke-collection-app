import { computed } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import type { Joke } from '@/types/joke.types'

export const useJokeStore = defineStore('jokeStore', () => {
  const COLLECTION_LOCAL_STORAGE_KEY = 'jokes-collection'

  const favorites = useLocalStorage<Joke[]>(COLLECTION_LOCAL_STORAGE_KEY, [], {
    deep: true,
    listenToStorageChanges: true,
  })

  const addFavorite = (joke: Joke) => {
    if (!favorites.value.some((fav) => fav.id === joke.id)) {
      favorites.value = [joke, ...favorites.value]
    }
  }

  const removeFavorite = (id: number) => {
    favorites.value = favorites.value.filter((joke) => joke.id !== id)
  }

  const setRating = (id: number, rating: number) => {
    const index = favorites.value.findIndex((fav) => fav.id === id)
    if (index !== -1) {
      favorites.value[index] = {
        ...favorites.value[index],
        rating,
      }
    }
  }

  const totalFavorites = computed(() => favorites.value.length)

  const averageRating = computed(() => {
    const ratedJokes = favorites.value.filter((joke) => joke.rating !== undefined)
    if (!ratedJokes.length) return 'N/A'
    const total = ratedJokes.reduce((sum, joke) => sum + (joke.rating ?? 0), 0)
    return (total / ratedJokes.length).toFixed(2)
  })

  return {
    favorites,
    addFavorite,
    removeFavorite,
    setRating,
    totalFavorites,
    averageRating,
  }
})
