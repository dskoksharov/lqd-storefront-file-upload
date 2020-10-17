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
          upload_error: "An error has occured",
        },
      },
    },
  });

  // add translations to elements
  document.querySelectorAll("[data-translate]").forEach(function (elem) {
    const translateKey = elem.getAttribute("data-translate");
    elem.textContent = t(translateKey);
  });

  // change email in step0_text to anchor and highlight
  const email = window.LQDGlobalConf.supportEmail;

  const anchor = document.createElement("a");
  anchor.classList.add("text-highlight");
  anchor.textContent = email;
  anchor.setAttribute("href", "mailto:" + email);

  const textElem = document.getElementById("email_text");
  const textAround = textElem.textContent.split(email);
  textElem.textContent = textAround[0];
  textElem.append(anchor, textAround[1]);
});

// init everything
window.addEventListener("DOMContentLoaded", () => {
  // init steps
  document.getElementById("box_step0").classList.remove("hidden");
  document.getElementById("box_step1").classList.add("hidden");

  // file input
  document.getElementById("file_input").addEventListener("change", (e) => {
    // validate and enable/disable `upload` button
    const uploadButton = document.getElementById("upload_button");
    if (e.target.files.length > 0) {
      uploadButton.classList.remove("lqd-button--disabled");
    } else {
      uploadButton.classList.add("lqd-button--disabled");
    }

    // update label
    const inputLabel = document.getElementById("file_input_label");
    const filePathLabel = document.getElementById("file_path");
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      filePathLabel.textContent = file.name;
      inputLabel.classList.add("hidden");
      filePathLabel.style.display = "block";
    } else {
      filePathLabel.textContent = "";
      inputLabel.classList.remove("hidden");
      filePathLabel.style.display = "unset";
    }
  });
});

/**
 * Advance step from 0 to 1
 */
function step0_next() {
  document.getElementById("box_step0").classList.add("hidden");
  document.getElementById("box_step1").classList.remove("hidden");
}

/**
 * Upload file and redirect to status page
 */
async function upload() {
  const postFileUrl = window.LQDGlobalConf.backendUrl + "/stores/stock";

  // assert - a file is selected
  const file = document.getElementById("file_input").files[0];
  const formData = new FormData();
  formData.append("file", file);
  // formData.append("type", file.type);

  const headers = new Headers();
  headers.append("Content-Type", "multipart/form-data");
  headers.append("Accept", "application/json");

  const resp = await fetch(postFileUrl, {
    method: "POST",
    body: formData,
    headers: headers,
  });

  if (!resp.ok) {
    // assert - i18next is initialized
    alert(i18next.t("upload_error"));
    return;
  }

  const data = await resp.json();
  const password = data.password;

  console.log("Got response", data);
  // TODO redirect to status
}
