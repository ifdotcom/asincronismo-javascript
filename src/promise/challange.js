//# FETCH YA ES UNA PROMESA, NO ES NECESARIO INSTANCIAR

import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1";

const fetchData = (urlApi) => fetch(urlApi);

// fetchData(`${API}/products`)
//   .then((response) => response.json())
//   .then((products) => console.log(products))
//   .then(() => console.log("aprendiendo fetch"))
//   .catch((err) => confirm.log(err));

fetchData(`${API}/products`)
  .then((response) => response.json())
  .then((products) => {
    // console.log(product);
    return fetchData(`${API}/products/${products[0].id}`);
  })
  .then((response) => response.json())
  .then((product) => {
    console.log(product);
    return fetchData(`${API}/categories/${product.category.id}`);
  })
  .then((response) => response.json())
  .then((category) => console.log(category.name))
  .catch((err) => console.log(err))
  .finally(() => console.log("Fin del Fetch"));
