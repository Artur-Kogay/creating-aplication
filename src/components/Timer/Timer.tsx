import React, { useEffect, useState } from "react";
import s from "./Timer.module.scss";

const Timer = () => {
  const [time, setTime] = useState<number>(180);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime: number) => {
        if (prevTime === 0) {
          clearInterval(timer);
          return prevTime;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = new Date(time * 1000).toISOString().substr(14, 5);

  return <span className={s.time}>{formattedTime} сек</span>;
};

export default Timer;
