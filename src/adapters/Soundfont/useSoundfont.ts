import Soundfont, { InstrumentName, Player } from "soundfont-player";
import { Optional } from "../../domain/types";
import { MidiValue } from "../../domain/note";
import { AudioNodesRegistry, DEFAULT_INSTRUMENT } from "../../domain/sound";
import { useRef, useState } from "react";

type Settings = {
  AudioContext: AudioContextType;
};

interface Adapted {
  loading: boolean;
  current: Optional<InstrumentName>;

  load(instrument?: InstrumentName): Promise<void>;
  play(note: MidiValue): Promise<void>;
  stop(note: MidiValue): Promise<void>;
}

export function useSoundfont({ AudioContext }: Settings): Adapted {
  let activeNotes: AudioNodesRegistry = {};
  const [current, setCurrent] = useState<Optional<InstrumentName>>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [player, setPlayer] = useState<Optional<Player>>(null);

  const audio = useRef(new AudioContext());

  async function load(instrument: InstrumentName = DEFAULT_INSTRUMENT) {
    setLoading(true);
    const player = await Soundfont.instrument(audio.current, instrument);

    setLoading(false);
    setCurrent(instrument);
    setPlayer(player);
  }

  async function resume() {
    return audio.current.state === "suspended"
      ? await audio.current.resume()
      : Promise.resolve();
  }

  async function play(note: MidiValue) {
    await resume();
    if (!player) return;

    const node = player.play(note.toString());
    activeNotes = { ...activeNotes, [note]: node };
  }

  async function stop(note: MidiValue) {
    await resume();
    if (!activeNotes[note]) return;

    activeNotes[note]!.stop();
    activeNotes = { ...activeNotes, [note]: null };
  }

  return { loading, current, load, play, stop };
}
