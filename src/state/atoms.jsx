import { atom } from "recoil";
import { localStorageEffect } from "./effects";

export const userPlayListsAtom = atom({
    key: "userPlayLists", // unique ID (with respect to other atoms/selectors)
    default: [],
    effects: [localStorageEffect("userPlayLists")],
});
export const userPlayListAtom = atom({
    key: "userPlayList", // unique ID (with respect to other atoms/selectors)
    default: {
        name: "",
        videos: [],
        id: "",
    },
    effects: [localStorageEffect("userPlayList")],
});