import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  size?: string;
}

const Container: React.FC<ContainerProps> = ({ children, size = 10 }) => {
  return (
    <div className={`container mx-auto w-11/12 lg:w-${size}/12 font-mono`}>
      {children}
    </div>
  );
};

export default Container;
