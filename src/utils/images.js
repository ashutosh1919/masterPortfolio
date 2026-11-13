// Vite needs to know the possible files at build time. Keep profile configuration
// as filenames while ensuring the resulting URLs point to emitted assets.
const images = import.meta.glob("../assets/images/*", {
  eager: true,
  query: "?url",
  import: "default",
});

export function imageUrl(filename) {
  return images[`../assets/images/${filename}`];
}
