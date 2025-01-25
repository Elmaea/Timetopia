
const questionsData = {
    "Napoleon": [
      {
        "question": "Napoleon is planning his next battle. What should he do?",
        "options": [
          { "text": "Launch a surprise attack", correct: true },
          { "text": "Wait for reinforcements", correct: false }
        ]
      },
      {
        "question": "How does Napoleon handle dissent among his officers?",
        "options": [
          { "text": "Dismiss them immediately", correct: false },
          { "text": "Convince them through strategy", correct: true }
        ]
      },
      {
        "question": "What is Napoleon’s approach to diplomacy?",
        "options": [
          { "text": "Negotiating with peace and unity", correct: false },
          { "text": "Expanding his empire through force", correct: true }
        ]
      }
    ],
    "CatherineTheGreat": [
      {
        "question": "Catherine wants to reform Russia. What does she prioritize?",
        "options": [
          { "text": "Improve education", correct: true },
          { "text": "Increase taxes on nobles", correct: false }
        ]
      },
      {
        "question": "Catherine faces opposition from the nobility. How does she handle it?",
        "options": [
          { "text": "Compromise through incentives", correct: true },
          { "text": "Use military force", correct: false }
        ]
      },
      {
        "question": "Catherine the Great wants to improve Russia’s legal system. What should she do?",
        "options": [
          { "text": "Implement new, progressive laws", correct: true },
          { "text": "Increase control over the peasants", correct: false }
        ]
      }
    ],
    "BenjaminFranklin": [
      {
        "question": "Franklin is drafting a treaty. What does he emphasize?",
        "options": [
          { "text": "Mutual benefits", correct: true },
          { "text": "Demands and threats", correct: false }
        ]
      },
      {
        "question": "How does Franklin respond to a scientific challenge?",
        "options": [
          { "text": "Conduct an experiment", correct: true },
          { "text": "Write a rebuttal letter", correct: false }
        ]
      },
      {
        "question": "Benjamin Franklin is proposing a new invention. What does he focus on?",
        "options": [
          { "text": "Practical benefits for society", correct: true },
          { "text": "Technological superiority", correct: false }
        ]
      }
    ],
    "MarieAntoinette": [
      {
        "question": "Marie is asked to improve her popularity. What does she do?",
        "options": [
          { "text": "Host charity events", correct: true },
          { "text": "Throw lavish parties", correct: false }
        ]
      },
      {
        "question": "What does Marie advise Louis XVI regarding reforms?",
        "options": [
          { "text": "Support moderate reforms", correct: true },
          { "text": "Reject all changes", correct: false }
        ]
      },
      {
        "question": "Marie Antoinette is faced with the crisis of poverty in France. What does she prioritize?",
        "options": [
          { "text": "Aid the poor and provide food", correct: true },
          { "text": "Increase royal spending", correct: false }
        ]
      }
    ],
    "Voltaire": [
      {
        "question": "Voltaire is debating a philosopher. What does he use?",
        "options": [
          { "text": "Wit and satire", correct: true },
          { "text": "Personal attacks", correct: false }
        ]
      },
      {
        "question": "How does Voltaire support freedom of speech?",
        "options": [
          { "text": "Write essays and pamphlets", correct: true },
          { "text": "Stage protests", correct: false }
        ]
      },
      {
        "question": "Voltaire is advocating for social reform. What should he focus on?",
        "options": [
          { "text": "Educating the public and promoting tolerance", correct: true },
          { "text": "Starting revolutions to overthrow governments", correct: false }
        ]
      }
    ],
    "JamesCook": [
      {
        "question": "Cook encounters a new island. What does he do?",
        "options": [
          { "text": "Map the island and document findings", correct: true },
          { "text": "Claim it without exploration", correct: false }
        ]
      },
      {
        "question": "How does Cook interact with the islanders?",
        "options": [
          { "text": "Trade and establish relationships", correct: true },
          { "text": "Force them into submission", correct: false }
        ]
      },
      {
        "question": "James Cook is navigating through the Pacific. How does he manage the crew?",
        "options": [
          { "text": "Maintain discipline and provide scientific opportunities", correct: true },
          { "text": "Let the crew act as they wish", correct: false }
        ]
      }
    ]
  }
  
  

const params = new URLSearchParams(window.location.search);
const figure = params.get("figure");
console.log("Selected figure:", figure); 
let currentQuestionIndex = 0;
let questions = [];

// Set the title of the simulation based on the selected figure
document.getElementById("simulation-title").textContent = `A Day in the Life of ${figure.replace(/([A-Z])/g, " $1").trim()}`;

// Load the questions for the selected figure
questions = questionsData[figure] || [];

// Load the first question
loadQuestion();

// Function to load the current question and its options
function loadQuestion() {
  const questionSection = document.getElementById("question-section");
  const nextButton = document.getElementById("next-button");

  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];

    questionSection.innerHTML = `
      <h2>${currentQuestion.question}</h2>
      <div class="options">
        ${currentQuestion.options
          .map(
            (option, index) =>
              `<button onclick="checkAnswer(${index}, ${option.correct})">${option.text}</button>`
          )
          .join("")}
      </div>
    `;
    nextButton.style.display = "none"; // Hide the "Next" button initially
  } else {
    // End of simulation
    alert("Simulation complete!");
    window.location.href = "historical_figures1.html"; // Redirect to the index page (or any other action)
  }
}

// Function to check the user's answer
function checkAnswer(index, correct) {
  const nextButton = document.getElementById("next-button");

  if (correct) {
    alert("Correct! Great decision.");
    nextButton.style.display = "inline-block"; // Show the "Next" button
  } else {
    alert("That's not what they did! Try again.");
  }
}

// Function to go to the next question
function nextQuestion() {
  currentQuestionIndex++;
  loadQuestion();
}

// Function to go back to the figure selection screen (optional)
function goBack() {
        const goBackButton = document.getElementById('go-back-button');
        goBackButton.style.display = 'inline-block'; 
}