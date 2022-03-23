import React from "react";
import Select from "react-select";

const SelectSearch = ({
  label,
  name,
  placeholder,
  isDisabled,
  defaultValue,
  loading,
  option,
  error,
  errorText,
  onChange,
}) => {
  return (
    <div className="mb-2">
      <small style={{ textTransform: "capitalize" }}>{label}</small>
      {loading ? (
        <div className="text-secondary text-center">
          <small>Memuat . . .</small>
        </div>
      ) : (
        <>
          <Select
            name={name}
            options={option}
            placeholder={placeholder}
            onChange={onChange}
            classNamePrefix={error ? "react-select-invalid" : "react-select"}
            defaultValue={defaultValue}
            noOptionsMessage={() => "Tidak ada data"}
            isDisabled={isDisabled}
            styles={{
              control: (base) => ({
                ...base,
                minHeight: 28,
                fontSize: 14,
              }),
              valueContainer: (base) => ({
                ...base,
                paddingLeft: 5,
                margin: 0,
              }),
              dropdownIndicator: (base) => ({
                ...base,
                padding: 0,
                paddingLeft: 5,
                paddingRight: 5,
              }),
              menu: (base) => ({
                ...base,
                fontSize: 13,
              }),
            }}
          />
          <small className="text-danger">{errorText}</small>
        </>
      )}
    </div>
  );
};

export default SelectSearch;
