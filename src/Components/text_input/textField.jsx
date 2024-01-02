const TextField = ({
  placeHolder,
  prefix_icon,
  surfix_icon,
  type,
  onChange,
  name,
  isValid,
  errorMessage,
}) => {
  return (
    <div
      className="d-flex 
      flex-column
    align-items-start
    
    "
    >
      <div
        className={`d-flex
align-items-center
input-form-control
w-100
${isValid ? "" : "red-border"}
`}
      >
        {prefix_icon}
        <input
          type={type}
          placeholder={placeHolder}
          className="custom-input"
          name={name}
          onChange={onChange}
        />
        {surfix_icon ?? ""}
      </div>
      {!isValid && <span className="text-error text-xsm">{errorMessage}</span>}
    </div>
  );
};

export default TextField;
