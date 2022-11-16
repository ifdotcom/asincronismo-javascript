import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

const fetchData = async (urlAPI) => {
  const response = await fetch(urlAPI);

  const data = await response.json();
  return data;
};

async function* peticiones(urlAPI) {
  try {
    const products = await fetchData(`${urlAPI}/products`);
    yield console.log(products);

    const product = await fetchData(`${urlAPI}/products/${products[0].id}`);
    yield console.log(product.title);
  } catch (error) {
    console.log(error);
  }
}

const g = peticiones(API);

g.next().value;
g.next().value;
g.next().value;
