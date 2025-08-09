import { useState } from "react";
import styles from "../styles/header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>MyStore 🚀</div>

      {/* Desktop Nav */}
      <nav className={`${styles.nav} ${menuOpen ? styles.showMenu : ""}`}>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>

      {/* Hamburger Menu */}
      <div
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}