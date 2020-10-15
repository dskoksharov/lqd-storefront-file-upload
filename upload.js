// translations
window.addEventListener("DOMContentLoaded", function () {
  i18next
    .init({
      lng: navigator.language,
      fallbackLng: "en",
      debug: true,
      resources: {
        en: {
          translation: {
            // TODO
            title: "Upload Storefront File",
            test: "test string",
          },
        },
      },
    })
    .then(function (t) {
      document.querySelectorAll("[data-translate]").forEach(function (elem) {
        const translateKey = elem.getAttribute("data-translate");
        elem.textContent = t(translateKey);
      });
    });
});
