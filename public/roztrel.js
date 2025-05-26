let numberOfTeams;
let windowAction = true;
let currentQuestion = 1;
let questionData;

function nextQuestion (){
  currentQuestion++
  renderRoztrelQuestion()

}

function allowTeamsToAnswer(){
  fetch("/roztrel-count", {
    method: "POST"
  })
    .then(response => response.json())
    .then(data => {
      if (data.status === "success") {
        console.log("Aktuální count:", data.count);
        currentQuestion = data.count;
        renderRoztrelQuestion();
      } else {
        console.error("Chyba:", data.message);
      }
    })
    .catch(err => {
      console.error("Chyba spojení se serverem:", err);
    });
}

document.body.addEventListener('keydown', (event)=>{
  if(event.key === 'h' && windowAction === false){
    allowTeamsToAnswer();
    const time = 0;
    fetch("/save-time1", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ time })
    })
      .then(res => res.json())
      .then(data => {})
  }
});

function renderRoztrelQuestion(){
  fetch("/roztrel-read")
  .then(response => response.json())
  .then(data => {
    const result = data.fileData;
    questionData = result;
    document.querySelector('.window').innerHTML = '<div class="quiz-container"><div class="js-roztrel-otazka roztrel-otazka"></div><div class="question-container"><div class="roztrel-answer js-roztrel-answer-a"><span class="main-letter">A: </span></div><div class="roztrel-answer js-roztrel-answer-b"><span class="main-letter">B: </span></div><div class="roztrel-answer js-roztrel-answer-c"><span class="main-letter">C: </span></div><div class="roztrel-answer js-roztrel-answer-d"><span class="main-letter">D: </span></div></div></div>'
    const currentQuestionString = String(currentQuestion);
    document.querySelector('.js-roztrel-otazka').innerHTML = questionData[currentQuestionString].otazka
    document.querySelector('.js-roztrel-answer-a').innerHTML = 'A: ' + questionData[currentQuestionString].a[1]
    document.querySelector('.js-roztrel-answer-b').innerHTML = 'B: ' + questionData[currentQuestionString].b[1]
    document.querySelector('.js-roztrel-answer-c').innerHTML = 'C: ' + questionData[currentQuestionString].c[1]
    document.querySelector('.js-roztrel-answer-d').innerHTML = 'D: ' + questionData[currentQuestionString].d[1]
  });
}


document.body.addEventListener('keydown', (event)=>{
  if(event.key === 'ArrowRight'){
    nextQuestion()
  }
})

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'm' && windowAction === false) {
    fetch("/roztrel-read")
      .then(response => response.json())
      .then(data => {
        const result = data.fileData;
        const currentQuestionString = String(currentQuestion);
        const correctAnswer = result[currentQuestionString]?.["correct-answer"];
        document.querySelector('.question-container').innerHTML = correctAnswer || "Správná odpověď nenalezena.";
      });
  }
});




fetch("/number-of-teams-read")
  .then(response => response.json())
  .then(data => {
    result = data.fileData;
    numberOfTeams = result;
    console.log(numberOfTeams)
    teamDisplay(numberOfTeams)
})
  .catch(error => console.error("Chyba při čtení JSON souboru:", error));

function teamTimeDisplayLoop1(){
  setTimeout(()=>{
    fetch("/teamTimeDisplayLoop1")
      .then(response => response.json())
      .then(data => {
        const time = Number(data.fileData);
        document.querySelector('.team-1').innerHTML = `<div class="team-1">Čas: ${time} setin</div>`
        teamTimeDisplayLoop1();
      })
  }, 100)

}
teamTimeDisplayLoop1()

function teamTimeDisplayLoop2(){
  setTimeout(()=>{
    fetch("/teamTimeDisplayLoop2")
      .then(response => response.json())
      .then(data => {
        const time = Number(data.fileData);
        document.querySelector('.team-2').innerHTML = `<div class="team-2">Čas: ${time} setin</div>`
        teamTimeDisplayLoop2();
      })
  }, 100)

}
teamTimeDisplayLoop2()

function teamTimeDisplayLoop3(){
  setTimeout(()=>{
    fetch("/teamTimeDisplayLoop3")
      .then(response => response.json())
      .then(data => {
        const time = Number(data.fileData);
        document.querySelector('.team-3').innerHTML = `<div class="team-3">Čas: ${time} setin</div>`
        teamTimeDisplayLoop3();
      })
  }, 100)

}
teamTimeDisplayLoop3()

function teamTimeDisplayLoop4(){
  setTimeout(()=>{
    fetch("/teamTimeDisplayLoop4")
      .then(response => response.json())
      .then(data => {
        const time = Number(data.fileData);
        document.querySelector('.team-4').innerHTML = `<div class="team-4">Čas: ${time} setin</div>`
        teamTimeDisplayLoop4();
      })
  }, 100)

}
teamTimeDisplayLoop4()

function teamTimeDisplayLoop5(){
  setTimeout(()=>{
    fetch("/teamTimeDisplayLoop5")
      .then(response => response.json())
      .then(data => {
        const time = Number(data.fileData);
        document.querySelector('.team-5').innerHTML = `<div class="team-5">Čas: ${time} setin</div>`
        teamTimeDisplayLoop5();
      })
  }, 100)

}
teamTimeDisplayLoop5()

function teamTimeDisplayLoop6(){
  setTimeout(()=>{
    fetch("/teamTimeDisplayLoop6")
      .then(response => response.json())
      .then(data => {
        const time = Number(data.fileData);
        document.querySelector('.team-6').innerHTML = `<div class="team-6">Čas: ${time} setin</div>`
        teamTimeDisplayLoop6();
      })
  }, 100)

}
teamTimeDisplayLoop6()

function teamTimeDisplayLoop7(){
  setTimeout(()=>{
    fetch("/teamTimeDisplayLoop7")
      .then(response => response.json())
      .then(data => {
        const time = Number(data.fileData);
        document.querySelector('.team-7').innerHTML = `<div class="team-7">Čas: ${time} setin</div>`
        teamTimeDisplayLoop7();
      })
  }, 100)

}
teamTimeDisplayLoop7()

function teamTimeDisplayLoop8(){
  setTimeout(()=>{
    fetch("/teamTimeDisplayLoop8")
      .then(response => response.json())
      .then(data => {
        const time = Number(data.fileData);
        document.querySelector('.team-8').innerHTML = `<div class="team-8">Čas: ${time} setin</div>`
        teamTimeDisplayLoop8();
      })
  }, 100)

}
teamTimeDisplayLoop8()

function teamDisplay(){
  for(let i = 0;numberOfTeams>i;i++){
    let trueNumber = i;
    trueNumber++
    document.querySelector('.js-team-display').innerHTML +=`
    <div class="team-stats">
      <input placeholder="Tým ${trueNumber}" type="text">
      <div class="team-${trueNumber}">Čas: ${0} setin</div>
    </div>`
  };
};

document.body.addEventListener('keydown', (event)=>{
  const tag = event.target.tagName.toLowerCase();
  if (tag === 'input' || tag === 'textarea' || event.target.isContentEditable) {
    return;
  }else if(event.key === 'b' && windowAction === true  ){
    document.body.insertAdjacentHTML("beforeend",
    `<div class="window">
      h
    </div>`
    )
    windowAction = false
    renderRoztrelQuestion()
  }
})

document.body.addEventListener('click', (event)=>{
  if(windowAction === false){
    if(document.querySelector('.window').contains(event.target)){
      return
    }else{
      document.querySelector('.window').remove()
      windowAction = true
    }

  }
})