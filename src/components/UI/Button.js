import styles from "./Button.module.css";

const Button = ({ children, onClick, type }) => {
  return (
    <button
      className={styles.button}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;