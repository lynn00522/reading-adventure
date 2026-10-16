
/*
 Reading Adventure V8
 365-day illustrative reading content.
 Five sentences per day.
 These are rotating practice examples,
 not a validated reading curriculum.
*/

const READING_STAGES = [
  {
    name: "Short Sentences",
    start: 1,
    end: 30,
    sentences: [
      "Sam sat.",
      "A cat sat.",
      "The sun is hot.",
      "I am Sam.",
      "Pam has a map.",
      "Tim can sit.",
      "A pin is in a tin.",
      "The man ran.",
      "Nan has a pan.",
      "Pat can tap.",
      "The cat is on a mat.",
      "I can nap.",
      "The dog can run.",
      "It is a big bag.",
      "The cup is red."
    ]
  },
  {
    name: "Blends and Digraphs",
    start: 31,
    end: 90,
    sentences: [
      "The frog is on a log.",
      "The ship is big.",
      "The fish can swim.",
      "The chick is in the shed.",
      "The flag is red.",
      "The crab hid in the sand.",
      "I can clap my hands.",
      "The drum is loud.",
      "The duck is in the pond.",
      "The black cat ran.",
      "The shop has fresh fish.",
      "The thin branch fell.",
      "The children clap.",
      "A frog jumps fast.",
      "The train is long."
    ]
  },
  {
    name: "Long Vowels",
    start: 91,
    end: 150,
    sentences: [
      "Jake rides a bike.",
      "We play in the rain.",
      "I can see a green tree.",
      "The boat is on the lake.",
      "The kite is high.",
      "Jane made a cake.",
      "The goat is by the road.",
      "We wait for the train.",
      "The moon shines at night.",
      "The snail moves slowly.",
      "She sees three bees.",
      "I like my new game.",
      "The rain came today.",
      "The child made a paper plane.",
      "The light is bright."
    ]
  },
  {
    name: "Longer Sentences",
    start: 151,
    end: 220,
    sentences: [
      "After lunch, Mia went to the park.",
      "The little dog slept beside the sofa.",
      "Sam put his blue bag near the door.",
      "We walked home when the rain stopped.",
      "The children made a big sandcastle.",
      "My sister found a shell on the beach.",
      "The teacher read a funny story to us.",
      "Dad carried the shopping into the kitchen.",
      "The rabbit ran under the wooden fence.",
      "We shared our snacks with two friends.",
      "The girl smiled when she saw her puppy.",
      "I packed a book and a bottle of water.",
      "The train arrived before the sun went down.",
      "Grandma baked a cake for our family.",
      "We watched birds flying over the garden."
    ]
  },
  {
    name: "Connected Reading",
    start: 221,
    end: 300,
    sentences: [
      "Mia found a lost kitten near her home.",
      "She gave the kitten a bowl of water.",
      "Then she asked an adult for help.",
      "The kitten rested safely in a warm box.",
      "Soon its owner came to take it home.",
      "Ben planted a small seed in a pot.",
      "He watered the soil every morning.",
      "After many days, a green shoot appeared.",
      "The shoot grew taller in the sunlight.",
      "Ben was happy to see his plant grow.",
      "A strong wind blew through the park.",
      "The children held on to their hats.",
      "They found shelter beside a small shop.",
      "Soon the wind became much calmer.",
      "They walked home together after the storm."
    ]
  },
  {
    name: "Fluency and Review",
    start: 301,
    end: 365,
    sentences: [
      "Every Saturday, our family visits the library.",
      "I choose a book and read it with Mum.",
      "When I find a hard word, I sound it out.",
      "Sometimes I listen to the sentence again.",
      "Each time I practise, reading feels easier.",
      "A young bird was learning how to fly.",
      "It flapped its wings and jumped from a branch.",
      "At first, it could only travel a short way.",
      "The bird tried again with careful little movements.",
      "Soon it flew safely across the garden.",
      "We planned a picnic near the lake.",
      "Dad packed sandwiches, fruit, and cold water.",
      "Dark clouds appeared just before lunchtime.",
      "We moved under a shelter and waited.",
      "When the rain stopped, we enjoyed our picnic."
    ]
  }
];

function readingStage(day) {
  return READING_STAGES.find(stage =>
    day >= stage.start && day <= stage.end
  );
}

function readingSentences(day) {
  const stage = readingStage(day);
  if (!stage) return [];

  const offset =
    ((day - stage.start) * 5) % stage.sentences.length;

  return Array.from(
    {length: 5},
    (_, i) => stage.sentences[
      (offset + i) % stage.sentences.length
    ]
  );
}
