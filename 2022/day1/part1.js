const fs = require("fs/promises");

const main = async () => {
  let data;
  try {
    data = await fs.readFile("input.txt", { encoding: "utf8" });
  } catch (err) {
    console.log(err);
  }
  let max = 0;
  let currentCount = 0;
  const dataLines = data.split("\n");
  dataLines.forEach((line) => {
    if (line) {
      currentCount += parseInt(line);
    } else {
      if (currentCount > max) max = currentCount;
      currentCount = 0;
    }
  });
  console.log(max);
};

main();
