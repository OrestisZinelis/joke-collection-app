<template>
  <button
    class="h-[36px] px-4 rounded focus:outline-none"
    :class="{
      'bg-blue-500 hover:bg-blue-600 text-white': variant === 'primary',
      'bg-gray-300 hover:bg-gray-400 text-black': variant === 'secondary',
      'bg-red-500 hover:bg-red-600 text-white': variant === 'danger',
      'bg-green-500 hover:bg-green-600 text-white': variant === 'success',
    }"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'danger' | 'success'
  }>(),
  {
    variant: 'primary',
  },
)
</script>
