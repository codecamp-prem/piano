import { NoteType } from "../../domain/note";
import clsx from "clsx";
import styles from "./Key.module.css";

type PressCallBack = () => void;

type KeyProps = {
  type: NoteType;
  label: string;
  disabled?: boolean;
  onUp: PressCallBack;
  onDown: PressCallBack;
};

const Key = ({ type, label, onDown, onUp, ...rest }: KeyProps) => {
  return (
    <>
      <button
        className={clsx(styles.key, styles[type])}
        type="button"
        onMouseDown={onDown}
        onMouseUp={onUp}
        {...rest}
      >
        {label}
      </button>
    </>
  );
};
export default Key;
