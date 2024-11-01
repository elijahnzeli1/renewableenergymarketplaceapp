<script setup lang="ts">
import { ref } from 'vue';

const isLogin = ref(true);
const form = ref({
  email: '',
  password: '',
  name: '',
  confirmPassword: ''
});
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {{ isLogin ? 'Sign in to your account' : 'Create a new account' }}
        </h2>
      </div>
      
      <form class="mt-8 space-y-6">
        <div class="rounded-md shadow-sm space-y-4">
          <div v-if="!isLogin">
            <label class="sr-only">Name</label>
            <input
              v-model="form.name"
              type="text"
              required
              class="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
              placeholder="Full name"
            />
          </div>

          <div>
            <label class="sr-only">Email address</label>
            <input
              v-model="form.email"
              type="email"
              required
              class="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>

          <div>
            <label class="sr-only">Password</label>
            <input
              v-model="form.password"
              type="password"
              required
              class="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>

          <div v-if="!isLogin">
            <label class="sr-only">Confirm Password</label>
            <input
              v-model="form.confirmPassword"
              type="password"
              required
              class="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
              placeholder="Confirm password"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            {{ isLogin ? 'Sign in' : 'Sign up' }}
          </button>
        </div>
      </form>

      <div class="text-center">
        <button
          @click="isLogin = !isLogin"
          class="text-sm text-primary hover:text-primary-dark"
        >
          {{ isLogin ? 'Need an account? Sign up' : 'Already have an account? Sign in' }}
        </button>
      </div>
    </div>
  </div>
</template>