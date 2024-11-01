<script setup lang="ts">
import { ref } from 'vue';
import PlanCard from '../components/PlanCard.vue';
import ProviderCard from '../components/ProviderCard.vue';
import type { EnergyPlan, Provider } from '../types/energy';

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
  }
]);

const providers = ref<Provider[]>([
  {
    id: '1',
    name: 'GreenEnergy Co',
    logo: '/logos/green-energy.svg',
    types: ['solar', 'wind'],
    rating: 4.8,
    location: 'California, USA'
  },
  {
    id: '2',
    name: 'WindTech Energy',
    logo: '/logos/windtech.svg',
    types: ['wind'],
    rating: 4.5,
    location: 'Texas, USA'
  }
]);

const energyTypes = ['solar', 'wind', 'hydro'];
const activeType = ref('solar');
</script>

<template>
  <div class="space-y-8">
    <section>
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Featured Providers</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProviderCard
          v-for="provider in providers"
          :key="provider.id"
          :provider="provider"
        />
      </div>
    </section>

    <section>
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-gray-900">Energy Plans</h2>
        <div class="flex gap-2">
          <button
            v-for="type in energyTypes"
            :key="type"
            @click="activeType = type"
            :class="[
              'px-4 py-2 rounded-lg text-sm font-medium capitalize',
              activeType === type
                ? 'bg-primary text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            ]"
          >
            {{ type }}
          </button>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PlanCard
          v-for="plan in plans"
          :key="plan.id"
          :plan="plan"
        />
      </div>
    </section>
  </div>
</template>