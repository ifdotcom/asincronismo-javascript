//#  async -> es una delcaración que define una función asíncrona que devuelve un objeto

const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Async"), 2000)
      : reject(new Error("Error :c"));
  });
};

const anotherFn = async () => {
  const something = await fnAsync();
  console.log(something)

//   El console.log espera a que se haya resuelto fnAsyncF
  console.log("Hello!");
};


console.log("Before");
anotherFn();
console.log("After");