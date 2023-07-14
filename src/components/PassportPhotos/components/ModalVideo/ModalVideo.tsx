import { Modal } from "antd";
import React, { FC, Dispatch, SetStateAction, useState } from "react";
import s from "./ModalVideo.module.scss";
import ModalContent from "../ModalContent/ModalContent";
import ModalContent2 from "../ModalContent/ModalContent2";
import ModalContent3 from "../ModalContent/ModalContent3";
import { ModalVideoProps } from "../../../../interfaces/modalVideo";

const ModalVideo: FC<ModalVideoProps> = ({
  modalActive,
  setModalActive,
  recordedVideoURL,
  setRecordedVideoURL,
  step,
  nextStep,
}) => {
  return (
    <Modal
      className={s.modal}
      open={modalActive}
      onCancel={() => setModalActive(false)}
    >
      {step === 1 && <ModalContent nextStep={nextStep} />}

      {step === 2 && (
        <ModalContent2
          nextStep={nextStep}
          recordedVideoURL={recordedVideoURL}
          setRecordedVideoURL={setRecordedVideoURL}
        />
      )}
      
      {step === 3 && (
        <ModalContent3
          setModalActive={setModalActive}
          nextStep={nextStep}
          recordedVideoURL={recordedVideoURL}
        />
      )}
    </Modal>
  );
};

export default ModalVideo;
