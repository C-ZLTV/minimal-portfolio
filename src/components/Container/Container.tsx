import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  size?: string;
}

const Container: React.FC<ContainerProps> = ({ children, size = "lg" }) => {
  return (
    <div
      className={`container mx-auto w-11/12 lg:max-w-screen-${size} font-mono`}
    >
      {children}
    </div>
  );
};

export default Container;
