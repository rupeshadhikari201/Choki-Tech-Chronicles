const TextField = ({
  placeHolder,
  prefix_icon,
  surfix_icon,
  type,
  onChange,
  name,
}) => {
  return (
    <div>
      <div
        className="d-flex
align-items-center
input-form-control
"
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
    </div>
  );
};

export default TextField;
