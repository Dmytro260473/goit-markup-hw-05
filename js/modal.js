(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  // Проверка, что все элементы найдены
  if (!refs.openModalBtn || !refs.closeModalBtn || !refs.modal) {
    console.error("Modal elements not found. Check data attributes.");
    return;
  }

  refs.openModalBtn.addEventListener("click", () => {
    refs.modal.classList.add("is-open");
  });

  refs.closeModalBtn.addEventListener("click", () => {
    refs.modal.classList.remove("is-open");
  });

  // Закрытие при клике на фон
  refs.modal.addEventListener("click", (e) => {
    if (e.target === refs.modal) {
      refs.modal.classList.remove("is-open");
    }
  });

  // Закрытие по клавише Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && refs.modal.classList.contains("is-open")) {
      refs.modal.classList.remove("is-open");
    }
  });
})();
