import React from "react";

const TextArea = ({
  label,
  type,
  name,
  placeholder,
  value,
  rows,
  error,
  errorText,
  onChange,
  readOnly,
}) => {
  return (
    <div className="mb-2">
      <small>{label}</small>
      <textarea
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={`form-control form-control-sm ${error && "is-invalid"}`}
        onChange={onChange}
        rows={rows}
        readOnly={readOnly}
      />
      <div className="invalid-feedback">{errorText}</div>
    </div>
  );
};

export default TextArea;
