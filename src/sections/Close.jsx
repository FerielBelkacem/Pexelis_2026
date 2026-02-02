import "../Style/variables.css";
export default function Close() {
  return (
    <div className="terminal-cool">
      <div className="terminal-frame">
        <div className="terminal-content">
          <div className="command-line">
            <span className="prompt">visitor@site:~$</span>
            <span className="command"> check section</span>
          </div>
          
          <div className="output">
            <div className="status-line">
              <span className="tag">[STATUS]</span>
              <span className="status-closed">● CLOSED</span>
            </div>
            
            <div className="ascii-art">
              <pre>{`
   _____ _                  
  / ____| |                 
 | |    | | ___  ___  ___   
 | |    | |/ _ \\/ __|/ _ \\  
 | |____| | (_) \\__ \\  __/  
  \\_____|_|\\___/|___/\\___|  
              `}</pre>
            </div>
            
            <div className="message-line">
              <span className="arrow">▶</span>
              This section will open later
            </div>
            
            <div className="progress">
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
              <div className="progress-text">Preparing...</div>
            </div>
            
            <div className="command-line">
              <span className="prompt">visitor@site:~$</span>
              <span className="cursor">█</span>
            </div>
          </div>
        </div>
        
        <div className="terminal-footer">
          <span className="hint">Press any key to continue...</span>
        </div>
      </div>
    </div>
  );
}