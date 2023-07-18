import {useState} from "react";

export const useTimer = () => {
  const [isRunning, setIsTimerRunning] = useState(false);
  const [timer, setTimer] = useState<number>(0);

  const startTimer = (handler:Function, timeout:number) => {
    setIsTimerRunning(true);
    setTimer(setTimeout(() => {
      handler()
      setIsTimerRunning(false);
    }, timeout));
  };

  const stopTimer = () => {
    if (isRunning) {
      clearTimeout(timer);
      setIsTimerRunning(false);
    }
  };

  return {
    isRunning,
    startTimer,
    stopTimer,
  };
};
