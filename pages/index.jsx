import { Routes } from "@config/routes";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";

const IssuesPage = () => {
  return (
    <div>
      {" "}
      <header className={styles.header}>
        <Image
          width={118}
          height={33}
          src="/icons/logo-large.svg"
          alt="Prolog logo"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <nav className={styles.header_nav}>
          <ul className={styles.navList}>
            <li className={styles.nav_link}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.nav_link}>
              <Link href="#">Products</Link>
            </li>
            <li className={styles.nav_link}>
              <Link href="#">Documentation</Link>
            </li>
            <li className={styles.nav_link}>
              <Link href="#">Pricing</Link>
            </li>
          </ul>
        </nav>
        <Link href={Routes.projects}>Open Dashboard</Link>
      </header>
      <button
        className={styles.contactButton}
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal",
          )
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </button>
    </div>
  );
};

export default IssuesPage;
