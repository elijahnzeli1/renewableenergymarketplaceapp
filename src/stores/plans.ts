import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import type { EnergyPlan } from '../types/energy';

export const usePlansStore = defineStore('plans', () => {
  const plans = ref<EnergyPlan[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchPlans = async () => {
    try {
      loading.value = true;
      const response = await axios.get('http://localhost:5000/api/plans');
      plans.value = response.data;
    } catch (err) {
      error.value = 'Failed to fetch plans';
      console.error('Error fetching plans:', err);
    } finally {
      loading.value = false;
    }
  };

  const getPlan = async (id: string) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/plans/${id}`);
      return response.data;
    } catch (err) {
      error.value = 'Failed to fetch plan';
      console.error('Error fetching plan:', err);
      return null;
    }
  };

  return {
    plans,
    loading,
    error,
    fetchPlans,
    getPlan
  };
});