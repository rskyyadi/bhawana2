import React from "react";

const Input = ({ label, type, name, placeholder, value, readOnly, error, errorText, onChange }) => {
  return (
    <div className="mb-2">
      <small style={{ textTransform: "capitalize" }}>{label}</small>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        readOnly={readOnly}
        className={`form-control form-control-sm ${error && "is-invalid"}`}
        onChange={onChange}
        readOnly={readOnly}
      />
      <div className="invalid-feedback">{errorText}</div>
    </div>
  );
};

export default Input;
