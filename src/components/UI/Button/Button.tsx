import React, { FC } from "react";
import s from "./Button.module.scss";

interface IProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  handleNextStep?: () => void;
}

const Button: FC<IProps> = ({
  children,
  isDisabled,
  handleNextStep,
}) => {
  return (
    <button
      className={isDisabled ? s.disabled : s.btn}
      disabled={isDisabled}
      onClick={!isDisabled ? handleNextStep : undefined}
    >
      {children}
    </button>
  );
};

export default Button;
