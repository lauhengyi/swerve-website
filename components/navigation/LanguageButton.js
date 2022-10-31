import React, { useContext } from 'react';
import AppContext from '../AppContext';
import styles from '../../styles/Navigation.module.css';

export default function LanguageButton() {
  const { lang, setLang } = useContext(AppContext);

  return (
    <div
      className={styles.languageButtonContainer}
      onClick={() => setLang(lang === 0 ? 1 : 0)}
    >
      {lang === 0 ? (
        <button
          type="button"
          className={`${styles.languageButton} ${styles.selected}`}
        >
          EN
        </button>
      ) : (
        <button type="button" className={styles.languageButton}>
          EN
        </button>
      )}
      {lang === 1 ? (
        <button
          type="button"
          className={`${styles.languageButton} ${styles.selected}`}
        >
          中
        </button>
      ) : (
        <button type="button" className={styles.languageButton}>
          中
        </button>
      )}
    </div>
  );
}
