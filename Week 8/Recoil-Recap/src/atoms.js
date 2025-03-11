import {atom,selector} from "recoil"

export const networkAtom= atom({
    key:"networkAtom",    //uniquely identification
    default: 104
})

export const jobsAtom=atom({
    key:"jobsAtom",
    default:0
})

export const messagingAtom=atom({
    key:"messagingAtom",
    default:2
})

export const notificationsAtom=atom({
    key:"notificationsAtom",
    default:12
})
//selector
export const totalNotificationSelector=selector({
    key:"totalNotificationSelector",
    get:({get}) => {
        const networkNotificationCount=get(networkAtom); 
        const jobsAtomCount=get(jobsAtom);
        const messagingAtomCount=get(messagingAtom);
        const notificationAtomcount=get(notificationsAtom);
        return networkNotificationCount+jobsAtomCount+messagingAtomCount+notificationAtomcount;

    }
})