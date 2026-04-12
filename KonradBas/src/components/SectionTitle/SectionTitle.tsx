import type { ReactNode } from "react";
import styles from "./SectionTitle.module.scss";

interface Props {
  children: ReactNode;
}
export const SectionTitle = ({ children }: Props) => {
  return <h2 className={styles.sectionTitle}>{children}</h2>;
};
