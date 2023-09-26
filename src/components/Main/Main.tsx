import { useAudioContext } from "../AudioContextProvider";
//import { KeyboardWithInstrument } from "../Keyboard";
import { NoAudioMessage } from "../NoAudioMessage";
import Playground from "../Playground/Playground";

type Props = {};
const Main = ({}: Props) => {
  const AudioContext = useAudioContext();

  //return !!AudioContext ? <KeyboardWithInstrument /> : <NoAudioMessage />;
  return !!AudioContext ? <Playground /> : <NoAudioMessage />;
};
export default Main;
