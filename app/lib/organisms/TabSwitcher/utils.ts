export function getGliderDistance(idx: number, gap: number) {
  return idx === 0 ? 0 : idx * 100 + (idx * gap) / 2;
}
