import React from "react";
import { icons } from "../../assets";
import { FormTitle } from "../../FormTitle/FormTitle";
import { LoginForm } from "../../LoginForm/LoginForm";
import styles from "./Login.module.scss";


export const Login = () => {
  return (
    <div className={styles.root}>
      <div className="container">
          <FormTitle
          title={`Login`}
           svgHref={`${icons.login}#loginLogo`}
           text={`Log in to list your bootcamp or rate, review and favorite bootcamps`}/>
          <LoginForm/>
      </div>
    </div>
  );
};
