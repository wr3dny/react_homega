import "./styles.css";

interface Props {
  onClick: () => void;
}

export const CopyButton = ({ onClick }: Props) => {
  return (
    <div className="copy-button" role="button" onClick={onClick}>
      <div className="copy-button-text">Copy</div>
    </div>
  );
};
