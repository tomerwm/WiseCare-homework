/* eslint-disable react-hooks/exhaustive-deps */
import React, {  useContext,  useEffect,  useState } from "react";
import Webcam from "react-webcam";
import { SocketContext } from "../../context/socket";


const Livestream = ({ webCamRef, myPose }) => {

	const socket = useContext(SocketContext);

	setInterval(() => {
		
		socket.emit("cam", {image :webCamRef.current ?  webCamRef.current.video : null, myPose}); 
	}, 1000/30)
	
  useEffect(() => {
		
    // as soon as the component is mounted, do the following tasks:

    // emit USER_ONLINE event

    // subscribe to socket events
    // socket.on("JOIN_REQUEST_ACCEPTED", handleInviteAccepted); 

    
  }, []);
	
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

	return (
		<div>
			<Webcam className="camera" ref={webCamRef}/>
		</div>
	);
};
export default Livestream;
