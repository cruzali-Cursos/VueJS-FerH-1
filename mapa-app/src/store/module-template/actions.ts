import { ActionTree } from 'vuex';
import { ExampleStateInterface } from './state';
import { StateInterface } from '../index';

// StateInterface es el state global de la aplicación
const actions: ActionTree<ExampleStateInterface, StateInterface> = {
  someAction(/*{ commit }, payload  */) {
    // a line to prevent linter errors
  },
};

export default actions;
