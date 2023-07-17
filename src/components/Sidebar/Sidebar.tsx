import React from 'react';
import styles from "./sidebar.module.scss"
import Button from "../Button/Button.tsx";
import Tooltip from "../Tooltip/Tooltip.tsx";


const listButtons = [
  {type: "radio", text: "Техника"},
  {type: "radio", text: "Аксессуар"},
  {type: "radio", text: "Деталь"},
  {type: "checkbox", text: "В наличии"},
  {type: "checkbox", text: "Под заказ: сегодня"},
  {type: "checkbox", text: "Под заказ: завтра"},
  {type: "checkbox", text: "Под заказ: позже"},
]

const renderList = listButtons.map((item, index) => {
  return (
    <Tooltip index={index} key={index}>
      <Button type={item.type} text={item.text} />
    </Tooltip>
    )})

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      {renderList}
    </aside>
  );
}

export default Sidebar;
