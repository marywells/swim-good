export function starRating(num) {
  if (num === 4) return '⭐⭐⭐⭐';
  if (num === 3) return '⭐⭐⭐★';
  if (num === 2) return '⭐⭐★★';
  if (num === 1) return '⭐★★★';
}

export function rateWaterQuality(num) {
  if (num === 4) return 'Excellent';
  if (num === 3) return 'Good';
  if (num === 2) return 'Sufficent';
  if (num === 1) return 'Poor';
}

export function pollutionAlert(bool) {
  if (bool === true) return '🚫 Advise against bathing';
  if (bool === false) return '✔️ Safe to swim';
}

export function calcSwellDir(angle) {
  const directions = ['↑N', '↗NE', '→E', '↘SE', '↓S', '↙SW', '←W', '↖NW'];
  return directions[Math.round(angle / 45) % 8];
}

export function isFave(name, faves) {
  for (let i = 0; i < faves.length; i++) {
    if (faves[i].label === name) return true;
  }
}
