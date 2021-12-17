import React, { useEffect, useRef, useState } from "react";
import ml5 from "ml5";
import Loader from 'react-loader-spinner';
import useInterval from '@use-it/interval';
import Chart from './Chart'
import { Button } from '@material-ui/core';

let classifier;

export default function StreamVideo({childToParent}) {
  const videoRef = useRef();
  const [start, setStart] = useState(true);
  const [result, setResult] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const myarr = ["None"];

  useEffect(() => {
    classifier = ml5.imageClassifier("./model/tm_my_image_model_2/model.json", () => {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setLoaded(true);
        });
    });
  }, []);

  useInterval(() => {
    var immediate_pass = ""
    if (classifier && start) {
      classifier.classify(videoRef.current, (error, results) => {
        if (error) {
          console.error(error);
          return;
        }
        if(results[0].label !== "No Sign Detected"){
          childToParent(results[0].label)
        }
        setResult(results);
      });
    }
  }, 500);

  return (
    <div className="container">
      <Loader
        type="Watch"
        color="#00BFFF"
        height={370}
        width={244}
        visible={!loaded}
        style={{display:'flex', justifyContent:'center', marginTop:'30px' }}
      />
      <div className="upper">
        <div className="capture">
          <video
            ref={videoRef}
            style={{ transform: "scale(-1, 1)" , display:"none"}}
            width="370"
            height="244"
          />
          <p />
        </div>
      </div>
    </div>
  );
}