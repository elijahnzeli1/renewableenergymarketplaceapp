<script setup lang="ts">
import { ref } from 'vue';
import type { Provider } from '../types/energy';
import { StarIcon } from '@heroicons/vue/20/solid';

const props = defineProps<{
  provider: Provider;
}>();

const emit = defineEmits<{
  (e: 'viewPlans'): void;
}>();

const isPlansModalOpen = ref(false);
const selectedPlan = ref<string | null>(null);
const phoneNumber = ref('');
const isProcessing = ref(false);

const plans = [
  {
    id: 'basic',
    name: 'Basic Plan',
    price: 1999,
    features: [
      'Up to 200kWh monthly',
      '24/7 customer support',
      'Basic monitoring tools'
    ]
  },
  {
    id: 'standard',
    name: 'Standard Plan',
    price: 3999,
    features: [
      'Up to 400kWh monthly',
      'Priority customer support',
      'Advanced monitoring tools',
      'Energy optimization tips'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    price: 5999,
    features: [
      'Unlimited kWh',
      'VIP customer support',
      'Real-time monitoring',
      'Energy optimization AI',
      'Priority maintenance'
    ]
  }
];

const initiatePayment = async () => {
  if (!selectedPlan.value || !phoneNumber.value) {
    alert('Please select a plan and enter your phone number');
    return;
  }

  isProcessing.value = true;
  try {
    // Simulate M-Pesa API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert('M-Pesa payment request sent to your phone. Please complete the payment.');
    isProcessing.value = false;
    // You would typically make an actual API call to your backend here
  } catch (error) {
    alert('Payment initiation failed. Please try again.');
    isProcessing.value = false;
  }
};
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <div class="flex items-center gap-4">
      <div class="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-lg">
        <img :src="provider.logo" :alt="provider.name" class="w-12 h-12 object-contain" />
      </div>
      <div>
        <h3 class="text-xl font-semibold text-gray-900">{{ provider.name }}</h3>
        <div class="flex items-center gap-1">
          <StarIcon class="w-5 h-5 text-yellow-400" />
          <span class="text-sm text-gray-600">{{ provider.rating }}/5</span>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <div class="flex gap-2">
        <span
          v-for="type in provider.types"
          :key="type"
          class="px-3 py-1 rounded-full text-sm font-medium capitalize"
          :class="{
            'bg-yellow-100 text-yellow-800': type === 'solar',
            'bg-blue-100 text-blue-800': type === 'wind',
            'bg-cyan-100 text-cyan-800': type === 'hydro'
          }"
        >
          {{ type }}
        </span>
      </div>
    </div>

    <div class="mt-4 flex items-center gap-2">
      <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span class="text-sm text-gray-600">{{ provider.location }}</span>
    </div>

    <button
      @click="isPlansModalOpen = true"
      class="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
    >
      View Plans
    </button>

    <div v-if="isPlansModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6" @click.stop>
        <div class="flex justify-between items-start mb-6">
          <h2 class="text-2xl font-bold text-gray-900">{{ provider.name }} Plans</h2>
          <button @click="isPlansModalOpen = false" class="text-gray-500 hover:text-gray-700">
            <span class="sr-only">Close</span>
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="plan in plans" :key="plan.id" 
               class="border rounded-lg p-6 hover:shadow-lg transition-shadow"
               :class="{ 'border-blue-500 ring-2 ring-blue-500': selectedPlan === plan.id }">
            <h3 class="text-xl font-semibold mb-2">{{ plan.name }}</h3>
            <p class="text-3xl font-bold mb-4">
              KES {{ plan.price.toLocaleString() }}
              <span class="text-sm text-gray-500 font-normal">/month</span>
            </p>
            <ul class="space-y-2 mb-6">
              <li v-for="feature in plan.features" :key="feature" class="flex items-center gap-2">
                <svg class="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                {{ feature }}
              </li>
            </ul>
            <button
              @click="selectedPlan = plan.id"
              class="w-full py-2 px-4 rounded-lg"
              :class="selectedPlan === plan.id ? 
                'bg-blue-600 text-white hover:bg-blue-700' : 
                'border border-blue-600 text-blue-600 hover:bg-blue-50'"
            >
              Select Plan
            </button>
          </div>
        </div>

        <div v-if="selectedPlan" class="mt-8 border-t pt-6">
          <h3 class="text-xl font-semibold mb-4">Complete Payment with M-Pesa</h3>
          <div class="max-w-md">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              M-Pesa Phone Number
            </label>
            <input
              v-model="phoneNumber"
              type="tel"
              placeholder="254700000000"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              @click="initiatePayment"
              :disabled="isProcessing"
              class="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isProcessing">Processing...</span>
              <span v-else>Pay with M-Pesa</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>