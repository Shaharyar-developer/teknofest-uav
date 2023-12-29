export type responseType<T> = {
  event: Electron.IpcMainEvent;
  status: "success" | "error";
  data: T;
};
