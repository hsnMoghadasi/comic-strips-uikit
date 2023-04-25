import React from "react";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";

type variant =
  | "primary_red"
  | "primary_green"
  | "primary_navy"
  | "secondary_red"
  | "secondary_green"
  | "secondary_navy"
  | "tertiary_red"
  | "tertiary_green"
  | "tertiary_navy"
  | "primary_floating"
  | "secondary_floating";
type size = "xlg" | "lg" | "md" | "sm" | "xs";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: variant;
  className?: string;
  disabled?: boolean;
  rounded?: boolean;
  isLoading?: boolean;
  size?: size;
  // iconName?: iconName;
}

const classNamesBySize: Record<size, string> = {
  xlg: "text-s18 h-s56 pr-s12 pl-s12",
  lg: "text-s16 h-s48 pr-s10 pl-s10",
  md: "text-s14 h-s40 pr-s8 pl-s8",
  sm: "text-s12 h-s32 pr-s6 pl-s6 ",
  xs: "text-s10 h-s24 pr-s2 pl-s2",
};

const classNamesByVariant: Record<variant, string> = {
  primary_red: "bg-primary border border-primary text-neutrals-0",
  primary_green: "bg-secondary border border-secondary text-neutrals-0",
  primary_navy: "bg-neutrals-80 border border-neutrals-80 text-neutrals-0",
  secondary_red: "bg-transparent border border-primary text-primary",
  secondary_green: "bg-transparent border border-secondary text-secondary",
  secondary_navy: "bg-transparent border border-neutrals-80 text-neutrals-80",
  tertiary_red: "bg-neutrals-20 border border-neutrals-20 text-neutrals-70",
  tertiary_green: "bg-neutrals-20 border border-neutrals-20 text-neutrals-70",
  tertiary_navy: "bg-neutrals-20 border border-neutrals-20 text-neutrals-70",
  primary_floating: "bg-primary border border-primary text-neutrals-0",
  secondary_floating: "bg-primary border border-primary text-neutrals-0",
};

const classNamesByDisableVariant: Record<variant, string> = {
  primary_red: "bg-primary-light border border-primary-light text-neutrals-0",
  primary_green:
    "bg-secondary-light border border-secondary-light text-neutrals-0",
  primary_navy: "bg-neutrals-30 border border-neutrals-30 text-neutrals-0",
  secondary_red: "bg-primary-light border border-primary-light text-neutrals-0",
  secondary_green:
    "bg-secondary-light border border-secondary-light text-neutrals-0",
  secondary_navy: "bg-neutrals-30 border border-neutrals-30 text-neutrals-0",
  tertiary_red: "bg-primary-light border border-primary-light text-neutrals-0",
  tertiary_green:
    "bg-secondary-light border border-secondary-light text-neutrals-0",
  tertiary_navy: "bg-neutrals-30 border border-neutrals-30 text-neutrals-0",
  primary_floating: "bg-primary border border-primary text-neutrals-0",
  secondary_floating: "bg-primary border border-primary text-neutrals-0",
};

const Button: React.FC<Props> = ({
  children,
  variant = "primary_red",
  disabled,
  className = "",
  rounded = false,
  size = "lg",
  isLoading,
  ...rest
}) => {
  return (
    <ButtonUnstyled
      {...rest}
      slotProps={{
        root: {
          disabled: disabled || isLoading,
          className: `flex items-center justify-center  ${
            disabled || isLoading
              ? classNamesByDisableVariant[variant]
              : classNamesByVariant[variant]
          } ${classNamesBySize[size]} ${
            rounded ? "rounded-full" : "rounded-lg"
          } ${className}`,
        },
      }}
    >
      {children}
    </ButtonUnstyled>
  );
};

export default Button;
