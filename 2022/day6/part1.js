const fs = require("fs/promises");

const main = async () => {
  let data;
  try {
    data = await fs.readFile("input.txt", { encoding: "utf8" });
  } catch (err) {
    console.log(err);
  }
  let curMarker = "";
  for (let i = 0; i < data.length; i++) {
    const letter = data[i];
    let letterIndex = curMarker.indexOf(letter);
    if (letterIndex === -1) {
      curMarker += letter;
      if (curMarker.length === 4) {
        console.log(i + 1);
        break;
      }
    } else {
      curMarker = curMarker.slice(letterIndex + 1) + letter;
    }
  }
};

main();
