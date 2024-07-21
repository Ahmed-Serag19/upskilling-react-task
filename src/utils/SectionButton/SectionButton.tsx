import classNames from "classnames";
import "./SectionButton.css";

interface SectionButtonProps {
  label: string;
  color?: "primary" | "secondary" | "warning";
}

const SectionButton = ({ label, color = "primary" }: SectionButtonProps) => {
  const buttonClass = classNames("button", {
    "btn-primary": color === "primary",
    "btn-secondary": color === "secondary",
    "btn-warning": color === "warning",
  });

  return <button className={buttonClass}>{label}</button>;
};

export default SectionButton;
