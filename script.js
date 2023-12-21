fetch("https://dummyjson.com/products")
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    return objectData.products;
  })
  .then((productData) => {
    let product = "";

    productData.map((values, key) => {
      product += `
      <tr>
      <td>${key + 1}</td>
      <td>${values.title}</td>
      <td>${values.description}</td>
      <td>${values.brand}</td>
      <td>${values.price}</td>
      <td><img src="${values.thumbnail}" /></td>
    </tr>`;
    });

    document.getElementById("table_body").innerHTML = product;
  });
