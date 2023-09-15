import { useEffect, useState } from 'react';

function GetScreenSize() {
  // One approach to detecting window size. Every pixel fires an event so it probably
  // would make things pretty slow. A debouncer might be good enough but could have
  // problems right at the edge of the breakpoints.
  const [width, setWidth] = useState(window.innerWidth);
  console.log("Width: ", width);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  

  /** Second approach to detecting window size. Preferred by random people on internet.
    * It doesn't actually give you the size, it just tells you if the screen matches the
    * rule you provide or not.
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
    console.log(mediaQueryList);
    breakpointMatcher(mediaQueryList);

    mediaQueryList.addEventListener("change", breakpointMatcher);

    return () => mediaQueryList.removeEventListener("change", breakpointMatcher);
  }, []);
  */

  return (
    <div className="App">
        <p style={ {backgroundColor: 'goldenrod'} }>
          This page exists to test resizing of the viewport. <br />
          Width: {width}px
        </p>
    </div>
  );
}

export default GetScreenSize;
