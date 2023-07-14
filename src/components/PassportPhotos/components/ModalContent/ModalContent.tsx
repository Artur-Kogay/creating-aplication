import React, { FC, Dispatch, SetStateAction } from "react";
import s from "../ModalVideo/ModalVideo.module.scss";
import imgCamera from "../../../../assets/camera2.png";
import human from "../../../../assets/human.png";

interface ModalContentProps {
  nextStep: React.Dispatch<SetStateAction<number>>;
}

const ModalContent: FC<ModalContentProps> = ({ nextStep }) => {
  return (
    <>
      <div className={s.modal__title}>
        <h2>Сфотографируйтесь с паспортом</h2>
      </div>
      <div className={s.modal__subtitle}>
        <p>Сфотографируйтесь на камеру держа паспорт в руках</p>
      </div>
      <div className={s.modal__img}>
        <img src={human} alt="img" />
      </div>
      <div className={s.modal__btn}>
        <button onClick={() => nextStep(2)}>
          <img src={imgCamera} alt="img" />
          <span>Открыть камеру</span>
        </button>
      </div>
    </>
  );
};

export default ModalContent;
