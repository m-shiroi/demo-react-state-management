let rgb;

export const changeColor = () => {
  rgb = new Array(3).fill(0).map((v) => randomMN(0, 255));
  return colorOutput();
};

const randomMN = (min, max) => {
  const d = Math.max(min, max) - Math.min(min, max);
  return Math.floor(Math.random() * (d + 1) + Math.min(min, max));
};

const colorOutput = () => {
  if (rgb === undefined) return;
  return `rgb(${rgb.join(",")})`;
};
