
/* Reading Adventure V8.3 - Original Stories
   Original practice content, not a validated curriculum.
*/
const ORIGINAL_STORIES = [
{
 id:"s01",level:1,title:"Sam and the Cat",
 focus:"Short a and simple words",emoji:"🐱",
 sentences:[
 "Sam has a cat.",
 "The cat is on a mat.",
 "Sam sits by the cat.",
 "The cat has a nap.",
 "Sam pats the cat.",
 "The cat is happy."
 ],
 questions:[
 ["What pet does Sam have?","A cat",["A dog","A cat","A fish"]],
 ["Where is the cat?","On a mat",["On a mat","In a bag","On a bus"]],
 ["What does Sam do?","Pats the cat",["Pats the cat","Runs away","Eats a cake"]]
 ]
},
{
 id:"s02",level:1,title:"The Red Bag",
 focus:"Short vowels and common words",emoji:"🎒",
 sentences:[
 "Ben has a red bag.",
 "The bag is big.",
 "Ben puts a pen in the bag.",
 "He puts a cup in it too.",
 "Ben zips up the bag.",
 "He is set to go."
 ],
 questions:[
 ["What colour is the bag?","Red",["Blue","Red","Green"]],
 ["What does Ben put in the bag?","A pen",["A pen","A fish","A hat"]],
 ["What does Ben do at the end?","Zips the bag",["Zips the bag","Drops the bag","Hides the bag"]]
 ]
},
{
 id:"s03",level:1,title:"Tim and the Pin",
 focus:"Short i and CVC blending",emoji:"📌",
 sentences:[
 "Tim has a tin.",
 "A pin is in the tin.",
 "Tim tips the tin.",
 "The pin falls on a mat.",
 "Tim picks up the pin.",
 "He puts it back in the tin."
 ],
 questions:[
 ["What is inside the tin?","A pin",["A pin","A toy","A coin"]],
 ["Where does the pin fall?","On a mat",["On a mat","In a pond","On a bed"]],
 ["What does Tim do with the pin?","Puts it back",["Puts it back","Throws it away","Gives it to Sam"]]
 ]
},
{
 id:"s04",level:2,title:"The Frog on the Log",
 focus:"Blends and short sentences",emoji:"🐸",
 sentences:[
 "A green frog sat on a log.",
 "The frog saw a little bug.",
 "It jumped off the log.",
 "Splash! The frog fell into the pond.",
 "The bug flew away.",
 "The frog swam back to the log."
 ],
 questions:[
 ["Where was the frog sitting?","On a log",["On a log","On a chair","On a rock"]],
 ["What did the frog see?","A bug",["A bug","A bird","A fish"]],
 ["Where did the frog fall?","Into the pond",["Into the pond","Into a hole","Onto the grass"]]
 ]
},
{
 id:"s05",level:2,title:"The Lost Red Hat",
 focus:"Common words and story sequence",emoji:"🧢",
 sentences:[
 "Ben had a red hat.",
 "He put it on a bench.",
 "A gust of wind blew the hat away.",
 "Ben ran after it.",
 "His dog found the hat near a tree.",
 "Ben smiled and put it on his head."
 ],
 questions:[
 ["What did Ben lose?","A hat",["A hat","A shoe","A bag"]],
 ["What blew the hat away?","The wind",["The wind","The rain","A bird"]],
 ["Who found the hat?","Ben's dog",["Ben's dog","Ben's teacher","Ben's friend"]]
 ]
},
{
 id:"s06",level:2,title:"The Little Fish",
 focus:"Digraphs and story sequence",emoji:"🐟",
 sentences:[
 "A little fish lived in a pond.",
 "The fish liked to swim.",
 "One day, it saw a big shadow.",
 "The fish hid behind a rock.",
 "A duck swam past the rock.",
 "The fish came out and swam away."
 ],
 questions:[
 ["Where did the fish live?","In a pond",["In a pond","In a tree","In a bowl"]],
 ["Why did the fish hide?","It saw a shadow",["It saw a shadow","It was sleeping","It wanted food"]],
 ["What swam past the rock?","A duck",["A duck","A frog","A turtle"]]
 ]
},
{
 id:"s07",level:3,title:"Mia's Rainy Day",
 focus:"Weather and longer sentences",emoji:"☔",
 sentences:[
 "Mia looked out of her window.",
 "Dark clouds covered the sky.",
 "She put on her yellow raincoat.",
 "Mia picked up her blue umbrella.",
 "She went outside with her mother.",
 "They splashed in the puddles together.",
 "Mia laughed all the way home."
 ],
 questions:[
 ["What was the weather like?","Rainy",["Rainy","Sunny","Snowy"]],
 ["What colour was Mia's raincoat?","Yellow",["Yellow","Green","Red"]],
 ["Who went outside with Mia?","Her mother",["Her mother","Her teacher","Her brother"]]
 ]
},
{
 id:"s08",level:3,title:"The Magic Seed",
 focus:"Sequence and long vowels",emoji:"🌱",
 sentences:[
 "Leo found a tiny seed in the garden.",
 "He planted it in a small pot.",
 "Every morning, Leo gave it water.",
 "He placed the pot near the window.",
 "One day, a green shoot appeared.",
 "The shoot grew taller and taller.",
 "Soon, a bright flower opened.",
 "Leo was proud of his little plant."
 ],
 questions:[
 ["What did Leo find?","A seed",["A seed","A stone","A shell"]],
 ["Where did Leo put the pot?","Near the window",["Near the window","Under the bed","In a cupboard"]],
 ["What grew from the seed?","A flower",["A flower","An apple tree","A mushroom"]]
 ]
},
{
 id:"s09",level:3,title:"A Day at the Beach",
 focus:"Descriptions and comprehension",emoji:"🏖️",
 sentences:[
 "Ella went to the beach with her family.",
 "The sand felt warm under her feet.",
 "She made a tall sandcastle.",
 "Her brother collected small shells.",
 "They watched the waves roll onto the shore.",
 "Dad gave everyone a cold drink.",
 "Before leaving, they cleaned up their things.",
 "Ella hoped they would return soon."
 ],
 questions:[
 ["What did Ella build?","A sandcastle",["A sandcastle","A house","A boat"]],
 ["What did her brother collect?","Shells",["Shells","Stones","Leaves"]],
 ["What did they do before leaving?","Cleaned up",["Cleaned up","Went swimming","Built another castle"]]
 ]
},
{
 id:"s10",level:4,title:"The Lost Puppy",
 focus:"Narrative and inference",emoji:"🐶",
 sentences:[
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
 questions:[
 ["Where did Amy find the puppy?","Near the gate",["Near the gate","At school","In the kitchen"]],
 ["How did they find its owner?","They checked its collar tag",["They checked its collar tag","They followed footprints","They asked a shopkeeper"]],
 ["How did the puppy react?","It wagged its tail",["It wagged its tail","It hid","It ran away"]]
 ]
},
{
 id:"s11",level:4,title:"The School Garden",
 focus:"Information and sequence",emoji:"🍅",
 sentences:[
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
 questions:[
 ["What did the group grow?","Tomatoes",["Tomatoes","Carrots","Sunflowers"]],
 ["What did they do each morning?","Watered the plants",["Watered the plants","Picked tomatoes","Moved the pots"]],
 ["What appeared after two weeks?","Tiny green leaves",["Tiny green leaves","Large tomatoes","Yellow flowers"]]
 ]
},
{
 id:"s12",level:4,title:"The Little Bird's Big Day",
 focus:"Fluency and inference",emoji:"🐦",
 sentences:[
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
 questions:[
 ["What did the bird want to do?","Learn to fly",["Learn to fly","Build a nest","Find a worm"]],
 ["What happened at first?","It dropped towards the ground",["It dropped towards the ground","It flew above clouds","It went to sleep"]],
 ["Where did it land?","On a nearby branch",["On a nearby branch","On a rooftop","In a pond"]]
 ]
}
];

const STORY_LEVEL_NAMES = {
 1:"First Readers",
 2:"Growing Readers",
 3:"Confident Readers",
 4:"Story Explorers"
};
