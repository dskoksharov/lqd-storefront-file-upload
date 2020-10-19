document.addEventListener("document_translated", () => {
  // change email in step3_subtext_failure to anchor and highlight
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

/**
 * Show box with `boxName` id, while hiding other boxes.
 * @param {string} boxName
 */
function showBox(boxName) {
  const boxes = {
    box_step2: false,
    box_step3_success: false,
    box_step3_failure: false,
    box_step3_timeout: false,
  };

  if (!boxes.hasOwnProperty(boxName)) {
    throw new Error(`Invalid box "${boxName}"!`);
  }

  boxes[boxName] = true;

  Object.keys(boxes).forEach((boxId) => {
    const box = document.getElementById(boxId);
    if (boxes[boxId]) {
      box.classList.remove("hidden");
    } else {
      box.classList.add("hidden");
    }
  });
}

/**
 * Fills the #results_table with given rows data.
 * @param {{row: number; name: string; amount: number; price: number, status: string}[]} rows
 */
function fillTable(rows) {
  rows.sort((a, b) => a.row - b.row);

  const table = document.getElementById("results_table");
  rows
    .map((d) => {
      // create table row for each file line result
      const tr = document.createElement("tr");
      if (d.error) {
        tr.setAttribute("title", d.error);
      }

      const columns = [d.row, d.name, d.amount, d.price];

      columns.forEach((c) => {
        const td = document.createElement("td");
        td.textContent = c;
        tr.append(td);
      });

      // add status icon manually
      const tdstatus = document.createElement("td");
      const imgstatus = document.createElement("img");
      imgstatus.setAttribute(
        "src",
        d.status === "error" ? "./res/error.svg" : "./res/success.svg"
      );
      imgstatus.classList.add("results-table__status-icon");
      tdstatus.append(imgstatus);
      tr.append(tdstatus);

      return tr;
    })
    .forEach((tr) => {
      table.append(tr);
    });
}

// init everything
window.addEventListener("DOMContentLoaded", () => {
  // init steps
  showBox("box_step2");

  // password display
  // expecting `password` param in querystring
  const password = new URLSearchParams(location.search).get("password");
  if (password == null) {
    location.replace("upload.html");
  } else {
    document.getElementById("password_display").textContent = password;
  }

  // begin polling backend with the password
  let countdownIntervalId, statusPollId, statusPollTimeoutId;

  // TODO countdown timer
  // const targetDate =

  statusPollTImeoutId = setTimeout(() => {
    // clear interval if still unconfirmed (if confirmed, this timeout is cleared)
    clearInterval(statusPollId);
    // TODO show timeout box
  }, LQDGlobalConf.uploadStatusInvalidationTimeout);

  async function checkUploadStatus() {
    const url = `${window.LQDGlobalConf.backendUrl}/stores/stock?password=${password}`;

    const headers = new Headers();
    headers.append("Accept", "application/json");

    const resp = await fetch(url, {
      method: "GET",
      headers: headers,
      mode: "cors",
    });

    const data = await resp.json();

    console.log("Got response", data);

    if (!resp.ok) {
      clearInterval(statusPollId);
      clearTimeout(statusPollTimeoutId);

      // outdated password - show timeout box
      if (resp.status === 404 && data.message === "Password has expired") {
        showBox("box_step3_timeout");
      }

      // unknown password - redirect to upload page
      if (resp.status === 404 && data.message === "Password is wrong") {
        location.replace("upload.html");
      }

      // parsing failure
      if (resp.status === 500 && data.message === "File can't be parsed") {
        showBox("box_step3_failure");
      }
    } else {
      // statuses:
      // New, hasn't upload
      // Uploading
      // Uploaded
      // Uploaded with errors

      // success, display the table
      if (
        data.status === "Uploaded" ||
        data.status === "Uploaded with errors"
      ) {
        clearInterval(statusPollId);
        clearTimeout(statusPollTimeoutId);

        document.getElementById(
          "line_count"
        ).textContent = `${data.success_cnt}/${data.all_cnt}`;

        // fill table
        fillTable(data.data);

        showBox("box_step3_success");
      }
    }
  }

  // not a good practice, but let's assume that each request completes before the next one starts
  statusPollId = setInterval(
    checkUploadStatus,
    window.LQDGlobalConf.uploadStatusPollInterval
  );
  checkUploadStatus();
});

/**
 * Return to upload page.
 */
function start_over() {
  location.assign("upload.html");
}
