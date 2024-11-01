<script setup lang="ts">
import { ref } from 'vue';

const articles = ref([
  {
    id: 1,
    title: 'Understanding Solar Energy',
    description: 'Learn the basics of solar power and how it can benefit your home.',
    image: '/images/solar-basics.jpg',
    category: 'Solar'
  },
  {
    id: 2,
    title: 'Wind Power 101',
    description: 'Discover how wind turbines generate clean electricity.',
    image: '/images/wind-basics.jpg',
    category: 'Wind'
  }
]);
</script>

<template>
  <div class="space-y-8">
    <h1 class="text-3xl font-bold text-gray-900">Education Hub</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="article in articles"
        :key="article.id"
        class="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <div class="h-48 bg-gray-200"></div>
        <div class="p-6">
          <span class="text-sm font-medium text-primary">{{ article.category }}</span>
          <h3 class="mt-2 text-xl font-semibold text-gray-900">{{ article.title }}</h3>
          <p class="mt-2 text-gray-600">{{ article.description }}</p>
          <button class="mt-4 text-primary font-medium hover:text-primary-dark">
            Read More →
          </button>
        </div>
      </div>
    </div>
  </div>
</template>