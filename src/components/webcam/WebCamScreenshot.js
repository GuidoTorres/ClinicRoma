import React, { useState } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import Webcam from "react-webcam";

const WebCamScreenshot = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 bg-success content__camera">
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
          <button onClick={capture} className="botones">
            Capturar foto
          </button>
        </div>
        <div className="col-12 bg-warning">
          {imgSrc && <img src={imgSrc} alt="" />}
        </div>
      </div>
    </div>
  );
};

export default WebCamScreenshot;
//
