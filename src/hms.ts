import { HMSReactiveStore } from "@100mslive/hms-video-store";

const hmsManager = new HMSReactiveStore();
hmsManager.triggerOnSubscribe();

const hmsActions = hmsManager.getHMSActions();
const hmsStore = hmsManager.getStore();
const hmsNotifications = hmsManager.getNotifications();

export { hmsActions, hmsStore, hmsNotifications };
