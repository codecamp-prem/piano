import styles from "./Logo.module.css";

type Props = {};
const Logo = ({}: Props) => {
  return (
    <>
      <h1 className={styles.logo}>
        <span role="img" aria-label="Sign of the Horns Emoji">
          🤘
        </span>
        <span role="img" aria-label="Musical Keyboard Emoji">
          🎹
        </span>
        <span role="img" aria-label="Musical Notes Emoji">
          🎶🎶
        </span>
      </h1>
    </>
  );
};
export default Logo;
