<template>

  <MapView />

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePlacesStore } from '@/composables/usePlacesStore';

import MapView from '../components/mapview/MapView.vue';


/* eslint-disable vue/multi-word-component-names */
export default defineComponent({
  name: 'Home',
  components: {
    MapView
  },
  setup() {
    usePlacesStore();
  },
});
</script>
