import { DatePicker, DatePickerProps, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";

type AFDatePickerProps = {
  name: string;
  label?: string;
  value?: Dayjs;
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  size: "large" | "small";
};

const FormDatePicker = ({ name, label, size, onChange }: AFDatePickerProps) => {
  const { control, setValue } = useFormContext();
  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, dateString);
  };
  return (
    <>
      {" "}
      {label ? label : null}
      <br />
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            defaultValue={dayjs(field.value) || ""}
            size={size}
            onChange={handleOnChange}
            style={{
              width: "100%",
            }}
          />
        )}
      />
    </>
  );
};

export default FormDatePicker;
