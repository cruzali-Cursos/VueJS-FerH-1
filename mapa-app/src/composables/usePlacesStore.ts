import { useStore } from 'vuex';
import { StateInterface } from '@/store/index';
import { computed, onMounted } from 'vue';

export const usePlacesStore = () => {
  const store = useStore<StateInterface>();

  onMounted(() => {
    if (!store.getters['places/isUserLocationReady']) {
      store.dispatch('places/getInitialLocation');
    }
  });

  return {
    // State
    isLoading: computed(() => store.state.places.isLoading),
    userLocation: computed(() => store.state.places.userLocation),

    // Getters
    isUserLocationReady: computed<boolean>(
      () => store.getters['places/isUserLocationReady']
    ),

    // Actions

    // Mutations
  };
};
