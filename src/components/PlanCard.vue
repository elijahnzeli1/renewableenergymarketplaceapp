<script setup lang="ts">
import type { EnergyPlan } from '../types/energy';
import { computed } from 'vue';

const props = defineProps<{
  plan: EnergyPlan;
}>();

const emit = defineEmits<{
  (e: 'select'): void;
  (e: 'compare'): void;
}>();

const energyTypeColor = computed(() => {
  switch (props.plan.type) {
    case 'solar':
      return 'bg-yellow-100 text-yellow-800';
    case 'wind':
      return 'bg-blue-100 text-blue-800';
    case 'hydro':
      return 'bg-cyan-100 text-cyan-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
});
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <div class="flex justify-between items-start mb-4">
      <div>
        <h3 class="text-xl font-semibold text-gray-900">{{ plan.name }}</h3>
        <p class="text-sm text-gray-500">{{ plan.provider }}</p>
      </div>
      <span :class="[energyTypeColor, 'px-3 py-1 rounded-full text-sm font-medium capitalize']">
        {{ plan.type }}
      </span>
    </div>
    
    <div class="space-y-3">
      <div class="flex justify-between">
        <span class="text-gray-600">Price</span>
        <span class="font-semibold">${{ plan.price }}/month</span>
      </div>
      <div class="flex justify-between">
        <span class="text-gray-600">Renewable</span>
        <span class="font-semibold">{{ plan.renewable_percentage }}%</span>
      </div>
      <div class="flex justify-between">
        <span class="text-gray-600">Contract Length</span>
        <span class="font-semibold">{{ plan.contract_length }} months</span>
      </div>
    </div>

    <p class="mt-4 text-gray-600 text-sm">{{ plan.description }}</p>

    <div class="mt-6 flex gap-4">
      <button
        @click="emit('select')"
        class="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
      >
        Select Plan
      </button>
      <button
        @click="emit('compare')"
        class="flex-1 border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors"
      >
        Compare
      </button>
    </div>
  </div>
</template>