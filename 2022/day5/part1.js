const fs = require("fs/promises");

const main = async () => {
  let data;
  try {
    data = await fs.readFile("input.txt", { encoding: "utf8" });
  } catch (err) {
    console.log(err);
  }
  const parts = data.split("\n\n");
  const setup = parts[0];
  const instsructions = parts[1].split("\n");
  for (let i = 0; i < instsructions.length; i++) {
    const instWords = instsructions[i].split(" ");
    instsructions[i] = {
      num: instWords[1],
      from: instWords[3],
      to: instWords[5],
    };
  }
  const layers = setup.split("\n");
  let stacks = [];

  for (let r = 0; r < layers.length - 1; r++) {
    for (let c = 1; ; c += 4) {
      const value = layers[r][c];
      if (value === undefined) break;
      if (r === 0) stacks.push([]);
      if (value === " ") continue;
      const stackIndex = (c - 1) / 4;
      stacks[stackIndex].unshift(value);
    }
  }
  instsructions.forEach((inst) => {
    for (let i = 0; i < inst.num; i++) {
      move(stacks, inst.from, inst.to);
    }
  });

  let output = "";
  stacks.forEach((s) => {
    output += s.pop();
  });
  console.log(output);
};

main();

function move(stacks, from, to) {
  let fromValue = stacks[from - 1].pop();
  stacks[to - 1].push(fromValue);
}
