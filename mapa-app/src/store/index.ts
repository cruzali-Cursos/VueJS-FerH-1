import { createStore } from 'vuex';

// Modulos customizados
import placesModule from './places';
import { PlacesState } from './places/state';

// Estado global de la aplicación
export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  places: PlacesState;
}

export default createStore<StateInterface>({
  modules: {
    places: placesModule,
  },
});
