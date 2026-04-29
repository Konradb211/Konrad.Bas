import styles from "./Header.module.scss";

export const Header = () => {
  return <header className={`${styles.header} container-wide`}>
    <div className={styles.header__left}>
      <h1>Konrad Baś</h1>
      <div className={styles.header__left__contact}>
        <a href="tel:+48788767054">Zadzwoń do mnie</a>
        <a href="mailto:konradbas1234@gmail.com">Napisz do mnie</a>
      </div>
    </div>
    <div className={styles.header__right}>
      <p>Web Developer z ponad rocznym doświadczeniem komercyjnym w tworzeniu i rozwijaniu responsywnych
        stron internetowych. Na co dzień pracuję z takimi technologiami jak PHP, JavaScript, Twig, HTML i SCSS,
        tworząc interfejsy użytkownika oraz rozwijając projekty oparte o firmowy system CMS.</p>
    </div>
  </header>;
};
