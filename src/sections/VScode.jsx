import { useState } from "react";
import Editor from "@monaco-editor/react";
import "../Style/vscode.css";

export default function VSCode() {
  const [code, setCode] = useState(`function App() {
  return <h1>Hello Pexelis!</h1>;
}`);

  return (
    <div className="vscode-window">
      {/* Top Bar (Tabs) */}
      <div className="vscode-topbar">
        <span className="vscode-tab active">App.js</span>
        <span className="vscode-tab">index.js</span>
        <span className="vscode-tab">style.css</span>
      </div>

      {/* Main Area */}
      <div className="vscode-main">
        {/* Sidebar */}
        <div className="vscode-sidebar">
          <h3>EXPLORER</h3>
          <ul>
            <li>src/</li>
            <li>-- App.js</li>
            <li>-- index.js</li>
            <li>-- style.css</li>
            <li>public/</li>
            <li>-- index.html</li>
          </ul>
        </div>

        {/* Monaco Editor */}
        <div className="vscode-editor">
          <Editor
            height="100%"
            defaultLanguage="javascript"
            defaultValue={code}
            theme="vs-dark"
            onChange={(value) => setCode(value)}
            options={{
              minimap: { enabled: true },
              readOnly: false,
            }}
          />
        </div>
      </div>
    </div>
  );
}
