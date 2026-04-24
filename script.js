const plantBank = [
  {
    commonName: "Sunflower",
    scientificName: "Helianthus annuus",
    image: {
      src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23cfe7ff'/><rect y='210' width='400' height='90' fill='%2396c06b'/><circle cx='200' cy='120' r='46' fill='%2365381f'/><g fill='%23f4c542'><ellipse cx='200' cy='48' rx='18' ry='34'/><ellipse cx='200' cy='192' rx='18' ry='34'/><ellipse cx='128' cy='120' rx='34' ry='18'/><ellipse cx='272' cy='120' rx='34' ry='18'/><ellipse cx='148' cy='68' rx='18' ry='34' transform='rotate(-45 148 68)'/><ellipse cx='252' cy='68' rx='18' ry='34' transform='rotate(45 252 68)'/><ellipse cx='148' cy='172' rx='18' ry='34' transform='rotate(45 148 172)'/><ellipse cx='252' cy='172' rx='18' ry='34' transform='rotate(-45 252 172)'/></g><rect x='194' y='164' width='12' height='75' rx='6' fill='%2345843d'/><ellipse cx='170' cy='198' rx='28' ry='12' fill='%235c9c4d' transform='rotate(-28 170 198)'/><ellipse cx='230' cy='188' rx='28' ry='12' fill='%235c9c4d' transform='rotate(28 230 188)'/></svg>",
      alt: "Illustration of a sunflower with bright yellow petals and a tall green stem."
    },
    clues: [
      "This plant is known for turning its flower head toward the sun when young.",
      "It produces large yellow petals around a dark center.",
      "Its seeds are a popular snack and are often used in bird feed."
    ]
  },
  {
    commonName: "Lavender",
    scientificName: "Lavandula angustifolia",
    image: {
      src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23f4efff'/><rect y='230' width='400' height='70' fill='%23b4cc8b'/><g stroke='%23628743' stroke-width='4' stroke-linecap='round'><path d='M145 236 C150 190 140 145 140 105'/><path d='M185 236 C190 194 180 150 180 96'/><path d='M220 236 C226 192 218 146 220 88'/><path d='M260 236 C265 194 256 150 258 102'/></g><g fill='%23846ad9'><ellipse cx='140' cy='102' rx='10' ry='18'/><ellipse cx='140' cy='82' rx='10' ry='18'/><ellipse cx='180' cy='92' rx='10' ry='18'/><ellipse cx='180' cy='72' rx='10' ry='18'/><ellipse cx='220' cy='84' rx='10' ry='18'/><ellipse cx='220' cy='64' rx='10' ry='18'/><ellipse cx='258' cy='98' rx='10' ry='18'/><ellipse cx='258' cy='78' rx='10' ry='18'/></g></svg>",
      alt: "Illustration of lavender stems with soft purple flower spikes."
    },
    clues: [
      "This fragrant plant is commonly used in oils, soaps, and sachets.",
      "It has narrow gray-green leaves and purple flower spikes.",
      "It is often associated with calming scents and pollinator gardens."
    ]
  },
  {
    commonName: "Venus Flytrap",
    scientificName: "Dionaea muscipula",
    image: {
      src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23dff6f2'/><rect y='220' width='400' height='80' fill='%2380b95d'/><g stroke='%23478546' stroke-width='6' stroke-linecap='round'><path d='M155 225 C160 190 145 168 130 145'/><path d='M205 225 C205 190 210 168 225 140'/><path d='M255 225 C250 190 265 168 280 145'/></g><g><path d='M104 126 C120 92 158 92 174 126 C156 138 122 138 104 126' fill='%2383d18b' stroke='%23478546' stroke-width='4'/><path d='M104 126 C120 160 158 160 174 126' fill='%23c9687d' stroke='%23478546' stroke-width='4'/><path d='M202 120 C218 86 256 86 272 120 C254 132 220 132 202 120' fill='%2383d18b' stroke='%23478546' stroke-width='4'/><path d='M202 120 C218 154 256 154 272 120' fill='%23c9687d' stroke='%23478546' stroke-width='4'/><path d='M228 132 C244 98 282 98 298 132 C280 144 246 144 228 132' fill='%2383d18b' stroke='%23478546' stroke-width='4'/><path d='M228 132 C244 166 282 166 298 132' fill='%23c9687d' stroke='%23478546' stroke-width='4'/></g></svg>",
      alt: "Illustration of several Venus flytrap traps opened above green stems."
    },
    clues: [
      "This species catches insects using hinged traps.",
      "It is native to nutrient-poor bogs in the southeastern United States.",
      "Its leaves snap shut when trigger hairs are touched."
    ]
  },
  {
    commonName: "Aloe Vera",
    scientificName: "Aloe vera",
    image: {
      src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23f0f7df'/><ellipse cx='200' cy='250' rx='110' ry='28' fill='%23c48d56'/><g fill='%235aa66a'><path d='M200 240 C190 190 188 150 198 92 C208 150 210 190 200 240'/><path d='M180 238 C156 194 150 155 166 112 C184 154 192 194 180 238'/><path d='M220 238 C244 194 250 155 234 112 C216 154 208 194 220 238'/><path d='M160 236 C126 206 116 174 126 136 C154 170 166 204 160 236'/><path d='M240 236 C274 206 284 174 274 136 C246 170 234 204 240 236'/></g></svg>",
      alt: "Illustration of an aloe vera plant with thick green leaves in a low pot."
    },
    clues: [
      "This succulent stores water in thick fleshy leaves.",
      "Its gel is often used to soothe minor skin irritation.",
      "It grows in a rosette form with serrated leaf edges."
    ]
  },
  {
    commonName: "Japanese Maple",
    scientificName: "Acer palmatum",
    image: {
      src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23fff0df'/><rect y='228' width='400' height='72' fill='%23d1b37d'/><path d='M197 230 C192 190 194 160 200 122 C206 160 208 192 203 230' fill='%23724b2d'/><g fill='%23cf5a39'><path d='M200 106 l18 -28 l6 23 l28 -6 l-17 23 l28 13 l-30 5 l15 25 l-27 -13 l-7 28 l-12 -26 l-26 14 l14 -25 l-30 -7 l28 -12 l-18 -22 l28 5 l3 -22 z'/><path d='M150 146 l14 -20 l5 17 l19 -5 l-12 17 l18 8 l-20 3 l11 18 l-18 -9 l-5 20 l-9 -18 l-18 10 l10 -18 l-21 -4 l19 -8 l-12 -17 l19 4 l2 -16 z'/><path d='M252 150 l14 -20 l5 17 l19 -5 l-12 17 l18 8 l-20 3 l11 18 l-18 -9 l-5 20 l-9 -18 l-18 10 l10 -18 l-21 -4 l19 -8 l-12 -17 l19 4 l2 -16 z'/></g></svg>",
      alt: "Illustration of a Japanese maple with red-orange leaves and a slender trunk."
    },
    clues: [
      "This small tree is prized for deeply lobed leaves and vivid fall color.",
      "Its botanical name begins with the same genus as sugar maple.",
      "It is a favorite ornamental in gardens with a graceful branching habit."
    ]
  },
  {
    commonName: "Peace Lily",
    scientificName: "Spathiphyllum",
    image: {
      src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23eef7f0'/><ellipse cx='200' cy='250' rx='96' ry='28' fill='%23a4744a'/><g fill='%234f9257'><path d='M160 236 C138 204 136 170 160 134 C176 170 176 206 160 236'/><path d='M205 238 C184 198 186 162 206 124 C222 162 224 200 205 238'/><path d='M245 234 C228 198 232 166 252 136 C266 170 264 202 245 234'/></g><g><path d='M176 168 C164 132 196 106 219 132 C212 162 194 178 176 168' fill='%23ffffff' stroke='%23d8ddd8' stroke-width='3'/><rect x='196' y='128' width='8' height='48' rx='4' fill='%23e0cb63'/></g></svg>",
      alt: "Illustration of a peace lily with broad green leaves and a white bloom."
    },
    clues: [
      "This popular houseplant is known for white hood-like blooms.",
      "It tolerates lower light better than many flowering indoor plants.",
      "Its glossy leaves and drooping habit often signal when it needs water."
    ]
  }
];

const state = {
  mode: "multiple",
  currentPlant: null,
  triesLeft: 3,
  roundOver: false,
  selectedChoice: null
};

const clueList = document.getElementById("clue-list");
const answerArea = document.getElementById("answer-area");
const triesLeftEl = document.getElementById("tries-left");
const roundStatusEl = document.getElementById("round-status");
const feedbackEl = document.getElementById("feedback");
const plantRevealEl = document.getElementById("plant-reveal");
const revealTitleEl = document.getElementById("reveal-title");
const revealImageEl = document.getElementById("reveal-image");
const revealCaptionEl = document.getElementById("reveal-caption");
const submitButton = document.getElementById("submit-button");
const newRoundButton = document.getElementById("new-round-button");
const modeButtons = document.querySelectorAll(".mode-button");

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function normalizeGuess(value) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function buildMultipleChoiceOptions(correctPlant) {
  const distractors = shuffle(
    plantBank.filter((plant) => plant.commonName !== correctPlant.commonName)
  ).slice(0, 3);

  return shuffle([correctPlant, ...distractors]);
}

function renderClues() {
  clueList.innerHTML = "";
  state.currentPlant.clues.forEach((clue) => {
    const item = document.createElement("li");
    item.textContent = clue;
    clueList.appendChild(item);
  });
}

function renderAnswerArea() {
  answerArea.innerHTML = "";
  state.selectedChoice = null;

  if (state.mode === "multiple") {
    const label = document.createElement("p");
    label.className = "answer-label";
    label.textContent = "Select one answer:";

    const choicesGrid = document.createElement("div");
    choicesGrid.className = "choices-grid";

    buildMultipleChoiceOptions(state.currentPlant).forEach((plant) => {
      const button = document.createElement("button");
      button.className = "choice-button";
      button.type = "button";
      button.textContent = `${plant.commonName} (${plant.scientificName})`;
      button.addEventListener("click", () => {
        state.selectedChoice = plant.commonName;
        document.querySelectorAll(".choice-button").forEach((choice) => {
          choice.classList.remove("selected");
        });
        button.classList.add("selected");
      });
      choicesGrid.appendChild(button);
    });

    answerArea.append(label, choicesGrid);
    return;
  }

  const label = document.createElement("label");
  label.className = "answer-label";
  label.setAttribute("for", "guess-input");
  label.textContent = "Type the common name or scientific name:";

  const input = document.createElement("input");
  input.id = "guess-input";
  input.className = "guess-input";
  input.type = "text";
  input.placeholder = "Example: Sunflower or Helianthus annuus";

  answerArea.append(label, input);
}

function hideReveal() {
  plantRevealEl.classList.add("hidden");
  revealImageEl.removeAttribute("src");
  revealImageEl.alt = "";
  revealCaptionEl.textContent = "";
}

function showReveal(message) {
  revealTitleEl.textContent = state.currentPlant.commonName;
  revealImageEl.src = state.currentPlant.image.src;
  revealImageEl.alt = state.currentPlant.image.alt;
  revealCaptionEl.textContent = message;
  plantRevealEl.classList.remove("hidden");
}

function updateStatus(statusText, tone) {
  roundStatusEl.textContent = statusText;
  roundStatusEl.className = `status-value ${tone}`;
  triesLeftEl.textContent = String(state.triesLeft);
}

function setFeedback(message) {
  feedbackEl.textContent = message;
}

function startRound() {
  state.currentPlant = plantBank[Math.floor(Math.random() * plantBank.length)];
  state.triesLeft = 3;
  state.roundOver = false;
  renderClues();
  renderAnswerArea();
  hideReveal();
  updateStatus("In progress", "neutral");
  setFeedback("A new plant is ready. Read the clues and make your guess.");
}

function getCurrentGuess() {
  if (state.mode === "multiple") {
    return state.selectedChoice || "";
  }

  const input = document.getElementById("guess-input");
  return input ? input.value : "";
}

function evaluateGuess() {
  if (state.roundOver) {
    setFeedback("This round is over. Start a new plant to keep playing.");
    return;
  }

  const rawGuess = getCurrentGuess();
  const guess = normalizeGuess(rawGuess);

  if (!guess) {
    setFeedback("Enter or select a guess before submitting.");
    return;
  }

  const commonName = normalizeGuess(state.currentPlant.commonName);
  const scientificName = normalizeGuess(state.currentPlant.scientificName);
  const isCorrect = guess === commonName || guess === scientificName;

  if (isCorrect) {
    state.roundOver = true;
    updateStatus("You won!", "win");
    showReveal(`Nice work. You identified ${state.currentPlant.commonName} correctly.`);
    setFeedback(
      `Correct! The plant was ${state.currentPlant.commonName} (${state.currentPlant.scientificName}).`
    );
    return;
  }

  state.triesLeft -= 1;

  if (state.triesLeft <= 0) {
    state.roundOver = true;
    updateStatus("You lost", "loss");
    showReveal(`The answer was ${state.currentPlant.commonName} (${state.currentPlant.scientificName}).`);
    setFeedback(
      `Out of tries. The correct answer was ${state.currentPlant.commonName} (${state.currentPlant.scientificName}).`
    );
    return;
  }

  updateStatus("In progress", "neutral");
  setFeedback(`Not quite. Try again. You have ${state.triesLeft} tries left.`);
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.mode = button.dataset.mode;
    modeButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderAnswerArea();
    setFeedback(
      state.mode === "multiple"
        ? "Multiple choice mode selected. Pick one of the four plant options."
        : "Open ended mode selected. Type the plant's common or scientific name."
    );
  });
});

submitButton.addEventListener("click", evaluateGuess);
newRoundButton.addEventListener("click", startRound);

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && state.mode === "open") {
    evaluateGuess();
  }
});

startRound();
