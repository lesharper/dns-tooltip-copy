import React from 'react';
import styles from "./button.module.scss";

interface ButtonProps {
  type: string,
  text: string
}

const Button: React.FC<ButtonProps> = ({type, text}) => {
  return (
    <label className={styles.btn}>
      <input type={type} name="test"/>
      <span>{text}</span>
    </label>
  );
}

export default Button;
