
function applyStyles() {
  const interface_container_search = document.getElementById("interface-container-search");
  const interface_mobile_search = document.getElementById("interface-mobile-search");
  
  
  if (window.innerWidth < 1280) {
    interface_container_search.classList.add("horizontal");
    interface_mobile_search.classList.add("horizontal");
  } else {
    interface_container_search.classList.remove("horizontal");
    interface_mobile_search.classList.remove("horizontal");
  }
}

applyStyles();
window.addEventListener("resize", applyStyles);