// Heart icon logic
function increaseHeartCount() {
  const heartCountSpan = document.getElementById("heart-count");
  let count = parseInt(heartCountSpan.textContent);
  heartCountSpan.textContent = count + 1;
}
document.querySelectorAll("#heart").forEach((heart) => {
  heart.onclick = increaseHeartCount;
});

// Call button logic
function handleCall(serviceName, serviceNumber) {
  const coinSpan = document.getElementById("coin-count");
  let coins = parseInt(coinSpan.textContent);
  if (coins < 20) {
    alert("Not enough coins to make a call!");
    return;
  }
  alert(`Calling ${serviceName} (${serviceNumber})`);
  coinSpan.textContent = coins - 20;
  addToHistory(serviceName, serviceNumber);
}

function addToHistory(name, number) {
  let historyList = document.getElementById("history-list");
  if (!historyList) return;
  const li = document.createElement("li");
  li.className = "call-history-item";
  const timeString = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  li.innerHTML = `
    <div class="call-history-info">
      <span class="font-semibold">${name}</span>
      <span class="text-gray-500">${number}</span>
    </div>
    <span class="text-gray-400 text-xs">${timeString}</span>
  `;
  historyList.prepend(li);
}

// Add event listeners for call buttons
document
  .getElementById("call-all")
  .addEventListener("click", () =>
    handleCall("National Emergency Number", "999")
  );

document
  .getElementById("call-police")
  .addEventListener("click", () => handleCall("Police Helpline Number", "999"));

document
  .getElementById("call-fire")
  .addEventListener("click", () => handleCall("Fire Service Number", "999"));

document
  .getElementById("call-ambulance")
  .addEventListener("click", () =>
    handleCall("Ambulance Service", "1994-999999")
  );

document
  .getElementById("call-brac")
  .addEventListener("click", () => handleCall("Brac Helpline", "16445"));

document
  .getElementById("call-railway")
  .addEventListener("click", () =>
    handleCall("Bangladesh Railway Helpline", "163")
  );

// Clear btn

const clearBtn = document.getElementById("clear-btn");
if (clearBtn) {
  clearBtn.addEventListener("click", function () {
    let historyList = document.getElementById("history-list");
    if (historyList) historyList.innerHTML = "";
  });
}

// Copy button impliment using chapt gpt
const copyElement = document.getElementById("copy-count");
let copyCount = parseInt((copyElement && copyElement.textContent) || "0");

function handleCopy(number) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(number)
      .then(() => {
        alert("Hotline number copied!");
        copyCount++;
        if (copyElement) copyElement.textContent = copyCount;
      })
      .catch(() => {
        fallbackCopy(number);
      });
  } else {
    fallbackCopy(number);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.top = "-9999px";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  ta.setSelectionRange(0, ta.value.length);
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch (_) {
    ok = false;
  } finally {
    document.body.removeChild(ta);
  }
  if (ok) {
    alert("Hotline number copied!");
    copyCount++;
    if (copyElement) copyElement.textContent = copyCount;
  } else {
    alert("Copy failed. Number: " + text);
  }
}

// Add event listeners for copy buttons
document.getElementById("copy-all").onclick = function () {
  handleCopy("999");
};
document.getElementById("copy-police").onclick = function () {
  handleCopy("999");
};
document.getElementById("copy-fire").onclick = function () {
  handleCopy("999");
};
document.getElementById("copy-ambulance").onclick = function () {
  handleCopy("1994-999999");
};
document.getElementById("copy-brac").onclick = function () {
  handleCopy("16445");
};
// Added Railway copy
document.getElementById("copy-railway").onclick = function () {
  handleCopy("163");
};
