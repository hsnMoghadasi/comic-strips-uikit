import React from "react";

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> { }

const Hello: React.FC<Props> = () => {
  return <h1 className="text-primary text-4xl font-bold">Hello world! I am using React</h1>;
};

export default Hello;
