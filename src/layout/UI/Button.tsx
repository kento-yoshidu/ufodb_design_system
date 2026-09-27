import styles from "./button.module.css";

type Props = {
  text: string;
  type?: "submit" | "button"
  onClick?: () => void;
};

export default function Button({
  text,
  type = "button",
  onClick,
}: Props) {
  return (
    <button
      className={styles.button}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
