import classnames from "classnames";
import { ErrorMessage, Field, useFormikContext } from "formik";
import React from "react";

const FIELD_CLASS = "border rounded-lg px-2 py-1 mb-1";

export interface FormInputProps {
  name: string;
  type?: "email";
  as?: "textarea";
  options?: string[];
  label?: string;
  required?: boolean;
  optional?: boolean;
  width?: string;
  noLabel?: boolean;
}

export const FormInput = ({
  name,
  type,
  as,
  options,
  label,
  required,
  optional,
  width = "w-full",
  noLabel,
}: FormInputProps) => {
  const { touched, errors } = useFormikContext();

  //@ts-ignore
  const isError = touched[name] && !!errors[name];

  return (
    <div className="flex flex-col items-start mb-6">
      <label
        htmlFor={name}
        className="capitalize font-bold mb-1 text-sm text-gray-800"
      >
        {label ?? noLabel ? "" : name}{" "}
        {required && <span className="text-red-500 ">*</span>}
        {optional && <i className="text-gray-400 font-normal">(Optional)</i>}
      </label>
      {options ? (
        <Field
          className={classnames(
            FIELD_CLASS,
            isError ? "border-red-300" : "border-gray-300",
            width
          )}
          name={name}
          as="select"
        >
          <option value="Select...">Select...</option>
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </Field>
      ) : (
        <Field
          className={classnames(
            FIELD_CLASS,
            isError ? "border-red-500" : "border-gray-300",
            width
          )}
          name={name}
          type={type}
          as={as}
        />
      )}
      <ErrorMessage
        className="text-xs text-red-500"
        name={name}
        component="div"
      />
    </div>
  );
};
