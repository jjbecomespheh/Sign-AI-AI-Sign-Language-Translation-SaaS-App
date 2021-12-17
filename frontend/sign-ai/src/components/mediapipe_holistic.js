import {
  Holistic,
  POSE_LANDMARKS,
  POSE_LANDMARKS_LEFT,
  POSE_LANDMARKS_RIGHT,
  POSE_CONNECTIONS,
  HAND_CONNECTIONS,
  FACEMESH_TESSELATION,
  FACEMESH_RIGHT_EYE,
  FACEMESH_RIGHT_EYEBROW,
  FACEMESH_LEFT_EYE,
  FACEMESH_LEFT_EYEBROW,
  FACEMESH_FACE_OVAL,
  FACEMESH_LIPS,
  VERSION,
} from "@mediapipe/holistic";
import { FaceMesh } from "@mediapipe/face_mesh";
import { Pose } from "@mediapipe/pose";
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

    
    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;
    
    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext("2d");

    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

    canvasCtx.translate(canvasRef.current.width, 0);
    canvasCtx.scale(-0.9, 0.9);

    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    );

    canvasCtx.globalCompositeOperation = 'source-over';
    
    drawLandmarks(canvasCtx, results.poseLandmarks,
                  {color: '#000000', 
                  fillColor: '#00FF00',lineWidth: 1, 
                  radius: 5});

    drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS,
      {color: '#00FF00', lineWidth: 1});

    drawConnectors(canvasCtx, results.leftHandLandmarks, HAND_CONNECTIONS,
                  {color: 'white',lineWidth: 2});

    drawLandmarks(canvasCtx, results.leftHandLandmarks,
                  {color: '#FF0000',
                  fillColor: '#00FF00', lineWidth: 2, 
                  radius: (data) => {
                    return lerp(data.from.z, -0.15, .1, 10, 1);
                  }});
    drawConnectors(canvasCtx, results.rightHandLandmarks, HAND_CONNECTIONS,
                  {color: 'white',lineWidth: 2});
    drawLandmarks(canvasCtx, results.rightHandLandmarks,
                  {color: '#00FF00',
                  fillColor: '#FF0000',lineWidth: 2, 
                  radius: (data) => {
                    return lerp(data.from.z, -0.15, .1, 10, 1);
                  }});
    
    drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_TESSELATION, {
      color: "#C0C0C070",
      lineWidth: 1
    });
    drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_RIGHT_EYE, {
      color: "rgb(0,217,231)"
    });
    drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_RIGHT_EYEBROW, {
      color: "rgb(0,217,231)"
    });
    drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_LEFT_EYE, {
      color: "rgb(255,138,0)"
    });
    drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_LEFT_EYEBROW, {
      color: "rgb(255,138,0)"
    });
    drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_FACE_OVAL, {
      color: "#E0E0E0",
      lineWidth: 5
    });
    drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_LIPS, {
      color: "#E0E0E0",
      lineWidth: 5
    });
    canvasCtx.restore();
  }

  useEffect(() => {
    const faceMesh = new Holistic({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`;
      },
    });

    faceMesh.setOptions({
      // maxNumFaces: 1,
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
          if (webcamRef.current!=null){
            await faceMesh.send({ image: webcamRef.current.video });
          }
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
  }, []);

  return (
    <center>
      <div className="App">
        <Webcam
          ref={webcamRef}
          style={{
            borderRadius: '12px', 
            marginTop: '20px', 
            alignContent: 'center',
            position: "absolute",
            zindex: 9,
            width: 370,
            height: 277,
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
            zindex: 9,
            width: 370,
            height: 277,
          }}
        ></canvas>
        
      </div>
    </center>
  );
}
export default MediapipeHolistic;