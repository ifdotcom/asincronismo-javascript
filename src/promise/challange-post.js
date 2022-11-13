import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1";

//# CREATE 
function postdata(urlApi, data) {
  const response = fetch(urlApi, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

const data = {
  title: "Phone",
  price: 5000,
  description: "Phone215",
  categoryId: 2,
  images: ["https://placeimg.com/640/480/any"],
};

postdata(`${API}/products`, data)
  .then((response) => response.json())
  .then((data) => console.log(data));

//# UPDATE
// function postdata(urlApi, data) {
//   const response = fetch(urlApi, {
//     method: "PUT",
//     mode: "cors",
//     credentials: "same-origin",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   return response;
// }
// const idProduct = 201;
// const data = {
//   description: "Phone",
// };

// postdata(`${API}/products/${idProduct}`, data)
//   .then((response) => response.json())
//   .then((data) => console.log(data));
