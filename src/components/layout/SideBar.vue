<script setup lang="ts">
import { useRoute } from 'vue-router';
import {
  HomeIcon,
  UserGroupIcon,
  LightBulbIcon,
  ChartBarIcon,
  QuestionMarkCircleIcon,
  BuildingOfficeIcon,
  DocumentChartBarIcon,
  AcademicCapIcon,
  MegaphoneIcon
} from '@heroicons/vue/24/outline';

const route = useRoute();

const navigation = [
  { name: 'Home', icon: HomeIcon, path: '/' },
  { name: 'Providers', icon: BuildingOfficeIcon, path: '/providers' },
  { name: 'Plans', icon: DocumentChartBarIcon, path: '/plans' },
  { name: 'Education Hub', icon: AcademicCapIcon, path: '/education' },
  { name: 'Campaigns', icon: MegaphoneIcon, path: '/campaigns' },
  { name: 'Community', icon: UserGroupIcon, path: '/community' },
  { name: 'Insights', icon: ChartBarIcon, path: '/insights' },
  { name: 'Support', icon: QuestionMarkCircleIcon, path: '/support' }
];

const isActive = (path: string) => route.path === path;
</script>

<template>
  <div class="w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-200">
    <div class="p-4">
      <div class="flex items-center gap-2 mb-8">
        <LightBulbIcon class="w-8 h-8 text-primary" />
        <span class="text-xl font-bold text-gray-900">EcoEnergy</span>
      </div>

      <nav class="space-y-1">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.path"
          :class="[
            isActive(item.path)
              ? 'bg-primary text-white'
              : 'text-gray-600 hover:bg-gray-50',
            'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
          ]"
        >
          <component
            :is="item.icon"
            :class="[
              isActive(item.path) ? 'text-white' : 'text-gray-400 group-hover:text-gray-500',
              'mr-3 flex-shrink-0 h-6 w-6'
            ]"
            aria-hidden="true"
          />
          {{ item.name }}
        </router-link>
      </nav>
    </div>
  </div>
</template>