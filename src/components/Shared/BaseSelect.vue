<template>
  <select
    :value="value"
    @change="handleChange"
    class="h-[36px] border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
  >
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
defineProps<{
  value: string | number
  options: Array<{ value: string | number; label: string }>
}>()

const emit = defineEmits<{
  'update:value': [value: string]
}>()

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emit('update:value', target.value)
}
</script>
