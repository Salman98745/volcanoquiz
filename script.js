let score = 0;
let currentVolcano = {};

// Function to load a new random volcano
function loadRandomVolcano() {
  fetch("volcanoes.json")
    .then((response) => response.json())
    .then((data) => {
      currentVolcano = data[Math.floor(Math.random() * data.length)];
      document.getElementById("volcano-name").textContent = currentVolcano.name;
    });
}

// Load the initial random volcano
loadRandomVolcano();

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.toLowerCase();
  const correctCountry = currentVolcano.country.toLowerCase();

  if (userAnswer === correctCountry) {
    score++;
    document.getElementById("score").textContent = `Score: ${score}`;
    alert("Верно!");
    // Load a new random volcano
    loadRandomVolcano();
  } else {
    alert("Неправильно! Счет: " + score);
    score = 0;
    document.getElementById("score").textContent = `Score: ${score}`;
  }

  // Reset the input field
  document.getElementById("answer").value = "";
}
