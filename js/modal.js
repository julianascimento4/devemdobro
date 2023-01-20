const btnClick = document.querySelector(".btn-trailer");
const fecharModal = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal");

[btnClick].forEach((e) => {
  e.addEventListener("click", () => {
    if (modal) {
      modal.classList.add("aberto");
    }
  });
});

[fecharModal].forEach((e) => {
  e.addEventListener("click", () => {
    if (modal) {
      modal.classList.remove("aberto");
    }
  });
});
