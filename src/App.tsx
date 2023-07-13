import React from "react";
import { RzIcon } from "./components/common/RzIcon/";

function App() {
  return (
    <div className="App">
      Hello!
      <RzIcon
        text="test text"
        iconclasses={["text-white", "text-5xl"]}
        textClasses={["text-white"]}
        //iconName="circle-left-arrow"
      />
    </div>
  );
}

export default App;
