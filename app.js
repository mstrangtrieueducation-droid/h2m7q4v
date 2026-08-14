const A = "assets/images/";
const TOTAL_POINTS = 50;

const choice = (id, prompt, options, answer, explanation, image = "") => ({
  id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1
});
const input = (id, prompt, answers, explanation, image = "") => ({
  id, type: "input", prompt, answers, explanation, image, points: 1
});

const sections = [
  {
    key: "A", label: "A", title: "Look and circle the correct words.",
    note: "Choose the word that names each picture.", points: 3,
    questions: [
      choice("A1", "1. Choose the correct word.", ["Jellyfish", "Starfish"], "Jellyfish", "The picture shows jellyfish: soft sea animals with long tentacles.", A + "page1-img2-385x275.png"),
      choice("A2", "2. Choose the correct word.", ["Snowflake", "Butterfly"], "Butterfly", "The insect has two large patterned wings, so it is a butterfly.", A + "page1-img3-385x275.png"),
      choice("A3", "3. Choose the correct word.", ["Birdhouse", "Honeybee"], "Birdhouse", "This is a small house made for a bird: a birdhouse.", A + "page1-img6-385x275.png")
    ]
  },
  {
    key: "B", label: "B", title: "Look and write the words.",
    note: "Use the word box. One word is not needed.", points: 6,
    sectionImage: A + "page1-img5-1430x550.png",
    wordBank: ["body", "ears", "eyes", "feathers", "head", "legs", "mouth"],
    questions: [
      input("B1", "1.", ["ears"], "Number 1 points to the rabbit's ears."),
      input("B2", "2.", ["eyes"], "Number 2 points to the rabbit's eyes."),
      input("B3", "3.", ["mouth"], "Number 3 points to the rabbit's mouth."),
      input("B4", "4.", ["head"], "Number 4 points to the rabbit's head."),
      input("B5", "5.", ["body"], "Number 5 points to the rabbit's body."),
      input("B6", "6.", ["legs"], "Number 6 points to the rabbit's legs. Feathers is the unused word.")
    ]
  },
  {
    key: "C", label: "C", title: "Listen and complete the sentences.",
    note: "Listen to Track 3.42 and write one word in each gap.", points: 3,
    audio: "assets/audio/Listening-C.mp3",
    questions: [
      input("C1", "1. Birds have ___.", ["wings"], "Birds use their wings to fly."),
      input("C2", "2. Elephants and bears are ___.", ["mammals"], "Elephants and bears are mammals: they are warm-blooded and feed milk to their young."),
      input("C3", "3. Alligators have ___ on their bodies.", ["scales"], "An alligator's body is covered with scales.")
    ]
  },
  {
    key: "D", label: "D", title: "Circle the correct words.",
    note: "Choose the correct subject or object pronoun.", points: 3,
    questions: [
      choice("D1", "1. Me / I am friends with Cara.", ["Me", "I"], "I", "I is the subject of am. Me is an object pronoun."),
      choice("D2", "2. Please teach us / we how to dance.", ["us", "we"], "us", "After the verb teach, use the object pronoun us."),
      choice("D3", "3. Bears have fur to keep them / it warm.", ["them", "it"], "them", "Bears is plural, so the matching object pronoun is them.")
    ]
  },
  {
    key: "E", label: "E", title: "Look and complete the sentences. Use her, him, it, or them.",
    note: "Choose the object pronoun that matches the person, animal, or group in each picture.", points: 4,
    questions: [
      input("E1", "1. Look at ___.", ["him"], "The girl is pointing to one boy. For one male person, use him.", A + "page2-img1-439x220.png"),
      input("E2", "2. Look at ___.", ["them"], "The girl is pointing to a group of people. For more than one person, use them.", A + "page2-img3-440x198.png"),
      input("E3", "3. Look at ___.", ["it"], "The girl is holding one butterfly. For one animal or thing, use it.", A + "page2-img2-440x220.png"),
      input("E4", "4. Look at ___.", ["her"], "The girl is pointing to one woman. For one female person, use her.", A + "page2-img4-440x211.png")
    ]
  },
  {
    key: "F", label: "F", title: "Write the words in the correct order to make questions. Look at the pictures and complete the answers. Use pronouns.",
    note: "Each number has two answers: write the full question, then choose the correct pronoun.", points: 6,
    questions: [
      {
        id: "F1", type: "paired", points: 2, prompt: "1. fish / Do / gills / have", image: A + "page2-img5-385x275.png",
        parts: [
          { key: "question", label: "Full question", type: "input", answers: ["Do fish have gills?", "Do fish have gills"], explanation: "Use Do + plural subject fish + base verb have: Do fish have gills?" },
          { key: "pronoun", label: "Yes, ___ have them.", type: "choice", options: ["they", "it"], answers: ["they"], explanation: "Fish is plural here, so use they." }
        ]
      },
      {
        id: "F2", type: "paired", points: 2, prompt: "2. feathers / Does / lion / a / have", image: A + "page2-img6-385x275.png",
        parts: [
          { key: "question", label: "Full question", type: "input", answers: ["Does a lion have feathers?", "Does a lion have feathers"], explanation: "Use Does + singular subject a lion + base verb have." },
          { key: "pronoun", label: "No, ___ doesn't have them.", type: "choice", options: ["they", "it"], answers: ["it"], explanation: "A lion is one animal, so use it." }
        ]
      },
      {
        id: "F3", type: "paired", points: 2, prompt: "3. wings / Do / help / birds / fly", image: A + "page3-img8-385x275.png",
        parts: [
          { key: "question", label: "Full question", type: "input", answers: ["Do wings help birds fly?", "Do wings help birds fly"], explanation: "Use Do + plural subject wings + base verb help." },
          { key: "pronoun", label: "Yes, ___ help them.", type: "choice", options: ["they", "it"], answers: ["they"], explanation: "Wings is plural, so use they." }
        ]
      }
    ]
  },
  {
    key: "G", label: "G", title: "Complete the sentences.",
    note: "Use the words in the box. One word is not needed.", points: 4,
    wordBank: ["berries", "hunt", "patient", "pinecones", "worm"],
    questions: [
      input("G1", "1. Look! That bird has a ___. It's long and pink!", ["worm"], "A long, pink animal that a bird can eat is a worm."),
      input("G2", "2. ___ are healthy. I eat them every day.", ["berries"], "Berries are small fruits. The plural verb are matches berries."),
      input("G3", "3. Animals in nature ___ for their food.", ["hunt"], "Wild animals hunt when they look for and catch food."),
      input("G4", "4. ___ grow on trees, and they aren't soft.", ["pinecones"], "Pinecones grow on pine trees and have a hard surface.")
    ]
  },
  {
    key: "H1", label: "H", title: "Look and complete the words.",
    note: "Use the picture and the given letters to complete each word.", points: 3,
    questions: [
      input("H1", "1. s _ u _ _ k", ["squawk"], "The bird is making a loud, rough sound. The verb is squawk.", A + "page3-img1-337x241.png"),
      input("H2", "2. _ i _ h _", ["fight"], "The two animals are attacking each other. The verb is fight.", A + "page3-img2-338x241.png"),
      input("H3", "3. _ s _ a p _", ["escape"], "The animal is running away from a place. The verb is escape.", A + "page3-img5-337x241.png")
    ]
  },
  {
    key: "I", label: "I", title: "Listen and check the correct picture. Write the word.",
    note: "Each number has two answers: select picture a or b, then write the word you hear.", points: 6,
    audio: "assets/audio/Listening-I.mp3",
    questions: [
      {
        id: "I1", type: "pictureWord", points: 2, prompt: "1.",
        pictures: [{ value: "a", image: A + "page3-img3-175x179.png" }, { value: "b", image: A + "page3-img4-192x172.png" }],
        parts: [
          { key: "picture", label: "Correct picture", type: "pictureChoice", answers: ["a"], explanation: "The audio describes a fierce animal. Picture a shows the fierce expression." },
          { key: "word", label: "Word", type: "input", answers: ["fierce"], explanation: "Fierce means aggressive, strong, or frightening." }
        ]
      },
      {
        id: "I2", type: "pictureWord", points: 2, prompt: "2.",
        pictures: [{ value: "a", image: A + "page3-img6-102x109.png" }, { value: "b", image: A + "page3-img7-107x111.png" }],
        parts: [
          { key: "picture", label: "Correct picture", type: "pictureChoice", answers: ["b"], explanation: "Picture b shows an ant carrying a leaf, which represents strength." },
          { key: "word", label: "Word", type: "input", answers: ["strong"], explanation: "Strong means having a lot of physical power." }
        ]
      },
      {
        id: "I3", type: "pictureWord", points: 2, prompt: "3.",
        pictures: [{ value: "a", image: A + "page4-img3-185x192.png" }, { value: "b", image: A + "page4-img4-127x114.png" }],
        parts: [
          { key: "picture", label: "Correct picture", type: "pictureChoice", answers: ["a"], explanation: "Picture a shows the gentle animal described in the audio." },
          { key: "word", label: "Word", type: "input", answers: ["gentle"], explanation: "Gentle means calm, kind, and not rough." }
        ]
      }
    ]
  },
  {
    key: "J", label: "J", title: "Look and read. Write True or False.",
    note: "Use the frequency chart and the key below it.", points: 4,
    sectionImage: A + "section-j-table.png",
    questions: [
      choice("J1", "1. Martin always plays soccer.", ["True", "False"], "False", "Martin never plays soccer, so the statement is false."),
      choice("J2", "2. He usually eats fruit.", ["True", "False"], "False", "Martin sometimes eats fruit, not usually."),
      choice("J3", "3. Sara sometimes plays the piano.", ["True", "False"], "True", "Sara has two check marks for the piano, which means sometimes."),
      choice("J4", "4. She hardly ever goes to the park.", ["True", "False"], "False", "Sara usually goes to the park, so the statement is false.")
    ]
  },
  {
    key: "K", label: "K", title: "Circle the correct words.",
    note: "Choose the adverb that matches the number of check marks in the chart.", points: 4,
    questions: [
      choice("K1", "1. Martin hardly ever / never plays the piano.", ["hardly ever", "never"], "never", "The chart shows an X for Martin playing the piano. X means never."),
      choice("K2", "2. He sometimes / usually goes to the park.", ["sometimes", "usually"], "sometimes", "Two check marks mean sometimes."),
      choice("K3", "3. Sara usually / sometimes eats fruit.", ["usually", "sometimes"], "usually", "Sara has four check marks for eating fruit. In the chart key, four check marks mean usually."),
      choice("K4", "4. She never / hardly ever plays soccer.", ["never", "hardly ever"], "hardly ever", "One check mark means hardly ever.")
    ]
  },
  {
    key: "L", label: "L", title: "Write the words in the correct order to make sentences.",
    note: "Write each group of words as a complete sentence.", points: 4,
    questions: [
      input("L1", "1. drink / I / milk / never", ["I never drink milk.", "I never drink milk"], "Place the frequency adverb before the main verb: I never drink milk."),
      input("L2", "2. lunch / They / eat / always", ["They always eat lunch.", "They always eat lunch"], "Always goes before the main verb eat: They always eat lunch."),
      input("L3", "3. football / usually / He / plays", ["He usually plays football.", "He usually plays football"], "Usually goes before the main verb plays: He usually plays football."),
      input("L4", "4. hardly ever / She / TV / watches", ["She hardly ever watches TV.", "She hardly ever watches TV"], "Hardly ever goes before the main verb watches: She hardly ever watches TV.")
    ]
  }
];

const form = document.querySelector("#testForm");
const root = document.querySelector("#sections");
const jumpRoot = document.querySelector("#sectionJump");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const results = document.querySelector("#results");
const answerReview = document.querySelector("#answerReview");
const scoreValue = document.querySelector("#scoreValue");
const scoreMessage = document.querySelector("#scoreMessage");
const STORAGE_KEY = "discover2-written-test1-v2";

validateTest();
render();
restore();
update();

form.addEventListener("click", (event) => {
  const button = event.target.closest("[data-choice]");
  if (!button) return;
  const group = button.closest("[data-choice-group]");
  group.querySelectorAll("[data-choice]").forEach((item) => {
    const selected = item === button;
    item.classList.toggle("is-selected", selected);
    item.setAttribute("aria-pressed", selected ? "true" : "false");
  });
  group.dataset.value = button.dataset.value;
  button.closest(".question").classList.remove("is-missing");
  save();
  update();
});

form.addEventListener("input", (event) => {
  if (!event.target.matches("input")) return;
  event.target.closest(".question")?.classList.remove("is-missing");
  save();
  update();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelectorAll(".is-missing").forEach((item) => item.classList.remove("is-missing"));
  const incomplete = missing();
  if (incomplete.length) {
    incomplete.forEach((item) => item.closest(".question").classList.add("is-missing"));
    document.querySelector("#submitHelp").textContent = `The test is missing ${incomplete.length} response${incomplete.length === 1 ? "" : "s"}. Complete the highlighted item before viewing the answers.`;
    incomplete[0].scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  grade();
});

document.querySelector("#restartTest").onclick = () => {
  if (confirm("Clear every answer and start this test again?")) {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  }
};

document.querySelector("#reviewMistakes").onclick = () => {
  (document.querySelector(".review-card.is-wrong") || answerReview).scrollIntoView({ behavior: "smooth" });
};

function validateTest() {
  const sectionPoints = sections.reduce((total, section) => total + section.points, 0);
  const questionPoints = sections.reduce((total, section) => total + section.questions.reduce((sum, question) => sum + question.points, 0), 0);
  const ids = sections.flatMap((section) => section.questions.map((question) => question.id));
  if (sectionPoints !== TOTAL_POINTS || questionPoints !== TOTAL_POINTS) throw new Error(`Test points do not total ${TOTAL_POINTS}.`);
  if (new Set(ids).size !== ids.length) throw new Error("Question IDs must be unique.");
  sections.forEach((section) => {
    const points = section.questions.reduce((sum, question) => sum + question.points, 0);
    if (points !== section.points) throw new Error(`Section ${section.key} has ${points} question points but declares ${section.points}.`);
    section.questions.forEach((question) => {
      if (question.type === "paired" || question.type === "pictureWord") {
        if (!Array.isArray(question.parts) || question.parts.length !== question.points) {
          throw new Error(`${question.id} must have one answer part for every point.`);
        }
        const partKeys = question.parts.map((part) => part.key);
        if (new Set(partKeys).size !== partKeys.length) throw new Error(`${question.id} has duplicate answer-part keys.`);
        question.parts.forEach((part) => {
          if (!Array.isArray(part.answers) || !part.answers.length) throw new Error(`${question.id}.${part.key} has no accepted answer.`);
        });
      } else {
        if (question.points !== 1) throw new Error(`${question.id} must be worth exactly one point.`);
        if (!Array.isArray(question.answers) || !question.answers.length) throw new Error(`${question.id} has no accepted answer.`);
      }
      if (question.type === "pictureWord") {
        const pictureValues = question.pictures.map((picture) => picture.value);
        if (pictureValues.join(",") !== "a,b") throw new Error(`${question.id} must preserve the original a/b picture labels.`);
        const picturePart = question.parts.find((part) => part.type === "pictureChoice");
        if (!picturePart || !picturePart.answers.every((answer) => pictureValues.includes(answer))) {
          throw new Error(`${question.id} has an invalid picture answer.`);
        }
      }
    });
  });
}

function render() {
  sections.forEach((section) => {
    const jump = document.createElement("button");
    jump.type = "button";
    jump.textContent = section.label;
    jump.dataset.jump = section.key;
    jump.title = section.title;
    jump.onclick = () => document.querySelector("#section-" + section.key).scrollIntoView({ behavior: "smooth" });
    jumpRoot.appendChild(jump);

    const element = document.createElement("section");
    element.className = "test-section";
    element.id = "section-" + section.key;
    element.innerHTML = `
      <header class="section-heading">
        <span class="section-letter">${section.label}</span>
        <div><h2>${section.title}</h2><p>${section.note}</p></div>
        <span class="section-points">/${section.points}</span>
      </header>
      ${section.audio ? `<div class="audio-panel"><p>Audio for section ${section.label}</p><audio controls preload="metadata" src="${section.audio}"></audio></div>` : ""}
      ${wordBank(section)}
      ${section.sectionImage ? `<img class="source-image ${section.key === "J" ? "compact" : ""}" src="${section.sectionImage}" alt="Source material for section ${section.label}">` : ""}
      <div class="question-list">${section.questions.map((question, index) => questionMarkup(section, question, index)).join("")}</div>`;
    root.appendChild(element);
  });
}

function wordBank(section) {
  if (!section.wordBank) return "";
  return `<div class="word-bank"><span class="word-bank-title">WORD BOX</span><div class="word-bank-items">${section.wordBank.map((word) => `<span>${word}</span>`).join("")}</div></div>`;
}

function questionMarkup(section, question, index) {
  const visibleNumber = index + 1;
  let control = "";
  if (question.type === "choice") control = choiceMarkup(question.id, question.options);
  if (question.type === "input") control = inputMarkup(question.id);
  if (question.type === "paired") {
    control = `<div class="paired-inputs">${question.parts.map((part) => partMarkup(question.id, part)).join("")}</div>`;
  }
  if (question.type === "pictureWord") {
    const picturePart = question.parts.find((part) => part.type === "pictureChoice");
    const wordPart = question.parts.find((part) => part.type === "input");
    control = `
      <div class="picture-choice-grid" data-choice-group data-field="${question.id}.${picturePart.key}">
        ${question.pictures.map((picture) => `<button type="button" class="picture-choice" data-choice data-value="${picture.value}" aria-pressed="false"><img src="${picture.image}" alt="Picture ${picture.value}"><span>${picture.value}</span></button>`).join("")}
      </div>
      <label class="input-label">${wordPart.label}${inputMarkup(`${question.id}.${wordPart.key}`)}</label>`;
  }
  return `<article class="question" data-id="${question.id}" data-points="${question.points}">
    <span class="question-number">${visibleNumber}</span>
    <div class="question-copy">
      ${question.image ? `<img class="question-image" src="${question.image}" alt="Picture for question ${visibleNumber}">` : ""}
      <p class="question-prompt">${question.prompt}</p>
      ${control}
    </div>
  </article>`;
}

function partMarkup(questionId, part) {
  const field = `${questionId}.${part.key}`;
  if (part.type === "choice") return `<div class="input-label"><span>${part.label}</span>${choiceMarkup(field, part.options)}</div>`;
  return `<label class="input-label">${part.label}${inputMarkup(field)}</label>`;
}

function choiceMarkup(field, options) {
  return `<div class="choice-grid" data-choice-group data-field="${field}">${options.map((option, index) => `<button type="button" class="choice" data-choice data-value="${escapeHtml(option)}" aria-pressed="false"><span class="choice-key">${String.fromCharCode(65 + index)}</span><span>${option}</span></button>`).join("")}</div>`;
}

function inputMarkup(field) {
  return `<input class="answer-input" data-field="${field}" autocomplete="off" spellcheck="false" placeholder="Type your answer">`;
}

function atomicParts(question) {
  if (question.parts) return question.parts.map((part) => ({ ...part, field: `${question.id}.${part.key}` }));
  return [{ type: question.type, answers: question.answers, explanation: question.explanation, field: question.id, label: question.prompt }];
}

function fieldElement(field) {
  return document.querySelector(`[data-field="${cssEscape(field)}"]`);
}

function getValue(field) {
  const element = fieldElement(field);
  if (!element) return "";
  return element.matches("input") ? element.value : element.dataset.value || "";
}

function setValue(field, value) {
  const element = fieldElement(field);
  if (!element) return;
  if (element.matches("input")) {
    element.value = value;
    return;
  }
  element.dataset.value = value;
  element.querySelectorAll("[data-choice]").forEach((button) => {
    const selected = button.dataset.value === value;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", selected ? "true" : "false");
  });
}

function normalize(value) {
  return String(value || "").toLowerCase().replace(/[’‘`]/g, "'").replace(/[?.!,]/g, "").replace(/-/g, " ").replace(/\s+/g, " ").trim();
}

function matches(value, answers) {
  return answers.some((answer) => normalize(answer) === normalize(value));
}

function missing() {
  const output = [];
  sections.forEach((section) => section.questions.forEach((question) => {
    atomicParts(question).forEach((part) => {
      if (!getValue(part.field).trim()) output.push(fieldElement(part.field));
    });
  }));
  return output;
}

function grade() {
  let score = 0;
  const reviews = [];
  sections.forEach((section) => section.questions.forEach((question, index) => {
    const partReviews = atomicParts(question).map((part) => {
      const value = getValue(part.field);
      const correct = matches(value, part.answers);
      if (correct) score++;
      return { ...part, value, correct };
    });
    reviews.push({ section, question, number: index + 1, parts: partReviews, correct: partReviews.every((part) => part.correct) });
  }));

  scoreValue.textContent = score;
  scoreMessage.textContent = score === TOTAL_POINTS
    ? "Every answer is correct."
    : `Review ${TOTAL_POINTS - score} point${TOTAL_POINTS - score === 1 ? "" : "s"} and compare each explanation with the original question.`;
  answerReview.innerHTML = reviews.map(reviewMarkup).join("");
  results.hidden = false;
  form.hidden = true;
  document.querySelector("#stickyProgress").hidden = true;
  results.scrollIntoView({ behavior: "smooth" });
}

function reviewMarkup(review) {
  const earned = review.parts.filter((part) => part.correct).length;
  const answers = review.parts.map((part) => `
    <div class="review-part ${part.correct ? "" : "is-wrong"}">
      <p><b>${part.label || "Answer"}</b></p>
      <div class="review-answer"><span>Your answer: <b>${html(part.value || "(blank)")}</b></span><span>Correct answer: <b>${html(part.answers[0])}</b></span></div>
      <p class="explanation"><b>Explanation:</b> ${part.explanation}</p>
    </div>`).join("");
  return `<article class="review-card ${review.correct ? "" : "is-wrong"}">
    <div class="review-head"><h3>Section ${review.section.label}, question ${review.number}</h3><span class="review-status">${earned}/${review.parts.length} point${review.parts.length === 1 ? "" : "s"}</span></div>
    <p class="review-question">${review.question.prompt}</p>
    ${answers}
  </article>`;
}

function update() {
  let total = 0;
  sections.forEach((section) => {
    let completed = 0;
    section.questions.forEach((question) => atomicParts(question).forEach((part) => {
      if (getValue(part.field).trim()) {
        total++;
        completed++;
      }
    }));
    const jump = document.querySelector(`[data-jump="${section.key}"]`);
    jump.classList.toggle("has-progress", completed > 0);
    jump.classList.toggle("is-complete", completed === section.points);
  });
  progressText.textContent = `${total} / ${TOTAL_POINTS}`;
  progressBar.style.width = `${(total / TOTAL_POINTS) * 100}%`;
}

function save() {
  const data = {};
  sections.forEach((section) => section.questions.forEach((question) => atomicParts(question).forEach((part) => {
    data[part.field] = getValue(part.field);
  })));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function restore() {
  let data = {};
  try { data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch {}
  Object.entries(data).forEach(([field, value]) => {
    if (value) setValue(field, value);
  });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[character]));
}

function html(value) {
  return escapeHtml(value);
}

function cssEscape(value) {
  return window.CSS && CSS.escape ? CSS.escape(value) : value.replace(/([.#:[\],])/g, "\\$1");
}
