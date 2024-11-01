<script setup lang="ts">
import { ref } from 'vue';

const faqs = ref([
  {
    question: 'How do I switch energy providers?',
    answer: 'Switching providers is easy! Simply select a new plan and we\'ll handle the transition process.'
  },
  {
    question: 'What are the benefits of renewable energy?',
    answer: 'Renewable energy helps reduce carbon emissions, can lower energy costs, and supports sustainable development.'
  }
]);

const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});
</script>

<template>
  <div class="space-y-8">
    <h1 class="text-3xl font-bold text-gray-900">Support Center</h1>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="space-y-6">
        <h2 class="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        
        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-white rounded-lg shadow-md p-6"
          >
            <h3 class="text-lg font-medium text-gray-900">{{ faq.question }}</h3>
            <p class="mt-2 text-gray-600">{{ faq.answer }}</p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold text-gray-900 mb-6">Contact Support</h2>
        
        <form class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Name</label>
            <input
              v-model="contactForm.name"
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input
              v-model="contactForm.email"
              type="email"
              class="mt-1 block w-full rounded-md border-gray-300"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Subject</label>
            <input
              v-model="contactForm.subject"
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              v-model="contactForm.message"
              rows="4"
              class="mt-1 block w-full rounded-md border-gray-300"
            ></textarea>
          </div>

          <button type="submit" class="btn-primary w-full">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</template>