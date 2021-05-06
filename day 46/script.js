const data = [
  {
    question: "Qual idioma é executado em um navegador web?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "O que CSS significa?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simples Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answers = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = data[currentQuiz];

  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function deselectAnswers() {
  answers.forEach((answer) => (answer.checked = false));
}

function getSelected() {
  let answer;

  answers.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === data[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < data.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2> Você respondeu ${score}/${data.length} perguntas corretamente</h2>

        <button onclick="location.reload()">Recomeçar</button>
      `;
    }
  }
});
