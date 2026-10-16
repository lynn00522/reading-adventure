
/*
Reading Adventure V8.3
Original Story Library

12 original stories for early reading practice.
Review phonics progression with a literacy educator
before using as a structured intervention.
*/

const ORIGINAL_STORIES = [
  {
    id: "story01",
    level: 1,
    title: "Sam and the Cat",
    focus: "Short a, simple CVC words",
    sentences: [
      "Sam has a cat.",
      "The cat is on a mat.",
      "Sam sits by the cat.",
      "The cat has a nap.",
      "Sam pats the cat.",
      "The cat is happy."
    ],
    questions: [
      {
        question: "What pet does Sam have?",
        options: ["A dog", "A cat", "A fish"],
        answer: "A cat"
      },
      {
        question: "Where is the cat?",
        options: ["On a mat", "In a bag", "On a bus"],
        answer: "On a mat"
      },
      {
        question: "What does Sam do?",
        options: [
          "Pats the cat",
          "Runs away",
          "Eats a cake"
        ],
        answer: "Pats the cat"
      }
    ]
  },
  {
    id: "story02",
    level: 1,
    title: "The Red Bag",
    focus: "Short vowels and common words",
    sentences: [
      "Ben has a red bag.",
      "The bag is big.",
      "Ben puts a pen in the bag.",
      "He puts a cup in it too.",
      "Ben zips up the bag.",
      "He is set to go."
    ],
    questions: [
      {
        question: "What colour is the bag?",
        options: ["Blue", "Red", "Green"],
        answer: "Red"
      },
      {
        question: "What does Ben put in the bag?",
        options: ["A pen", "A fish", "A hat"],
        answer: "A pen"
      },
      {
        question: "What does Ben do at the end?",
        options: [
          "Zips the bag",
          "Drops the bag",
          "Hides the bag"
        ],
        answer: "Zips the bag"
      }
    ]
  },
  {
    id: "story03",
    level: 1,
    title: "Tim and the Pin",
    focus: "Short i, short a, CVC blending",
    sentences: [
      "Tim has a tin.",
      "A pin is in the tin.",
      "Tim tips the tin.",
      "The pin falls on a mat.",
      "Tim picks up the pin.",
      "He puts it back in the tin."
    ],
    questions: [
      {
        question: "What is inside the tin?",
        options: ["A pin", "A toy", "A coin"],
        answer: "A pin"
      },
      {
        question: "Where does the pin fall?",
        options: [
          "On a mat",
          "In a pond",
          "On a bed"
        ],
        answer: "On a mat"
      },
      {
        question: "What does Tim do with the pin?",
        options: [
          "Puts it back",
          "Throws it away",
          "Gives it to Sam"
        ],
        answer: "Puts it back"
      }
    ]
  },
  {
    id: "story04",
    level: 2,
    title: "The Frog on the Log",
    focus: "Consonant blends and short sentences",
    sentences: [
      "A green frog sat on a log.",
      "The frog saw a little bug.",
      "It jumped off the log.",
      "Splash! The frog fell into the pond.",
      "The bug flew away.",
      "The frog swam back to the log."
    ],
    questions: [
      {
        question: "Where was the frog sitting?",
        options: [
          "On a log",
          "On a chair",
          "On a rock"
        ],
        answer: "On a log"
      },
      {
        question: "What did the frog see?",
        options: ["A bug", "A bird", "A fish"],
        answer: "A bug"
      },
      {
        question: "Where did the frog fall?",
        options: [
          "Into the pond",
          "Into a hole",
          "Onto the grass"
        ],
        answer: "Into the pond"
      }
    ]
  },
  {
    id: "story05",
    level: 2,
    title: "The Lost Red Hat",
    focus: "Common words and connected sentences",
    sentences: [
      "Ben had a red hat.",
      "He put it on a bench.",
      "A gust of wind blew the hat away.",
      "Ben ran after it.",
      "His dog found the hat near a tree.",
      "Ben smiled and put it on his head."
    ],
    questions: [
      {
        question: "What did Ben lose?",
        options: ["A hat", "A shoe", "A bag"],
        answer: "A hat"
      },
      {
        question: "What blew the hat away?",
        options: ["The wind", "The rain", "A bird"],
        answer: "The wind"
      },
      {
        question: "Who found the hat?",
        options: [
          "Ben's dog",
          "Ben's teacher",
          "Ben's friend"
        ],
        answer: "Ben's dog"
      }
    ]
  },
  {
    id: "story06",
    level: 2,
    title: "The Little Fish",
    focus: "sh, ch and simple story sequence",
    sentences: [
      "A little fish lived in a pond.",
      "The fish liked to swim.",
      "One day, it saw a big shadow.",
      "The fish hid behind a rock.",
      "A duck swam past the rock.",
      "The fish came out and swam away."
    ],
    questions: [
      {
        question: "Where did the fish live?",
        options: [
          "In a pond",
          "In a tree",
          "In a bowl"
        ],
        answer: "In a pond"
      },
      {
        question: "Why did the fish hide?",
        options: [
          "It saw a shadow",
          "It was sleeping",
          "It wanted food"
        ],
        answer: "It saw a shadow"
      },
      {
        question: "What swam past the rock?",
        options: ["A duck", "A frog", "A turtle"],
        answer: "A duck"
      }
    ]
  },
  {
    id: "story07",
    level: 3,
    title: "Mia's Rainy Day",
    focus: "Longer sentences and weather words",
    sentences: [
      "Mia looked out of her window.",
      "Dark clouds covered the sky.",
      "She put on her yellow raincoat.",
      "Mia picked up her blue umbrella.",
      "She went outside with her mother.",
      "They splashed in the puddles together.",
      "Mia laughed all the way home."
    ],
    questions: [
      {
        question: "What was the weather like?",
        options: ["Rainy", "Sunny", "Snowy"],
        answer: "Rainy"
      },
      {
        question: "What colour was Mia's raincoat?",
        options: ["Yellow", "Green", "Red"],
        answer: "Yellow"
      },
      {
        question: "Who went outside with Mia?",
        options: [
          "Her mother",
          "Her teacher",
          "Her brother"
        ],
        answer: "Her mother"
      }
    ]
  },
  {
    id: "story08",
    level: 3,
    title: "The Magic Seed",
    focus: "Sequence, vocabulary and long vowels",
    sentences: [
      "Leo found a tiny seed in the garden.",
      "He planted it in a small pot.",
      "Every morning, Leo gave it water.",
      "He placed the pot near the window.",
      "One day, a green shoot appeared.",
      "The shoot grew taller and taller.",
      "Soon, a bright flower opened.",
      "Leo was proud of his little plant."
    ],
    questions: [
      {
        question: "What did Leo find?",
        options: ["A seed", "A stone", "A shell"],
        answer: "A seed"
      },
      {
        question: "Where did Leo put the pot?",
        options: [
          "Near the window",
          "Under the bed",
          "In a cupboard"
        ],
        answer: "Near the window"
      },
      {
        question: "What grew from the seed?",
        options: [
          "A flower",
          "A tree full of apples",
          "A mushroom"
        ],
        answer: "A flower"
      }
    ]
  },
  {
    id: "story09",
    level: 3,
    title: "A Day at the Beach",
    focus: "Descriptive sentences and comprehension",
    sentences: [
      "Ella went to the beach with her family.",
      "The sand felt warm under her feet.",
      "She made a tall sandcastle.",
      "Her brother collected small shells.",
      "They watched the waves roll onto the shore.",
      "Dad gave everyone a cold drink.",
      "Before leaving, they cleaned up their things.",
      "Ella hoped they would return soon."
    ],
    questions: [
      {
        question: "What did Ella build?",
        options: [
          "A sandcastle",
          "A wooden house",
          "A boat"
        ],
        answer: "A sandcastle"
      },
      {
        question: "What did her brother collect?",
        options: ["Shells", "Stones", "Leaves"],
        answer: "Shells"
      },
      {
        question: "What did they do before leaving?",
        options: [
          "Cleaned up",
          "Went swimming",
          "Built another castle"
        ],
        answer: "Cleaned up"
      }
    ]
  },
  {
    id: "story10",
    level: 4,
    title: "The Lost Puppy",
    focus: "Connected narrative and inference",
    sentences: [
      "On Saturday morning, Amy heard a soft bark.",
      "She looked outside and saw a small brown puppy.",
      "The puppy was sitting alone near the gate.",
      "Amy called her father to help.",
      "They gave the puppy some water.",
      "Her father checked the tag on its collar.",
      "They contacted the puppy's owner.",
      "Soon, a happy woman arrived at their house.",
      "The puppy wagged its tail when it saw her.",
      "Amy was glad the puppy was safe."
    ],
    questions: [
      {
        question: "Where did Amy find the puppy?",
        options: [
          "Near the gate",
          "At school",
          "In the kitchen"
        ],
        answer: "Near the gate"
      },
      {
        question: "How did they find its owner?",
        options: [
          "They checked its collar tag",
          "They followed its footprints",
          "They asked a shopkeeper"
        ],
        answer: "They checked its collar tag"
      },
      {
        question: "How did the puppy react?",
        options: [
          "It wagged its tail",
          "It hid under a chair",
          "It ran into the garden"
        ],
        answer: "It wagged its tail"
      }
    ]
  },
  {
    id: "story11",
    level: 4,
    title: "The School Garden",
    focus: "Information, sequence and vocabulary",
    sentences: [
      "Our class started a small garden behind the school.",
      "The teacher gave each group a packet of seeds.",
      "My group decided to grow tomatoes.",
      "First, we filled the pots with soft soil.",
      "Next, we planted the seeds carefully.",
      "We took turns watering them each morning.",
      "After two weeks, tiny green leaves appeared.",
      "The plants grew stronger in the warm sunlight.",
      "One morning, we saw our first small tomato.",
      "Everyone was excited to see our hard work."
    ],
    questions: [
      {
        question: "What did the group grow?",
        options: [
          "Tomatoes",
          "Carrots",
          "Sunflowers"
        ],
        answer: "Tomatoes"
      },
      {
        question: "What did the children do each morning?",
        options: [
          "Watered the plants",
          "Picked the tomatoes",
          "Moved the pots"
        ],
        answer: "Watered the plants"
      },
      {
        question: "What appeared after two weeks?",
        options: [
          "Tiny green leaves",
          "Large red tomatoes",
          "Yellow flowers"
        ],
        answer: "Tiny green leaves"
      }
    ]
  },
  {
    id: "story12",
    level: 4,
    title: "The Little Bird's Big Day",
    focus: "Fluency, sequence and inference",
    sentences: [
      "A young bird lived in a nest high in a tree.",
      "Every day, it watched other birds flying.",
      "The young bird wanted to fly too.",
      "One morning, it stretched its little wings.",
      "It hopped to the edge of the nest.",
      "The bird flapped its wings and jumped.",
      "At first, it dropped towards the ground.",
      "Then it caught the air and began to rise.",
      "The bird flew to a nearby branch.",
      "It chirped happily after its first flight."
    ],
    questions: [
      {
        question: "What did the young bird want to do?",
        options: [
          "Learn to fly",
          "Build a new nest",
          "Find a worm"
        ],
        answer: "Learn to fly"
      },
      {
        question: "What happened at first?",
        options: [
          "It dropped towards the ground",
          "It flew above the clouds",
          "It returned to sleep"
        ],
        answer: "It dropped towards the ground"
      },
      {
        question: "Where did the bird finally land?",
        options: [
          "On a nearby branch",
          "On a rooftop",
          "In a pond"
        ],
        answer: "On a nearby branch"
      }
    ]
  }
];

const STORY_LEVEL_NAMES = {
  1: "First Readers",
  2: "Growing Readers",
  3: "Confident Readers",
  4: "Story Explorers"
};
