import { hmsActions } from "./hms";
import getToken from "./getToken";
import "./speaker";
import "./chat";
import "./peers";
import {
  envValue,
  joinButton,
  leaveButton,
  nameValue,
  roleValue,
  roomIDValue,
  tokenApiValue
} from "./elements";

export async function join() {
  const env = envValue();
  let tokenApi = tokenApiValue();
  const roomID = roomIDValue();
  const name = nameValue();
  const role = roleValue();

  if (
    !env ||
    !tokenApi ||
    !roomID ||
    !name ||
    !role ||
    env === "" ||
    tokenApi === "" ||
    roomID === "" ||
    name === "" ||
    role === ""
  ) {
    console.warn("input not present");
    return;
  }

  if (tokenApi.includes("100ms.live") && !tokenApi.endsWith("api/token")) {
    const endSlash = tokenApi.endsWith("/");
    if (!endSlash) {
      tokenApi += "/";
    }
    tokenApi += "api/token";
  }

  const token = await getToken(env, tokenApi, roomID, role);

  const joinConfig = {
    userName: name,
    authToken: token, // client-side token generated from your token service
    metaData: "Custom description", //This is a custom data. You can send stringified JSON
    settings: {
      isAudioMuted: false,
      isVideoMuted: false
    }
  };

  hmsActions.join(joinConfig);
}

function leave() {
  console.log("leaving room");
  hmsActions.leave();
}

joinButton().onclick = join;
leaveButton().onclick = leave;
window.onunload = leave;
