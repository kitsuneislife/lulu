const socket = io();

socket.on("updateProductRaw", (data) => {
  const productListDiv = document.getElementById("_product_list");
  productListDiv.innerHTML = '';

  data.forEach((product) => {
    const productContainer = document.createElement("div");
    productContainer.classList.add("_product_container");

    const titleElement = document.createElement("span");
    titleElement.classList.add("_product_title");
    titleElement.textContent = product.name;

    const descriptionElement = document.createElement("row");
    const displayElement = document.createElement("row");
    const categoryElement = document.createElement("row");
    const brandElement = document.createElement("row");
    const imageElement = document.createElement("row");
    const priceElement = document.createElement("row");
    const stockElement = document.createElement("row");

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.classList.add("_product_img");

    descriptionElement.innerHTML = `<b>Descrição:</b> ${product.description}`;
    displayElement.innerHTML = `<b>Display/Coleção:</b> ${product.display}`;
    categoryElement.innerHTML = `<b>Categoria:</b> ${product.category}`;
    brandElement.innerHTML = `<b>Marca:</b> ${product.brand}`;
    imageElement.innerHTML = `<b>Imagem:</b> ${product.image}`;
    priceElement.innerHTML = `<b>Preço:</b> ${product.price}`;
    stockElement.innerHTML = `<b>Estoque:</b> ${product.stock}`;

    const buttonsElement = document.createElement("row");

    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    editButton.addEventListener("click", () => {
      window.location.href = `?page=edit&method=${product._id}`
    });

    deleteButton.addEventListener("click", () => {
      let deleteUrl = `https://lulu-api.kitsuneislife.repl.co/delete?id=${product._id}`
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      }
      fetch(deleteUrl, options);
    });

    editButton.innerHTML = "Modificar";
    deleteButton.innerHTML = "Deletar";

    buttonsElement.classList.add("_product_buttons_container");
    editButton.classList.add("_product_button_rearrange");
    deleteButton.classList.add("_product_button_rearrange");

    buttonsElement.appendChild(editButton);
    buttonsElement.appendChild(deleteButton);

    productContainer.appendChild(titleElement);
    productContainer.appendChild(productImage);
    productContainer.appendChild(descriptionElement);
    productContainer.appendChild(displayElement);
    productContainer.appendChild(categoryElement);
    productContainer.appendChild(brandElement);
    productContainer.appendChild(imageElement);
    productContainer.appendChild(priceElement);
    productContainer.appendChild(stockElement);

    productContainer.appendChild(buttonsElement);

    productListDiv.appendChild(productContainer);
  });
});