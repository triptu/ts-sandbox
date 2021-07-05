import { hmsActions, hmsStore } from "./hms";
import {
  selectIsLocalAudioEnabled,
  selectIsLocalVideoEnabled,
  selectPeers
} from "@100mslive/hms-video-store";
import { HMSPeer } from "@100mslive/hms-video-store";
import { peersElement, toggleAudioBtn, toggleVideoBtn } from "./elements";

function renderPeers(peers?: HMSPeer[]) {
  if (!peers) {
    peers = hmsStore.getState(selectPeers);
  }
  const elem = peersElement();
  if (elem) {
    elem.innerHTML = "";
    peers.forEach((peer) => {
      if (peer) {
        console.log("peer - ", peer.name);
        if (peer && peer.videoTrack) {
          const v = document.createElement("video");
          v.autoplay = true;
          v.muted = true;
          v.playsInline = true;
          elem.appendChild(v);
          hmsActions.attachVideo(peer.videoTrack, v);
        }
      }
    });
  }
}

function toggleAudio() {
  const isEnabled = hmsStore.getState(selectIsLocalAudioEnabled);
  hmsActions.setLocalAudioEnabled(!isEnabled);
}

function toggleVideo() {
  const isEnabled = hmsStore.getState(selectIsLocalVideoEnabled);
  hmsActions.setLocalVideoEnabled(!isEnabled);
  renderPeers();
}

hmsStore.subscribe(renderPeers, selectPeers);
toggleAudioBtn().onclick = toggleAudio;
toggleVideoBtn().onclick = toggleVideo;
