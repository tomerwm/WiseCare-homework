import { useRef, useState } from "react";
// components
import {makeStyles} from '@material-ui/core'
import {Switch,CircularProgress} from "@mui/material";
import Canvas from "./Canvas";
import Livestream from "./Livestream";

// ready to use API (https://google.github.io/mediapipe/getting_started/javascript.html#ready-to-use-javascript-solutions)
import { Pose } from "@mediapipe/pose";

const useStyles = makeStyles((theme) => ({
	main: {
	  opacity:(loader)=> loader ? 0 : 1,
	  transition:'0.5s',
	},
	loader :{
		margin:'64px auto',
	},
	loaderContainer:{
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		height:'80vh',
	},
	switchBtn:{
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
	},
  }));


function CamView() {

	const [results, setResults] = useState(undefined);
	const [loader, setloader] = useState(true);
	const [showMesh, setShowMesh] = useState(false);

	const canvasRef = useRef(null);
	const webCamRef = useRef(null);

	  const classes = useStyles(loader);

	// instantiate instans of pose 
	const myPose = new Pose({
		// locate file dependencies
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
	myPose.onResults((results) => {
		setResults(results);
		setloader(false);
	});
	return (
		<>
			{loader && <div className={classes.loaderContainer}><CircularProgress className={classes.loader} size={300}/> </div>}
			 <div className={classes.main}>
				<Livestream webCamRef={webCamRef} myPose={myPose} />
				{showMesh && <Canvas canvasRef={canvasRef} results={results} />}
				<div className={classes.switchBtn}>
					<Switch color={"primary"} value={showMesh} onClick={() => setShowMesh(!showMesh)} />
					<h4>Toggle pose</h4>
				 </div>
			</div>
			</>
	);
}

export default CamView;
