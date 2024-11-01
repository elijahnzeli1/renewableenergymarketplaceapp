<script setup lang="ts">
import Sidebar from './SideBar.vue';
import Header from './Header.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Sidebar />
    <div class="ml-64">
      <Header />
      <main class="pt-16 p-8">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>