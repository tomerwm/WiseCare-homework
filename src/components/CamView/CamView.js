import { useRef, useState } from "react";

// components
import { Paper, Switch } from "@mui/material";
import Canvas from "./Canvas";
import Livestream from "./Livestream";

// ready to use API (https://google.github.io/mediapipe/getting_started/javascript.html#ready-to-use-javascript-solutions)
import { Pose } from "@mediapipe/pose";

function CamView() {
	const [results, setResults] = useState(undefined);
	// const [showMesh, setShowMesh] = useState(true);

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

		
		<Paper>
			{/* <Switch color={"primary"} value={showMesh} onClick={() => setShowMesh(!showMesh)} /> */}
			<div>
				<Livestream webCamRef={webCamRef} myPose={myPose} />
				{/*showMesh &&*/ <Canvas canvasRef={canvasRef} results={results} />}
			</div>
		</Paper>
	);
}

export default CamView;
