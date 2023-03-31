import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<Props> = (props) => {
  return <button className={`btn`}>{props.children}</button>;
};

export default Button;
