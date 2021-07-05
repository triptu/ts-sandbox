import { hmsStore, hmsActions } from "./hms";
import { msgsElement, msgInputElement } from "./elements";
import {
  selectHMSMessages,
  selectIsConnectedToRoom,
  HMSMessage
} from "@100mslive/hms-video-store";

function renderMessageList(messages: HMSMessage[]) {
  if (messages.length === 0) {
    return;
  }
  let text = "";
  messages.forEach((msg) => {
    text += `\n${msg.senderName}: ${msg.message}`;
  });
  console.log("new messages - ", text);
  const elem = msgsElement();
  if (elem) {
    elem.textContent = text;
  }
}

function sendMessage() {
  if (!hmsStore.getState(selectIsConnectedToRoom)) {
    console.warn("can't send message when not conneted to room");
    return;
  }
  const msg = msgInputElement().value;
  if (msg && msg.trim() !== "") {
    hmsActions.sendMessage(msg);
  } else {
    console.warn("Invalid message");
  }
}

hmsStore.subscribe(renderMessageList, selectHMSMessages);
msgInputElement().onkeypress = function (e) {
  if (e.keyCode === 13) {
    sendMessage();
    msgInputElement().value = "";
  }
};
