import logo from "./logo.svg";
import "./App.css";
import BuildText from "./components/SideTab/Text/BuildText";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [textColor, settextColor] = useState("#ffffff");
  const [textFont, settextFont] = useState("Impact");
  const [fontSize, setfontSize] = useState(20);
  return (
    <div className="App">
      <header className="App-header">
        {/* <BuildText
          text={text}
          setText={setText}
          textColor={textColor}
          setTextColor={settextColor}
          textFont={textFont}
          setTextFont={settextFont}
          handleCollapse={() => {
            console.log("handleCollapse");
          }}
          fontSize={fontSize}
          setFontSize={setfontSize}
          layerCloseHandler={() => {
            console.log("handleCollapse");
          }}
        /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <canvas height={512} width={512} style={{ background: "white" }} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
