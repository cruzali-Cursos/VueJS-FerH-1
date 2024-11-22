const miArray1 = [1,2,3,4,5];

miArray1.push(6);

console.log({miArray1});

const miArray2: (number|string)[] = [...miArray1];
miArray2.push('7');

console.log(`${miArray1}`, `${miArray2}`);

export {};