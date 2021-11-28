import React from 'react'
import { Pose } from "@mediapipe/pose";
import {useEffect} from "react";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";


const Livestream = ({webCamRef,myPose}) => {

    let camera = null;
    useEffect(() => {
        
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
            <Webcam className='camera' ref={webCamRef} />
        </div>
    )
}
export default Livestream;