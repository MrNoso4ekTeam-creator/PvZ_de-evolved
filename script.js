document.addEventListener("DOMContentLoaded", () => {
  const btnDownload = document.getElementById("btn-download");
  const btnContacts = document.getElementById("btn-contacts");
  const btnInfo = document.getElementById("btn-info");

  const modalContacts = document.getElementById("modal-contacts");
  const modalInfo = document.getElementById("modal-info");

  function openModal(modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal(modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".modal-close").forEach((btn) => {
    btn.addEventListener("click", () => {
      closeModal(btn.closest(".modal-overlay"));
    });
  });

  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal(overlay);
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.active").forEach(closeModal);
    }
  });

  btnContacts.addEventListener("click", () => openModal(modalContacts));
  btnInfo.addEventListener("click", () => openModal(modalInfo));

  // Скачать: открываем контакты + скачиваем с Google Диска
  btnDownload.addEventListener("click", () => {
    openModal(modalContacts);

    const downloadUrl =
      "https://drive.google.com/uc?export=download&confirm=t&id=1XGaoM2jQ_d_f2z44C6dlMvucpLkVk6MT";

    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = "Plants vs. Zombies De-Evolved.zip";
    a.rel = "noopener";
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
});
