<script setup lang="ts">
import { ref } from 'vue';

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  fullContent: string;
}

const selectedArticle = ref<Article | null>(null);
const isModalOpen = ref(false);

const articles = ref<Article[]>([
  {
    id: 1,
    title: 'Understanding Solar Energy',
    description: 'Learn the basics of solar power and how it can benefit your home.',
    image: '/images/solar.png',
    category: 'Solar',
    fullContent: `
      <h2>Understanding Solar Energy</h2>
      
      <p>Solar energy is a renewable power source that converts sunlight into electricity. Here's what you need to know:</p>
      
      <h3>How Solar Panels Work</h3>
      <ul>
        <li>Photovoltaic cells in solar panels capture sunlight</li>
        <li>The sunlight is converted into DC electricity</li>
        <li>An inverter converts DC to AC power for home use</li>
      </ul>

      <h3>Benefits of Solar Energy</h3>
      <ul>
        <li>Reduced electricity bills</li>
        <li>Lower carbon footprint</li>
        <li>Energy independence</li>
        <li>Increased home value</li>
      </ul>
    `
  },
  {
    id: 2,
    title: 'Wind Power 101',
    description: 'Discover how wind turbines generate clean electricity.',
    image: '/images/wind-energy.png',
    category: 'Wind',
    fullContent: `
      <h2>Wind Power 101</h2>
      
      <p>Wind power harnesses the natural power of wind to generate electricity. Here's a detailed look:</p>
      
      <h3>How Wind Turbines Work</h3>
      <ul>
        <li>Wind spins the turbine blades</li>
        <li>The blades turn a generator</li>
        <li>The generator produces electricity</li>
      </ul>

      <h3>Advantages of Wind Energy</h3>
      <ul>
        <li>Clean, renewable energy source</li>
        <li>Low operating costs</li>
        <li>Creates jobs in renewable sector</li>
        <li>Reduces dependence on fossil fuels</li>
      </ul>
    `
  }
]);

const openArticle = (article: Article) => {
  selectedArticle.value = article;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedArticle.value = null;
};
</script>

<template>
  <div class="space-y-8">
    <h1 class="text-3xl font-bold text-gray-900">Education Hub</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="article in articles"
        :key="article.id"
        class="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <img 
          :src="article.image" 
          :alt="article.title"
          class="h-48 w-full object-cover"
        />
        <div class="p-6">
          <span class="text-sm font-medium text-primary">{{ article.category }}</span>
          <h3 class="mt-2 text-xl font-semibold text-gray-900">{{ article.title }}</h3>
          <p class="mt-2 text-gray-600">{{ article.description }}</p>
          <button 
            @click="openArticle(article)"
            class="mt-4 text-primary font-medium hover:text-primary-dark transition-colors"
          >
            Read More →
          </button>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div 
      v-if="isModalOpen" 
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      @click="closeModal"
    >
      <div 
        class="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6"
        @click.stop
      >
        <div class="flex justify-between items-start mb-4">
          <h2 class="text-2xl font-bold text-gray-900">
            {{ selectedArticle?.title }}
          </h2>
          <button 
            @click="closeModal"
            class="text-gray-500 hover:text-gray-700"
          >
            <span class="sr-only">Close</span>
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div 
          class="prose prose-sm max-w-none"
          v-html="selectedArticle?.fullContent"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.prose h2 {
  @apply text-xl font-bold mb-4 mt-6;
}

.prose h3 {
  @apply text-lg font-semibold mb-2 mt-4;
}

.prose ul {
  @apply list-disc pl-5 mb-4;
}

.prose li {
  @apply mb-1;
}

.prose p {
  @apply mb-4;
}
</style>