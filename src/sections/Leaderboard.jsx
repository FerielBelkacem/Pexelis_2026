import { useEffect, useState } from "react";
import header2 from "../assets/leaderboard/leaderboard-top.svg";
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

    console.log("ENV CHECK", import.meta.env.VITE_SHEET_ID);
  }, []);


  const getRankBorderColor = (rank) => {
    if (rank === 1) return "#F3C01D"; // Gold
    if (rank === 2) return "#F93D3E"; // Silver
    if (rank === 3 || rank === 4) return "#7AB7FF"; // Bronze
    return "#8931ED"; // Others
  };

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
                    <th>Design Rank</th>
                    <th>Dev Rank</th>
                    <th>Team Name</th>
                    <th>Design Points</th>
                    <th>Dev Points</th>
                  </tr>
                </thead>

                <tbody>
                  {leaderboardData.map((row, index) => {
                    const designRankColor = getRankBorderColor(row.designRank);
                    const devRankColor = getRankBorderColor(row.devRank);

                    return (
                      <tr
                        key={row.team}
                        className={`row-${index}`}
                        data-row-index={index}
                      >
                        {/* Design Rank */}
                        <td className="rank-cell">
                          <div
                            className="rank-square"
                            style={{ borderColor: designRankColor }}
                          >
                            {row.designRank}
                          </div>
                        </td>

                        {/* Dev Rank */}
                        <td className="rank-cell">
                          <div
                            className="rank-square"
                            style={{ borderColor: devRankColor }}
                          >
                            {row.devRank}
                          </div>
                        </td>

                        <td>{row.team}</td>
                        <td>{row.designPoints}</td>
                        <td>{row.devPoints}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
