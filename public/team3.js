let previousCount = null;
let currentCount = null;
let canDoOperation = false;
let stopFunction = false;
let time = 0;

function checkForChange() {
  fetch("/count-questions-read3")
    .then(response => response.json())
    .then(data => {
      currentCount = Number(data.fileData);
      if (previousCount !== null && currentCount !== previousCount) {
        canDoOperation = true;
        console.log("Změna detekována!");
        stopFunction = false;
        renderInterface(); // Spustí vykreslení a následně i timer
      }
      previousCount = currentCount;
      setTimeout(checkForChange, 1000);
    })
    .catch(error => console.error("Chyba při čtení dat:", error));
}

function renderInterface() {
  if (canDoOperation) {
    document.body.innerHTML = `
      <input type="text" id="userAnswer">
      <button class="js-answer-button">Answer</button>
    `;
    // počkáme, než se DOM opravdu vykreslí
    setTimeout(() => {
      timerSeconds(); // bezpečně spustíme měření až po DOMu
    }, 50);
  } else {
    document.body.innerHTML = '<button class="js-answer-button">Answer</button>';
  }

  const answerButton = document.querySelector('.js-answer-button');
  if (answerButton && canDoOperation) {
    answerButton.addEventListener('click', () => {
      previousCount = currentCount;
      canDoOperation = false;
      stopFunction = true;
      console.log("Změna potvrzena. canDoOperation:", canDoOperation);
      renderInterface();
    });
  }
}

function timerSeconds() {
  const inputElement = document.querySelector("#userAnswer");
  if (!inputElement) {
    console.error("Input pole není nalezeno.");
    return; // Ukončí timer, pokud není input připraven
  }

  const interval = setInterval(() => {
    if (stopFunction) {
      clearInterval(interval);

      fetch("/read")
        .then(response => response.json())
        .then(data => {
          const result = data.fileData;
          const question = result["roztrel"][currentCount];
          if (!question || !("correct-code-answer" in question)) {
            console.error("Otázka nebo odpověď chybí.");
            return;
          }

          const correctAnswer = question["correct-code-answer"];
          const userAnswer = inputElement.value;

          if (correctAnswer === userAnswer) {
            console.log("Správná odpověď:", correctAnswer);
            fetch("/save-time3", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ time })
            })
              .then(res => res.json())
              .then(data => {
                console.log("Čas uložen na server:", data);
                time = 0;
              })
              .catch(err => console.error("Chyba při ukládání času:", err));
          } else{

            fetch("/save-time3", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ time: 0 }) // nebo jiná hodnota
            })
            .then(res => res.json())
            .then(data => {
              console.log("Čas uložen na server:", data);
              time = 0;
            })
            .catch(err => console.error("Chyba při ukládání času:", err));
          }
        })
        .catch(err => console.error("Chyba při čtení dat:", err));

      return;
    }

    time++;
    console.log("Čas:", time);
  }, 100);
}

checkForChange();
