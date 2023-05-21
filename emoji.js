const emojis = [':cow:', ':tiger:', ':panda_face:', ':koala:', ':monkey_face:', ':frog:'];

// Function to get a random emoji
function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

// Function to display emojis in the input field
function displayEmojis(emojis, inputField) {
  inputField.value = emojis.map(emoji => emoji + ' ').join('');
}

// Event listener for removing emoji from the set
setInput.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const emoji = event.target.dataset.emoji;
    removeEmojiFromSet(emoji);
  }
});

export { getRandomEmoji, displayEmojis, removeEmoji };
