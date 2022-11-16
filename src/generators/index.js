function* gen() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

const g = gen();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterate(array) {
    for (const i of array) {
        yield i;
    }
}

const it = iterate(["fer", "hola","dany"])
console.log(it.next().value);
console.log(it.next().value);