import PropTypes from "prop-types";

import "./Button.css";

function Button(props) {
  const { color, addClass, size, children,onClick } = props;

  return (
    <button className={`btn btn-${color} btn-${size} ${addClass}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  size: PropTypes.string,
  addClass: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(["primary", "secondary", "success", "danger"]),
  onClick: PropTypes.func,
};