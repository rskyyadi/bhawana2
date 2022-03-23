const Checkbox = ({id, label, name, value, error, onChange}) => {
  return (
    <div className="custom-control custom-checkbox custom-control-inline">
      <input 
        type="checkbox"
        name={name}
        value={value}
        className={`custom-control-input ${error && 'is-invalid'}`} 
        onChange={onChange}
        id={id}
        checked={value}
      />
      <label className="custom-control-label" htmlFor={id}>{label}</label>
    </div>
  )
}

export default Checkbox
