const SHEET_ID = import.meta.env.VITE_SHEET_ID;
const SHEET_NAME = import.meta.env.VITE_SHEET_NAME;

const BASE_URL = `https://opensheet.elk.sh/${SHEET_ID}/${SHEET_NAME}`;

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function fetchLeaderboard() {

  await delay(2000); 

  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch leaderboard");

  const data = await res.json();

  return data.map(row => ({
    rank: Number(row.Rank),
    team: row.Team,
    d1: `${row.d1}P`,
    d2: `${row.d2}P`,
    d3: `${row.d3}P`,
    d4: `${row.d4}P`,
    total: `${row.Total}P`,
  }));
}
