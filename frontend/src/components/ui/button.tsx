import type { Icon } from "@phosphor-icons/react";

const buttonStyles = {
  variants: {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-secondary text-primary hover:bg-secondary/80",
  },
  buttonSize: {
    sm: "fm anmsla. ",
    md: "px-3 py-2",
    lg: "",
  },
  default:
    "group flex items-center w-fit cursor-pointer gap-1 duration-200 border-transparent",
};

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  text: string;
  icon?: Icon;
  iconPosition?: "left" | "right";
}

export const Button = ({
  variant = "primary",
  text,
  size = "md",
  icon,
  iconPosition = "right",
}: ButtonProps) => {
  const Icon = icon;
  return (
    <button
      className={`
        ${buttonStyles.default} ${buttonStyles.variants[variant]} 
        ${buttonStyles.buttonSize[size]} ${iconPosition === "right" ? "flex-row-reverse" : "flex-row"}`}
    >
      {Icon && <Icon />}
      {text}
    </button>
  );
};
