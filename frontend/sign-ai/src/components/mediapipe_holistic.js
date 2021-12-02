import { Holistic } from "@mediapipe/holistic";
import { FaceMesh } from "@mediapipe/face_mesh";
import React, { useRef, useEffect } from "react";
import * as Facemesh from "@mediapipe/face_mesh";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import * as camera_tils from '@mediapipe/camera_utils'
import * as control_utils from '@mediapipe/control_utils'
import { drawConnectors, drawLandmarks, lerp } from '@mediapipe/drawing_utils'


function MediapipeHolistic() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const connect = window.drawConnectors;
  var camera = null;
  function onResults(results) {
    // const video = webcamRef.current.video;
    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

    // Set canvas width
    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext("2d");
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    );

    canvasCtx.globalCompositeOperation = 'source-over';
    drawConnectors(canvasCtx, results.poseLandmarks, Holistic.POSE_CONNECTIONS,
                  {color: '#00FF00', lineWidth: 4});
    drawLandmarks(canvasCtx, results.poseLandmarks,
                  {color: '#FF0000', lineWidth: 2});
    drawConnectors(canvasCtx, results.faceLandmarks, Holistic.FACEMESH_TESSELATION,
                  {color: '#C0C0C070', lineWidth: 1});

                  
    drawConnectors(canvasCtx, results.leftHandLandmarks, Holistic.HAND_CONNECTIONS,
                  {color: '#CC0000', lineWidth: 5});
    drawLandmarks(canvasCtx, results.leftHandLandmarks,
                  {olor: '#FF0000',
                  fillColor: '#00FF00', lineWidth: 2, 
                  radius: (data) => {
                    return lerp(data.from.z, -0.15, .1, 10, 1);
                  }});
    drawConnectors(canvasCtx, results.rightHandLandmarks, Holistic.HAND_CONNECTIONS,
                  {color: '#00CC00', lineWidth: 5});
    drawLandmarks(canvasCtx, results.rightHandLandmarks,
                  {color: '#00FF00',
                  fillColor: '#FF0000',lineWidth: 2, 
                  radius: (data) => {
                    return lerp(data.from.z, -0.15, .1, 10, 1);
                  }});
  

    // if (results.multiFaceLandmarks) {
    //   for (const landmarks of results.multiFaceLandmarks) {
    //     connect(canvasCtx, landmarks, Facemesh.FACEMESH_TESSELATION, {
    //       color: "#C0C0C070",
    //       lineWidth: 1,
    //     });
    //     connect(canvasCtx, landmarks, Facemesh.FACEMESH_RIGHT_EYE, {
    //       color: "#FF3030",
    //     });
    //     connect(canvasCtx, landmarks, Facemesh.FACEMESH_RIGHT_EYEBROW, {
    //       color: "#FF3030",
    //     });
    //     connect(canvasCtx, landmarks, Facemesh.FACEMESH_LEFT_EYE, {
    //       color: "#30FF30",
    //     });
    //     connect(canvasCtx, landmarks, Facemesh.FACEMESH_LEFT_EYEBROW, {
    //       color: "#30FF30",
    //     });
    //     connect(canvasCtx, landmarks, Facemesh.FACEMESH_FACE_OVAL, {
    //       color: "#E0E0E0",
    //     });
    //     connect(canvasCtx, landmarks, Facemesh.FACEMESH_LIPS, {
    //       color: "#E0E0E0",
    //     });
    //   }
    // }
    canvasCtx.restore();
  }
  // }

  // setInterval(())
  useEffect(() => {
    const faceMesh = new Holistic({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`;
      },
    });

    faceMesh.setOptions({
      // maxNumFaces: 1,
      // minDetectionConfidence: 0.5,
      // minTrackingConfidence: 0.5,
      selfieMode: true,
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: false,
      smoothSegmentation: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
      effect: "background",
    });

    faceMesh.onResults(onResults);

    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      camera = new cam.Camera(webcamRef.current.video, {
        onFrame: async () => {
          await faceMesh.send({ image: webcamRef.current.video });
        },
        width: 640,
        height: 480,
      });
      camera.start();
      console.log(webcamRef);
    }
  }, []);


  return (
    <center>
      <div className="App">
        <Webcam
          ref={webcamRef}
          style={{
            borderRadius: '25px', 
            marginTop: '20px', 
            alignContent: 'center',
            position: "absolute",
            // marginLeft: "auto",
            // marginRight: "auto",
            // left: 0,
            // right: 0,
            // textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
        <canvas
          ref={canvasRef}
          className="output_canvas"
          style={{
            borderRadius: '25px', 
            marginTop: '20px', 
            alignContent: 'center',
            position: "relative",
            // position: "absolute",
            // marginLeft: "auto",
            // marginRight: "auto",
            // left: 0,
            // right: 0,
            // textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        ></canvas>
        
      </div>
    </center>
  );
}

export default MediapipeHolistic;