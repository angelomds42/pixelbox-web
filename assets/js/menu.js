const menuicon = document.querySelector(".navbar_button");

const menumobile = document.querySelector(".navbar_menu");

menuicon.addEventListener("click", () => {
  menuicon.classList.toggle("active");
  menumobile.classList.toggle("active");
});

// Função para selecionar a aba e mostrar o conteúdo associado
function selectAndShow(element, tabClass) {
  // Chama a função para selecionar a opção
  selectOption(element);

  // Chama a função para mostrar o conteúdo associado à tab
  showContent(tabClass);
}

// Função para selecionar a opção
function selectOption(option) {
  var options = document.querySelectorAll(".navbar_menu_text");
  options.forEach(function (item) {
    item.classList.remove("selected");
  });
  option.classList.add("selected");
}

// Função para mostrar o conteúdo associado à tab
function showContent(tabClass) {
  // Oculta todos os conteúdos das tabs
  var tabContents = document.querySelectorAll(".conteudo");
  tabContents.forEach(function (content) {
    content.style.display = "none";
  });

  // Mostra o conteúdo da tab selecionada
  var selectedTabContent = document.querySelector("." + tabClass);
  if (selectedTabContent) {
    selectedTabContent.style.display = "block";
  }
}

// Chama a função selectAndShow para selecionar e mostrar a Tab 1 ao carregar o site
window.onload = function () {
  var tab1 = document.querySelector(".navbar_menu_text:nth-child(1)");
  selectAndShow(tab1, "section-01_container");
};

// Atualiza o conteúdo da aba ao clicar em outra aba
document.querySelectorAll(".navbar_menu_text").forEach(function (item) {
  item.addEventListener("click", function () {
    var tabClass = this.getAttribute("data-tab");
    showContent(tabClass);

    // Mostra todas as outras opções de conteúdo
    var tabContents = document.querySelectorAll(".conteudo");
    tabContents.forEach(function (content) {
      if (content.classList.contains(tabClass)) {
        content.style.display = "flex";
      } else {
        content.style.display = "none";
      }
    });
  });
});
