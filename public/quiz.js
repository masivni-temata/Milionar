let quizResult;
let questionQuizCount = 1;
let teamQuizCount = 1;
let windowAction = true;
let divaciUsed = false;
let padeUsed = false;
let pritelUsed = false;


async function loadQuizData() {
  try {
    const response = await fetch('/quiz-data');
    if (!response.ok) {
      throw new Error('Chyba při načítání dat');
    }
    quizResult = await response.json();
    console.log('Načtená data:', quizResult);

    const teamKey = `${teamQuizCount}team`;
    const questionData = quizResult?.quiz?.[teamKey]?.[questionQuizCount];
    const buttonA = document.querySelector('.js-answer-buttonA');
    const buttonB = document.querySelector('.js-answer-buttonB');
    const buttonC = document.querySelector('.js-answer-buttonC');
    const buttonD = document.querySelector('.js-answer-buttonD');
    document.querySelector('.js-roztrel-otazka').innerHTML = questionData["otazka"];
    buttonA.innerHTML = questionData["a"];
    buttonA.style.background = 'linear-gradient(to right, rgb(7, 7, 66), rgb(38, 38, 135))';
    buttonB.innerHTML = questionData["b"];
    buttonB.style.background = 'linear-gradient(to right, rgb(7, 7, 66), rgb(38, 38, 135))';
    buttonC.innerHTML = questionData["c"];
    buttonC.style.background = 'linear-gradient(to right, rgb(7, 7, 66), rgb(38, 38, 135))';
    buttonD.innerHTML = questionData["d"];
    buttonD.style.background = 'linear-gradient(to right, rgb(7, 7, 66), rgb(38, 38, 135))';
  
  } catch (error) {
    console.error('Došlo k chybě:', error);
  }
}

document.body.addEventListener('keydown', (event)=>{
  console.log(event)
  if(event.key === 'd'){
    teamQuizCount++
    loadQuizData()
  } else if(event.key === 'ArrowRight'){
      questionQuizCount++
      loadQuizData()
  } else if(event.key === 'ArrowLeft'){
    questionQuizCount--
    loadQuizData()
  } else if(event.key === 'a'){
      questionQuizCount--
      loadQuizData()
    }
});

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'w' && windowAction === true) {
    document.querySelector('.window-div').innerHTML = `
      <div class="window">
        <div class="quiz-container">
          <div class="roztrel-otazka js-roztrel-otazka">question</div>
          <div class="question-container">
            <div class="answer-button js-answer-buttonA">1</div>
            <div class="answer-button js-answer-buttonB">2</div>
            <div class="answer-button js-answer-buttonC">3</div>
            <div class="answer-button js-answer-buttonD">4</div>
          </div>
        </div>
      </div>`;
    ['A', 'B', 'C', 'D'].forEach(letter => {
      const btn = document.querySelector(`.js-answer-button${letter}`);
      btn.addEventListener('click', () => {
        const teamKey = `${teamQuizCount}team`;
        const questionData = quizResult?.quiz?.[teamKey]?.[questionQuizCount];
        const correct = questionData["correct-code-answer"];
  
        if (correct === letter.toLowerCase()) {
          btn.style.background = 'linear-gradient(to right, rgb(40, 111, 24), rgb(78, 152, 43))';
        } else {
          btn.style.background = 'linear-gradient(to right, rgb(154, 6, 6), rgb(219, 0, 0))';
        }
      });
    });
  
    windowAction = false;
    loadQuizData();
  }
  
});


document.body.addEventListener('click', (event) => {
  if (windowAction === false) {
    const windowEl = document.querySelector('.window');
    if (windowEl && !windowEl.contains(event.target)) {
      windowEl.remove();
      windowAction = true;
    }
  }
});



document.querySelector('.js-divaci').addEventListener('click', () => {
  if (!divaciUsed) {
    document.querySelector('.js-divaci').innerHTML = '<img src="images/milionar-divaci-ne.png">';
    divaciUsed = true;
  } else {
    document.querySelector('.js-divaci').innerHTML = '<img src="images/milionar-divaci.png">';
    divaciUsed = false;
  };
});

document.querySelector('.js-pade').addEventListener('click', () => {
  if (!padeUsed) {
    document.querySelector('.js-pade').innerHTML = '<img src="images/milionar-pade-ne.png">';
    padeUsed = true;
  } else {
    document.querySelector('.js-pade').innerHTML = '<img src="images/milionar-pade.png">';
    padeUsed = false;
  };
});

document.querySelector('.js-pritel').addEventListener('click', () => {
  if (!pritelUsed) {
    document.querySelector('.js-pritel').innerHTML = '<img src="images/milionar-pritel-ne.png">';
    pritelUsed = true;
  } else {
    document.querySelector('.js-pritel').innerHTML = '<img src="images/milionar-pritel.png">';
    pritelUsed = false;
  };
});

function removePrizeSelected() {
  document.querySelectorAll('.selected-prize').forEach(el => {
    el.classList.remove('selected-prize');
  });
}

document.body.addEventListener('keydown', (event) => {
  removePrizeSelected();

  const key = event.key;
  if (key >= '1' && key <= '9') {
    document.querySelector(`.js-${key}`)?.classList.add('selected-prize');
  } else if (key === '0') {
    document.querySelector('.js-10')?.classList.add('selected-prize');
  }
});

let audio = new Audio;

document.body.addEventListener('keydown', (event) => {
  if (event.key === '+') {
    audio.src = '/sounds/$1,000,000 Question - Who Wants to Be a Millionaire_.mp3'
    audio.currentTime = 0;
    audio.play();
  } else if(event.key === 'ě'){
    audio.src = '/sounds/$1,000,000 Win - Who Wants to Be a Millionaire_.mp3'
    audio.currentTime = 0;
    audio.play();
  } else if(event.key === 'š'){
    audio.src = '/sounds/$100-$1000 Questions - Who Wants to Be a Millionaire_.mp3'
    audio.currentTime = 0;
    audio.play();
  } else if(event.key === 'č'){
    audio.src = '/sounds/$500,000 Final Answer - Who Wants to Be a Millionaire_.mp3'
    audio.currentTime = 0;
    audio.play();
  } else if(event.key === 'ř'){
    audio.src = '/sounds/Ask the Audience Lifeline.mp3'
    audio.currentTime = 0;
    audio.play();
  } else if(event.key === 'ž'){
    audio.src = '/sounds/hard question.mp3'
    audio.currentTime = 0;
    audio.play();
  } else if(event.key === 'ý'){
    audio.src = '/sounds/play easy.mp3'
    audio.currentTime = 0;
    audio.play();
  } else if(event.key === 'á'){
    audio.src = '/sounds/play hard.mp3'
    audio.currentTime = 0;
    audio.play();
  } else if(event.key === 'í'){
    audio.src = '/sounds/play medium.mp3'
    audio.currentTime = 0;
    audio.play();
  } else if(event.key === 'é'){
    audio.src = '/sounds/question medium.mp3'
    audio.currentTime = 0;
    audio.play();
  } else if(event.key === '='){
    audio.src = '/sounds/win easy 16,000.mp3'
    audio.currentTime = 0;
    audio.play();
  } else if(event.key === 'Dead'){
    audio.src = '/sounds/win hardest.mp3'
    audio.currentTime = 0;
    audio.play();
  } else if(event.key === 'Delete'){
    audio.src = '/sounds/win medium 32,000.mp3'
    audio.currentTime = 0;
    audio.play();
  } else if(event.key === 'Backspace'){
    audio.pause();
    audio.currentTime = 0;
  }
});