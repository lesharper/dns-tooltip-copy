import React, {ReactElement, useEffect, useRef, useState} from "react";
import styles from "./tooltip.module.scss"
import {useRecoilState} from "recoil";
import {tooltipAtom} from "../../store/tooltip.ts";
import {useTimer} from "../../hooks/useTimer.ts";

interface TooltipProps {
  children: ReactElement,
  text: string
}
const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef(null);
  const [tooltip, setTooltip] = useRecoilState(tooltipAtom)

  const {isRunning, startTimer, stopTimer} = useTimer()

  const handleChange = () => {
    setIsOpen(true);
    setTooltip(ref.current)
    if (isRunning) {
      stopTimer()
    }
    startTimer(() => {
      setIsOpen(false);
    },  3000)
  };

  const handleClick = () => {
    console.log("Произвольный текст")
    setIsOpen(false);
  }

  useEffect(() => {
    if (tooltip !== ref.current) {
      setIsOpen(false);

      if (isRunning) {
        stopTimer()
      }
    }
  }, [tooltip])

  return (
    <div ref={ref} onChange={handleChange} className={styles.container}>
      {children}
      {isOpen && (
        <div className={styles.tooltip} onClick={handleClick}>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
