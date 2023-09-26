import { useEffect } from "react";
import { Keyboard } from ".";
import { useSoundfont } from "../../adapters/Soundfont";
import { useInstrument } from "../../state/instrument";
//import { useMount } from "../../utils/useMount/useMount";
import { useAudioContext } from "../AudioContextProvider";

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;
  const { instrument } = useInstrument();
  const { loading, play, stop, load, current } = useSoundfont({ AudioContext });

  //useMount(() => load());
  useEffect(() => {
    if (!loading && instrument !== current) load(instrument);
  }, [load, loading, instrument, current]);

  return <Keyboard loading={loading} play={play} stop={stop} />;
};
