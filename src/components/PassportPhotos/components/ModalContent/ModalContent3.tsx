import React, { FC, Dispatch, SetStateAction } from "react";
import s from "../ModalVideo/ModalVideo.module.scss";
import imgCamera from "../../../../assets/camera2.png";

interface ModalContent3Props {
  nextStep: React.Dispatch<SetStateAction<number>>;
  recordedVideoURL: string | undefined;
  setModalActive: React.Dispatch<SetStateAction<boolean>>;
}

const ModalContent3: FC<ModalContent3Props> = ({
  nextStep,
  recordedVideoURL,
  setModalActive,
}) => {
  const closeModal = () => {
    nextStep(4);
    setModalActive(false);
  };

  return (
    <>
      <div className={s.modal__title}>
        <h2>Результат</h2>
      </div>
      <div className={s.modal__subtitle}>
        <p>Убедитесь что данные хорошо читаются</p>
      </div>
      <div className={s.modal__box}>
        <video src={recordedVideoURL} className={s.camera} autoPlay muted />
      </div>
      <div className={s.modal__btn}>
        <button onClick={() => nextStep(2)}>
          <img src={imgCamera} alt="img" />
          <span>Переснять</span>
        </button>

        <button onClick={() => closeModal()}>
          <img src={imgCamera} alt="img" />
          <span>Продолжить</span>
        </button>
      </div>
    </>
  );
};

export default ModalContent3;
