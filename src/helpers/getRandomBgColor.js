export function getRandomBgColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 70 + Math.random() * 20;
  const lightness = 70 + Math.random() * 10;

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
