import React from "react";

const InputBackLabel = ({
  label,
  type,
  step,
  readOnly,
  name,
  value,
  placeholder,
  onChange,
  min,
  backLabel,
  error,
  errorText,
}) => {
  return (
    <>
      <small>{label}</small>
      <div className="input-group mb-3">
        <input
          type={type}
          step={step}
          name={name}
          value={value}
          min={min}
          placeholder={placeholder}
          readOnly={readOnly}
          className={`form-control ${error && "is-invalid"}`}
          onChange={onChange}
        />
        <div className="input-group-append">
          <span className="input-group-text">{backLabel}</span>
        </div>
        <div className="invalid-feedback">{errorText}</div>
      </div>
    </>
  );
};
export default InputBackLabel;
