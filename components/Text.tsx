import React from "react";

type Rainbow =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "violet";

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type TextProps = {
  color?: Rainbow | "black";
};

export const Text = <C extends React.ElementType = "span">({
  as,
  style,
  color,
  children,
  ...restProps
}: PolymorphicComponentProps<C, TextProps>) => {
  const Component = as || "span";

  const internalStyle = color
    ? {
        style: {
          ...style,
          color,
        },
      }
    : {};

  return (
    <Component {...restProps} {...internalStyle}>
      {children}
    </Component>
  );
};

/* -------------------------------------------------------------------------- */

type BoxProps = {
  title: string;
};

export const Box = <C extends React.ElementType = "div">({
  title,
  as,
  children,
}: PolymorphicComponentProps<C, BoxProps>) => {
  const Component = as || "div";

  return (
    <Component>
      <h3>{title}</h3>
      <hr />
      {children}
    </Component>
  );
};
