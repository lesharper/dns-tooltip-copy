import React from 'react';
import styles from "./app.module.scss"
import TooltipList from "./components/TooltipList/TooltipList.tsx";




const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <p>DNS TOOLTIP</p>
      <TooltipList/>
    </div>
  );
}

export default App;
