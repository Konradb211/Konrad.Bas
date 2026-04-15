import { Exp } from "../../constants/Exp";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import styles from "./Expierience.module.scss";

export const Expierience = () => {
  return (
    <section className={`${styles.expierience} container-wide`}>
      <SectionTitle>Doświadczenie</SectionTitle>
      <div className={styles.expierience__container}>
        {Exp.map((job) => (
          <div className={styles.expierience__container__item} key={job.id}>
            <h2 className={styles.expierience__container__item__title}>
              {job.company}
            </h2>
            <p className={styles.expierience__container__item__period}>
              {job.position} | {job.period}
            </p>

            <div
              className={styles.expierience__container__item__responsibilities}
            >
              {job.responsibilities.map((responsibility) => (
                <p key={responsibility.id}>{responsibility.text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
