import { NoteType } from "../../domain/note";
import clsx from "clsx";
import styles from "./Key.module.css";

type KeyProps = {
  type: NoteType;
  label: string;
  disabled?: boolean;
};

const Key = ({ type, label, ...rest }: KeyProps) => {
  return (
    <>
      <button
        className={clsx(styles.key, styles[type])}
        type="button"
        {...rest}
      >
        {label}
      </button>
    </>
  );
};
export default Key;
