import { hmsStore } from "./hms";
import { selectDominantSpeaker } from "@100mslive/hms-video-store";
import { speakerElem } from "./elements";
import HMSPeer from "@100mslive/hms-video/dist/interfaces/hms-peer";

const onSpeakerUpdate = (
  speaker: HMSPeer | null,
  prevSpeaker: HMSPeer | null
) => {
  let text = "No one is speaking";
  if (prevSpeaker && speaker) {
    text = `speaker changed from - ${prevSpeaker.name} to - ${speaker.name}`;
  } else if (speaker) {
    text = `current speaker - ${speaker.name}`;
  }
  const elem = speakerElem();
  if (elem) {
    elem.textContent = text;
  }
};

hmsStore.subscribe(onSpeakerUpdate, selectDominantSpeaker);
