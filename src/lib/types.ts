export type responseType<T> = {
  event: Electron.IpcMainEvent;
  status: "success" | "error";
  data: T;
};
export type sendType<T, P> = {
  data?: T;
  function: string;
  props?: P;
};
export type FunctionMap = {
  [key: string]: (props: unknown) => void;
};
