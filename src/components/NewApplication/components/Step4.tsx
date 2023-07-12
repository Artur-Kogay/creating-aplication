import React, { FC, useState, ChangeEvent } from "react";
import s from "../NewApplication.module.scss";
import steps from "../../../assets/steps2.png";
import NumberInput from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { createUserAplication } from "../../../interfaces/createUserAplication";

interface Step4Props {
  handleNextStep: () => void;
}

const Step4: FC<Step4Props> = () => {
  const [value, setValue] = useState<createUserAplication>({
    sum: undefined,
    inn: "",
  });

  const handleSumInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (isNaN(value)) {
      setValue((prev) => ({ ...prev, sum: undefined }));
    }
    setValue((prev) => ({ ...prev, sum: value }));
  };

  const handleInnInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if(value.length <= 14){
      setValue((prev) => ({ ...prev, inn: e.target.value }));
    }
  };

  return (
    <div className={s.main}>
      <div className="container">
        <div className={s.title}>
          <h2>Заполните поля</h2>
          <img src={steps} alt="img" />
        </div>
        <div className={s.content}>
          <form className={s.content__items}>
            <NumberInput
              value={value.sum}
              setValue={handleSumInputValue}
              placeholder="Сумма с переплатой"
              text="Сумма с переплатой"
              type="number"
            />
            <NumberInput
              value={value.inn}
              setValue={handleInnInputValue}
              placeholder="ИНН клиента"
              text="ИНН"
            />
          </form>
        </div>
        <div className={s.content_form__btn}>
          <Button isDisabled={value.inn.length !== 14 || !value.sum}>Создать заявку</Button>
        </div>
      </div>
    </div>
  );
};

export default Step4;
