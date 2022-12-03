const fs = require("fs/promises");

const main = async () => {
  let data;
  try {
    data = await fs.readFile("input.txt", { encoding: "utf8" });
  } catch (err) {
    console.log(err);
  }
  let topCalories = [0, 0, 0];
  let currentCount = 0;
  const dataLines = data.split("\n");
  dataLines.forEach((line) => {
    if (line) {
      currentCount += parseInt(line);
    } else {
      let gtIndex = -1;
      for (let i = 0; i < topCalories.length; i++) {
        if (currentCount <= topCalories[i]) {
          break;
        } else {
          gtIndex = i;
        }
      }
      if (gtIndex !== -1) {
        gtIndex++; // For slicing
        topCalories = [
          ...topCalories.slice(0, gtIndex),
          currentCount,
          ...topCalories.slice(gtIndex),
        ];
        topCalories.shift();
      }
      currentCount = 0;
    }
  });
  console.log(topCalories.reduce((acc, curr) => acc + curr, 0));
};

main();
