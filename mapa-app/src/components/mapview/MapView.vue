<script lang="ts" src="./MapView.ts" />

<template>
  <div v-if="!isUserLocationReady" class="loading-map d-flex justify-content-center align-items-center">
    <div class="text-center">
      <h3>Espere...</h3>
      <span>Localizando...</span>
    </div>
  </div>

  <!-- Siempre debe existir el div, aunque no se muestre porque se le hace referencia -->
  <div v-show="isUserLocationReady" class="mapa-container" ref="mapElement" />

</template>


<style scoped>
.mapa-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #F00;
}

.loading-map {
  background-color: rgba(0, 0, 0, 0.8);
  color: #FFF;
  height: 100vh;
  left: 0px;
  position: fixed;
  top: 0px;
  width: 100vw;
  z-index: 999;
}
</style>