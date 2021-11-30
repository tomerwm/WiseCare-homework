import React from "react";
import * as pose from "@mediapipe/pose";
import { useEffect } from "react";

//styling
import '../../styles/App.css';

const Canvas = ({ canvasRef, results }) => {
	//pose functions that allow me to draw on canvas
	//were added in index.html
	const dConnect = window.drawConnectors;
	const dLandmarks = window.drawLandmarks;

	useEffect(() => {
		if (results !== undefined) {
			// Setting h , w of canvas
			canvasRef.current.width = 1080;
			canvasRef.current.height = 720;
			const canvasElement = canvasRef.current;
			const canvasCtx = canvasElement.getContext("2d");
			try {
				canvasCtx.save();
				canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
				canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
				//draw
				if (results.poseLandmarks) {
					//come to the fornt
					canvasCtx.globalCompositeOperation = "source-over";
					//skeleton
					//gets canvas, cordinations, body pattern from pose library 
					dConnect(canvasCtx, results.poseLandmarks, pose.POSE_CONNECTIONS, {
						color: "#ffffff",
						lineWidth: 2,
					});
					//dots
					dLandmarks(canvasCtx, results.poseLandmarks, {
						color: "pink",
						lineWidth: 0,
					});
					canvasCtx.restore();
				}
			} catch (error) {}
			// console.log(results);
		}
	}, [canvasRef, dConnect, dLandmarks, results]);

	return (
		<div>
			<canvas className="canvas" ref={canvasRef}></canvas>
		</div>
	);
};

export default Canvas;
