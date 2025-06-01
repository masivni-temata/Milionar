let result = {}; // Globální proměnná
/*
document.getElementById("saveButton").addEventListener("click", () => {
  fetch("/save", { method: "POST" })
    .then(response => response.json())
    .then(data => {
      document.getElementById("status").innerText = "První data uložena!";
      console.log("Odpověď serveru:", data);
  })
  .catch(error => console.error("Chyba:", error));
});

document.getElementById("saveSecondButton").addEventListener("click", () => {
  fetch("/saveSecond", { method: "POST" })
    .then(response => response.json())
    .then(data => {
    document.getElementById("status").innerText = "Druhá data uložena!";
    console.log("Odpověď serveru:", data);
  })
  .catch(error => console.error("Chyba:", error));
});
*/



document.getElementById("button-start").addEventListener('click', () => {
  const number = document.querySelector('.number-of-teams').value;
  fetch("/number-of-teams", {method: "POST",headers: {"Content-Type": "application/json"},body: JSON.stringify({ number })})
    .then(response => response.json())
    .then(data => {
    console.log(data);
    window.location.href = "./roztrel.html";
  })
  .catch(error => console.error("Chyba:", error));
});
