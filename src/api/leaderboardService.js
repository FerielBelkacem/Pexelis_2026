import { fetchLeaderboard } from "./googleSheet";

export async function getLeaderboard() {
  return fetchLeaderboard();
}
