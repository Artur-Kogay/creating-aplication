import React, { useRef, useState, useEffect, SetStateAction } from "react";
import s from ".././ModalVideo/ModalVideo.module.scss";
import imgCamera from "../../../../assets/camera2.png";

interface ModalContent2Props {
  recordedVideoURL: string | undefined;
  setRecordedVideoURL: React.Dispatch<SetStateAction<string | undefined>>;
  nextStep: React.Dispatch<SetStateAction<number>>;
}

const ModalContent2: React.FC<ModalContent2Props> = ({
  setRecordedVideoURL,
  nextStep,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = async () => {
    try {
      setIsRecording(true);

      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.addEventListener(
        "dataavailable",
        handleDataAvailable
      );
      setTimeout(() => {
        stopRecording();
        nextStep(3);
      }, 3000);
      mediaRecorderRef.current.start();
    } catch (error) {
      console.error("Ошибка при получении доступа к камере:", error);
    }
  };

  const displayVideo = () => {
    const blob = new Blob(chunksRef.current, { type: "video/mp4" });
    const url = URL.createObjectURL(blob);
    setRecordedVideoURL(url);
    chunksRef.current = [];
  };

  const stopRecording = async () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      await new Promise((resolve) => {
        mediaRecorderRef.current?.addEventListener("stop", resolve);
      });
      displayVideo();
    }
    if (videoRef.current && videoRef.current.srcObject) {
      (videoRef.current.srcObject as MediaStream)
        .getTracks()
        .forEach((track) => track.stop());
    }
  };

  const handleDataAvailable = (event: BlobEvent) => {
    if (event.data.size > 0) {
      chunksRef.current.push(event.data);
    }
  };

  return (
    <>
      <div className={s.modal__title}>
        <h2>Расположите лицо в центр квадрата</h2>
      </div>
      <div className={s.modal__box}>
        <div>
          <div>
            <video ref={videoRef} className={s.camera} autoPlay muted />
          </div>
        </div>
      </div>
      <div className={s.modal__btn}>
        <button
          onClick={() => startRecording()}
          className={isRecording ? s.disabled_btn : undefined}
          disabled={isRecording}
        >
          <img src={imgCamera} alt="img" />
          <span>Сфотать</span>
        </button>
      </div>
    </>
  );
};

export default ModalContent2;
