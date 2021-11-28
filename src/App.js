import "./App.css";
import { useRef, useState } from "react";
import { Pose } from "@mediapipe/pose";

import Canvas from "./components/Canvas";
import Livestream from "./components/Livestream";

function App() {

  const [results, setResults] = useState(undefined)
  
  const canvasRef = useRef(null);
  const webCamRef = useRef(null);

  const myPose = new Pose({
    locateFile: (file) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
    },
  });

  //pose settings
  myPose.setOptions({
    modelComplexity: 1,
    smoothLandmarks: true,
    enableSegmentation: true,
    smoothSegmentation: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5,
  });

  //wating for function and gets parameter
  myPose.onResults((results) => setResults(results));

  return (
    <div>
      <h1>my app</h1>
      <Livestream webCamRef={webCamRef} myPose={myPose}/>
      <Canvas canvasRef={canvasRef} results={results}/>
      
    </div>
  );
}

export default App;
