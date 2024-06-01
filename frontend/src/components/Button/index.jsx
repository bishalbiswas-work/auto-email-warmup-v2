import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[10px]" };
const variants = {
  fill: {
    black_900_7f: "bg-black-900_7f text-white-A700",
    white_A700: "bg-white-A700 text-teal-700_01",
    amber_300_7f: "bg-amber-300_7f shadow-bs",
  },
  gradient: { purple_A700_amber_400: "bg-gradient  text-white-A700" },
};
const sizes = { xs: "p-1", sm: "p-[11px]", md: "p-3.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "gradient",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "gradient"]),
  color: PropTypes.oneOf([
    "black_900_7f",
    "white_A700",
    "amber_300_7f",
    "purple_A700_amber_400",
  ]),
};

export { Button };
