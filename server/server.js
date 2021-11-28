const express = require('express');
 const Pose = require ("@mediapipe/pose");
const app = express();
app.use(express.json())
app.post("/api", async (req,res)=>{
    // const  myPose = new Pose.Pose({
    //     locateFile: (file) => {
    //       return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
    //     },
    //   });
      
      //pose settings
    //   myPose.setOptions({
    //     modelComplexity: 1,
    //     smoothLandmarks: true,
    //     enableSegmentation: true,
    //     smoothSegmentation: true,
    //     minDetectionConfidence: 0.5,
    //     minTrackingConfidence: 0.5,
    //   });
    //   console.log(req.body.data);
    //   res.send(await myPose.send({ image: req.body.data }));
    // console.log(req.body);
    // console.log("asdasdsad");
     res.send(req.body) 
})


app.listen(5000,()=>{
    console.log("server strated on port 5000");
})