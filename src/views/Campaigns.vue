<script setup lang="ts">
import { ref } from 'vue';

const campaigns = ref([
  {
    id: 1,
    title: 'Go Solar Challenge',
    description: 'Switch to solar power and track your carbon savings.',
    participants: 1234,
    progress: 75
  },
  {
    id: 2,
    title: 'Energy Saving Month',
    description: 'Reduce your energy consumption and win prizes.',
    participants: 2345,
    progress: 45
  }
]);
</script>

<template>
  <div class="space-y-8">
    <h1 class="text-3xl font-bold text-gray-900">Awareness Campaigns</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="campaign in campaigns"
        :key="campaign.id"
        class="bg-white rounded-lg shadow-md p-6"
      >
        <h3 class="text-xl font-semibold text-gray-900">{{ campaign.title }}</h3>
        <p class="mt-2 text-gray-600">{{ campaign.description }}</p>
        
        <div class="mt-4">
          <div class="flex justify-between text-sm text-gray-600">
            <span>Progress</span>
            <span>{{ campaign.progress }}%</span>
          </div>
          <div class="mt-2 h-2 bg-gray-200 rounded-full">
            <div
              class="h-full bg-primary rounded-full"
              :style="{ width: `${campaign.progress}%` }"
            ></div>
          </div>
        </div>

        <div class="mt-4 flex justify-between items-center">
          <span class="text-sm text-gray-600">{{ campaign.participants }} participants</span>
          <button class="btn-primary">Join Campaign</button>
        </div>
      </div>
    </div>
  </div>
</template>