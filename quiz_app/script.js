const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.querySelector(".container");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btn = document.getElementById("submit");

let current = 0;
let score = 0;

function loadQuiz() {
  deselectAll();

  const currentQuiz = quizData[current];
  questionEl.innerText = currentQuiz.question;
  a_text.innerText = currentQuiz.a;
  b_text.innerText = currentQuiz.b;
  c_text.innerText = currentQuiz.c;
  d_text.innerText = currentQuiz.d;
}

function deselectAll() {
  answerEl.forEach((answer) => (answer.checked = false));
}

btn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[current].correct) score++;
    current++;
    if (current < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2>You Answered ${score}/${quizData.length} questions correctly</h2>
      <button onclick="location.reload()">Reload</button>`;
    }
  }
});

function getSelected() {
  let selected = "";
  answerEl.forEach((answer) => {
    if (answer.checked) {
      selected = answer.id;
    }
  });
  return selected;
}

loadQuiz();
