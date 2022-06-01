import React from "react";

type Props = {
  link: string;
  text: string;
};

const ButtonFb = ({ link, text }: Props) => {
  return (
    <div className="button">
      <a target="_blank" href={link} rel="noreferrer">
        {text}
      </a>
    </div>
  );
};

export default ButtonFb;
