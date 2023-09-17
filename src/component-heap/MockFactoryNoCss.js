import gearicon from "../resources/gearicon.png";
import searchicon from "../resources/searchicon.png";
import homeicon from "../resources/homeicon.png";

function MockFactoryNoCss() {
  return (
    <main className="MockFactoryNoCss-main">
      <div className="MockFactoryNoCss-3d-viewer">3d viewer</div>
      <div className="MockFactoryNoCss-sidebar">
        <div className="MockFactoryNoCss-edit-items-form">
          {[1, 2, 3].map((i) => (
            <div key={i} className="MockFactoryNoCss-item">
              Item {i}
            </div>
          ))}
        </div>
        <div className="MockFactoryNoCss-another-form">
          <div>
            <label for="textbox">Label for input</label>
            <br />
            <input name="textbox" type="text" />
          </div>
          <div className="MockFactoryNoCss-button-bar">
            <img src={gearicon} className="icon" alt="settings button" />
            <img src={searchicon} className="icon" alt="search button" />
            <img src={homeicon} className="icon" alt="home button" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MockFactoryNoCss;
