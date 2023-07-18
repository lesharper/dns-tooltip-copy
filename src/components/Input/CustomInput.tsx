import React from 'react';
import styles from "./input.module.scss"

interface InputProps {
  type: string,
  text: string
  name: string
}

const CustomInput: React.FC<InputProps> = ({type, text, name}) => {
  return (
    <label className={styles.input}>
      <input type={type} name={name ?? ""}/>
      <span>{text}</span>
    </label>
  );
}

export default CustomInput;
