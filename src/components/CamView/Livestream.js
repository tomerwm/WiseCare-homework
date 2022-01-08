/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect,useContext } from "react";
import * as cam from "@mediapipe/camera_utils";
import SocketContext from '../../context/socket-context';
import Webcam from "react-webcam";

	

	// setInterval(() => {
		
	// 	socket.emit("cam", {image :webCamRef.current ?  webCamRef.current.video : null, myPose}); 
	// }, 1000)
	
  // useEffect(() => {
		
    // as soon as the component is mounted, do the following tasks:

    // emit USER_ONLINE event

    // subscribe to socket events
    // socket.on("JOIN_REQUEST_ACCEPTED", handleInviteAccepted); 

    
  // }, []);
	
	//   useEffect(() => {
	// 		socketRef.current = io.connect("http://localhost:8080")
	// 		// console.log(JSON.stringify(webCamRef.current));
	// 		const pose = {myPose,webCamRef}
	// 		if (typeof webCamRef.current !== "undefined" && webCamRef.current !== null) {

	// 			console.log(webCamRef.current);
	// 		}
			
	// 		// socket.on("handleCam", handleCam); 
			
	// 		if(camera !== null){
	// 			if (typeof webCamRef.current !== "undefined" && webCamRef.current !== null) {
	// 				camera.start();
	// 			}
				
	// 		}
			
	// 		return ()=>socketRef.current.disconnect()
	// 	// 	return () => {
	// 	// 		// socket.off("handleCam", handleCam);
  //   // };
  // }, [camera, handleCam]);
	
	const Livestream = ({ webCamRef, myPose }) => {
	const socket = useContext(SocketContext);
	let camera = null;
	useEffect(() => {
		//have camera
		if (typeof webCamRef.current !== "undefined" && webCamRef.current !== null) {
			camera = new cam.Camera(webCamRef.current.video, {
				onFrame: async () => {
					console.log(webCamRef?.current?.video?.srcObject);
					
					// send the image, check if condition is exsist else send null
					// socket.emit('cam',(webCamRef?.current?.video))
						await myPose.send({image:webCamRef?.current?.video});
					// console.log((webCamRef?.current?.video));
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
