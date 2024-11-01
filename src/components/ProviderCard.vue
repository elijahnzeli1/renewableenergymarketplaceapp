<script setup lang="ts">
import type { Provider } from '../types/energy';
import { StarIcon } from '@heroicons/vue/20/solid';

defineProps<{
  provider: Provider;
}>();

const emit = defineEmits<{
  (e: 'viewPlans'): void;
}>();
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <div class="flex items-center gap-4">
      <div class="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-lg">
        <img :src="provider.logo" :alt="provider.name" class="w-12 h-12 object-contain" />
      </div>
      <div>
        <h3 class="text-xl font-semibold text-gray-900">{{ provider.name }}</h3>
        <div class="flex items-center gap-1">
          <StarIcon class="w-5 h-5 text-yellow-400" />
          <span class="text-sm text-gray-600">{{ provider.rating }}/5</span>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <div class="flex gap-2">
        <span
          v-for="type in provider.types"
          :key="type"
          class="px-3 py-1 rounded-full text-sm font-medium capitalize"
          :class="{
            'bg-yellow-100 text-yellow-800': type === 'solar',
            'bg-blue-100 text-blue-800': type === 'wind',
            'bg-cyan-100 text-cyan-800': type === 'hydro'
          }"
        >
          {{ type }}
        </span>
      </div>
    </div>

    <div class="mt-4 flex items-center gap-2">
      <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span class="text-sm text-gray-600">{{ provider.location }}</span>
    </div>

    <button
      @click="emit('viewPlans')"
      class="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
    >
      View Plans
    </button>
  </div>
</template>