import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { sendType } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const getIpcResponse = async <T>(): Promise<T> => {
  return new Promise((resolve) => {
    window.ipcRenderer.once("response", (_event, arg) => {
      resolve(arg);
    });
  });
};
export const sendIpcMessage = async <T, Pr, P = unknown>(
  args: sendType<T, P>
): Promise<Pr> => {
  window.ipcRenderer.send("receive", args);
  return getIpcResponse();
};