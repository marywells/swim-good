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
