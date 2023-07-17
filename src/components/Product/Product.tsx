import React from 'react';
import {ProductType} from "../../types.ts";
import styles from "./product.module.scss"
interface ProductProps {
  product: ProductType
}

const Product: React.FC<ProductProps> = ({product}) => {
  return (
    <div className={styles.product}>
      {product.title}
    </div>
  );
}

export default Product;
