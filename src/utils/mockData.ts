const names = [
  "Rahul Sharma",
  "Ananya Verma",
  "Arjun Singh",
  "Priya Gupta",
  "Rohan Mehta",
  "Neha Kapoor",
  "Aman Kumar",
  "Kavya Jain",
  "Aditya Raj",
  "Simran Kaur",
  "Vikas Yadav",
  "Sneha Patel"
];

const colleges = [
  "Delhi University",
  "IIT Delhi",
  "NSUT",
  "DTU",
  "Amity University",
  "BITS Pilani"
];


export const generateCandidates = () => {

return Array.from({length:100}).map((_,i)=>({

id:i+1,

name:names[i % names.length],

college:colleges[i % colleges.length],

assignment:Math.floor(Math.random()*41)+60,

video:Math.floor(Math.random()*41)+60,

ats:Math.floor(Math.random()*41)+60,

github:Math.floor(Math.random()*41)+60,

communication:Math.floor(Math.random()*41)+60,

status:i%3===0 ? "reviewed":"pending",

evaluation:{

uiQuality:3,
componentStructure:3,
stateHandling:3,
edgeCase:3,
responsiveness:3,
accessibility:3,

clarity:3,
confidence:3,
architecture:3,
tradeoff:3,
videoCommunication:3

}

}));

};