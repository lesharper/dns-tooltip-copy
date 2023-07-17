
export enum deliveryDate {
  today = "today",
  tomorrow = "tomorrow",
  lates = "lates",
}

export enum typeProduct {
  technic = "техника",
  accessories = "аксессуар",
  detail = "деталь"
}

export interface ProductType {
  id: number,
  type: typeProduct,
  title: string,
  delivery: deliveryDate //дата доставки
  isStock: boolean //в наличии
}
