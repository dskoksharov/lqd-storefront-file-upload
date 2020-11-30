const LS_STEP0_SHOWN = "LS_STEP0_SHOWN";

// translations
document.addEventListener("document_translated", () => {
  // change email in step0_text to anchor and highlight
  const email = window.LQDGlobalConf.supportEmail;

  const anchor = document.createElement("a");
  anchor.classList.add("text-highlight");
  anchor.textContent = email;
  anchor.setAttribute("href", `mailto:${email}`);

  const textElem = document.getElementById("email_text");
  const textAround = textElem.textContent.split(email);
  textElem.textContent = textAround[0];
  textElem.append(anchor, textAround[1]);
});

// init everything
window.addEventListener("DOMContentLoaded", () => {
  // init steps
  const step0Shown = localStorage.getItem(LS_STEP0_SHOWN);
  if (step0Shown) {
    document.getElementById("box_step0").classList.add("hidden");
    document.getElementById("box_step1").classList.remove("hidden");
  } else {
    document.getElementById("box_step0").classList.remove("hidden");
    document.getElementById("box_step1").classList.add("hidden");
  }

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
  localStorage.setItem(LS_STEP0_SHOWN, "true");
  document.getElementById("box_step0").classList.add("hidden");
  document.getElementById("box_step1").classList.remove("hidden");
}

/**
 * Upload file and redirect to status page
 */
async function upload() {
  const postFileUrl = `${window.LQDGlobalConf.backendUrl}/stores/stock`;

  // assert - a file is selected
  const file = document.getElementById("file_input").files[0];
  const formData = new FormData();
  formData.append("file", file);
  // formData.append("type", file.type);

  const headers = new Headers();
  headers.append("Accept", "application/json");

  const resp = await fetch(postFileUrl, {
    method: "POST",
    body: formData,
    headers: headers,
    mode: "cors",
  });

  const data = await resp.json();

  if (!resp.ok) {
    // assert - i18next is initialized
    alert(`${i18next.t("upload_error")}: ${data.message}`);
    return;
  }

  const password = data.password;

  // redirect to status
  location.assign(`status.html?password=${password}`);
}

function goToStep0(e) {
  e.preventDefault();
  console.log("Going to step 0");

  // clear flag
  localStorage.removeItem(LS_STEP0_SHOWN);

  // show step 0
  document.getElementById("box_step0").classList.remove("hidden");
  document.getElementById("box_step1").classList.add("hidden");
}
