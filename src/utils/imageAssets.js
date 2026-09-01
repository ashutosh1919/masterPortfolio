// Vite equivalent of CRA's `require(\`../../assets/images/${path}\`)` for
// dynamic image paths coming from portfolio.js data.
const images = import.meta.glob("../assets/images/*", {
  eager: true,
  import: "default",
});

export function getImage(fileName) {
  return images[`../assets/images/${fileName}`];
}
