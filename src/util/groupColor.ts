import { groupPalette } from "../styles/groupPalette";

export function groupColor(group: string[]) {
  if (group.length === 0) {
    return groupPalette[0];
  }

  const min = [...group].sort()[0];

  let hash = 0;

  for (let i = 0; i < min.length; i++) {
    const code = min.charCodeAt(i);

    hash = (hash * 31 + code) | 0;
  }

  return groupPalette[(hash >>> 0) % groupPalette.length];
}
