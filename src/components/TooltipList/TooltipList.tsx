import React from 'react';
import {Input, InputNode} from "../../types.ts";
import Tooltip from "../Tooltip/Tooltip.tsx";
import CustomInput from "../Input/CustomInput.tsx";

const listInputs: Array<InputNode> = [
  {type: "text", text: ""},
  [
    {type: "checkbox", text: "В наличии"},
    {type: "checkbox", text: "На складе"},
  ],
  [
    {type: "radio", name: "rb1", text: "Под заказ: сегодня"},
    {type: "radio", name: "rb1", text: "Под заказ: завтра"},
    {type: "radio", name: "rb1", text: "Под заказ: позже"},
  ],
  [
    {type: "radio", name: "rb2", text: "Аксессуар"},
    {type: "radio", name: "rb2", text: "Деталь"},
    {type: "radio", name: "rb2", text: "Техника"},
  ],
]

const renderTooltip = (item: Input, index: number) => {
  return (
    <Tooltip key={index} text="Показать">
      <CustomInput type={item.type} name={item.name ?? ""} text={item.text}/>
    </Tooltip>
  )
}

const renderListTooltip = (list: Array<InputNode>)  => {
  return list.map((item: InputNode, index) => {
    if (Array.isArray(item)) {
      return (
        <div key={index}>
          {renderListTooltip(item)}
        </div>
      )
    } else {
      return renderTooltip(item, index)
    }
  })
}

const TooltipList: React.FC = () => {
  return renderListTooltip(listInputs)
}

export default TooltipList;
