// translations
window.addEventListener("DOMContentLoaded", function () {
  i18next
    .init({
      lng: navigator.language,
      fallbackLng: "en",
      // TODO change to `false` in production
      debug: true,
      resources: {
        en: {
          translation: {
            title: "Upload Storefront File",
            step0: "Step 0",
            step0_text: "Contact stores@vapeapp.net to onboard your store",
            step0_subtext:
              "Once your store is onboarded, proceed to the next step.",
            step0_next: "Next",
            step1: "Step 1",
            step1_text:
              "Select a relevant product catalog file on your device and upload it.",
            step1_file: "Choose file...",
            step1_subtext_pre: "Attention!",
            step1_subtext:
              "All products that are not in the file will be removed from your storefront.",
            step1_next: "Upload",
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

// init everything
window.addEventListener("DOMContentLoaded", function () {
  // init steps
  document.getElementById("box_step0").classList.remove("hidden");
  document.getElementById("box_step1").classList.add("hidden");

  // file input
  document
    .getElementById("file_input")
    .addEventListener("change", function (e) {
      // validate and enable/disable `upload` button
      const uploadButton = document.getElementById("upload_button");
      if (e.target.files.length > 0) {
        uploadButton.classList.remove("lqd-button--disabled");
      } else {
        uploadButton.classList.add("lqd-button--disabled");
      }
    });
});

function step0_next() {
  document.getElementById("box_step0").classList.add("hidden");
  document.getElementById("box_step1").classList.remove("hidden");
}

// TODO change email in step0_text to anchor and highlight
// TODO file picker - display selected path
