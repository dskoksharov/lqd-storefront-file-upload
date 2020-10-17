document.addEventListener("document_translated", () => {
  // change email in step3_subtext_failure to anchor and highlight
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
  document.getElementById("box_step2").classList.remove("hidden");
  document.getElementById("box_step3_success").classList.add("hidden");
  document.getElementById("box_step3_failure").classList.add("hidden");

  // TODO remove debug
  // document.getElementById("box_step2").classList.add("hidden");
  // document.getElementById("box_step3_success").classList.remove("hidden");
  // document.getElementById("box_step3_failure").classList.add("hidden");

  // password display
  // expecting `password` param in querystring
  const password = new URLSearchParams(location.search).get("password");
  if (password == null) {
    location.replace("upload.html");
  } else {
    document.getElementById("password_display").textContent = password;
  }
});

/**
 * Return to upload page.
 */
function start_over() {
  location.assign("upload.html");
}
