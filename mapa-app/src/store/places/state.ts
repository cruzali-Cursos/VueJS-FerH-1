export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number]; // long, latitude
}

function state(): PlacesState {
  return {
    isLoading: true,
    userLocation: undefined,
  };
}

export default state;
