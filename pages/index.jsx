import { Routes } from "@config/routes";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";
import { useEffect, useRef, useState } from "react";

const IssuesPage = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    hasCloseButton: true,
  });

  function handleOpenModal() {
    setModalState({ ...modalState, isOpen: true });
  }
  function handleCloseModal() {
    setModalState({ ...modalState, isOpen: false });
  }
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
      <main className={styles.main}>
        <ContactModal
          isOpen={modalState.isOpen}
          hasCloseButton={modalState.hasCloseButton}
          onClose={handleCloseModal}
        >
          <div className={styles.modalContext}>
            <Image width={50} height={50} src="/icons/letter.svg" alt="" />
            <h2>Contact Us Via Email</h2>
            <p>
              Any questions? Send us an email at prolog@profy.dev. We usually
              answer within 24 hours.
            </p>
          </div>
        </ContactModal>
      </main>
      <button
        className={styles.contactButton}
        onClick={handleOpenModal}
        isOpen={modalState.isOpen}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </button>
    </div>
  );
};

function ContactModal({ isOpen, hasCloseButton, onClose, children }) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const modalRef = useRef(null);

  function handleClose() {
    onClose ? onClose() : setIsModalOpen(false);
  }

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      handleClose();
    }
  }

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalEl = modalRef.current;

    if (modalEl) {
      if (isModalOpen) {
        modalEl.showModal();
      } else {
        modalEl.close();
      }
    }
  }, [isModalOpen]);

  return (
    <dialog
      data-isOpen={isOpen}
      ref={modalRef}
      onKeyDown={handleKeyDown}
      className={styles.modal}
    >
      {children}
      <div className={styles.modalCta}>
        {hasCloseButton && (
          <button
            className={`${styles.button} ${styles["buttonPrimary"]}`}
            onClick={handleClose}
          >
            Close
          </button>
        )}
        <a
          type="button"
          href="mailto:prolog@proofy.dev"
          className={`${styles.button} ${styles["buttonEmail"]}`}
        >
          Open Email App
        </a>
      </div>
    </dialog>
  );
}
export default IssuesPage;
