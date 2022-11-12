function search(dani, callback) {
  setTimeout(() => {
    callback("Fernanda Vidal");
  }, 2000);
}

search("123456", (name) => {
  console.log(name);
});

//# ----------------------------------------------

function sum(a, b) {
  return a + b;
}

function calc(a, b, callback) {
  return callback(a, b);
}

console.log(calc(2, 3, sum));
//#  ----------------------------------------------- 

function suma(a, b, callback) {
  const result = a + b;
  callback(result);
}

suma(2, 4, (result) => {
  console.log(result);
});


setTimeout(() => {
    console.log("Hola")
}, 5000);

function grettin(name){
    console.log(`Hola ${name}`)
}

setTimeout(() => {
    grettin("Fernanda")
}, 2000);

// o
/* 
setTimeout(grettin, 2000, "Fernanda")

*/ 