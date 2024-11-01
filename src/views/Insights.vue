<script setup lang="ts">
import { ref } from 'vue';

const energyUsage = ref([
  { month: 'Jan', usage: 450 },
  { month: 'Feb', usage: 420 },
  { month: 'Mar', usage: 380 },
  { month: 'Apr', usage: 350 }
]);

const goals = ref([
  {
    id: 1,
    title: 'Reduce Energy Usage',
    target: 300,
    current: 350,
    unit: 'kWh'
  },
  {
    id: 2,
    title: 'Carbon Offset',
    target: 1000,
    current: 750,
    unit: 'kg'
  }
]);
</script>

<template>
  <div class="space-y-8">
    <h1 class="text-3xl font-bold text-gray-900">Energy Insights</h1>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold text-gray-900">Energy Usage</h2>
        <div class="mt-4 h-64 bg-gray-50 rounded-lg"></div>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold text-gray-900">Goals</h2>
        <div class="mt-4 space-y-4">
          <div
            v-for="goal in goals"
            :key="goal.id"
            class="space-y-2"
          >
            <div class="flex justify-between">
              <span class="font-medium text-gray-900">{{ goal.title }}</span>
              <span class="text-gray-600">{{ goal.current }}/{{ goal.target }} {{ goal.unit }}</span>
            </div>
            <div class="h-2 bg-gray-200 rounded-full">
              <div
                class="h-full bg-primary rounded-full"
                :style="{ width: `${(goal.current / goal.target) * 100}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>