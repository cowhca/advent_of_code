const fs = require("fs/promises");

const main = async () => {
  let data;
  try {
    data = await fs.readFile("input.txt", { encoding: "utf8" });
  } catch (err) {
    console.log(err);
  }
  let lines = data.split("\n");
  let count = 0;
  lines.forEach((line) => {
    let assignments = line.split(",");
    let range1Start = parseInt(assignments[0].split("-")[0]);
    let range1End = parseInt(assignments[0].split("-")[1]);
    let range2Start = parseInt(assignments[1].split("-")[0]);
    let range2End = parseInt(assignments[1].split("-")[1]);
    if (range1Start <= range2End && range1End >= range2Start) count++;
  });
  console.log(count);
};

main();
