import React from "react";
import classNames from "classnames";
import styles from "./SectionHeader.module.css"; // Import your CSS module

type SectionHeaderProps = {
  label: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ label }) => {
  return (
    <div className={styles.specialHeader}>
      <header className={styles.sectionHeader}>
        <h1 className="text-6xl font-extrabold">{label}</h1>
        <span
          className={classNames(styles.line, {
            [styles.topLeftContact]: label === "Contact Us",
            [styles.topLeft]: label !== "Contact Us",
          })}
        ></span>
        <span
          className={classNames(styles.line, {
            [styles.bottomRightContact]: label === "Contact Us",
            [styles.bottomRight]: label !== "Contact Us",
          })}
        ></span>
        <span
          className={classNames(styles.line, {
            [styles.topRightContact]: label === "Contact Us",
            [styles.topRight]: label !== "Contact Us",
          })}
        ></span>
        <span
          className={classNames(styles.line, {
            [styles.bottomLeftContact]: label === "Contact Us",
            [styles.bottomLeft]: label !== "Contact Us",
          })}
        ></span>
      </header>
    </div>
  );
};

export default SectionHeader;
