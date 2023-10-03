import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href={"/quick-baseball-clicker"}>quick baseball clicker</Link>
    </main>
  );
}
