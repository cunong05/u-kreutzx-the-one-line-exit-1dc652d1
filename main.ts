// The One-Line Exit — a one-line resignation letter.
// Prints the entry line exactly once to stdout. Deterministic, no network.
const line =
  "I hereby resign — after three years of being told we're a family, I've decided to finally move out.";

if (line.length > 200 || line.includes("\n")) {
  throw new Error("Entry line must be a single line of at most 200 characters.");
}

console.log(line);
