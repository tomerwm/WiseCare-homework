import "./App.css";
import { useRef, useEffect, useState } from "react";
import { Pose } from "@mediapipe/pose";
import * as pose from "@mediapipe/pose";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";

function App() {

  const webCamRef = useRef(null);
  const canvasRef = useRef(null);
  let camera = null;

  //
  const dConnect = window.drawConnectors;

  const dLandmarks = window.drawLandmarks;

  function onResults(results) {
    // Setting h , w of canvas
    canvasRef.current.width = 1080;
    canvasRef.current.height = 720;
    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext("2d");
    try {
      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      canvasCtx.drawImage(
        results.image,
        0,
        0,
        canvasElement.width,
        canvasElement.height
      );
      //draw
      if (results.poseLandmarks) {
        //come to the fornt
        canvasCtx.globalCompositeOperation = "source-over";
        //skeleton
        dConnect(canvasCtx, results.poseLandmarks, pose.POSE_CONNECTIONS, {
          color: "#ffffff",
          lineWidth: 2,
        });
        //dots
        dLandmarks(canvasCtx, results.poseLandmarks, {
          color: "black",
          lineWidth: 1,
        });
        canvasCtx.restore();

        // position results (x,y)
        // const poseResults = results.poseWorldLandmarks;
        // console.log(poseResults)
      }
    } catch (error) {}
    // console.log(results);
  }

  useEffect(() => {
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

    //
    myPose.onResults(onResults);
    //have camera 
    if (
      typeof webCamRef.current !== "undefined" &&
      webCamRef.current !== null
    ) {
      camera = new cam.Camera(webCamRef.current.video, {
        onFrame: async () => {
          // console.log(webCamRef.current.video);
          // const data = {image: webCamRef.current.video}
            await myPose.send({ image:webCamRef.current.video });
          //  await fetch("/api",{method:"POST",headers: {
          //   'Content-Type': 'application/json'
          // },body:data
          //  })
        },
        width: 1080,
        height: 720,
      });
      camera.start();
    }
  });

  return (
    <div>
      <h1>my app</h1>
      <Webcam className='camera' ref={webCamRef} />
      <canvas className='canvas' ref={canvasRef}></canvas> 
    </div>
  );
}

export default App;
