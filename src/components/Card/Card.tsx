import React from "react";
import styles from "./Card.module.scss";

interface ICardProps {
  src?:string
  name?:string
  address?:string
  careers?:Array<string>
  rate?:number | string
  alt?:string,
  key:string | number
}
export const Card:React.FC<ICardProps> = ({ key,src, name, address, careers, rate, alt }) => {
  return (
    <div key={key} className={styles.root}>
      <div className={styles.img}>
        <img src={src || ""} alt={alt || "api doesn't give photo"} />
      </div>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>{name || "Devworks Bootcamp"}</h3>
        <div className={styles.address}>
          <span>{address || "Boston, MA"}</span>
        </div>
        <p className={styles.text}>
          {careers?.slice().join(" ") ||
            "Web Development, UI/UX, Mobile Development"}
        </p>
      </div>
      <div className={styles.rate}>
        <span>{rate || "0.0"}</span>
      </div>
    </div>
  );
};
