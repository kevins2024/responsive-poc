import gearicon from "../resources/gearicon.png";
import searchicon from "../resources/searchicon.png";
import homeicon from "../resources/homeicon.png";

/* It's not "no" CSS but the layout changes on screen size are */
function MockFactoryNoCss() {
  function classBuilder(classString) {
    let classStringFinal = classString;
    if (isPortrait) classStringFinal += "-portrait";
    if (screenWidth > 850) {
      classStringFinal += "-large";
    } else if (screenWidth > 400) {
      classStringFinal += "-medium";
    } else {
      classStringFinal += "-small";
    }
    return classStringFinal;
  }

  // These are calculated before render. It could be necessary to move these to state and have a useEffect or listener that runs until the actual component is rendered.
  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;
  let isPortrait = screenHeight > screenWidth;

  return (
    <main className={classBuilder("MockFactoryNoCss-main")}>
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
            <label>Label for input</label>
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
