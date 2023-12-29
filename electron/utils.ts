import { ipcMain } from "electron";
import { type responseType, sendType } from "../src/lib/types";
import { run } from "./functions";
export const response = <T>(props: responseType<T>) => {
  if (props.event) {
    props.event.reply("response", { status: props.status, data: props.data });
  }
};
export const receive = () => {
  if (ipcMain) {
    ipcMain.on("receive", (event, args: sendType<unknown, unknown>) => {
      console.log(args);
      const data = run(args.function, args.props);
      response({
        event,
        status: "success",
        data: data,
      });
    });
  }
};
