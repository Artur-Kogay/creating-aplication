import React, { FC } from "react";
import s from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  handleNextStep?: () => void;
  image?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  isDisabled,
  handleNextStep,
  image
}) => {
  return (
    <button
      className={isDisabled ? s.disabled : s.btn}
      disabled={isDisabled}
      onClick={!isDisabled ? handleNextStep : undefined}
    >
      {image ? <img src={image} alt="img"/> : ''}
      {children}
    </button>
  );
};

export default Button;
