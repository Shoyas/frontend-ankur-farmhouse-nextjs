"use client";

import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
import { Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";
type SelectOptions = {
  label: string;
  value: string;
};
type SelectFieldProps = {
  options: SelectOptions[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  defaultValue?: SelectOptions; 
};

const FormSelectField = ({
  name,
  options,
  size,
  value,
  placeholder,
  label,
  defaultValue,
}: SelectFieldProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            defaultValue={defaultValue}
            onChange={onChange}
            options={options}
            value={value}
            size={size}
            placeholder={placeholder}
            style={{ width: "100%" }}
          />
        )}
      />

      <small style={{ color: "red" }}>{errorMessage}</small>
    </>
  );
};

export default FormSelectField;
