import CircleAnimation from "../app/components/Cursor";
import Navbar from "../app/components/Navbar";
import Home from "../app/screens/Home";
import Footer from "./components/footer";
import styles from "./page.module.css";

export default function App() {
  return (
    <div className={styles.Page}>
      <CircleAnimation />
      {/* <Navbar /> */}
      <Home />
      <Footer />
    </div>
  );
}
