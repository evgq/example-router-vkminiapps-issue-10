import React from "react";
import style from "./Group.module.scss";

interface GroupProps {
  children: React.ReactNode;
  className?: string;
  padding?: string | number;
  style?: any;
}

const Group = ({
  children,
  className,
  padding,
  style: componentStyle,
  ...props
}: GroupProps) => {
  return (
    <div
      className={`${style.Group} ${className || ""}`}
      style={{ padding: padding ?? 12, ...componentStyle }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Group;
