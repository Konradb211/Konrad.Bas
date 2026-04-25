import { Navigation } from "../../constants/Navigation";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import styles from "./NavigationBar.module.scss";

export const NavigationBar = () => {
  const scrollPosition = useScrollPosition()


  return (
    <nav className={`${styles.nav} ${scrollPosition > 50 ? styles.scrolled : ''}`}>
      <div className={`${styles.nav__container} `}>
        <div className={`${styles.nav__container__containerWide} container-wide`}>
          <div>
            <a href="/">Konrad Baś</a>
          </div>
          <div className={styles.nav__container__items}>
            <ul className={styles.nav__container__items__container}>
              {Navigation.map((item) => (
                <li key={item.id}>
                  <a href={item.url} rel={item.rel} target={item.target}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.nav__container__icons}>
            <a
              href="https://github.com/Konradb211/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="icons/github.svg" alt="Ikona githuba" />
            </a>
            <a
              href="https://www.linkedin.com/in/konrad-ba%C5%9B-34a223262/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="icons/linkedin.svg" alt="Ikona linkedin" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
