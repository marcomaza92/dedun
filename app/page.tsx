import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.page}>
      <header>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </header>
      <main>
        <section>
          <h1>
            Dedun is <strong>your</strong> shopping assistant
          </h1>
          <p>Embrace it</p>
        </section>
      </main>
      <footer>
        <p>Dedun</p>
      </footer>
    </section>
  );
}
