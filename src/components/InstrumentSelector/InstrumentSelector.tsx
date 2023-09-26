import { ChangeEvent } from "react";
import { InstrumentName } from "soundfont-player";
import { useInstrument } from "../../state/instrument";
import { options } from "./Option";
import styles from "./InstrumentSelector.module.css";

type Props = {};
const InstrumentSelector = ({}: Props) => {
  const { instrument, setInstrument } = useInstrument();
  const updateValue = ({ target }: ChangeEvent<HTMLSelectElement>) =>
    setInstrument(target.value as InstrumentName);
  return (
    <>
      <select
        onChange={updateValue}
        value={instrument}
        className={styles.instruments}
      >
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
};
export default InstrumentSelector;
