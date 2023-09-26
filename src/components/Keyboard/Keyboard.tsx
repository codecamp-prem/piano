import { selectKey } from "../../domain/keyboard";
import { MidiValue, notes } from "../../domain/note";
import { Key } from "../Key";
import styles from "./Keyboard.module.css";

type Props = {
  loading: boolean;
  play: (note: MidiValue) => Promise<void>;
  stop: (note: MidiValue) => Promise<void>;
};
const Keyboard = ({ loading, play, stop }: Props) => {
  return (
    <>
      <div className={styles.keyboard}>
        {notes.map(({ midi, type, index, octave }) => {
          const label = selectKey(octave, index);
          return (
            <Key
              key={midi}
              type={type}
              label={label}
              disabled={loading}
              onDown={() => play(midi)}
              onUp={() => stop(midi)}
            />
          );
        })}
      </div>
    </>
  );
};
export default Keyboard;
