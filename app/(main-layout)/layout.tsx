import Link from "next/link";
import styles from "./layout.module.css";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className={styles.header}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/lists">Lists</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
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
