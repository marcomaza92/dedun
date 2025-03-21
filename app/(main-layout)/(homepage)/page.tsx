import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.page}>
      <h1>
        Dedun is <strong>your</strong> shopping assistant
      </h1>
      <p>Embrace it</p>
      <p>By Marco Maza</p>
    </section>
  );
}
