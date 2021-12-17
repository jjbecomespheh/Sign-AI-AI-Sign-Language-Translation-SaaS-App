import axios from "axios";
import React, {useEffect} from "react";
import Webcam from "react-webcam";;

export const WebcamStreamCapture = () => {
    const webcamRef = React.useRef(null);
    const mediaRecorderRef = React.useRef(null);
    const [capturing, setCapturing] = React.useState(false);
    const [recordedChunks, setRecordedChunks] = React.useState([]);
    const isInitialMount = React.useRef(true);

    useEffect(() => {
      if (isInitialMount.current) {
        isInitialMount.current = false;
      } else {
        if (!capturing) {
          handleDownload();
        }
      }
    }, [capturing])

    const handleStartCaptureClick = React.useCallback(() => {
      setCapturing(true);
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: "video/webm"
      });
      mediaRecorderRef.current.addEventListener(
        "dataavailable",
        handleDataAvailable
      );
      mediaRecorderRef.current.start();
    }, [webcamRef, setCapturing, mediaRecorderRef]);
  
    const handleDataAvailable = React.useCallback(
      ({ data }) => {
        if (data.size > 0) {
          setRecordedChunks((prev) => prev.concat(data));
        }
      },
      [setRecordedChunks]
    );
  
    const handleStopCaptureClick = React.useCallback(() => {
      mediaRecorderRef.current.stop();
      setCapturing(false);
    }, [mediaRecorderRef, webcamRef, setCapturing]);

    const handleDownload = React.useCallback(() => {
      if (recordedChunks.length) {
        const blob = new Blob(recordedChunks, {
          type: "video/webm"
        });
        const url = URL.createObjectURL(blob);
        const video = document.getElementById("video-replay");
        video.src = url
        axios.post("http://127.0.0.1:5000/video_feed", blob).then(console.log("Done"))
      }
    }, [recordedChunks]);
  
    return (
      <div className="d-flex flex-column align-items-center">
        <Webcam audio={false} ref={webcamRef} height={400} width={500}/>
        <video id="video-replay" height="400" width="500" controls></video>
        {capturing ? (
          <button className="btn btn-danger" onClick={handleStopCaptureClick}>Stop Capture</button>
        ) : (
          <button className="btn btn-danger" onClick={handleStartCaptureClick}>Start Capture</button>
        )}
        {recordedChunks.length > 0 && (
          <div>
            <button onClick={handleDownload}>Parse</button>
          </div>
        )}
      </div>
    );
};