import { InstrumentContextProvider } from "../../state/instrument";
import InstrumentSelector from "../InstrumentSelector/InstrumentSelector";
import { KeyboardWithInstrument } from "../Keyboard";

type Props = {};
const Playground = ({}: Props) => {
  return (
    <>
      <InstrumentContextProvider>
        <div className="playground">
          <KeyboardWithInstrument />
          <InstrumentSelector />
        </div>
      </InstrumentContextProvider>
    </>
  );
};
export default Playground;
