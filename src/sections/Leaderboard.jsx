import { useEffect, useState } from "react";
import header2 from "../assets/leaderboard/header2.svg";
import cadre from "../assets/leaderboard/cadre.png";
import "../Style/leaderboard.css";
import { getLeaderboard } from "../api/leaderboardService";

export default function Discord() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getLeaderboard()
      .then(setLeaderboardData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
       console.log("ENV CHECK", import.meta.env.VITE_SHEET_ID)
  }, []);

  return (
    <div className="discord-page">
      <img src={header2} alt="Leaderboard header" className="about-bg" />

      <div className="leaderboard-table-container">
        <div className="table-cadre-wrapper">
          <div className="cadre-overlay">
            <img src={cadre} alt="Cadre du tableau" className="cadre-image" />
          </div>

          <div className="table-scroll-wrapper">
            {loading && (
              <div className="pexelis-loading">
                <div className="terminal">
                  <p>$ initializing pexelis leaderboard...</p>
                  <p>
                    $ fetching team scores<span className="dots"></span>
                  </p>
                  <p>$ ranking teams...</p>
                  <p className="cursor">█</p>
                </div>
              </div>
            )}

            {error && <p className="error">{error}</p>}

            {!loading && !error && (
              <table className="leaderboard-table">
                <thead>
                  <tr className="table-header">
                    <th>Rank</th>
                    <th>Team Name</th>
                    <th>Phase1</th>
                    <th>Phase2</th>
                    <th>Total Points</th>
                  </tr>
                </thead>

                <tbody>
                  {leaderboardData.map((row, index) => (
                    <tr
                      key={row.rank}
                      className={`rank-${row.rank} row-${index}`}
                      data-row-index={index}
                    >
                      <td className="rank-cell">{row.rank}</td>
                      <td>{row.team}</td>
                      <td>{row.d1}</td>
                      <td>{row.d2}</td>
                      <td>{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
