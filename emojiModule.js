// Array of emojis
const emojis = [':cow:', ':tiger:', ':panda_face:', ':koala:', ':monkey_face:', ':frog:'];

// Get random emoji
export function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

// Remove emoji from Array
export function removeEmoji(arr, emoji) {
  return arr.filter(item => item !== emoji);
}
