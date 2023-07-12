import React, { ChangeEvent, FC, useState } from "react";
import s from "./Input.module.scss";
import { Input } from "../../../interfaces/input";

interface InputProps extends Input {
  setValue?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput: FC<InputProps> = ({
  value,
  setValue,
  maxLength,
  placeholder,
  type,
  text,
  image,
}) => {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <div className={s.formGroup}>
      <input
        className={s.formGroup__input}
        value={value}
        onChange={setValue}
        type={type}
        maxLength={maxLength}
        onFocus={() => setFocus(true)}
        placeholder={placeholder}
      />
      <label className={s.formGroup__label}>{text}</label>
      {image && <img src={image} alt="img" />}
    </div>
  );
};

export default NumberInput;
