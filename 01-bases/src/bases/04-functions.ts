function greetPerson(name: any) {

  return `Hola, ${name}`;
}


const saludar = (name: string) => {
  return `Como estas ${name}`;
}


const adios = (name: string) => `Adios ${name}`;

console.log(greetPerson('Ali'));

console.log(saludar('Ali'));

console.log(adios('Ali'));

const getUser = () => {
  return {
    uid: 'ABC123',
    username: 'Ali',
  }
}

console.log(getUser());

const getUserDos = ( uid: string ) => ({uid: uid, username: 'Ali'});

console.log(getUserDos('80802'));

const heros = [
  // Trailling comma
  {
    id: 1,
    name: 'Batman',
  },
  {
    id: 2,
    name: 'Superman',
    power: 'Fuerza',
  },
];

const hero = heros.find( (h) => h.id === 1 );

// null check
console.log(hero?.power?.toUpperCase());

