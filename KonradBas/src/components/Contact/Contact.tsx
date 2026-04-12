import { SectionTitle } from "../SectionTitle/SectionTitle";
import styles from "./Contact.module.scss";

export const Contact = () => {
  return (
    <div className="container-wide">
      <SectionTitle>kontakt</SectionTitle>
      <form className={styles.formContainer}>
        <label>
          Email
          <input type="email" placeholder="Adres email..." />
        </label>
        <label>
          Firma
          <input type="text" placeholder="Nazwa firmy..." />
        </label>
        <label>
          Wiadomość
          <textarea placeholder="Wiadomość..." rows={5} cols={33} />
        </label>
        <div>
          <button type="submit">Wyślij wiadomość</button>
        </div>
      </form>
    </div>
  );
};
