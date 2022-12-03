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
    let choices = result.split(" ");
    let oppChoice = choices[0];
    let myChoice = choices[1];
    switch (myChoice) {
      case "X":
        score += 1;
        switch (oppChoice) {
          case "A":
            score += 3;
            break;
          case "C":
            score += 6;
            break;
        }
        break;
      case "Y":
        score += 2;
        switch (oppChoice) {
          case "A":
            score += 6;
            break;
          case "B":
            score += 3;
            break;
        }
        break;
      case "Z":
        score += 3;
        switch (oppChoice) {
          case "B":
            score += 6;
            break;
          case "C":
            score += 3;
            break;
        }
        break;
    }
  });
  console.log(score);
};

main();
