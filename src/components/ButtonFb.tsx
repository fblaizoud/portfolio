import React from "react";

type ButtonFbProps = {
  link: string;
  text: string;
};

const ButtonFb = ({ link, text }: ButtonFbProps) => {
  return (
    <div className="button">
      <a target="_blank" href={link} rel="noreferrer">
        {text}
      </a>
    </div>
  );
};

export default ButtonFb;
