import React from 'react';
import styles from "./tooltip.module.scss"
import {useRecoilState} from "recoil";

import {tooltipState, activeTooltip, tooltipTimer} from "../../store/tooltipState.ts";

interface TooltipProps {
  children: React.ReactElement,
  index: number
}

const Tooltip: React.FC<TooltipProps> = ({children, index}) => {

  const [showTooltip, setShowTooltip] = useRecoilState(tooltipState)
  const [currentTooltip, setCurrentTooltip] = useRecoilState(activeTooltip)
  const [timer, setTimer] = useRecoilState(tooltipTimer)

  const isTooltipActive = showTooltip && currentTooltip == index

  const swapShow = () => {
    setCurrentTooltip(index)
    setShowTooltip(true)

    if (timer) {
      clearTimeout(timer)
    }

    const timerId = setTimeout(() => {
      setShowTooltip(false)
      console.log(timerId)
    }, 3000)

    setTimer(timerId)
  }
  return (
    <div className={styles.container} onClick={swapShow}>
      {children}
      {isTooltipActive && <div className={styles.tooltip}>Показать</div>}
    </div>
  );
}

export default Tooltip;
