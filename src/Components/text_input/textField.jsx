const TextField = ({
  placeholder,
  type,
  name,
  prefix_icon,
  surfix_icon,
  error,
  register,
}) => {
  return (
    <div
      className="d-flex 
      flex-column
    align-items-start
    "
    >
      <label className="mb-2 text-capitalize">{name}</label>
      <div
        className={`d-flex px-2 rounded
align-items-center
input-form-control
w-100
bg-white-smoke
${error ? "red-border" : ""}
`}
      >
        {prefix_icon}
        <input
          type={type}
          placeholder={placeholder}
          className="custom-input text-black-variant-1"
          {...register}
        />
        {surfix_icon ?? ""}
      </div>
      {error && <span className="text-error text-xsm">{error}</span>}
    </div>
  );
};

export default TextField;
