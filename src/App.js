import "./app.css";
import gearicon from "./resources/gearicon.png";
import searchicon from "./resources/searchicon.png";
import homeicon from "./resources/homeicon.png";
import { useState } from "react";
import GetScreenSize from "./component-heap/GetScreenSize";

function App() {
  const SCREEN_SIZE = "ScreenSize";
  const [showScreenSize, setShowScreenSize] = useState(false);
  const MOCK_FACTORY_LAYOUT = "MockFactoryLayout";
  const [showMockFactory, setShowMockFactory] = useState(false);

  function screenSizeClicked() {
    disableAllExcept(SCREEN_SIZE);
    setShowScreenSize(true);
  }

  function mockFactoryClicked() {
    disableAllExcept(MOCK_FACTORY_LAYOUT);
    setShowMockFactory(true);
  }

  function disableAllExcept(excepted) {
    if (excepted !== SCREEN_SIZE) {
      setShowScreenSize(false);
    }
    if (excepted !== MOCK_FACTORY_LAYOUT) {
      setShowMockFactory(false);
    }
  }

  return (
    <div className="App-container">
      <header className="App-header">
        <p>This page exists to test resizing of the viewport.</p>
        <button onClick={mockFactoryClicked}>Mock Factory Layout</button>
        <button onClick={screenSizeClicked}>Screen Size Tester</button>
      </header>
      {
        /*  this component shows how to get screen size information into React */
        showScreenSize && <GetScreenSize />
      }
      {showMockFactory && (
        <main className="App-main">
          <div className="App-3d-viewer">3d viewer</div>
          <div className="App-edit-items-form">
            {[1, 2, 3].map((i) => (
              <div key={i} className="App-item">
                Item {i}
              </div>
            ))}
          </div>
          <div className="App-button-bar">
            <img src={gearicon} className="icon" alt="settings button" />
            <img src={searchicon} className="icon" alt="search button" />
            <img src={homeicon} className="icon" alt="home button" />
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
