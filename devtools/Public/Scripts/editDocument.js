const socket = io();

function obterParametrosURL() {
  var url = window.location.href;
  var parametros = url.split('?')[1];
  var parametrosObjeto = {};
  if (parametros) {
    var parametrosArray = parametros.split('&');
    for (var i = 0; i < parametrosArray.length; i++) {
      var parametro = parametrosArray[i].split('=');
      var chave = decodeURIComponent(parametro[0]);
      var valor = decodeURIComponent(parametro[1]);
      parametrosObjeto[chave] = valor;
    }
  }
  return parametrosObjeto;
}

var parametrosURL = obterParametrosURL();
var url;
var deleteUrl;

const editContainer = document.getElementById("_edit_container");
const nameInput = document.getElementById("_form_row_name_input");
const descriptionInput = document.getElementById("_form_row_description_input");
const displayInput = document.getElementById("_form_row_display_input");
const categoryInput = document.getElementById("_form_row_category_input");
const brandInput = document.getElementById("_form_row_brand_input");
const imageInput = document.getElementById("_form_row_image_input");
const priceInput = document.getElementById("_form_row_price_input");
const stockInput = document.getElementById("_form_row_stock_input");
const image1Input = document.getElementById("_form_row_image1_input");
const image2Input = document.getElementById("_form_row_image2_input");
const image3Input = document.getElementById("_form_row_image3_input");
const image4Input = document.getElementById("_form_row_image4_input");
var vi = false;

socket.on("updateProductRaw", (data) => {
  if (data.some(function(p) { return p._id === parametrosURL.method })) {
    const productData = data.find(function(p) { return p._id === parametrosURL.method });
    if (!productData) { return editContainer.innerHTML = "O Produto não existe ou foi excluído." };
    if (!vi) {
      nameInput.value = productData.name;
      descriptionInput.value = productData.description;
      displayInput.value = productData.display;
      categoryInput.value = productData.category;
      brandInput.value = productData.brand;
      imageInput.value = productData.image;
      priceInput.value = productData.price;
      stockInput.value = productData.stock;
      image1Input.value = productData.image1;
      image2Input.value = productData.image2;
      image3Input.value = productData.image3;
      image4Input.value = productData.image4;
      console.log(vi);
      url = `https://lulu-api.kitsuneislife.repl.co/edit?method=modify&id=${productData._id}`;
      deleteUrl = `https://lulu-api.kitsuneislife.repl.co/delete?id=${productData._id}`;
      vi = true;
    }
  } else {
    editContainer.innerHTML = "O Produto não existe ou foi excluído.";
  }
});

const warn = document.getElementById("_form_edit_warn");
const status = document.getElementById("_form_edit_status");

function editSubmit() {
  const name = nameInput.value;
  const description = descriptionInput.value;
  const display = displayInput.value;
  const category = categoryInput.value;
  const brand = brandInput.value;
  const image = imageInput.value;
  const price = priceInput.value;
  const stock = stockInput.value;
  const image1 = image1Input.value;
  const image2 = image2Input.value;
  const image3 = image3Input.value;
  const image4 = image4Input.value;
  if (!name || !description || !display || !category || !brand || !image || !price || !stock) {
    warn.innerHTML = "Preencha todos os campos.";
    warn.style.color = "red";
    status.style.height = "10px";
    status.style.background = "red";
    return;
  }
  if (!Number(stock)) {
    warn.innerHTML = "'Estoque' precisa ser um número.";
    warn.style.color = "red";
    status.style.height = "10px";
    status.style.background = "red";
    return;
  }
  console.log(name, description, display, category, brand, image, price, stock);

  warn.innerHTML = "Aguarde...";
  warn.style.color = "yellow";
  status.style.height = "10px";
  status.style.background = "yellow";

  const newProduct = {
    name,
    description,
    display,
    category,
    brand,
    image,
    price,
    stock,
    image1, image2, image3, image4
  }
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newProduct)
  };

  fetch(url, options)
    .then(response => {
      if (response.ok) {
        console.log(200);
        warn.innerHTML = "Produto modificado com sucesso.";
        warn.style.color = "green";
        status.style.height = "10px";
        status.style.background = "green";
      } else {
        console.log(400);
        warn.innerHTML = "Houve um erro ao modificar o produto.";
        warn.style.color = "red";
        status.style.height = "10px";
        status.style.background = "red";
      }
    })
    .catch(error => {
      console.error("Erro na solicitação:", error);
      warn.innerHTML = "Houve um erro na solicitação.";
      warn.style.color = "red";
      status.style.height = "10px";
      status.style.background = "red";
    });
}

function editDelete() {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  }
  fetch(deleteUrl, options);
  warn.innerHTML = "Aguarde...";
  warn.style.color = "yellow";
  status.style.height = "10px";
  status.style.background = "yellow";
}