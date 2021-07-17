import React, { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import './webcam.scss';
// const videoConstraints = {
//   facingMode: 'user',
//   height: 50,
//   width: 50,
// };

const WebCam = () => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: 'video/webm',
    });
    mediaRecorderRef.current.addEventListener(
      'dataavailable',
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [setCapturing, mediaRecorderRef]);

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );
  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: 'video/mp4',
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.style = 'display: none';
      a.href = url;
      a.download = 'react-webcam-stream-capture.webm';
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, setCapturing]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Webcam audio={false} ref={webcamRef} />
          {capturing ? (
            <button onClick={handleStopCaptureClick} className="botones mt-3">
              Stop Capture
            </button>
          ) : (
            <button onClick={handleStartCaptureClick} className="botones mt-3">
              Capturar video
            </button>
          )}
          {recordedChunks.length > 0 && (
            <button onClick={handleDownload} className="botones mt-3">
              Download
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WebCam;
