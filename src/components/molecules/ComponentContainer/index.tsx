import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className: string;
};

export const ComponentContainer = ({ children, className }: ContainerProps) => (
  <div className={className}>{children}</div>
);
