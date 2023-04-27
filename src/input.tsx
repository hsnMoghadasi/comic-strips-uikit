import InputUnstyled from "@mui/base/InputUnstyled";
import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input: React.FC<InputProps> = React.forwardRef<
  HTMLButtonElement,
  InputProps
>(({ className = "", disabled, error = false, ...rest }) => {
  return (
    <InputUnstyled
      {...rest}
      slotProps={{
        input: {
          className: `${
            Boolean(error) ? "border-semantic-error " : "border-neutrals-10 "
          } bg-neutrals-10 text-sm w-full font-light duration-200 border rounded w-full h-full py-3 px-2 focus:border-semantic-info border text-neutrals-80 text-s14 placeholder-neutrals-30`,
        },
      }}
      disabled={disabled}
      className={`${disabled ? "opacity-50 " : ""} ${className} `}
    />
  );
});

Input.displayName = "Input";
export default Input;
