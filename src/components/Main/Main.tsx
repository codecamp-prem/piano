import { useAudioContext } from "../AudioContextProvider";
import { KeyboardWithInstrument } from "../Keyboard";
import { NoAudioMessage } from "../NoAudioMessage";

type Props = {};
const Main = ({}: Props) => {
  const AudioContext = useAudioContext();

  return !!AudioContext ? <KeyboardWithInstrument /> : <NoAudioMessage />;
};
export default Main;
