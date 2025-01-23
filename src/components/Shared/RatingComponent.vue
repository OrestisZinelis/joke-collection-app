<template>
  <div class="flex items-center gap-1">
    <template v-for="star in stars" :key="star">
      <input class="hidden" :id="`star-${star}`" type="radio" :value="star" name="rating" />
      <label
        :for="`star-${star}`"
        class="cursor-pointer text-gray-400 hover:text-yellow-300 transition-colors duration-300"
        :class="{ 'text-yellow-300': star <= currentRating }"
        @click="emitRating(star)"
      >
        ★
      </label>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    maxStars?: number
    rating?: number
  }>(),
  {
    maxStars: 5,
    rating: 0,
  },
)

const emit = defineEmits<{
  setRating: [value: number]
}>()

const stars = [...Array(props.maxStars)].map((_, i) => i + 1)

const currentRating = ref(props.rating)

const emitRating = (rating: number) => {
  currentRating.value = rating
  emit('setRating', rating)
}
</script>

<style scoped>
label:hover ~ label {
  color: #ccc !important;
}
</style>
