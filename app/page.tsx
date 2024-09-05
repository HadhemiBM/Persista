import CircleAnimation from "../app/components/Cursor";
import Navbar from "../app/components/Navbar";

import Footer from "./components/footer";
import styles from "./page.module.css";
import Home from "./home/page";

export default function App() {
  return (
    <div className={styles.Page}>
      <Home />
    </div>
  );
}
