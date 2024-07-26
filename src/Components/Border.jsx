import PropTypes from "prop-types";

function Border({ text }) {
  return <div className="border">{text}</div>;
}

Border.propTypes = {
  text: PropTypes.string,
};

export default Border;
