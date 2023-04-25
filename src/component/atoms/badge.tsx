import React from "react";

type variant = "default" | "main" | "green" | "red" | "gold" | "blue";
type size = 18 | 20 | 24 | 28;

interface Props extends React.HTMLAttributes<HTMLElement> {
  variant?: variant;
  size?: size;
  //   icon;
  //   avatar;
}

const badgeClassNamesBySize: Record<size, string> = {
  28: "h-s28 ",
  24: "h-s24",
  20: "h-s20 ",
  18: "h-s18",
};

const textClassNamesBySize: Record<size, string> = {
  28: "text-s14 px-s10 ",
  24: "text-s12 px-s8 ",
  20: "text-s12 px-s6  ",
  18: "text-s10 px-s2 ",
};

const badgeClassNamesByVariant: Record<variant, string> = {
  default: "bg-neutrals-10",
  main: "bg-primary-lighter",
  blue: "bg-semantic-info-lighter",
  gold: "bg-semantic-warning-lighter",
  green: "bg-semantic-success-lighter",
  red: "bg-semantic-error-lighter",
};
const textClassNamesByVariant: Record<variant, string> = {
  default: "text-neutrals-40",
  main: "text-primary-dark",
  blue: "text-semantic-info-dark",
  gold: "text-semantic-warning-dark",
  green: "text-semantic-success-dark",
  red: "text-semantic-error-dark",
};

const Badge: React.FC<Props> = ({
  children,
  size = 20,
  variant = "default",
  className,
}) => {
  return (
    <div
      className={`${className} ${badgeClassNamesBySize[size]} ${badgeClassNamesByVariant[variant]} rounded-full flex items-center px-s4`}
    >
      <span
        className={`${textClassNamesBySize[size]} ${textClassNamesByVariant[variant]}`}
      >
        {children}
      </span>
    </div>
  );
};

export default Badge;
