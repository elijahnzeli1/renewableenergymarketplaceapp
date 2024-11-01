<script setup lang="ts">
import { ref } from 'vue';
import type { EnergyPlan } from '../types/energy';
import PlanCard from '../components/PlanCard.vue';

const plans = ref<EnergyPlan[]>([
  {
    id: '1',
    name: 'Solar Plus',
    provider: 'GreenEnergy Co',
    type: 'solar',
    price: 89.99,
    renewable_percentage: 100,
    contract_length: 12,
    description: 'Pure solar energy plan with zero carbon footprint.'
  },
  {
    id: '2',
    name: 'Wind Power Basic',
    provider: 'WindTech Energy',
    type: 'wind',
    price: 79.99,
    renewable_percentage: 90,
    contract_length: 24,
    description: 'Affordable wind energy plan for conscious consumers.'
  },
  {
    id: '3',
    name: 'Hydro Essential',
    provider: 'HydroFlow Power',
    type: 'hydro',
    price: 69.99,
    renewable_percentage: 95,
    contract_length: 18,
    description: 'Clean hydroelectric power for your home.'
  }
]);

const selectedPlans = ref<string[]>([]);
</script>

<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold text-gray-900">Energy Plans</h1>
      
      <button
        v-if="selectedPlans.length > 1"
        class="btn-primary"
      >
        Compare Selected Plans
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <PlanCard
        v-for="plan in plans"
        :key="plan.id"
        :plan="plan"
        @select="() => selectedPlans.push(plan.id)"
        @compare="() => selectedPlans.push(plan.id)"
      />
    </div>
  </div>
</template>