import { Metadata } from "next";
import styles from "../styles/nf.module.css";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>not Found!</h1>
    </div>
  );
}
