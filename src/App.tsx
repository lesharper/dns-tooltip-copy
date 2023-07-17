import React from 'react';
import styles from './app.module.scss'
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import {useRecoilValue} from "recoil";
import {productsState} from "./store/tooltipState.ts";
import {ProductType} from "./types.ts";
import Product from "../src/components/Product/Product.tsx"

const App: React.FC = () => {

  const products: ProductType[] = useRecoilValue(productsState)
  const renderProducts = products.map((item, index) => <Product product={item} key={index}/>)
  return (
    <main className={styles.container}>
        <Sidebar/>
        <section className={styles.catalog}>
          {renderProducts}
        </section>
    </main>
  );
}

export default App;
