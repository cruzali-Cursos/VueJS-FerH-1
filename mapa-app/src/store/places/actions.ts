import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';

// StateInterface es el state global de la aplicación
const actions: ActionTree<PlacesState, StateInterface> = {
  getInitialLocation({ commit }) {
    // a line to prevent linter errors
    navigator.geolocation.getCurrentPosition(
      ({ coords }) =>
        commit('setLngLat', { lng: coords.longitude, lat: coords.latitude }),
      (err) => {
        console.log(err);
        throw new Error('No se pudo obtener la geolocalización');
      }
    );
  },
};

export default actions;
