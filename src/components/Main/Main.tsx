import { useAudioContext } from "../AudioContextProvider";
import { Keyboard } from "../Keyboard";
import { NoAudioMessage } from "../NoAudioMessage";

type Props = {};
const Main = ({}: Props) => {
  const AudioContext = useAudioContext();

  return !!AudioContext ? <Keyboard /> : <NoAudioMessage />;
};
export default Main;
