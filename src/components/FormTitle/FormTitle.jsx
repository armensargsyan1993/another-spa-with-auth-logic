import React from 'react';
import styles from "./FormTitle.module.scss";

export const FormTitle = ({svgHref, title, text}) => {
    return (
      <div className={styles.root}>
          <div className={styles.top}>
            {svgHref && 
            <svg className={styles.svg}>
              <use href={svgHref} />
            </svg>}
            {title && <h2>{title}</h2>}
          </div>
          <div className={styles.subtitle}>
            {text && 
            <span>
              {text}
            </span>}
          </div>
      </div>
    );
}
