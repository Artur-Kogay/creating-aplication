import React, { FC, useState, useEffect, useRef } from "react";
import s from "../NewApplication.module.scss";
import Button from "../../UI/Button/Button";
import Timer from "../../Timer/Timer";

interface Step2Props {
  handleNextStep: () => void;
}

const Step2: FC<Step2Props> = ({ handleNextStep }) => {
  const [number, setNumber] = useState<string>("");
  const [inputs, setInputs] = useState<string[]>(["", "", "", ""]);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    const numberKey = localStorage.getItem("phoneNumber");
    if (numberKey && typeof numberKey === "string") {
      setNumber(numberKey);
    }
  }, []);

  const handleChange = (index: number, value: string) => {
    if (/^\d$/.test(value)) {
      const newInputs = [...inputs];
      newInputs[index] = value;
      setInputs(newInputs);
      if (value !== "") {
        if (index < inputRefs.current.length - 1) {
          inputRefs.current[index + 1]?.focus();
        } else {
          inputRefs.current[0]?.focus();
        }
      }
    }
  };

  const isAllInputsFilled = inputs.every((input) => input !== "");

  return (
    <div className={s.newApplication}>
      <div className={s.content}>
        <div className="container">
          <div className={s.content__title}>
            <h2>Введите код</h2>
          </div>
          <div className={s.content__text}>
            <p>
              На номер {number} отправлен смс - код <br /> для подтверждения
            </p>
          </div>
          <div className={s.content_form}>
            <div className={s.content_form__elements}>
              {inputs.map((input, index) => (
                <input
                  key={index}
                  ref={(ref) =>
                    (inputRefs.current[index] = ref as HTMLInputElement)
                  }
                  value={input}
                  type="number"
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => {
                    if (!/^\d$/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  className={
                    isAllInputsFilled === true
                      ? s.form__input_allActive
                      : input !== ""
                      ? s.form__input_active
                      : s.form__input
                  }
                  maxLength={1}
                />
              ))}
            </div>
            <div className={s.content_form__text}>
              <span>Повторный код будет через </span>
              <Timer />
            </div>
            <div className={s.content_form__btn}>
              <Button
                handleNextStep={handleNextStep}
                isDisabled={!isAllInputsFilled}
              >
                Подтвердить
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;