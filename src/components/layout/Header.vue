<script setup lang="ts">
import { ref } from 'vue';
import { MagnifyingGlassIcon, UserCircleIcon, BellIcon } from '@heroicons/vue/24/outline';

const searchQuery = ref('');
</script>

<template>
  <header class="h-16 bg-white border-b border-gray-200 fixed top-0 right-0 left-64 z-10">
    <div class="h-full px-4 flex items-center justify-between">
      <div class="w-96">
        <div class="relative">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search..."
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          />
          <MagnifyingGlassIcon class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      <div class="flex items-center gap-4">
        <button class="p-2 text-gray-400 hover:text-gray-500">
          <BellIcon class="w-6 h-6" />
        </button>
        <button class="p-2 text-gray-400 hover:text-gray-500">
          <UserCircleIcon class="w-6 h-6" />
        </button>
      </div>
    </div>
  </header>
</template>