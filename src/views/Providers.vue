<script setup lang="ts">
import { ref } from 'vue';
import type { Provider } from '../types/energy';
import ProviderCard from '../components/ProviderCard.vue';

const providers = ref<Provider[]>([
  {
    id: '1',
    name: 'SolarTech Africa',
    logo: '/logos/solartech.svg',
    types: ['solar', 'wind'], // Changed storage to wind to match allowed types
    rating: 4.8,
    location: 'Kenya'
  },
  {
    id: '2',
    name: 'WindPower East',
    logo: '/logos/windpower.svg',
    types: ['wind'],
    rating: 4.5,
    location: 'Tanzania'
  },
  {
    id: '3',
    name: 'HydroFlow Nigeria',
    logo: '/logos/hydroflow.svg',
    types: ['hydro'],
    rating: 4.7,
    location: 'Nigeria'
  },
  {
    id: '4',
    name: 'GeoTherm Ethiopia',
    logo: '/logos/geotherm.svg',
    types: ['solar', 'wind'], // Changed from geothermal to match allowed types
    rating: 4.6,
    location: 'Ethiopia'
  },
  {
    id: '5',
    name: 'BioPower Ghana',
    logo: '/logos/biopower.svg',
    types: ['solar', 'wind'], // Changed to valid energy types
    rating: 4.4,
    location: 'Ghana'
  },
  {
    id: '6',
    name: 'SunGrid Morocco',
    logo: '/logos/sungrid.svg',
    types: ['solar'],
    rating: 4.9,
    location: 'Morocco'
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
          <option value="solar">Solar Power</option>
          <option value="wind">Wind Power</option>
          <option value="hydro">Hydroelectric</option>
          <option value="geothermal">Geothermal</option>
          <option value="biomass">Biomass</option>
          <option value="storage">Energy Storage</option>
          <option value="hybrid">Hybrid Systems</option>
          <option value="microgrid">Microgrids</option>
        </select>

        <select
          v-model="filters.location"
          class="rounded-lg border-gray-300 text-sm"
        >
          <option value="all">All Locations</option>
          <!-- East Africa -->
          <option value="kenya">Kenya</option>
          <option value="tanzania">Tanzania</option>
          <option value="uganda">Uganda</option>
          <option value="rwanda">Rwanda</option>
          <option value="ethiopia">Ethiopia</option>
          
          <!-- West Africa -->
          <option value="nigeria">Nigeria</option>
          <option value="ghana">Ghana</option>
          <option value="senegal">Senegal</option>
          <option value="ivory_coast">Ivory Coast</option>
          
          <!-- North Africa -->
          <option value="morocco">Morocco</option>
          <option value="egypt">Egypt</option>
          <option value="tunisia">Tunisia</option>
          
          <!-- Southern Africa -->
          <option value="south_africa">South Africa</option>
          <option value="namibia">Namibia</option>
          <option value="botswana">Botswana</option>
          <option value="zambia">Zambia</option>
          
          <!-- Central Africa -->
          <option value="cameroon">Cameroon</option>
          <option value="congo">DR Congo</option>
          <option value="gabon">Gabon</option>
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