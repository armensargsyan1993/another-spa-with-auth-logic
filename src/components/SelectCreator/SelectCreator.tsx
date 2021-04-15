import React from "react";
import { Controller } from "react-hook-form";
import Select, { components } from "react-select";
import { ICustomSelectPayloadInner } from "../CustomSelectForm/CustomSelectForm";

interface IIconObject{
  src: string,
  id: string,
  className: string,
}

interface ISelectFormProps{
  dataName:string,
  control:any,
  className:string,
  options:Array<ICustomSelectPayloadInner>,
  iconObj:IIconObject,
}

export const SelectCreator:React.FC<ISelectFormProps> = ({
  dataName,
  control,
  className,
  options,
  iconObj,
}) => {
  const DropdownIndicator:React.FC<any> = (props) => {
    return (
      <div>
        <components.DropdownIndicator {...props}>
          <svg className={iconObj.className}>
            <use href={`${iconObj.src + "#" + iconObj.id}`} />
          </svg>
        </components.DropdownIndicator>
      </div>
    );
  };
  return (
    <Controller
      name={dataName}
      control={control}
      defaultValue={options[0]}
      as={
        <Select
          defaultValue={options[0]}
          components={{ DropdownIndicator }}
          className={className}
          options={options}
        />
      }
    />
  );
};
