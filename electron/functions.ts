import { ipcRenderer } from "electron";
import { type responseType } from "../src/libs/types";

export const response = <T>(props: responseType<T>) => {
  ipcRenderer.send("response", props);
};
