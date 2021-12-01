/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";


const Livestream = ({ webCamRef, myPose }) => {
	let camera = null;
	useEffect(() => {
		//have camera
		if (typeof webCamRef.current !== "undefined" && webCamRef.current !== null) {
			camera = new cam.Camera(webCamRef.current.video, {
				onFrame: async () => {
					await myPose.send({ image: webCamRef.current.video });
				},
				width: 1080,
				height: 720,
			});
			camera.start();
		}
		return (()=> {
			 camera.getTracks().forEach(track => track.stop());
		})
	}, []);

	return (
		<div>
			<Webcam className="camera" ref={webCamRef}/>
		</div>
	);
};
export default Livestream;
