const menuIcon = document.querySelector(".navbar_button");
const menuMobile = document.querySelector(".navbar_menu");
const menuItems = document.querySelectorAll(".navbar_menu_text");

// Função para fechar o menu
function fecharMenu() {
  menuIcon.classList.remove("active");
  menuMobile.classList.remove("active");
}

// Adiciona um event listener para o ícone do menu
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  menuMobile.classList.toggle("active");
});

// Adiciona um event listener para cada item do menu
menuItems.forEach(item => {
  item.addEventListener("click", fecharMenu);
});

// Função para selecionar a opção e mostrar o conteúdo associado
function selectAndShow(option, tabClass) {
  // Remove a classe "selected" de todas as opções
  menuItems.forEach(item => {
    item.classList.remove("selected");
  });
  // Adiciona a classe "selected" à opção selecionada
  option.classList.add("selected");
  
  // Oculta todos os conteúdos das tabs
  var tabContents = document.querySelectorAll(".conteudo");
  tabContents.forEach(content => {
    content.style.display = "none";
  });
  
  // Mostra o conteúdo associado à tab selecionada
  var selectedTabContent = document.querySelector("." + tabClass);
  selectedTabContent.style.display = "flex"; // ou "block", dependendo do estilo que você deseja aplicar
}

// Seleciona e mostra a seção section-01 ao carregar o site
window.onload = function() {
  var firstMenuItem = document.querySelector(".navbar_menu_text:nth-child(1)");
  selectAndShow(firstMenuItem, "section-01_container");
};
