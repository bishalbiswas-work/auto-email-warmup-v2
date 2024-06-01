import React from "react";

const sizeClasses = {
  txtDMSansBold28: "font-bold font-dmsans",
  txtNunitoRegular735: "font-normal font-nunito",
  txtDMSerifDisplayRegular32: "font-dmserifdisplay font-normal",
  txtLatoRegular14Bluegray500: "font-lato font-normal",
  txtLatoBold10: "font-bold font-lato",
  txtInterBold20: "font-bold font-inter",
  txtLatoRegular14: "font-lato font-normal",
  txtLatoRegular12: "font-lato font-normal",
  txtPoppinsSemiBold12: "font-poppins font-semibold",
  txtLatoMedium1022: "font-lato font-medium",
  txtDMSerifDisplayRegular16Bluegray900: "font-dmserifdisplay font-normal",
  txtManropeMedium735: "font-manrope font-medium",
  txtDMSerifDisplayRegular28: "font-dmserifdisplay font-normal",
  txtLatoRegular16Gray60002: "font-lato font-normal",
  txtInterRegular1333: "font-inter font-normal",
  txtAntipastoProDemiBold40: "font-antipastopro font-normal",
  txtDMSerifDisplayRegular40: "font-dmserifdisplay font-normal",
  txtLatoRegular823: "font-lato font-normal",
  txtDMSerifDisplayRegular20: "font-dmserifdisplay font-normal",
  txtLatoRegular12Bluegray700bf: "font-lato font-normal",
  txtLatoBold20: "font-bold font-lato",
  txtLatoRegular16: "font-lato font-normal",
  txtDMSerifDisplayRegular28PurpleA700: "font-dmserifdisplay font-normal",
  txtInterBold12: "font-bold font-inter",
  txtLatoRegular16Gray80001: "font-lato font-normal",
  txtNunitoRegular735Black90002: "font-normal font-nunito",
  txtInterBold2395: "font-bold font-inter",
  txtLemonadaRegular2816: "font-lemonada font-normal",
  txtLatoRegular1667: "font-lato font-normal",
  txtLatoRegular1347: "font-lato font-normal",
  txtDMSerifDisplayRegular16: "font-dmserifdisplay font-normal",
  txtInterRegular2333: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
