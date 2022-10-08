import React from "react";
const variantClasses = {
  h1: "font-semibold lg:text-[22px] xl:text-[28px] text-[32px] 3xl:text-[38px]",
  h2: "font-medium lg:text-[17px] xl:text-[21px] text-[24px] 3xl:text-[28px]",
  h3: "font-medium lg:text-[14px] xl:text-[17px] text-[20px] 3xl:text-[24px]",
  h4: "font-medium lg:text-[12px] xl:text-[16px] text-[18px] 3xl:text-[21px]",
  h5: "font-medium lg:text-[11px] xl:text-[14px] text-[16px] 3xl:text-[19px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
