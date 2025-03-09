// An atom represents state in Recoil
import {atom } from "recoil"
export const countAtom=atom({
    key: "countAtom",
    default: 0,
});
// this default value is like defining the initial state
//now app.jsx no longer needs a useState and useContext