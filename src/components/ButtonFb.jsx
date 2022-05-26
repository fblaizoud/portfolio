import PropTypes from "prop-types";

const ButtonFb = ({ link, text }) => {
  return (
    <div className="button">
      <a target="_blank" href={link} rel="noreferrer">
        {text}
      </a>
    </div>
  );
};

ButtonFb.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonFb;
