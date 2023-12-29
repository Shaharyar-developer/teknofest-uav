import { ipcMain } from "electron";
import { type responseType } from "../src/lib/types";
export const response = <T>(props: responseType<T>) => {
  if (props.event) {
    props.event.reply("response", { status: props.status, data: props.data });
  }
};
export const receive = () => {
  if (ipcMain) {
    ipcMain.on("receive", (event, args: unknown) => {
      console.log(args);
      response<{ data: string }>({
        event,
        status: "success",
        data: { data: "Test" },
      });
    });
  }
};
