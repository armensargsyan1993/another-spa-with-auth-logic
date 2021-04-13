import React from "react";
import { Controller } from "react-hook-form";
import Select, { components } from "react-select";

export const SelectCreator = ({
  dataName,
  control,
  className,
  options,
  iconObj,
}) => {
  const DropdownIndicator = (props) => {
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
