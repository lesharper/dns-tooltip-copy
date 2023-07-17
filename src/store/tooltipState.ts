import {atom} from "recoil"
import {deliveryDate, typeProduct} from "../types.ts";

export const productsState = atom({
  key: "productsState",
  default: [
    {
      id: 1,
      title: "Аккамулятор",
      type: typeProduct.detail,
      delivery: deliveryDate.today,
      isStock: false
    },
    {
      id: 2,
      title: "Ноутбук",
      type: typeProduct.technic,
      delivery: deliveryDate.tomorrow,
      isStock: true
    },
    {
      id: 3,
      title: "Монитор",
      type: typeProduct.technic,
      delivery: deliveryDate.lates,
      isStock: false
    },
    {
      id: 4,
      title: "Наушники",
      type: typeProduct.accessories,
      delivery: deliveryDate.today,
      isStock: true
    },
    {
      id: 5,
      type: typeProduct.accessories,
      title: "Мышь",
      delivery: deliveryDate.today,
      isStock: true
    },
    {
      id: 6,
      type: typeProduct.accessories,
      title: "Клавиатура",
      delivery: deliveryDate.lates,
      isStock: false
    },
  ],
})

export const tooltipState = atom({
  key: 'tooltipState',
  default: false,
});

export const activeTooltip = atom({
  key: 'activeTooltip',
  default: -1,
});

export const tooltipTimer = atom({
  key: "tooltipTimer",
  default: -1
})

