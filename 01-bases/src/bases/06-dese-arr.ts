


const character = ['goku','vegueta','trunks','goten'];

const [ g,v,t,g2,g3 = 'yamoshi'] = character; "Yamoshi:Unknown Word"

const returnArray = () => {
    return [123, 'ABC'] as const;
}
const [number, letter] = returnArray();

