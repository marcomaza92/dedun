import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.page}>
      <h1>
        Dedun is <strong>your</strong> shopping assistant
      </h1>
      <p>Embrace it</p>
      <span>Made with love by Marco Maza</span>
    </section>
  );
}
