const person = {
    lastName: 'Alexx',
    age: 22,
    address: {
        city:'ecatepec',
        cp: 55023,
        lat: 14.55525,
        long: 45.55221
    }
} // as const;

const person2  = person;
person2.lastName = 'Leal';
//const person2 = structuredClone(person);

console.log({person});

console.log({person2});

