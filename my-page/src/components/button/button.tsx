import "./button.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <div className="button" onClick={onClick}>
      {label}
    </div>
  );
};
