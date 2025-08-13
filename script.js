const quotes = [
  { q: "The secret of getting ahead is getting started.", a: "Mark Twain" },
  { q: "First, solve the problem. Then, write the code.", a: "John Johnson" },
  { q: "Simplicity is the soul of efficiency.", a: "Austin Freeman" },
  { q: "What we know is a drop; what we don’t know is an ocean.", a: "Isaac Newton" },
  { q: "It always seems impossible until it’s done.", a: "Nelson Mandela" },
  { q: "Make it work, make it right, make it fast.", a: "Kent Beck" },
  { q: "The best error message is the one that never shows up.", a: "Thomas Fuchs" },
  { q: "Code is like humor. When you have to explain it, it’s bad.", a: "Cory House" },
  { q: "The only way to learn a new programming language is by writing programs in it.", a: "Dennis Ritchie" },
  { q: "Talk is cheap. Show me the code.", a: "Linus Torvalds" }
];

const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const newBtn = document.getElementById('newBtn');
const copyBtn = document.getElementById('copyBtn');
const statusEl = document.getElementById('status');

let lastIndex = -1;

function randomIndex() {
  if (quotes.length <= 1) return 0;
  let i;
  do { i = Math.floor(Math.random() * quotes.length); } while (i === lastIndex);
  lastIndex = i;
  return i;
}

function showRandom() {
  const i = randomIndex();
  const { q, a } = quotes[i];
  quoteEl.textContent = `“${q}”`;
  authorEl.textContent = `— ${a}`;
  status('New quote loaded');
}

function status(msg) {
  statusEl.textContent = msg;
  setTimeout(() => { if (statusEl.textContent === msg) statusEl.textContent = 'Ready'; }, 1200);
}

async function copyQuote() {
  const text = `${quoteEl.textContent} ${authorEl.textContent}`;
  try {
    await navigator.clipboard.writeText(text);
    status('Copied to clipboard');
  } catch {
    status('Copy not allowed');
  }
}

newBtn.onclick = showRandom;
copyBtn.onclick = copyQuote;

// first render
showRandom();
