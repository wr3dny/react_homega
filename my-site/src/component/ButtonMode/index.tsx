import "./styles.css";

interface Props {
  onClick: () => void;
}

export const ButtonMode = ({ onClick }: Props) => {
  return (
    <div className="mode-button" role="button" onClick={onClick}>
      <div className="mode-button-light"></div>
      <div className="mode-button-dark"></div>
    </div>
  );
};
