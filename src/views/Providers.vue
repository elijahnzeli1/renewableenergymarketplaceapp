<script setup lang="ts">
import { ref } from 'vue';
import type { Provider } from '../types/energy';
import ProviderCard from '../components/ProviderCard.vue';

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
  },
  {
    id: '3',
    name: 'HydroFlow Power',
    logo: '/logos/hydroflow.svg',
    types: ['hydro'],
    rating: 4.7,
    location: 'Washington, USA'
  }
]);

const filters = ref({
  type: 'all',
  location: 'all'
});
</script>

<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold text-gray-900">Energy Providers</h1>
      
      <div class="flex gap-4">
        <select
          v-model="filters.type"
          class="rounded-lg border-gray-300 text-sm"
        >
          <option value="all">All Types</option>
          <option value="solar">Solar</option>
          <option value="wind">Wind</option>
          <option value="hydro">Hydro</option>
        </select>

        <select
          v-model="filters.location"
          class="rounded-lg border-gray-300 text-sm"
        >
          <option value="all">All Locations</option>
          <option value="california">California</option>
          <option value="texas">Texas</option>
          <option value="washington">Washington</option>
        </select>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProviderCard
        v-for="provider in providers"
        :key="provider.id"
        :provider="provider"
        @view-plans="() => {}"
      />
    </div>
  </div>
</template>