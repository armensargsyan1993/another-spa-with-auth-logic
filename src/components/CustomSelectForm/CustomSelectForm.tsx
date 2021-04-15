import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import arrows from "../../icons/arrows.svg";
import { SelectCreator } from "../SelectCreator/SelectCreator";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import styles from "./CustomSelectForm.module.scss";

interface ICustomSelectPayloadInner{
  value:string,
  label:string
}

export interface ICustomSelectPayload{
  ratingSelect:ICustomSelectPayloadInner
  budgetSelect:ICustomSelectPayloadInner
}

export const CustomSelectForm:React.FC = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data:ICustomSelectPayload) => {
    // console.warn(data)
  };

  const ratingSelect = [
    { value: '1', label: 'a' },
    { value: '2', label: 'b' },
    { value: '3', label: 'c' }
  ]
  const budgetSelect = [
    { value: '3', label: 'e' },
    { value: '4', label: 'd' },
    { value: '5', label: 'f' }
  ]
  const iconObj = {
    src: arrows,
    id: "arrow",
    className: styles.arrow,
  };

  return (
    <div className={styles.root}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <span>Rating</span>
        <SelectCreator
          iconObj={iconObj}
          dataName="ratingSelect"
          className={styles.rating}
          control={control}
          options={ratingSelect}
        />
        <span>Budget</span>
        <SelectCreator
          iconObj={iconObj}
          dataName="budgetSelect"
          className={styles.budget}
          control={control}
          options={budgetSelect}
        />
        <SubmitButton />
      </form>
    </div>
  );
};
