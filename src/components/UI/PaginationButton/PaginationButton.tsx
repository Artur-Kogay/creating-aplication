import React, { FC } from "react";
import s from "./PaginationButton.module.scss";

interface PaginationButtonProps {
  children: React.ReactNode;
  num: number;
  handleClickBtn: (btnNum: number) => void;
  activeBtn: number;
}

const PaginationButton: FC<PaginationButtonProps> = ({
  children,
  num,
  handleClickBtn,
  activeBtn,
}) => {
  return (
    <button
      onClick={() => handleClickBtn(num)}
      className={num === activeBtn ? s.btn_active : s.btn}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
