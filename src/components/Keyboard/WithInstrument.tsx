import { Keyboard } from ".";
import { useSoundfont } from "../../adapters/Soundfont";
import { useMount } from "../../utils/useMount/useMount";
import { useAudioContext } from "../AudioContextProvider";

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;
  const { loading, play, stop, load } = useSoundfont({ AudioContext });

  useMount(() => load());

  return <Keyboard loading={loading} play={play} stop={stop} />;
};
