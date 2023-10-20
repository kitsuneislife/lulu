
/* Mobile Menu */

const header_button_menu = document.getElementById("header-button-menu");
const interface_mobile_menu_close = document.getElementById("interface-mobile-menu-close");
const interface_mobile_menu = document.getElementById("interface-mobile-menu");


header_button_menu.addEventListener("click", () => {
  interface_mobile_menu.classList.toggle("active")
});
interface_mobile_menu_close.addEventListener("click", () => {
  interface_mobile_menu.classList.toggle("active")
});

const interface_mobile_menu_store_open_button = document.getElementById("interface-mobile-menu-store-open-button");
const interface_mobile_menu_store_close = document.getElementById("interface-mobile-menu-store-close");
const interface_mobile_menu_store = document.getElementById("interface-mobile-menu-store");


interface_mobile_menu_store_open_button.addEventListener("click", () => {
  interface_mobile_menu_store.classList.toggle("active")
});
interface_mobile_menu_store_close.addEventListener("click", () => {
  interface_mobile_menu_store.classList.toggle("active")
});

/* Busca lateral / Lateral Mobile Search / Auto Busca */

const header_button_search = document.getElementById("header-button-search");
const interface_mobile_search_close = document.getElementById("interface-mobile-search-close");
const interface_mobile_search = document.getElementById("interface-mobile-search");


header_button_search.addEventListener("click", () => {
  interface_mobile_search.classList.toggle("active")
});
interface_mobile_search_close.addEventListener("click", () => {
  interface_mobile_search.classList.toggle("active")
});

/* Busca Vertical / Vertical Mobile Search */
/*
const header_button_search = document.getElementById("header-button-search");
const vertical_interface_mobile_search_close = document.getElementById("vertical-interface-mobile-search-close");
const vertical_interface_mobile_search = document.getElementById("vertical-interface-mobile-search");


header_button_search.addEventListener("click", () => {
  vertical_interface_mobile_search.classList.toggle("active")
});
vertical_interface_mobile_search_close.addEventListener("click", () => {
  vertical_interface_mobile_search.classList.toggle("active")
});*/