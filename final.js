let current = 0;
let score = 0;
let questions = [];
let time = 10;
let timer;
let userName = prompt("Enter your name:");

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next");
const timerEl = document.getElementById("timer");
const progress = document.getElementById("progress");

/* QUESTIONS (Sample 15 per category - add more if needed) */
const allQuestions = {
  cs: [
    { question: "What does CPU stand for?", options: ["Central Process Unit","Central Processing Unit","Computer Unit","Control Unit"], answer: "Central Processing Unit" },
    { question: "Which language is used for web apps?", options: ["Python","Java","JavaScript","C++"], answer: "JavaScript" },
    { question: "What is RAM?", options: ["Storage","Memory","Processor","Input"], answer: "Memory" },
    { question: "HTML stands for?", options: ["Hyper Text Markup Language","High Text Machine Language","Hyper Tool Markup Language","None"], answer: "Hyper Text Markup Language" },
    { question: "CSS is used for?", options: ["Logic","Styling","Database","Server"], answer: "Styling" },
    { question: "Which is not programming language?", options: ["Python","Java","HTML","C++"], answer: "HTML" },
    { question: "Binary system uses?", options: ["0-9","0 & 1","1-10","None"], answer: "0 & 1" },
    { question: "Keyboard is?", options: ["Output","Input","Storage","None"], answer: "Input" },
    { question: "Full form of URL?", options: ["Uniform Resource Locator","Universal Resource Link","Unique Resource Locator","None"], answer: "Uniform Resource Locator" },
    { question: "Which is database?", options: ["MySQL","HTML","CSS","JS"], answer: "MySQL" },
    { question: "Operating system example?", options: ["Windows","Word","Excel","Chrome"], answer: "Windows" },
    { question: "What is AI?", options: ["Artificial Intelligence","Automatic Input","Auto Index","None"], answer: "Artificial Intelligence" },
    { question: "Which is frontend?", options: ["HTML","Python","Java","C"], answer: "HTML" },
    { question: "Which is backend?", options: ["CSS","HTML","Python","Bootstrap"], answer: "Python" },
    { question: "Cloud example?", options: ["AWS","Mouse","Keyboard","Monitor"], answer: "AWS" }
  ],

  math: [
    { question: "5 + 3 = ?", options: ["6","7","8","9"], answer: "8" },
    { question: "10 - 4 = ?", options: ["5","6","7","8"], answer: "6" },
    { question: "2 × 6 = ?", options: ["10","12","14","16"], answer: "12" },
    { question: "12 ÷ 3 = ?", options: ["2","3","4","5"], answer: "4" },
    { question: "Square of 5?", options: ["10","20","25","30"], answer: "25" },
    { question: "√16 = ?", options: ["2","3","4","5"], answer: "4" },
    { question: "15 + 5 = ?", options: ["18","19","20","21"], answer: "20" },
    { question: "9 × 9 = ?", options: ["72","81","90","99"], answer: "81" },
    { question: "100 ÷ 10 = ?", options: ["5","10","15","20"], answer: "10" },
    { question: "7 + 8 = ?", options: ["13","14","15","16"], answer: "15" },
    { question: "6 × 7 = ?", options: ["40","42","48","36"], answer: "42" },
    { question: "20 - 9 = ?", options: ["10","11","12","13"], answer: "11" },
    { question: "Cube of 2?", options: ["4","6","8","10"], answer: "8" },
    { question: "Perimeter of square?", options: ["4a","2a","a²","None"], answer: "4a" },
    { question: "Value of pi?", options: ["3.14","2.14","4.13","3.41"], answer: "3.14" }
  ],

  gk: [
    { question: "Capital of India?", options: ["Delhi","Mumbai","Kolkata","Chennai"], answer: "Delhi" },
    { question: "National animal?", options: ["Lion","Tiger","Elephant","Dog"], answer: "Tiger" },
    { question: "National bird?", options: ["Parrot","Peacock","Crow","Eagle"], answer: "Peacock" },
    { question: "Currency of India?", options: ["Dollar","Rupee","Euro","Yen"], answer: "Rupee" },
    { question: "Largest country?", options: ["USA","India","Russia","China"], answer: "Russia" },
    { question: "Smallest country?", options: ["Nepal","Bhutan","Vatican","Maldives"], answer: "Vatican" },
    { question: "National flower?", options: ["Rose","Lotus","Lily","Sunflower"], answer: "Lotus" },
    { question: "Independence year?", options: ["1945","1946","1947","1948"], answer: "1947" },
    { question: "Prime Minister?", options: ["Modi","Rahul","Nehru","Gandhi"], answer: "Modi" },
    { question: "National sport?", options: ["Cricket","Hockey","Football","Tennis"], answer: "Hockey" },
    { question: "Largest ocean?", options: ["Atlantic","Indian","Pacific","Arctic"], answer: "Pacific" },
    { question: "Mount Everest in?", options: ["India","China","Nepal","Bhutan"], answer: "Nepal" },
    { question: "Sun rises in?", options: ["North","South","East","West"], answer: "East" },
    { question: "Water formula?", options: ["CO2","H2O","O2","NaCl"], answer: "H2O" },
    { question: "Earth shape?", options: ["Flat","Round","Square","Triangle"], answer: "Round" }
  ],

  history: [
    { question: "First PM of India?", options: ["Nehru","Gandhi","Patel","Modi"], answer: "Nehru" },
    { question: "Who discovered India?", options: ["Columbus","Vasco da Gama","Cook","None"], answer: "Vasco da Gama" },
    { question: "Freedom year?", options: ["1945","1946","1947","1948"], answer: "1947" },
    { question: "Father of Nation?", options: ["Nehru","Gandhi","Tagore","Ambedkar"], answer: "Gandhi" },
    { question: "Taj Mahal built by?", options: ["Akbar","Shah Jahan","Babur","Aurangzeb"], answer: "Shah Jahan" },
    { question: "Battle of Plassey?", options: ["1757","1857","1900","1800"], answer: "1757" },
    { question: "Quit India Movement?", options: ["1942","1930","1920","1919"], answer: "1942" },
    { question: "First President?", options: ["Rajendra Prasad","Nehru","Patel","Kalam"], answer: "Rajendra Prasad" },
    { question: "Jallianwala Bagh?", options: ["1919","1920","1930","1940"], answer: "1919" },
    { question: "Who wrote Gita?", options: ["Vyasa","Valmiki","Kalidas","None"], answer: "Vyasa" },
    { question: "Mughal founder?", options: ["Akbar","Babur","Humayun","Shah"], answer: "Babur" },
    { question: "British rule started?", options: ["1600","1700","1800","1500"], answer: "1600" },
    { question: "Ashoka dynasty?", options: ["Maurya","Gupta","Mughal","None"], answer: "Maurya" },
    { question: "Red Fort built by?", options: ["Akbar","Shah Jahan","Babur","None"], answer: "Shah Jahan" },
    { question: "1857 revolt?", options: ["First war","Second war","Third war","None"], answer: "First war" }
  ],

  geo: [
    { question: "Largest ocean?", options: ["Atlantic","Indian","Pacific","Arctic"], answer: "Pacific" },
    { question: "Longest river?", options: ["Ganga","Nile","Amazon","Yangtze"], answer: "Nile" },
    { question: "Highest mountain?", options: ["Everest","K2","Kanchenjunga","Lhotse"], answer: "Everest" },
    { question: "Desert in India?", options: ["Thar","Sahara","Gobi","Kalahari"], answer: "Thar" },
    { question: "Capital of USA?", options: ["NY","LA","Washington DC","Chicago"], answer: "Washington DC" },
    { question: "Earth layers?", options: ["2","3","4","5"], answer: "3" },
    { question: "Water % on Earth?", options: ["50","60","70","80"], answer: "70" },
    { question: "India continent?", options: ["Asia","Europe","Africa","Australia"], answer: "Asia" },
    { question: "Coldest place?", options: ["Antarctica","Arctic","Russia","Canada"], answer: "Antarctica" },
    { question: "Hot desert?", options: ["Sahara","Thar","Gobi","None"], answer: "Sahara" },
    { question: "Latitude lines?", options: ["Horizontal","Vertical","Both","None"], answer: "Horizontal" },
    { question: "Longitude lines?", options: ["Horizontal","Vertical","Both","None"], answer: "Vertical" },
    { question: "Equator is?", options: ["0°","90°","45°","180°"], answer: "0°" },
    { question: "Largest continent?", options: ["Asia","Africa","Europe","America"], answer: "Asia" },
    { question: "Smallest continent?", options: ["Australia","Europe","Antarctica","Africa"], answer: "Australia" }
  ]
};

/* START QUIZ */
function startQuiz(category) {
  document.getElementById("category-box").classList.add("fade-out");

  setTimeout(() => {
    document.getElementById("category-box").style.display = "none";
    document.querySelector(".quiz-container").style.display = "block";

    if (category === "random") {
      // Combine all questions
      let combined = [
        ...allQuestions.cs,
        ...allQuestions.math,
        ...allQuestions.gk,
        ...allQuestions.history,
        ...allQuestions.geo
      ];

      // Shuffle + pick 15
      questions = combined
        .sort(() => 0.5 - Math.random())
        .slice(0, 15);

    } else {
      // Normal category → random 15
      questions = allQuestions[category]
        .sort(() => 0.5 - Math.random())
        .slice(0, 15);
    }

    current = 0;
    score = 0;

    loadQuestion();
  }, 500);
}
  
/* LOAD QUESTION */
function loadQuestion() {
  clearInterval(timer);
  time = 10;
  timerEl.innerText = time;

  timer = setInterval(() => {
    time--;
    timerEl.innerText = time;
    if (time === 0) nextBtn.click();
  }, 1000);

  let q = questions[current];
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    let btn = document.createElement("button");
    btn.innerText = option;

    btn.onclick = () => {
      clearInterval(timer);

      if (option === q.answer) {
        btn.classList.add("correct");
        score++;
      } else {
        btn.classList.add("wrong");

        Array.from(optionsEl.children).forEach(b => {
          if (b.innerText === q.answer) {
            b.classList.add("correct");
          }
        });
      }

      Array.from(optionsEl.children).forEach(b => b.disabled = true);
    };

    optionsEl.appendChild(btn);
  });

  progress.style.width = ((current / questions.length) * 100) + "%";
}

/* NEXT BUTTON */
nextBtn.onclick = () => {
  current++;

  if (current < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

/* RESULT */
function showResult() {
  let stars = "⭐⭐";

  if (score === questions.length) stars = "⭐⭐⭐⭐⭐";
  else if (score >= 10) stars = "⭐⭐⭐⭐";
  else if (score >= 7) stars = "⭐⭐⭐";

  questionEl.innerHTML = `
    Score: ${score}/${questions.length} <br>
    Rating: ${stars}
  `;

  optionsEl.innerHTML = "";
  nextBtn.innerText = "Get Certificate";
  nextBtn.onclick = generateCertificate;
}

/* CERTIFICATE */
function generateCertificate() {
  document.body.innerHTML = `
    <div style="text-align:center; margin-top:100px;">
      <h1>🎓 Certificate of Completion</h1>
      <h2>${userName}</h2>
      <p>has completed the quiz</p>
      <h3>Score: ${score}/${questions.length}</h3>
      <button onclick="window.print()">Print</button>
    </div>
  `;
}