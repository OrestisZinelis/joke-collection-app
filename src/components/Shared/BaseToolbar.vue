<template>
  <div
    class="flex flex-col justify-between items-center gap-4 md:flex-row border border-gray-100 bg-white shadow-md rounded-lg p-4 mb-6 sticky top-0 z-10"
  >
    <slot name="left" />
    <slot name="main" />
  </div>
</template>
