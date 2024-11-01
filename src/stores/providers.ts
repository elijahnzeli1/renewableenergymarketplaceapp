import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import type { Provider } from '../types/energy';

export const useProvidersStore = defineStore('providers', () => {
  const providers = ref<Provider[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchProviders = async () => {
    try {
      loading.value = true;
      const response = await axios.get('http://localhost:5000/api/providers');
      providers.value = response.data;
    } catch (err) {
      error.value = 'Failed to fetch providers';
      console.error('Error fetching providers:', err);
    } finally {
      loading.value = false;
    }
  };

  const getProvider = async (id: string) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/providers/${id}`);
      return response.data;
    } catch (err) {
      error.value = 'Failed to fetch provider';
      console.error('Error fetching provider:', err);
      return null;
    }
  };

  return {
    providers,
    loading,
    error,
    fetchProviders,
    getProvider
  };
});