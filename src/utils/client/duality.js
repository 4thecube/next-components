const alphabet = "abcdefghijklmnopqrstuvwxyz";
const lines = 25;
const symbolPerLine = 17;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function replaceWithName(words) {
  const hasSelectedLine = document.querySelector("#selected-line");
  if (hasSelectedLine) return;
  const container = document.querySelector("#filler p");
  const rows = container.innerHTML.split("<br>");

  let randomLines = [];

  while (true) {
    console.log(words.length);
    if (randomLines.length === words.length || rows.length < words.length)
      break;
    const pickedLine = rows[Math.floor(Math.random() * lines)];
    if (randomLines.includes(pickedLine)) continue;
    randomLines.push(pickedLine);
  }

  randomLines.forEach((line) => {
    container.innerHTML = container.innerHTML.replace(
      line,
      `<span id="selected-line">${line}</span>`
    );
  });

  const selectedLines = document.querySelectorAll("#selected-line");

  const shaffledWords = shuffle(words);

  randomLines.forEach((line, index) => {
    const word = shaffledWords[index];
    const endLineIdx = line.length - word.length;
    const randomStart = Math.floor(Math.random() * endLineIdx);
    container.innerHTML = container.innerHTML.replace(
      line,
      line.substring(0, randomStart) +
        `<span id="highlighted">${word}</span>` +
        line.substring(randomStart + word.length)
    );
  });
}

export function fillWithRandomText() {
  const block = document.querySelector("#filler");

  let loremText = "";
  const cicles = lines * symbolPerLine;
  for (let idx = 0; idx < cicles; idx++) {
    loremText += alphabet[Math.floor(Math.random() * alphabet.length)];

    if (idx % symbolPerLine === 0 && idx !== 0) {
      loremText += "<br>";
    }
  }

  block.innerHTML = `<p>${
    loremText.replace(loremText[0], "") + loremText[0]
  }</p>`;
}
