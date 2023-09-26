

/** choice: returns a random items from a list of items */
function choice(items) {
  const randomIdx = Math.floor(Math.random() * items.length);
  return items[randomIdx];
}

export default choice;
