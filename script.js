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

  // Закрытие по крестику
  document.querySelectorAll(".modal-close").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal-overlay");
      closeModal(modal);
    });
  });

  // Закрытие по клику на оверлей
  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });
  });

  // Закрытие по Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.active").forEach(closeModal);
    }
  });

  // Кнопка Контакты
  btnContacts.addEventListener("click", () => {
    openModal(modalContacts);
  });

  // Кнопка Инфо
  btnInfo.addEventListener("click", () => {
    openModal(modalInfo);
  });

  // Кнопка Скачать — открывает контакты + скачивает архив
  btnDownload.addEventListener("click", () => {
    openModal(modalContacts);

    const fileName = "Plants vs. Zombies De-Evolved.zip";
    const folder = "assets/images/git2/2/pvz/downloads/";
    const downloadPath = encodeURI(folder + fileName);

    fetch(downloadPath, { method: "HEAD" })
      .then((res) => {
        if (res.ok) {
          const a = document.createElement("a");
          a.href = downloadPath;
          a.download = fileName;
          a.style.display = "none";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        } else {
          console.warn("Файл не найден:", downloadPath);
        }
      })
      .catch(() => {
        console.warn("Не удалось проверить файл:", downloadPath);
      });
  });
});