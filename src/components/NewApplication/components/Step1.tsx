import React, { useState, ChangeEvent, FC } from "react";
import s from '../NewApplication.module.scss'
import Button from "../../UI/Button/Button";
import NumberInput from "../../UI/Input/Input";
import image from '../../../assets/call.svg'


interface Step1Props {
  handleNextStep: () => void;
}

const Step1: FC<Step1Props> = ({ handleNextStep }) => {
  const [number, setNumber] = useState<string>("");

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    let number = e.target.value;
    if (number.length === 1) {
      number = "996" + number;
    } else if (number === "996") {
      number = "";
    }
    if (number.length <= 12) {
      setNumber(number);
      localStorage.setItem('phoneNumber', number)
    }
  };

  return (
    <div className={s.newApplication}>
      <div className={s.content}>
        <div className="container">
          <div className={s.content__title}>
            <h2>Введите номер телефона</h2>
          </div>
          <div className={s.content__text}>
            <p>
              Мы отправим на указанный номер одноразовый <br /> смс - код для
              подтверждения
            </p>
          </div>
          <div className={s.content_form}>
            <div className={s.content_form__item}>
                <NumberInput
                  maxLength={12}
                  value={number}
                  setValue={handleChangeInput}
                  placeholder="996 (___) -- / -- / --"
                  type="number"
                  text="Номер телефона"
                  image={image}
                />
            </div>
            <div className={s.content_form__btn}>
              <Button handleNextStep={handleNextStep} isDisabled={number.length !== 12}>
                Отправить
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
