import styles from "./ErrorMessage.module.scss";

const ErrorMessage = ({ error }) => {
  return <p className={styles.errorMessage}>{error}</p>;
};

export default ErrorMessage;
