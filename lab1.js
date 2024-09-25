const a = 1.2;
const inc = (num) => {
    return ++num
}
const b = inc(a);
console.dir({a, b});


const object = {
    n: 14
}
const inc2 = (obj) => {++obj.n};
inc2(object);
console.dir(object);


const myArray = [true, 'li', 123, 43, 1, false, false, 'so', 15, 'hi'];
/*const objectCol = {
    number: 0,
    boolean: 0,
    string: 0
}
for (keys of myArray){
    objectCol[typeof keys] += 1 ;
}
console.dir(objectCol);
*/

const coll = { };
for(const el of myArray){
    if(Object.getOwnPropertyNames(coll).includes(typeof el)){
        coll[typeof el] += 1;
    }else{
        coll[typeof el] = 1;
    }
}

console.dir(coll)