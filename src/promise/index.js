//# LAS PROMESAS TIENEN 3 ESTADOS:
//# PENDIENTE
//# COMPLETADO
//# RECHAZADO

const promise = new Promise((resolve, reject) => {
  resolve("Good");
});

const cows =100;

const countCows = new Promise((resolve, reject) => {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm`);
  } else {
    reject("There isn´t cows on the farm");
  }
});

//! ejecutar la promesa:
countCows.then((result) => console.log(result))
.catch((err)=>console.log(err))
.finally(()=> console.log("Finally"))
