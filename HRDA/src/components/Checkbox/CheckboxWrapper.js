const CheckboxWrapper = ({label, errorText, children}) => (
  <div className="mb-2 d-flex flex-column">
    <label>
      <small>
        {label}
      </small>
    </label>
    <div>
      {children}
    </div>
    <small className="mt-1 text-danger">
      {errorText}
    </small>
  </div>
)

export default CheckboxWrapper