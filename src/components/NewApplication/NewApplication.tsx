import React from "react";
import { useState, ChangeEvent } from "react";
import s from "./NewApplication.module.scss";
import NumberInput from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";

const NewApplication = () => {
  const [step, setStep] = useState<number>(1);

  const handleNextStep = (): void => {
    setStep((prev) => prev + 1);
  };

  return (
    <>
      {step === 1 && <Step1 handleNextStep={handleNextStep} />}
      {step === 2 && <Step2 handleNextStep={handleNextStep} />}
      {step === 3 && <Step3 handleNextStep={handleNextStep} />}
      {step === 4 && <Step4 handleNextStep={handleNextStep} />}
    </>
  );
};

export default NewApplication;
