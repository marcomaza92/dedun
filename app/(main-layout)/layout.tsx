import styles from "./layout.module.css";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className={styles.header}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </header>
      <main>{children}</main>
      <footer>
        <p>Dedun</p>
      </footer>
    </>
  );
};

export default MainLayout;
