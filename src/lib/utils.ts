import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
const getIpcResponse = async <T>(): Promise<T> => {
  return new Promise((resolve) => {
    window.ipcRenderer.once("response", (_event, arg) => {
      resolve(arg);
    });
  });
};
export const sendIpcMessage = async <T, P>(args: {
  channel: string;
  data: T;
}): Promise<P> => {
  window.ipcRenderer.send(args.channel, args.data);
  return getIpcResponse();
};