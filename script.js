fetch("https://dummyjson.com/products")
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    return objectData.products;
  })
  .then((productData) => {
    let product = "";

    productData.map((values) => {
      product += `<h1>${values.title}</h1>`;
    });

    document.getElementById("table_body").innerHTML = product;
  });
