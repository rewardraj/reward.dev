import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  variant: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  className?: string;
  style?: React.CSSProperties;
  transparent?: boolean;
}

export const ButtonDefault: React.FC<ButtonProps> = ({
  variant,
  children,
  onClick,
  disabled,
  type,
  className,
  style,
  transparent,
}) => {
  const buttonClass = `${styles.Button} ${styles[variant]} ${
    transparent ? styles.transparent : ""
  } ${className}`;
  return (
    <button
      className={buttonClass}
      style={style}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

interface ContextButtonProps extends ButtonProps {
  contextMenu: React.ReactNode;
}

export const ContextButton: React.FC<ContextButtonProps> = ({
  contextMenu,
  ...props
}) => {
  return (
    <div className={styles.ContextButton}>
      <ButtonDefault {...props} />
      {contextMenu}
    </div>
  );
};

export default ButtonDefault;
