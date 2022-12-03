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
  let itemCount = {};
  ruckpacks.forEach((items, i) => {
    let itemSet = new Set();
    for (let j = 0; j < items.length; j++) {
      itemSet.add(items[j]);
    }
    itemSet.forEach((item) => {
      if (itemCount[item] !== undefined) itemCount[item]++;
      else itemCount[item] = 1;
    });

    if ((i + 1) % 3 === 0) {
      // Find item with 3 counts reset item count
      for (let item in itemCount) {
        if (itemCount[item] === 3) {
          let itemCode = item.charCodeAt(0);
          if (itemCode >= 65 && itemCode <= 90) {
            sum += itemCode - 38;
          } else if (itemCode >= 97 && itemCode <= 122) {
            sum += itemCode - 96;
          }
        }
      }
      itemCount = {};
    }
  });
  console.log(sum);
};

main();
