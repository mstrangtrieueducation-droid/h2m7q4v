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
    "key": "A",
    "label": "A",
    "title": "Look and circle the correct words.",
    "note": "Choose the word that names each picture.",
    "points": 3,
    "questions": [
      {
        "id": "A1",
        "type": "choice",
        "prompt": "1. Choose the correct word.",
        "options": [
          "Jellyfish",
          "Starfish"
        ],
        "answers": [
          "Jellyfish"
        ],
        "explanation": "The picture shows jellyfish: soft sea animals with long tentacles.",
        "image": "assets/images/page1-img2-385x275.png",
        "points": 1
      },
      {
        "id": "A2",
        "type": "choice",
        "prompt": "2. Choose the correct word.",
        "options": [
          "Snowflake",
          "Butterfly"
        ],
        "answers": [
          "Butterfly"
        ],
        "explanation": "The insect has two large patterned wings, so it is a butterfly.",
        "image": "assets/images/page1-img3-385x275.png",
        "points": 1
      },
      {
        "id": "A3",
        "type": "choice",
        "prompt": "3. Choose the correct word.",
        "options": [
          "Birdhouse",
          "Honeybee"
        ],
        "answers": [
          "Birdhouse"
        ],
        "explanation": "This is a small house made for a bird: a birdhouse.",
        "image": "assets/images/page1-img6-385x275.png",
        "points": 1
      }
    ]
  },
  {
    "key": "B",
    "label": "B",
    "title": "Look and write the words.",
    "note": "Use the word box. One word is not needed.",
    "points": 6,
    "sectionImage": "assets/images/page1-img5-1430x550.png",
    "wordBank": [
      "body",
      "ears",
      "eyes",
      "feathers",
      "head",
      "legs",
      "mouth"
    ],
    "questions": [
      {
        "id": "B1",
        "type": "input",
        "prompt": "1.",
        "answers": [
          "ears"
        ],
        "explanation": "Number 1 points to the rabbit's ears.",
        "image": "",
        "points": 1
      },
      {
        "id": "B2",
        "type": "input",
        "prompt": "2.",
        "answers": [
          "eyes"
        ],
        "explanation": "Number 2 points to the rabbit's eyes.",
        "image": "",
        "points": 1
      },
      {
        "id": "B3",
        "type": "input",
        "prompt": "3.",
        "answers": [
          "mouth"
        ],
        "explanation": "Number 3 points to the rabbit's mouth.",
        "image": "",
        "points": 1
      },
      {
        "id": "B4",
        "type": "input",
        "prompt": "4.",
        "answers": [
          "head"
        ],
        "explanation": "Number 4 points to the rabbit's head.",
        "image": "",
        "points": 1
      },
      {
        "id": "B5",
        "type": "input",
        "prompt": "5.",
        "answers": [
          "body"
        ],
        "explanation": "Number 5 points to the rabbit's body.",
        "image": "",
        "points": 1
      },
      {
        "id": "B6",
        "type": "input",
        "prompt": "6.",
        "answers": [
          "legs"
        ],
        "explanation": "Number 6 points to the rabbit's legs. Feathers is the unused word.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "C",
    "label": "C",
    "title": "Listen and complete the sentences.",
    "note": "Listen to Track 3.42 and write one word in each gap.",
    "points": 3,
    "audio": "assets/audio/Listening-C.mp3",
    "questions": [
      {
        "id": "C1",
        "type": "input",
        "prompt": "1. Birds have ___.",
        "answers": [
          "wings"
        ],
        "explanation": "Birds use their wings to fly.",
        "image": "",
        "points": 1
      },
      {
        "id": "C2",
        "type": "input",
        "prompt": "2. Elephants and bears are ___.",
        "answers": [
          "mammals"
        ],
        "explanation": "Elephants and bears are mammals: they are warm-blooded and feed milk to their young.",
        "image": "",
        "points": 1
      },
      {
        "id": "C3",
        "type": "input",
        "prompt": "3. Alligators have ___ on their bodies.",
        "answers": [
          "scales"
        ],
        "explanation": "An alligator's body is covered with scales.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "D",
    "label": "D",
    "title": "Circle the correct words.",
    "note": "Choose the correct subject or object pronoun.",
    "points": 3,
    "questions": [
      {
        "id": "D1",
        "type": "choice",
        "prompt": "1. Me / I am friends with Cara.",
        "options": [
          "Me",
          "I"
        ],
        "answers": [
          "I"
        ],
        "explanation": "I is the subject of am. Me is an object pronoun.",
        "image": "",
        "points": 1
      },
      {
        "id": "D2",
        "type": "choice",
        "prompt": "2. Please teach us / we how to dance.",
        "options": [
          "us",
          "we"
        ],
        "answers": [
          "us"
        ],
        "explanation": "After the verb teach, use the object pronoun us.",
        "image": "",
        "points": 1
      },
      {
        "id": "D3",
        "type": "choice",
        "prompt": "3. Bears have fur to keep them / it warm.",
        "options": [
          "them",
          "it"
        ],
        "answers": [
          "them"
        ],
        "explanation": "Bears is plural, so the matching object pronoun is them.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "E",
    "label": "E",
    "title": "Look and complete the sentences. Use her, him, it, or them.",
    "note": "Choose the object pronoun that matches the person, animal, or group in each picture.",
    "points": 4,
    "questions": [
      {
        "id": "E1",
        "type": "input",
        "prompt": "1. Look at ___.",
        "answers": [
          "him"
        ],
        "explanation": "The girl is pointing to one boy. For one male person, use him.",
        "image": "assets/images/page2-img1-439x220.png",
        "points": 1
      },
      {
        "id": "E2",
        "type": "input",
        "prompt": "2. Look at ___.",
        "answers": [
          "them"
        ],
        "explanation": "The girl is pointing to a group of people. For more than one person, use them.",
        "image": "assets/images/page2-img3-440x198.png",
        "points": 1
      },
      {
        "id": "E3",
        "type": "input",
        "prompt": "3. Look at ___.",
        "answers": [
          "it"
        ],
        "explanation": "The girl is holding one butterfly. For one animal or thing, use it.",
        "image": "assets/images/page2-img2-440x220.png",
        "points": 1
      },
      {
        "id": "E4",
        "type": "input",
        "prompt": "4. Look at ___.",
        "answers": [
          "her"
        ],
        "explanation": "The girl is pointing to one woman. For one female person, use her.",
        "image": "assets/images/page2-img4-440x211.png",
        "points": 1
      }
    ]
  },
  {
    "key": "F",
    "label": "F",
    "title": "Write the words in the correct order to make questions. Look at the pictures and complete the answers. Use pronouns.",
    "note": "Each number has two answers: write the full question, then choose the correct pronoun.",
    "points": 6,
    "questions": [
      {
        "id": "F1",
        "type": "paired",
        "points": 2,
        "prompt": "1. fish / Do / gills / have",
        "image": "assets/images/page2-img5-385x275.png",
        "parts": [
          {
            "key": "question",
            "label": "Full question",
            "type": "input",
            "answers": [
              "Do fish have gills?",
              "Do fish have gills"
            ],
            "explanation": "Use Do + plural subject fish + base verb have: Do fish have gills?"
          },
          {
            "key": "pronoun",
            "label": "Yes, ___ have them.",
            "type": "choice",
            "options": [
              "they",
              "it"
            ],
            "answers": [
              "they"
            ],
            "explanation": "Fish is plural here, so use they."
          }
        ]
      },
      {
        "id": "F2",
        "type": "paired",
        "points": 2,
        "prompt": "2. feathers / Does / lion / a / have",
        "image": "assets/images/page2-img6-385x275.png",
        "parts": [
          {
            "key": "question",
            "label": "Full question",
            "type": "input",
            "answers": [
              "Does a lion have feathers?",
              "Does a lion have feathers"
            ],
            "explanation": "Use Does + singular subject a lion + base verb have."
          },
          {
            "key": "pronoun",
            "label": "No, ___ doesn't have them.",
            "type": "choice",
            "options": [
              "they",
              "it"
            ],
            "answers": [
              "it"
            ],
            "explanation": "A lion is one animal, so use it."
          }
        ]
      },
      {
        "id": "F3",
        "type": "paired",
        "points": 2,
        "prompt": "3. wings / Do / help / birds / fly",
        "image": "assets/images/page3-img8-385x275.png",
        "parts": [
          {
            "key": "question",
            "label": "Full question",
            "type": "input",
            "answers": [
              "Do wings help birds fly?",
              "Do wings help birds fly"
            ],
            "explanation": "Use Do + plural subject wings + base verb help."
          },
          {
            "key": "pronoun",
            "label": "Yes, ___ help them.",
            "type": "choice",
            "options": [
              "they",
              "it"
            ],
            "answers": [
              "they"
            ],
            "explanation": "Wings is plural, so use they."
          }
        ]
      }
    ]
  },
  {
    "key": "G",
    "label": "G",
    "title": "Complete the sentences.",
    "note": "Use the words in the box. One word is not needed.",
    "points": 4,
    "wordBank": [
      "berries",
      "hunt",
      "patient",
      "pinecones",
      "worm"
    ],
    "questions": [
      {
        "id": "G1",
        "type": "input",
        "prompt": "1. Look! That bird has a ___. It's long and pink!",
        "answers": [
          "worm"
        ],
        "explanation": "A long, pink animal that a bird can eat is a worm.",
        "image": "",
        "points": 1
      },
      {
        "id": "G2",
        "type": "input",
        "prompt": "2. ___ are healthy. I eat them every day.",
        "answers": [
          "berries"
        ],
        "explanation": "Berries are small fruits. The plural verb are matches berries.",
        "image": "",
        "points": 1
      },
      {
        "id": "G3",
        "type": "input",
        "prompt": "3. Animals in nature ___ for their food.",
        "answers": [
          "hunt"
        ],
        "explanation": "Wild animals hunt when they look for and catch food.",
        "image": "",
        "points": 1
      },
      {
        "id": "G4",
        "type": "input",
        "prompt": "4. ___ grow on trees, and they aren't soft.",
        "answers": [
          "pinecones"
        ],
        "explanation": "Pinecones grow on pine trees and have a hard surface.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "H1",
    "label": "H",
    "title": "Look and complete the words.",
    "note": "Use the picture and the given letters to complete each word.",
    "points": 3,
    "questions": [
      {
        "id": "H1",
        "type": "input",
        "prompt": "1. s _ u _ _ k",
        "answers": [
          "squawk"
        ],
        "explanation": "The bird is making a loud, rough sound. The verb is squawk.",
        "image": "assets/images/page3-img1-337x241.png",
        "points": 1
      },
      {
        "id": "H2",
        "type": "input",
        "prompt": "2. _ i _ h _",
        "answers": [
          "fight"
        ],
        "explanation": "The two animals are attacking each other. The verb is fight.",
        "image": "assets/images/page3-img2-338x241.png",
        "points": 1
      },
      {
        "id": "H3",
        "type": "input",
        "prompt": "3. _ s _ a p _",
        "answers": [
          "escape"
        ],
        "explanation": "The animal is running away from a place. The verb is escape.",
        "image": "assets/images/page3-img5-337x241.png",
        "points": 1
      }
    ]
  },
  {
    "key": "I",
    "label": "I",
    "title": "Listen and check the correct picture. Write the word.",
    "note": "Each number has two answers: select picture a or b, then write the word you hear.",
    "points": 6,
    "audio": "assets/audio/Listening-I.mp3",
    "questions": [
      {
        "id": "I1",
        "type": "pictureWord",
        "points": 2,
        "prompt": "1.",
        "pictures": [
          {
            "value": "a",
            "image": "assets/images/page3-img3-175x179.png"
          },
          {
            "value": "b",
            "image": "assets/images/page3-img4-192x172.png"
          }
        ],
        "parts": [
          {
            "key": "picture",
            "label": "Correct picture",
            "type": "pictureChoice",
            "answers": [
              "a"
            ],
            "explanation": "The audio describes a fierce animal. Picture a shows the fierce expression."
          },
          {
            "key": "word",
            "label": "Word",
            "type": "input",
            "answers": [
              "fierce"
            ],
            "explanation": "Fierce means aggressive, strong, or frightening."
          }
        ]
      },
      {
        "id": "I2",
        "type": "pictureWord",
        "points": 2,
        "prompt": "2.",
        "pictures": [
          {
            "value": "a",
            "image": "assets/images/page3-img6-102x109.png"
          },
          {
            "value": "b",
            "image": "assets/images/page3-img7-107x111.png"
          }
        ],
        "parts": [
          {
            "key": "picture",
            "label": "Correct picture",
            "type": "pictureChoice",
            "answers": [
              "b"
            ],
            "explanation": "Picture b shows an ant carrying a leaf, which represents strength."
          },
          {
            "key": "word",
            "label": "Word",
            "type": "input",
            "answers": [
              "strong"
            ],
            "explanation": "Strong means having a lot of physical power."
          }
        ]
      },
      {
        "id": "I3",
        "type": "pictureWord",
        "points": 2,
        "prompt": "3.",
        "pictures": [
          {
            "value": "a",
            "image": "assets/images/page4-img3-185x192.png"
          },
          {
            "value": "b",
            "image": "assets/images/page4-img4-127x114.png"
          }
        ],
        "parts": [
          {
            "key": "picture",
            "label": "Correct picture",
            "type": "pictureChoice",
            "answers": [
              "a"
            ],
            "explanation": "Picture a shows the gentle animal described in the audio."
          },
          {
            "key": "word",
            "label": "Word",
            "type": "input",
            "answers": [
              "gentle"
            ],
            "explanation": "Gentle means calm, kind, and not rough."
          }
        ]
      }
    ]
  },
  {
    "key": "J",
    "label": "J",
    "title": "Look and read. Write True or False.",
    "note": "Use the frequency chart and the key below it.",
    "points": 4,
    "sectionImage": "assets/images/section-j-table.png",
    "questions": [
      {
        "id": "J1",
        "type": "choice",
        "prompt": "1. Martin always plays soccer.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "False"
        ],
        "explanation": "Martin never plays soccer, so the statement is false.",
        "image": "",
        "points": 1
      },
      {
        "id": "J2",
        "type": "choice",
        "prompt": "2. He usually eats fruit.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "False"
        ],
        "explanation": "Martin sometimes eats fruit, not usually.",
        "image": "",
        "points": 1
      },
      {
        "id": "J3",
        "type": "choice",
        "prompt": "3. Sara sometimes plays the piano.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "explanation": "Sara has two check marks for the piano, which means sometimes.",
        "image": "",
        "points": 1
      },
      {
        "id": "J4",
        "type": "choice",
        "prompt": "4. She hardly ever goes to the park.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "False"
        ],
        "explanation": "Sara usually goes to the park, so the statement is false.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "K",
    "label": "K",
    "title": "Circle the correct words.",
    "note": "Choose the adverb that matches the number of check marks in the chart.",
    "points": 4,
    "questions": [
      {
        "id": "K1",
        "type": "choice",
        "prompt": "1. Martin hardly ever / never plays the piano.",
        "options": [
          "hardly ever",
          "never"
        ],
        "answers": [
          "never"
        ],
        "explanation": "The chart shows an X for Martin playing the piano. X means never.",
        "image": "",
        "points": 1
      },
      {
        "id": "K2",
        "type": "choice",
        "prompt": "2. He sometimes / usually goes to the park.",
        "options": [
          "sometimes",
          "usually"
        ],
        "answers": [
          "sometimes"
        ],
        "explanation": "Two check marks mean sometimes.",
        "image": "",
        "points": 1
      },
      {
        "id": "K3",
        "type": "choice",
        "prompt": "3. Sara usually / sometimes eats fruit.",
        "options": [
          "usually",
          "sometimes"
        ],
        "answers": [
          "usually"
        ],
        "explanation": "Sara has four check marks for eating fruit. In the chart key, four check marks mean usually.",
        "image": "",
        "points": 1
      },
      {
        "id": "K4",
        "type": "choice",
        "prompt": "4. She never / hardly ever plays soccer.",
        "options": [
          "never",
          "hardly ever"
        ],
        "answers": [
          "hardly ever"
        ],
        "explanation": "One check mark means hardly ever.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "L",
    "label": "L",
    "title": "Write the words in the correct order to make sentences.",
    "note": "Write each group of words as a complete sentence.",
    "points": 4,
    "questions": [
      {
        "id": "L1",
        "type": "input",
        "prompt": "1. drink / I / milk / never",
        "answers": [
          "I never drink milk.",
          "I never drink milk"
        ],
        "explanation": "Place the frequency adverb before the main verb: I never drink milk.",
        "image": "",
        "points": 1
      },
      {
        "id": "L2",
        "type": "input",
        "prompt": "2. lunch / They / eat / always",
        "answers": [
          "They always eat lunch.",
          "They always eat lunch"
        ],
        "explanation": "Always goes before the main verb eat: They always eat lunch.",
        "image": "",
        "points": 1
      },
      {
        "id": "L3",
        "type": "input",
        "prompt": "3. football / usually / He / plays",
        "answers": [
          "He usually plays football.",
          "He usually plays football"
        ],
        "explanation": "Usually goes before the main verb plays: He usually plays football.",
        "image": "",
        "points": 1
      },
      {
        "id": "L4",
        "type": "input",
        "prompt": "4. hardly ever / She / TV / watches",
        "answers": [
          "She hardly ever watches TV.",
          "She hardly ever watches TV"
        ],
        "explanation": "Hardly ever goes before the main verb watches: She hardly ever watches TV.",
        "image": "",
        "points": 1
      }
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
const STORAGE_KEY = "discover2-written-test1-v2-source-audit-v2";

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

function matches(value, accepted) { return DiscoverAnswerMatcher.matches(value, accepted); }

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
      <div class="review-answer"><span>Your answer: <b>${html(part.value || "(blank)")}</b></span><span>Correct answer: <b>${html(DiscoverAnswerDisplay.formatAnswer(part.answers[0], {section: review.section, question: review.question, part}))}</b></span></div>
      <p class="explanation"><b>Explanation:</b> ${escapeHtml(DiscoverAnswerDisplay.formatExplanation(part.explanation))}</p>
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
