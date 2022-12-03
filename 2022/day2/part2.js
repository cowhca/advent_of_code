const fs = require("fs/promises");

const main = async () => {
  let data;
  try {
    data = await fs.readFile("input.txt", { encoding: "utf8" });
  } catch (err) {
    console.log(err);
  }
  const rounds = data.split("\n");
  let score = 0;
  rounds.forEach((result) => {
    let parts = result.split(" ");
    let oppChoice = parts[0];
    let gameResult = parts[1];
    switch (gameResult) {
      case "X":
        score += 0;
        switch (oppChoice) {
          case "A":
            score += 3;
            break;
          case "B":
            score += 1;
            break;
          case "C":
            score += 2;
            break;
        }
        break;
      case "Y":
        score += 3;
        switch (oppChoice) {
          case "A":
            score += 1;
            break;
          case "B":
            score += 2;
            break;
          case "C":
            score += 3;
            break;
        }
        break;
      case "Z":
        score += 6;
        switch (oppChoice) {
          case "A":
            score += 2;
            break;
          case "B":
            score += 3;
            break;
          case "C":
            score += 1;
            break;
        }
        break;
    }
  });
  console.log(score);
};

main();
