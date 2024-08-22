interface Hero {
    name: string;
    age: number;
    codeName: string;
    power?: string;
}

export const person: Hero = {
    name: 'tONY',
    age: 45,
    codeName: 'ironman',
    
}

const { age,name,power = 'No tiene poder' } = person;


console.log({age,name,power});