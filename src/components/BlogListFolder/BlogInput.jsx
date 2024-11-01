import PropTypes from "prop-types";

function BlogInput(props) {
  const { handleChange, label, type, name, placeholder } = props;
  return (
    <label>
      {label}:
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </label>
  );
}

BlogInput.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default BlogInput;