const SHEET_ID = import.meta.env.VITE_SHEET_ID;
const SHEET_NAME = import.meta.env.VITE_SHEET_NAME;

const BASE_URL = `https://opensheet.elk.sh/${SHEET_ID}/${SHEET_NAME}`;

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function fetchLeaderboard() {

  await delay(2000); 

  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch leaderboard");

  const data = await res.json();

return data.map(row => {
  console.log(row);
  return {
    team: row.Team,
    designPoints: Number(row["Design Points"]),
    devPoints: Number(row["Dev Points"]),
    designRank: Number(row["Design Rank"]),
    devRank: Number(row["Dev Rank"]),
  };
});



}
