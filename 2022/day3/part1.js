const fs = require("fs/promises");

const main = async () => {
  let data;
  try {
    data = await fs.readFile("input.txt", { encoding: "utf8" });
  } catch (err) {
    console.log(err);
  }
  const ruckpacks = data.split("\n");
  let sum = 0;
  ruckpacks.forEach((items) => {
    let halfLen = items.length / 2;
    let compartments = [items.slice(0, halfLen), items.slice(halfLen)];
    for (let i = 0; i < halfLen; i++) {
      let item = compartments[1][i];
      if (compartments[0].includes(item)) {
        let ascii = item.charCodeAt(0);
        if (ascii >= 65 && ascii <= 90) {
          // Uppercase
          sum += ascii - 38;
        } else if (ascii >= 97 && ascii <= 122) {
          sum += ascii - 96;
        }
        break;
      }
    }
  });
  console.log(sum);
};

main();
