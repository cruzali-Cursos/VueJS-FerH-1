export const person = {
  // Con export lo podemos usar en otros archivos como modulo

  lastName: "ali",
  age: 36,
  address: {
    city: 'Mexico',
    zip: 55454,
    lat: 14.235,
    lng: 14.235,
  },
  // guardar: function () {
  //   console.log("guardardando", );
  // }

}


person.age = 40;


console.log({person});


const person2 = structuredClone(person);
person2.address.city = 'Puebla';

console.log({person2});

const person3 = {...person};
person3.address.city = 'Irapuato';

console.log({person3});