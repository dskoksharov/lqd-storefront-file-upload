// translations
window.addEventListener("DOMContentLoaded", async () => {
  const t = await i18next.init({
    lng: navigator.language,
    fallbackLng: "en",
    // TODO change to `false` in production
    debug: true,
    resources: {
      en: {
        translation: {
          // -- upload page --
          title_upload: "Upload Storefront File",

          // step 0
          step0: "Step 0",
          step0_text: "Contact stores@vapeapp.net to onboard your store",
          step0_subtext:
            "Once your store is onboarded, proceed to the next step.",
          step0_next: "Next",

          // step 1
          step1: "Step 1",
          step1_text:
            "Select a relevant product catalog file on your device and upload it.",
          step1_file: "Choose file...",
          step1_subtext_pre: "Attention!",
          step1_subtext:
            "All products that are not in the file will be removed from your storefront.",
          step1_next: "Upload",
          upload_error: "An error has occured",

          // -- status page --
          title_status: "Upload Status",

          // step 2
          step2: "Step 2",
          step2_text: "Enter the one-time password inside the application.",
          step2_subtext: "Do not close this page to see the upload status",

          // step 3
          step3: "Step 3",
          step3_linecount: "lines uploaded",
          step3_failure: "Failure...",
          step3_subtext_success:
            "Your storefront has been updated according to the uploaded file. If not all lines have been unloaded, it means that these products are not in our database. We will analyze the result and add them in the near future.",
          step3_subtext_failure:
            "The file format does not match the format we configured to accept your catalog, please try another file or contact stores@vapeapp.net.",
          step3_next: "Done",
        },
      },
    },
  });

  // add translations to elements
  document.querySelectorAll("[data-translate]").forEach(function (elem) {
    const translateKey = elem.getAttribute("data-translate");
    elem.textContent = t(translateKey);
  });

  const event = new CustomEvent("document_translated", { cancelable: false });
  document.dispatchEvent(event);
});
