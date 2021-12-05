import io from 'socket.io-client';
import React from "react";
import { useState, useRef , Fragment, useEffect} from "react";
import { Player } from 'video-react';
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";

function VideoStreamPlsWork(){
    // var videoRef = useRef(<Player autoPlay={true} ref={videoRef} id="videoElement" width={750} height={500} />)
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    var camera = null;

    var socket = io('http://localhost:5000');

    socket.on('connect', function(){
        console.log("Connected...!", socket.connected)
    });

    // var video = webcamRef.current.video;

    // if (navigator.mediaDevices.getUserMedia) {
    //     navigator.mediaDevices.getUserMedia({ video: true })
    //     .then(function (stream) {
    //         video.srcObject = stream;
    //         video.play();
    //     })
    //     .catch(function (err0r) {
    //         console.log(err0r)
    //         console.log("Something went wrong!");
    //     });
    // }
    useEffect(() => {
    if (
        (typeof webcamRef.current !== "undefined" ||
        webcamRef.current !== null) || webcamRef.current.video !== null
      ) {
        camera = new cam.Camera(webcamRef.current.video, {
          onFrame: async () => {
            console.log( webcamRef.current.video)
            setInterval(25)
          },
          width: 640,
          height: 480,
          autoPlay: true,
        });
        camera.start();
      }
    }, []);

    function capture(video, scaleFactor) {
      if(scaleFactor == null){
        scaleFactor = 1;
      }
      console.log("FUCK EVERYONE", video)
      var w = video.videoWidth
      var h = video.videoHeight
      console.log("IWUFHIUWHFIUWHFIUWHF", w,h)
       
      const canvasElement = canvasRef.current;
      const canvasCtx = canvasElement.getContext("2d");
      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      canvasCtx.globalCompositeOperation = 'source-over'
      canvasCtx.translate(canvasRef.current.width,  0);
      canvasCtx.scale(-1, 1);
      canvasCtx.drawImage(video, 0, 0, 270, 340);
      // canvasCtx.save();
      canvasCtx.restore();
      return canvasElement;
  } 
  // let src = new cv.Mat(video.height, video.width, cv.CV_8UC4);
  // let dst = new cv.Mat(video.height, video.width, cv.CV_8UC1);
  // let cap = new cv.VideoCapture(video);

  const FPS = 50;

    setInterval(() => {
        // cap.read(src);
        if(webcamRef.current == null){
            console.log("LOL")
            return
        }
        var type = "image/png"
        // var data = document.getElementById("canvasOutput").toDataURL(type);
        // var video_element = document.getElementById("videoElement")
        var video_element = webcamRef.current.video
        console.log("fwhiufhwefjwefwefwef", video_element)
        var frame = capture(video_element, 1)
        var data = frame.toDataURL(type);
        data = data.replace('data:' + type + ';base64,', ''); //split off junk at the beginning
        console.log("DATA IS ", data)
        socket.emit('image', data);
    }, 10000/FPS);


    // socket.on('response_back', function(image){
    //   image ="data:image/png;base64," + image
    //   // console.log("i get shit", image)
    //   image = URL.createObjectURL(image)
    //   console.log("i get shit", image)
    //   var video_element = webcamRef.current.video
    //   video_element.src = image;
    //   const canvasElement = canvasRef.current;
    //   const canvasCtx = canvasElement.getContext("2d");
    //   var w = video_element.videoWidth
    //   var h = video_element.videoHeight
    //   canvasCtx.save();
    //   canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    //   canvasCtx.globalCompositeOperation = 'source-over'
    //   canvasCtx.translate(canvasRef.current.width, 0);
    //   canvasCtx.scale(-1, 1);
    //   canvasCtx.drawImage(image, 0, 0, 370, 277);
    //   canvasCtx.restore();
    // });

    socket.on('prediction', function(pred){
      console.log("FUCKKK", pred)
    })

    return (<center>
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
      </center>)
}
export default VideoStreamPlsWork;
