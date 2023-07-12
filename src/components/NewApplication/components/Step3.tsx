import React, { useState, FC, ChangeEvent } from "react";
import s from "../NewApplication.module.scss";
import NumberInput from "../../UI/Input/Input";
import { paginationData } from "../../../constants/paginationData";
import PaginationButton from "../../UI/PaginationButton/PaginationButton";
import Button from "../../UI/Button/Button";
import steps from "../../../assets/steps.png";
import cImage from "../../../assets/Group95.png";
import calendar from "../../../assets/calendar.png";
import { dataSum } from "../../../interfaces/dataSum";

interface Step3Props {
  handleNextStep: () => void;
}

const Step3: FC<Step3Props> = ({ handleNextStep }) => {
  const [value, setValue] = useState<dataSum>({
    sum: undefined,
    day: 0,
  });

  const [activeBtn, setActiveBtn] = useState<number>(-1);

  const increment = (): void => {
    if (value.day >= 30) {
      return setValue((prev) => ({ ...prev, day: 30 }));
    }
    setValue((prev) => ({ ...prev, day: prev.day + 1 }));
  };

  const decrement = (): void => {
    if (value.day <= 0) {
      return setValue((prev) => ({ ...prev, day: 0 }));
    }
    setValue((prev) => ({ ...prev, day: prev.day - 1 }));
  };

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (isNaN(value)) {
      setValue((prev) => ({ ...prev, sum: undefined }));
    }
    if (value <= 49500) {
      setValue((prev) => ({ ...prev, sum: value }));
    }
  };

  const handleClickPaginationBtn = (btnNum: number) => {
    setActiveBtn(btnNum);
    setValue((prev) => ({ ...prev, day: btnNum }));
  };

  return (
    <main className={s.main}>
      <div className="container">
        <div className={s.title}>
          <h2>Заполните поля</h2>
          <img src={steps} alt="img" />
        </div>
        <div className={s.content_main}>
          <div className={s.content_main__sum}>
            <div>
              <h2>Сумма:</h2>
              <h2>{value.sum}</h2>
            </div>
            <form className={s.content_main__sum_form}>
              <NumberInput
                type="number"
                value={value.sum}
                setValue={handleInputValue}
                placeholder="Введите сумму"
                image={cImage}
              />
            </form>
            <div className={s.desc}>
              <span>От: 3 тыс.</span>
              <span>До: 49 500 тыс.</span>
            </div>
          </div>
          <div className={s.content_main__term}>
            <div className={s.content_main__term_counting}>
              <div>
                <img src={calendar} alt="img" />
                <h3>Срок</h3>
              </div>
              <div className={s.content_main__counter}>
                <button onClick={() => decrement()}>-</button>
                <div>{value.day} дней</div>
                <button onClick={() => increment()}>+</button>
              </div>
            </div>
            <div className={s.content_main__pagination}>
              {paginationData.map((button) => (
                <PaginationButton
                  handleClickBtn={handleClickPaginationBtn}
                  activeBtn={activeBtn}
                  num={button.num}
                  key={button.id}
                >
                  {button.text}
                </PaginationButton>
              ))}
            </div>
            <div className={s.desc}>
              <span>От 15 дней</span>
              <span>До 30 дней</span>
            </div>
          </div>
          <div className={s.content_form__btn}>
            <Button
              handleNextStep={handleNextStep}
              isDisabled={!value.sum || value.sum <= 0 || !value.day}
            >
              Далее
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Step3;
