import React from "react";
import { NavLink } from "react-router-dom";
import { SvgCreator } from "../SvgCreator/SvgCreator";
import styles from "./NavLinkCreator.module.scss";

export const NavLinkCreator = ({ navArr }) => {
  return navArr.map((e) => {
    if (Array.isArray(e)) {
        return e
    }
    if (e.line) {
      return <span key={e.key} className={styles.line}></span>;
    }
    return (
      <div key={e.linkName} className={styles.root}>
        <NavLink
          className={styles.link}
          to={`/${e.linkName.slice().replace(/\s/g, "")}`}
          activeClassName={styles.selected}
        >
          {e.svgHref && <SvgCreator clsName={styles.svg} svgHref={e.svgHref} />}
          {e.linkName && <span>{e.linkName}</span>}
        </NavLink>
      </div>
    );
  });
};
