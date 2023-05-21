import { getRandomEmoji, removeEmoji } from './emojiModule.js';

// Get DOM elements
const arrayInput = document.getElementById('arrayInput');
const setInput = document.getElementById('setInput');
const emojiInput = document.getElementById('emojiInput');

// Initialize Array and Set
let emojiArray = [];
let emojiSet = new Set();

// Display emojis in the inputs
function displayEmojis() {
  arrayInput.value = emojiArray.join(' ');
  setInput.value = Array.from(emojiSet).join(' ');
}

// Add emoji to Array and Set
function addEmoji() {
  const emojiValue = emojiInput.value;
  emojiArray.push(emojiValue);
  emojiSet.add(emojiValue);
  emojiInput.value = '';
  displayEmojis();
  generateRandomEmoji();
}

// Remove emoji from Array and Set
function removeEmojiFromInput() {
  const emojiToRemove = this.value;
  emojiArray = removeEmoji(emojiArray, emojiToRemove);
  emojiSet.delete(emojiToRemove);
  displayEmojis();
}

// Register remove event for Array input
arrayInput.addEventListener('click', removeEmojiFromInput);

// Generate random emoji
function generateRandomEmoji() {
  const randomEmoji = getRandomEmoji();
  emojiInput.value = randomEmoji;
}

// Generate random emoji on page load
window.addEventListener('DOMContentLoaded', () => {
  generateRandomEmoji();
});
