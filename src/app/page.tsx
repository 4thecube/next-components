import Image from "next/image";
import styles from "./page.module.css";
import Duality from "@/components/Duality/Duality";

import "./page.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="bento-grid__wrapper">
        <div className="bento-grid">
          <div className="item item-1">1</div>
          <div className="item item-2">2</div>
          <div className="item item-3">3</div>
          <div className="item item-4">4</div>
          <div className="item item-5">5</div>
          <div className="item item-6">6</div>
          <div className="item item-7">7</div>
        </div>
      </div>
      <Duality />
      <div className="bento-grid__wrapper"></div>
    </main>
  );
}
