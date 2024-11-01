<script setup lang="ts">
import { ref } from 'vue';

const discussions = ref([
  {
    id: 1,
    title: 'Tips for reducing energy consumption',
    author: 'EcoWarrior',
    replies: 23,
    category: 'Energy Saving'
  },
  {
    id: 2,
    title: 'Solar panel maintenance guide',
    author: 'SolarPro',
    replies: 15,
    category: 'Solar'
  }
]);
</script>

<template>
  <div class="space-y-8">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold text-gray-900">Community</h1>
      <button class="btn-primary">Start Discussion</button>
    </div>

    <div class="bg-white rounded-lg shadow-md">
      <div class="px-6 py-4 border-b border-gray-200">
        <h2 class="text-lg font-semibold text-gray-900">Recent Discussions</h2>
      </div>
      
      <div class="divide-y divide-gray-200">
        <div
          v-for="discussion in discussions"
          :key="discussion.id"
          class="p-6 hover:bg-gray-50"
        >
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-lg font-medium text-gray-900">{{ discussion.title }}</h3>
              <p class="mt-1 text-sm text-gray-600">
                Started by {{ discussion.author }}
              </p>
            </div>
            <span
              class="px-3 py-1 rounded-full text-sm font-medium"
              :class="{
                'bg-green-100 text-green-800': discussion.category === 'Energy Saving',
                'bg-yellow-100 text-yellow-800': discussion.category === 'Solar'
              }"
            >
              {{ discussion.category }}
            </span>
          </div>
          
          <div class="mt-4 flex items-center gap-4">
            <span class="text-sm text-gray-600">{{ discussion.replies }} replies</span>
            <button class="text-primary text-sm font-medium hover:text-primary-dark">
              Join Discussion →
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>