import { getRandomEmoji, displayEmojis, removeEmojiFromSet } from './emoji.js';

const arrayInput = document.getElementById('arrayInput');
const setInput = document.getElementById('setInput');
const emojiInput = document.getElementById('emojiInput');

const arrayEmojis = [];
const setEmojis = new Set();

// Function to add emoji to the array and set
function addEmoji() {
  const emoji = emojiInput.value;
  arrayEmojis.push(emoji);
  setEmojis.add(emoji);
  emojiInput.value = getRandomEmoji();
  displayEmojis(arrayEmojis, arrayInput);
  displayEmojis([...setEmojis], setInput);
}

// Function to remove emoji from the array and set
function removeEmoji(emoji) {
  const index = arrayEmojis.indexOf(emoji);
  if (index > -1) {
    arrayEmojis.splice(index, 1);
    setEmojis.delete(emoji);
    displayEmojis(arrayEmojis, arrayInput);
    displayEmojis([...setEmojis], setInput);
  }
}

displayEmojis(arrayEmojis, arrayInput);
displayEmojis([...setEmojis], setInput);
emojiInput.value = getRandomEmoji();
