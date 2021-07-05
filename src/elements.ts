export const msgsElement = () => document.getElementById("messages");

export const msgInputElement = () =>
  <HTMLInputElement>document.getElementById("msgInput");

export const speakerElem = () => document.getElementById("speaker");

export const peersElement = () => document.getElementById("peers");

export const envValue = () =>
  (<HTMLInputElement>document.getElementById("env")).value;

export const tokenApiValue = () =>
  (<HTMLInputElement>document.getElementById("token")).value;

export const roomIDValue = () =>
  (<HTMLInputElement>document.getElementById("room")).value;

export const nameValue = () =>
  (<HTMLInputElement>document.getElementById("name")).value;

export const roleValue = () =>
  (<HTMLInputElement>document.getElementById("role")).value;

export const joinButton = () =>
  <HTMLButtonElement>document.getElementById("joinBtn");

export const leaveButton = () =>
  <HTMLButtonElement>document.getElementById("leaveBtn");

export const toggleAudioBtn = () =>
  <HTMLButtonElement>document.getElementById("toggleAudio");

export const toggleVideoBtn = () =>
  <HTMLButtonElement>document.getElementById("toggleVideo");
