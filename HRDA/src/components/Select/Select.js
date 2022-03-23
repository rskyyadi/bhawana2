import React from "react";

const Select = ({
  label,
  name,
  defaultValue,
  disabled,
  children,
  error,
  errorText,
  onChange,
  style,
}) => {
  return (
    <div className="mb-2">
      <small style={{ textTransform: "capitalize" }}>{label}</small>
      <select
        name={name}
        defaultValue={defaultValue}
        className={`custom-select custom-select-sm ${error && "is-invalid"}`}
        onChange={onChange}
        disabled={disabled}
        style={style}
      >
        {children}
      </select>
      <div className="invalid-feedback">{errorText}</div>
    </div>
  );
};

export default Select;
