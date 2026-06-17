import React from "react";
import Routes from "./Routes";
import TargetCursor from "./components/TargetCursor";

function App() {
  return (
    <>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
        hoverDuration={0.2}
      />

      <Routes />
    </>
  );
}

export default App;