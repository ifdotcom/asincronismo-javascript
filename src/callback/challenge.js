const XMLHttpRequest = require("XMLHttpRequest").XMLHttpRequest;
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi, callback) {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", urlApi, true);
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let json = JSON.parse(xhr.responseText);
        callback(null, json);
        // Ese null es el espacio para los errores, pero no hay
      } else {
        const error = new Error("Error" + urlApi);
        callback(error, null);
        //Ese null es el espacio para los datos, pero no hay.
      }
    } 
  });
  xhr.send();
}

fetchData(`${API}/products`, (err1, data1) => {
  if (err1) return console.error(err1);
//   console.log(data1);
  fetchData(`${API}/products/${data1[0].id}`, (err2, data2) => {
    if (err2) return console.error(err2);
    // console.log(data2);
    fetchData(`${API}/categories/${data2?.category?.id}`, (err3, data3) => {
      if (err3) return console.error(err3);
      console.log(data1[0]);
      console.log(data2.title);
      console.log(data3.name);
    });
  });
});
