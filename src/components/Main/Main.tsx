import { useAudioContext } from "../AudioContextProvider";
import { NoAudioMessage } from "../NoAudioMessage";

const Keyboard = () => <>Keyboard</>;

type Props = {};
const Main = ({}: Props) => {
  const AudioContext = useAudioContext();

  return !!AudioContext ? <Keyboard /> : <NoAudioMessage />;
};
export default Main;
