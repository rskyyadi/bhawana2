const RadioButton = ({id, label, name, value, error, onChange}) => {
  return (
    <div className="custom-control custom-radio custom-control-inline">
      <input 
        type="radio"
        name={name}
        value={value}
        className={`custom-control-input ${error && 'is-invalid'}`} 
        onChange={onChange}
        id={id}
      />
      <label className="custom-control-label" htmlFor={id}>{label}</label>
    </div>
  )
}

export default RadioButton
