import "./app.css";
// import { useEffect, useState } from 'react';
import { useEffect } from 'react';

function App() {
  /* One approach to detecting window size.
  const [width, setWidth] = useState(window.innerWidth);
  console.log("Width: ", width);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  **/
  function breakpointMatcher(mediaQueryListObj) {
    if (mediaQueryListObj.matches) {
      console.log("small screen detected");
    } else {
      console.log("large screen detected");
    }
  };

  useEffect(() => {
    const mobileScreenRule = "(max-width: 480px)";
    const mediaQueryList = window.matchMedia(mobileScreenRule);
  
    breakpointMatcher(mediaQueryList);

    mediaQueryList.addEventListener("change", breakpointMatcher);

    return () => mediaQueryList.removeEventListener("change", breakpointMatcher);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          This page exists to test resizing of the viewport.
        </p>
      </header>
    </div>
  );
}

export default App;
