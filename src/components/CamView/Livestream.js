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
					// send the image, check if condition is exsist else send null
					await myPose.send( webCamRef.current ? { image: webCamRef.current.video} : null );
				},
				width: 600,
				height: 400,
			});
			camera.start();
		}
	}, []);

	return (
		<div>
			<Webcam className="camera" ref={webCamRef}/>
		</div>
	);
};
export default Livestream;
