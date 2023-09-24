import "./app.css";
import gearicon from "./resources/gearicon.png";
import searchicon from "./resources/searchicon.png";
import homeicon from "./resources/homeicon.png";
import { useState } from "react";
import GetScreenSize from "./component-heap/GetScreenSize";
import MockFactoryNoCss from "./component-heap/MockFactoryNoCss";
import DesktopExtraPanel from "./component-heap/DesktopExtraPanel";

function App() {
  const SCREEN_SIZE = "ScreenSize";
  const [showScreenSize, setShowScreenSize] = useState(false);
  const MOCK_FACTORY_LAYOUT = "MockFactoryLayout";
  const [showMockFactory, setShowMockFactory] = useState(true);
  const MOCK_FACTORY_LAYOUT2 = "MockFactoryLayout2";
  const [showMockFactory2, setShowMockFactory2] = useState(false);

  function screenSizeClicked() {
    disableAllExcept(SCREEN_SIZE);
    setShowScreenSize(true);
  }

  function mockFactoryClicked() {
    disableAllExcept(MOCK_FACTORY_LAYOUT);
    setShowMockFactory(true);
  }

  function mockFactory2Clicked() {
    disableAllExcept(MOCK_FACTORY_LAYOUT2);
    setShowMockFactory2(true);
  }

  function disableAllExcept(excepted) {
    if (excepted !== SCREEN_SIZE) {
      setShowScreenSize(false);
    }
    if (excepted !== MOCK_FACTORY_LAYOUT) {
      setShowMockFactory(false);
    }
    if (excepted !== MOCK_FACTORY_LAYOUT2) {
      setShowMockFactory2(false);
    }
  }

  return (
    <div className="App-container">
      <header className="App-header">
        <button onClick={mockFactoryClicked}>Mock Factory Layout</button>
        <button onClick={mockFactory2Clicked}>No Css Factory Layout</button>
        <button onClick={screenSizeClicked}>Screen Size Tester</button>
      </header>
      {showScreenSize && <GetScreenSize />}
      {showMockFactory && (
        <main className="App-main">
          <DesktopExtraPanel />
          <div className="App-3d-viewer">3d viewer</div>
          <div className="App-sidebar">
            <div className="App-edit-items-form">
              {[1, 2, 3].map((i) => (
                <div key={i} className="App-item">
                  Item {i}
                </div>
              ))}
            </div>
            <div className="App-another-form">
              <div>
                <label>Label for input</label>
                <br />
                <input name="textbox" type="text" />
              </div>
              <div className="App-button-bar">
                <img src={gearicon} className="icon" alt="settings button" />
                <img src={searchicon} className="icon" alt="search button" />
                <img src={homeicon} className="icon" alt="home button" />
              </div>
            </div>
          </div>
        </main>
      )}
      {showMockFactory2 && <MockFactoryNoCss />}
    </div>
  );
}

export default App;
