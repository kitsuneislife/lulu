const warn = document.getElementById("_form_add_warn");
const status = document.getElementById("_form_add_status");
const url = "https://lulu-api.kitsuneislife.repl.co/edit?method=insert";

function addSubmit() {
  const name = document.getElementById("_form_row_name_input").value;
  const description = document.getElementById("_form_row_description_input").value;
  const display = document.getElementById("_form_row_display_input").value;
  const category = document.getElementById("_form_row_category_input").value;
  const brand = document.getElementById("_form_row_brand_input").value;
  const image = document.getElementById("_form_row_image_input").value;
  const price = document.getElementById("_form_row_price_input").value;
  const stock = document.getElementById("_form_row_stock_input").value;
  const image1 = document.getElementById("_form_row_image1_input").value;
  const image2 = document.getElementById("_form_row_image2_input").value;
  const image3 = document.getElementById("_form_row_image3_input").value;
  const image4 = document.getElementById("_form_row_image4_input").value;
  
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
        warn.innerHTML = "Produto adicionado com sucesso.";
        warn.style.color = "green";
        status.style.height = "10px";
        status.style.background = "green";
      } else {
        console.log(400);
        warn.innerHTML = "Houve um erro ao adicionar o produto.";
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
