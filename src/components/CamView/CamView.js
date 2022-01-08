
import React,{useRef,useContext,useEffect} from 'react'
import Webcam from 'react-webcam';
import SocketContext from '../../context/socket-context';

function CamView() {
		const socket = useContext(SocketContext);
	  const webcamRef = useRef(null);
    const canvasRef = useRef(null);
		const canvasRefServer = useRef(null);
    function drawImge() {
        const video = webcamRef.current;
        const canvas = canvasRef.current;
        if (video && canvas) {
            var ctx = canvas.getContext('2d');

            canvas.width = video.video.videoWidth;
            canvas.height = video.video.videoHeight;

            // We want also the canvas to display de image mirrored
            ctx.translate(canvas.width, 0);
            ctx.scale(-1, 1);
            ctx.drawImage(video.video, 0, 0, canvas.width, canvas.height);
            ctx.scale(-1, 1);
            ctx.translate(-canvas.width, 0);
						socket.emit('cam',canvas.toDataURL())
            setTimeout(drawImge, 1000);
        }
    }
    setTimeout(drawImge, 1000);

		useEffect(()=>{
				socket.on('position', data => {
					var image = new Image();
					image.onload = function() {
						const ctx = canvasRefServer.current.getContext('2d');
						ctx.drawImage(image, 0, 0);
					};
					image.src = data
				})
		},[])
    return (
        <>
            <Webcam
                audio={false}
                ref={webcamRef}
                mirrored
                style={{
                    width: "50%", height: "50%"
                }}
            />
            <canvas ref={canvasRef} style={{ width: "30%", height: "30%",display:'none' }} />
						<canvas ref={canvasRefServer} style={{ width: "50%", height: "50%" }} />
        </>
    )
}

export default CamView;
